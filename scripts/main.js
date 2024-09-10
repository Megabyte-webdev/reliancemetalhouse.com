let user_obj = {};
let subscription = {};

window.addEventListener('load', () => {
    let body = document.querySelector('body') || document.body;
    const form = document.getElementById('form');
    const loader = document.getElementById('loader');
    const btn = document.getElementById('send');
    const name = document.getElementById('name');
    const mobile = document.getElementById('mobile');
    const msg = document.getElementById('msg');
    const email = document.getElementById('email');
    const subscribe_email = document.getElementById("subscribe-email")
    const subscribeBtn = document.getElementById("subscribe-btn")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    function notify(elem, txt, attr) {
        const notification = elem.parentElement.querySelector('.notice');
        if (notification) {
            notification.innerHTML = txt;
            if (attr) {
                notification.classList.add(attr);
            } else {
                notification.classList.remove('confirmed');
            }
        } else {
            let notice_board = `<small class="notice${(attr !== undefined || attr !== null) ? ` ${attr}`: ''}">${txt}</small>`;
            elem.insertAdjacentHTML('afterend', `${notice_board}`);
        }
    }
    name.oninput = function() {
        if (this.value.length < 3 || this.value.length > 20) {
            notify(name, 'First Name must be between 3 and 20 characters');
        } else {
            notify(this, 'Good!', "confirmed");
            user_obj.name = this.value;
        }
    };

    msg.oninput = function() {
        var text = this.value;
        var wordCount = text.trim().split(/\s+/).length;
        if (wordCount >= 3) {
            notify(this, 'Good!', "confirmed");
            user_obj.message = this.value;

        } else {
            notify(msg, 'Message must be atleast 3 words');

        };
    }
    email.oninput = (e)=> {
        if (emailRegex.test(e.target.value)) {
            notify(e.target, 'good!', "confirmed")
            user_obj.email = email.value;
        } else {
            notify(e.target, 'Enter a valid email');
        }
    }


    subscribe_email.oninput = (e)=> {

        if (emailRegex.test(e.target.value)) {

            notify(subscribeBtn, 'good!', "confirmed")
            subscription.email = e.target.value;

        } else {
            notify(subscribeBtn, 'Enter a valid email');
        }
    }



    mobile.oninput = function() {
        this.value = this.value.replace(/[^\+0-9]/g, '').replace(/\+(?=.*\+)/g, '');
        if (this.value.length === 0) {
            notify(this, '', '');
        } else if (this.value[0] !== '+') {
            notify(this, '+ sign must be at the start');
        } else if (this.value.match(/^[\+][^0-9]/)) {
            notify(this, 'Only numbers allowed after + sign');
        } else if (this.value.startsWith('+234') && this.value.length < 14) {
            notify(this, 'Nigerian number should be 14 characters, e.g +2348012345678');
        } else if (this.value.length < 11) {
            notify(this, 'Number should be at least 11 characters');
        } else if (this.value.length > 14) {
            notify(this, 'Number cannot exceed 14 characters');
        } else {
            notify(this, 'Good!', "confirmed");
            user_obj.mobile = this.value.trim();
        }
    };


    // CONTACT FORM SUBMISSION

    btn.addEventListener('click', async function(event) {

        event.preventDefault();
        if (!name.value || !email.value || !mobile.value || !msg.value) {
            notify(btn, 'Please fill in all fields');
            const firstInvalidField = form.querySelector('[required]:invalid');
            if (firstInvalidField) {
                firstInvalidField.focus();
                notify(firstInvalidField, 'This field is required');
            }
        } else {
            if (!(user_obj.name && user_obj.email && user_obj.mobile && user_obj.message)) {

                notify(btn, 'Please ensure all fields are valid');
                const firstInvalidField = form.querySelector('[required]:invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            } else {

                loader.classList.add('active');
                notify(this, 'Sending message...', "confirmed");
                const requestOptions = {
                    method: "POST",
                    body: JSON.stringify(user_obj),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: "follow"
                };
                try {
                    const response = await fetch("https://rmhapi.onrender.com/api/contact/", requestOptions);
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} - ${await response.text()}`);
                    }
                    const result = await response.json();
                    loader.classList.remove('active');
                    notify(this, `${result.message}, We'll be in touch soon.`, "confirmed");
                    setTimeout(function() {
                        notify(btn, "Check your mail now!", "confirmed");
                    }, 2000);
                    console.log(result);
                } catch (error) {
                    loader.classList.remove('active');
                    console.error(error.message);
                    alert("Error sending message: " + error.message);
                }
            }
        }
    });



    // EMAIL SUBSCRIPTION FUNCTION


    subscribeBtn.addEventListener('click',
        async (event) => {
            console.log("subscription: ", subscription)
            event.preventDefault();
            if (!subscribe_email.value) {
                notify(subscribeBtn, 'Please fill in the email field');
                subscribe_email.focus();
            } else {
                if (!subscription.email) {
                    notify(subscribeBtn, 'Please fill in a valid email');
                } else {
                    console.log(subscription)
                    loader.querySelector('.loader-display').innerText = "Please hold on a moment..."
                    loader.classList.add('active');
                    try {
                        const response = await fetch('https://rmhapi.onrender.com/api/subscribe/');
                        const subscribedEmails = await response.json();
                        console.log(subscribedEmails)
                        const exists = subscribedEmails.some((item) => item.email === subscription.email);
                        if (exists) {
                            console.log('Already Subscribed')
                            notify(subscribeBtn, "Already a subscriber! We'll keep you updated.", "confirmed");
                        } else {
                            notify(subscribeBtn, 'Please hold on...');
                            const response = await fetch('https://rmhapi.onrender.com/api/subscribe/', {
                                method: "POST",
                                body: JSON.stringify(subscription),
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                redirect: "follow"
                            });
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }

                            const result = await response.json();
                            loader.classList.remove('active');
                            notify(subscribeBtn, "Subscription successful!");


                        }
                    } catch (error) {
                        console.error(error.message);
                        notify(subscribeBtn, 'Error subscribing. Please try again.', "error");
                    } finally {
                        loader.classList.remove('active');
                    }
                }
            }
        });



    // ALL LINKS CONTROL
    let allAnchor = document.querySelectorAll("a");
    allAnchor.forEach((el)=> {
        let menu = document.querySelector(".menu-toggle");
        let nav = document.querySelector(".nav");
        el.onclick = function(event) {
            event.preventDefault()
            if (this.closest('.nav')) {
                menu.className = "menu-toggle";
                nav.classList.remove("responsive");
            } else if (this.closest('.learn-content')) {
                let text = this.parentElement.querySelector('h3').innerText;
                let forwardingTxt = `I'm interested in getting a ${text} installed and I'd like to request your expertise.`
                msg.value = forwardingTxt;
                user_obj.message = msg.value
                //document.querySelector('#contact #form * [required]').focus();
            }

            if (this.href.match('#')) {
                //alert('internal')
                let getRef = this.href.split('#')[1];
                let elementToView = document.querySelector(`#${getRef}`)
                window.scrollTo(0, elementToView.offsetTop-80);
            } else {
                window.location.href = this.href;
            }

        }
    })




})
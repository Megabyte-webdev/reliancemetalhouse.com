let whatsapp = `<div id="whatsapp_chat_widget">
            <div id="wa-widget-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="wa-messenger-svg-whatsapp wh-svg-icon"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>
                <div class='wa-chat-box'>
                    <div class='wa-chat-box-header'>
                        <img class='wa-chat-box-brand' src='./images/SVG/main-logo-icon.svg' />
                        <div class='wa-chat-box-brand-text'>
                            <div class='wa-chat-box-brand-name'>
                                Reliance Metal House <small>Your best building service...</small>
                            </div>
                            <div class='wa-chat-box-brand-subtitle'>
                                Transform and get a new look.
                            </div>
                        </div>
                        <div id="wa-chat-bubble-close-btn" class="wa-chat-bubble-close-btn">
                            &times
                        </div>
                    </div>
                    <div class='wa-chat-box-content'>
                        <div class='wa-chat-box-content-chat'>
                            <div class='wa-chat-box-content-chat-brand'>
                                Reliance Metal House
                            </div>
                            <div class='wa-chat-box-content-chat-welcome'>
                                How can we help you?
                            </div>

                   <textarea id="wa-msg" rows="2" placeholder="type your message"></textarea>
                        </div>

                    </div>

                    <div class='wa-chat-box-send'>
                        <a role="button" target="_blank" title="WhatsApp" class="wa-chat-box-content-send-btn"><svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="wa-chat-box-content-send-btn-icon"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>
                            <span class="wa-chat-box-content-send-btn-text">Start Chat</span>
                        </a>
                        <div class='wa-chat-box-poweredby'>
                            ⚡ by <a href="https://afolabiwebdev.42web.io/" target="_blank" style="color: #006eff6e;">Afowebdev.io</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;


function get(selector) {
    return document.querySelector(selector);
};
window.addEventListener('load', () => {
    get('body').innerHTML += whatsapp;
    var whatsappBtn = get("#wa-widget-send-button");
    var whatsappCloseBtn = get(".wa-chat-bubble-close-btn");
    var whatsappBox = get(".wa-chat-box")
    var whatsappMsgBtn = get(".wa-chat-box-content-send-btn");
    var waMsg = get("#wa-msg");
    whatsappMsgBtn.onclick = function () {
        var phoneNumber = "+2347063807579",
            messageText = `Welcome to our Whatsapp chat, How can we be of service? \n\r${waMsg && waMsg.value}`;

        this.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText ? messageText : ""}`;
    }
    whatsappBtn.onclick = function (evt) {
        if (whatsappBox.style.display !== "block") {
            whatsappBox.style.display = "block";
        }
        if (evt.target.id == "wa-chat-bubble-close-btn") {
            whatsappBox.style.display = "none";
        }
    }

})
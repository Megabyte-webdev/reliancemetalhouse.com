window.addEventListener('load', ()=>{
    const gallery= document.querySelector('.gallery-content')
const modal = document.getElementById('video-modal');
const display = document.querySelector('.modal .modal-content .display');
const closeBtn = document.querySelector('.close');
for(let i=1; i<5; i++){
    let div= document.createElement('div');
    div.className= 'video-item'
    div.setAttribute('data-src', `window${i}.jpg`)
  let img= document.createElement('img');
  img.src= `./images/window${i}.jpg`;
  div.appendChild(img)
  gallery.appendChild(div);
}
for(let i=1; i<6; i++){
    let div= document.createElement('div');
    div.className= 'video-item'
    div.setAttribute('data-src', `door${i}.jpg`)
  let img= document.createElement('img');
  img.src= `./images/door${i}.jpg`;
  div.appendChild(img)
  gallery.appendChild(div);
}
for(let i=1; i<=25; i++){
    let div= document.createElement('div');
    div.className= 'video-item'
    div.setAttribute('data-src', `img${i}.jpg`)
  let img= document.createElement('img');
  img.src= `./images/img${i}.jpg`;
  div.appendChild(img)
  gallery.appendChild(div);
}

const videoItems = document.querySelectorAll('.video-item')

videoItems.forEach((item) => {
  item.addEventListener('click', () => {
    const videoSrc = item.getAttribute('data-src');
    display.innerHTML= ""
    //modal.querySelector('h2').innerText= videoSrc
    let player;
    if (videoSrc.match('jpg')){
        player= document.createElement('img')
        player.src=`./images/${videoSrc}`
    }else{
        player= document.createElement('video')
        player.poster= `${item.querySelector('img').src}`
        player.autoplay=true
        player.controls=true
        player.src=`./videos/${videoSrc}`
    }
    display.appendChild(player)
    modal.classList.add('active');
  });
}); 

closeBtn.addEventListener('click', () => {
    display.innerHTML= ""
  modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    display.innerHTML= ""
    modal.classList.remove('active');
  }
});

})

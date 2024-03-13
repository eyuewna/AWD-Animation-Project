const switcher = document.querySelector('.switcher')
const controller = document.querySelector('.controller')
const platter = document.querySelector('.platter')
const switcherpink = document.querySelector('.switcher-pink')
const switchergray = document.querySelector('.switcher-gray')
const playerSong = document.querySelector('.player-song')
const volumeRange = document.querySelector('.volume-range')

switchergray.classList.add('switcher-gray_active')

switcher.addEventListener('click', ()=> {
  switcher.classList.toggle('switcher_active')
  controller.classList.toggle('controller_active')
  platter.classList.toggle('platter_active')
  if(switcher.classList.contains('switcher_active')) {
    switcherpink.classList.add('switcher-pink_active')
    switchergray.classList.remove('switcher-gray_active')
    setTimeout(()=> {
      playerSong.play()
    }, 1000)
  } else {
    switcherpink.classList.remove('switcher-pink_active')
    switchergray.classList.add('switcher-gray_active')
    playerSong.pause()
  }
})

volumeRange.addEventListener('input', (e)=> {
  playerSong.volume = Number(e.target.value)
})

const song = document.querySelectorAll('.song')
const album = document.querySelectorAll('.album')
const platterColor = document.querySelector('.color')
album.forEach( element => {
  element.addEventListener('click', () => {
    playerSong.src = '';
    let albumSong = element.children[1].src;
    playerSong.src = albumSong;
    platterColor.style.backgroundImage = `url(${randomImage()})`;

    function randomImage() {
      const images = [
        '../images/platter_images/image1.gif',
        '../images/platter_images/image2.gif',
        '../images/platter_images/image3.gif',
        '../images/platter_images/image4.gif',
        '../images/platter_images/image5.gif',
        '../images/platter_images/image6.gif',
        '../images/platter_images/image7.gif',
        '../images/platter_images/image8.gif',
      ];
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }

    playerSong.pause();
    playerSong.play();
  });
})

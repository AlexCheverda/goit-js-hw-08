import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
console.log(savedTime);
player.on('timeupdate', throttle(timeStop, 1000));
    
function timeStop(timeupdate) {
    let pause = timeupdate.seconds;
    console.log(pause);
    localStorage.setItem('videoplayer-current-time', pause)
}

player.setCurrentTime(savedTime);
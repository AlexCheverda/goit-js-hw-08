import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

// const savedTime = localStorage.getItem('videoplayer-current-time') || 0;
const SAVED_TIME = 'videoplayer-current-time';
// console.log(savedTime);

    
function timeStop(timeupdate) {
    let pause = timeupdate.seconds;
    // console.log(pause);
    localStorage.setItem(SAVED_TIME, pause);
}

player.on('timeupdate', throttle(timeStop, 1000));

let savedTime = localStorage.getItem(SAVED_TIME);

if (savedTime) {
    player.setCurrentTime(savedTime);
}


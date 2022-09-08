import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const SAVED_TIME = 'videoplayer-current-time';
    
function timeSaver(timeupdate) {
    let pause = timeupdate.seconds;
    localStorage.setItem(SAVED_TIME, pause);
    // console.log(pause);
}

player.on('timeupdate', throttle(timeSaver, 1000));

let savedTime = localStorage.getItem(SAVED_TIME);

if (savedTime) {
    player.setCurrentTime(savedTime);
}


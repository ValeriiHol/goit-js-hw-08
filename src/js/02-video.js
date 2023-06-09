// before 
// npm install @vimeo/player
// npm i --save lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
const onPlay = function ({ seconds }) {
  localStorage.setItem('player-current-time', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

player.setCurrentTime(localStorage.getItem('player-current-time'));
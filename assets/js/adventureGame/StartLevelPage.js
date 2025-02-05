// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';

class StartLevelPage {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_startpage = path + "/images/gamify/startpage.png"; // be sure to include the path
    const image_data_startpage = {
        name: 'startpage',
        greeting: "START PAGE!!",
        src: image_src_startpage,
        pixels: {height: 580, width: 1038}
    };


    this.objects = [
      { class: Background, data: image_data_startpage },
     // { class: Npc, data: sprite_data_htmlhank }, 
    ];
  }

}

export default StartLevelPage;
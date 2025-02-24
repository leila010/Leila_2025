// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import GameControl from './GameControl.js';

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
        greeting: "Press the Escape Button to Start the Game",
        src: image_src_startpage,
        pixels: {height: 580, width: 1038}
    };


    this.objects = [
      { class: Background, data: image_data_startpage },
     // { class: Npc, data: sprite_data_htmlhank }, 
    ];
  
    const npcButton = document.createElement("button");
    npcButton.innerText = "NPC About Page";
    npcButton.style.position = "absolute";
    npcButton.style.top = "400px";
    npcButton.style.left = "650px";
    npcButton.style.padding = "20px 40px";
    npcButton.style.fontSize = "24px";
    npcButton.style.backgroundColor = "#4CAF50";
    npcButton.style.color = "white";
    npcButton.style.border = "none";
    npcButton.style.borderRadius = "5px";
    npcButton.style.cursor = "pointer";

    document.body.appendChild(npcButton);

    npcButton.addEventListener("click",() => {
      GameControl.setSkipNpcAbout(false);
      GameControl.currentLevelIndex = 1;
      GameControl.loadLevel();
      npcButton.remove();
    });  

    GameControl.setSkipNpcAbout(true);

  }
}

export default StartLevelPage;
// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import GameControl from './GameControl.js';

class EndLevelPage {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_endpage = path + "/images/gamify/endlevelpage.png"; // be sure to include the path
    const image_data_endpage = {
        name: 'endpage',
        greeting: "You survived and met wonderful NPCs on the way...click the button below to restart!",
        src: image_src_endpage,
        pixels: {height: 580, width: 1038}
    };


    this.objects = [
      { class: Background, data: image_data_endpage },
     // { class: Npc, data: sprite_data_htmlhank }, 
    ];
  
    const endButton = document.createElement("button");
    endButton.innerText = "Restart";
    endButton.style.position = "absolute";
    endButton.style.top = "400px";
    endButton.style.left = "700px";
    endButton.style.padding = "20px 40px";
    endButton.style.fontSize = "24px";
    endButton.style.backgroundColor = "#4CAF50";
    endButton.style.color = "white";
    endButton.style.border = "none";
    endButton.style.borderRadius = "5px";
    endButton.style.cursor = "pointer";

    document.body.appendChild(endButton);

    endButton.addEventListener("click", () => {
      GameControl.currentLevelIndex = 0; // Reset to the first level
      GameControl.loadLevel(GameControl.currentLevelIndex); // Ensure it loads the StartLevelPage
      endButton.remove();
    });

  }
}

export default EndLevelPage;
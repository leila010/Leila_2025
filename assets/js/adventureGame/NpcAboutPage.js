import GameEnv from './GameEnv.js';
import Background from './Background.js';

class NpcAboutPage {
    constructor(path) {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        
        // Values dependent on GameEnv.create()
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        // Background data
        const image_src_npcaboutpage = `${path}/images/gamify/npcaboutpage.png`; // be sure to include the path
        const image_data_npcaboutpage = {
            name: 'npcaboutpage',
            greeting: "ABOUT PAGE FOR NPCs!",
            src: image_src_npcaboutpage,
            pixels: { height: 580, width: 1038 }
        };

        this.objects = [
            { class: Background, data: image_data_npcaboutpage },
            // { class: Npc, data: sprite_data_htmlhank },
        ];
    }

    draw(ctx) {
        this.objects.forEach(obj => {
            const instance = new obj.class(obj.data);
            instance.draw(ctx);
        });
    }
}

export default NpcAboutPage;

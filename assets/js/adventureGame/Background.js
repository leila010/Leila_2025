import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

/** Background class for primary background **/
class Background extends GameObject {
    constructor(data = null) {
        super();
        if (data && data.src) {
            this.image = new Image();
            this.image.src = data.src;
            this.name = data.name;
            this.greeting = data.greeting;
            this.pixels = data.pixels;
        } else {
            this.image = null;
        }
        GameEnv.gameObjects.push(this);
    }

    /** This method draws to GameEnv context, primary background **/
    draw() {
        const ctx = GameEnv.ctx;
        const width = GameEnv.innerWidth;
        const height = GameEnv.innerHeight;
        if (this.image) {
            // Draw the background image scaled to the canvas size
            ctx.drawImage(this.image, 0, 0, width, height);
            ctx.font = '30px Inconsolata'; // Set font style
            ctx.fillStyle = 'black'; // Set text color
            ctx.textAlign = 'center'; // Center the text horizontally
            ctx.textBaseline = 'middle'; // Center the text vertically

            // Calculate center coordinates
            const centerX = 775;
            const centerY = 200;

            // Draw text at the center of the canvas
            ctx.fillText(this.greeting, centerX, centerY);
        } else {
            // Fill the canvas with fillstyle color if no image is provided
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, width, height);
        }
    }

    /** For primary background, update is the same as draw **/
    update() {
        this.draw();
    }

    /** For primary background, resize is the same as draw **/
    resize() {
        this.draw();
    }

    /** Destroy Game Object * remove object from GameEnv.gameObjects array **/
    destroy() {
        const index = GameEnv.gameObjects.indexOf(this);
        if (index !== -1) {
            GameEnv.gameObjects.splice(index, 1);
        }
    }
}

export default Background;

---
layout: base
title: Student Home 
description: Home Page
images: /images/mario_animation.png
hide: true
---

<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

## My Journey Starts Here

### Cat Attack

![download (6)](https://github.com/user-attachments/assets/c9439a2e-053a-45b2-99b4-56500a1f8afe)


## Ideas for this Class: 
- I am very intrested in the idea of creating and developing games 
- I would like to one day take the knowledge I get from this class and use it one day to create my own video game
- I would like to learn more about coding in python, javascript, etc

## Fun things I like to do
- I like to watch Netflix/Movies in my free time
- I enjoy reading books, especially horror/mystery novels
- Sometimes I take my cat outside for a walk, I use a cat backpack and I think she enjoys it
- Once in a while I go on bike rides around town for fun

<img src="https://media.tenor.com/Z3JoBmhZR4EAAAAM/cat-cat-reading.gif" alt="Cat Reading GIFs | Tenor"/>

## Did you know?
- I played tennis for about 7 years
- I semi know how to play the piano
- I have injured my left arm around 6 times, 4 times sprained, 1 broke it, 1 fractured it
- I never signed up for coding for my first choice when signing up for classes, but my 1st option was full and I ended up here, but I am glad to be here and am learning things I never knew about which will be very useful in the future!

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhuZTJ6M2tkcmVoYjN4aHRrNjNrYWphcTVpcGF6bGFkbWt5N2ZvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ECwTCTrHPVqKI/giphy.gif" alt="ping pong GIF"/>

## Random Fun Facts about Coding!
- There are more than 700 coding languages
- Today, NASA still uses programs that are dated in the 70s for their spacecraft
- The first programming language is known as FORTRAN‍
- Computer communicates through 0's and 1's‍ 

<img src="https://media.tenor.com/y2JXkY1pXkwAAAAM/cat-computer.gif" alt="Cat Coding GIF - Cat Coding - Discover &amp; Share GIFs"/>
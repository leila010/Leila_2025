---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/scary_hospital.png";
    const image_data = {
        pixels: {height: 580, width: 1038}
    };
    const image = {src: image_src, data: image_data};

    // Sprite data
    const sprite_src = "{{site.baseurl}}/images/rpg/human-remove-bg.png";
    const sprite_data = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: {height: 565, width: 442},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
    };
    const sprite = {src: sprite_src, data: sprite_data};

    // Assets for game
    //const assets = {}
    //const assets = {image: image}
    //const assets = {sprite: sprite}
    const assets = {image: image, sprite: sprite}

    // Start game engine
    GameControl.start(assets);
</script>

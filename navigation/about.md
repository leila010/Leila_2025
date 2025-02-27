---
layout: page
title: About
permalink: /about/
---

## Places I've Been

<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California"},
        {"flag": "b/b4/Flag_of_Turkey.svg", "greeting": "Merhaba", "description": "Turkey"},
        {"flag": "0/03/Flag_of_Italy.svg", "greeting": "CIAO", "description": "Italy"},
        {"flag": "e/ef/Flag_of_Hawaii.svg", "greeting": "Aloha", "description": "Hawaii"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

## Not so Fun Facts:
- CLASS OF 2028
- I have 2 pets
- I am in a family of 6
- I have traveled to Japan twice
- I play the violin and am in Orchestra
- All pets I have ever had were named by starwar characters
- I have a obsession with cats and hope to one day own 100
- I really enjoy playing video games, especially horror ones

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmjESXZ7FfjaCk0iDUgzxm16vcMqAlgQ_Tw&amp;s" alt="Cat Pixel Black Vector Images (over 750)"/>

## Hopes and Dreams for this Class 🐈

- I hope by taking this class I can get a better idea about coding, have more experience with this subject, and to learn as much as I can with the coding world, and possibly coding games.
- I hope to one day be able to code my own game by participating in this class.

<img src="https://gifdb.com/images/high/elmo-fire-meme-black-cat-8bazozefdmbp4wwh.gif" alt="Elmo Fire Meme Black Cat GIF | GIFDB.com"/>

<script> src="https://utteranc.es/client.js"
        repo="nighthawkcoders/Leila_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-light"
        crossorgin = "anonymous"
        async> 

</script>
-->
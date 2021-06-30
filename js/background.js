const images = [
    "linear-gradient(#e66465, #9198e5)",
    "linear-gradient(to right, #7389aa, #67a4bb, #70bdbb, #98d2b1, #d0e1a9)",
    "linear-gradient(to left top, #e78888, #f79974, #f7b162, #e6ce59, #c4eb68)",
    "linear-gradient(to right, #fbd3e9, #bb377d)",
    "linear-gradient(to right, #606c88, #3f4c6b)",
    "linear-gradient(to right, #b993d6, #8ca6db)",
    "linear-gradient(to right, #e6dada, #274046)",
    "linear-gradient(to right, #ddd6f3, #faaca8)",
    "linear-gradient(to right, #de6262, #ffb88c)",
    "linear-gradient(to right, #4b6cb7, #182848)",
    "linear-gradient(to right, #fc354c, #0abfbc)",
    "linear-gradient(to right, #414d0b, #727a17)",
    "linear-gradient(to right, #232526, #414345)",
    "linear-gradient(to right, #134e5e, #71b280)",
    "linear-gradient(to right, #f3904f, #3b4371)",
    "linear-gradient(to right, #73c8a9, #373b44)"
]

// const chosenImage = images[(Math.floor(Math.random() * images.length))];

// const bgImage = document.createElement("img");

// const container = document.querySelector("div.container");

// bgImage.src = `img/${chosenImage}`;

// container.appendChild(bgImage);

document.body.style.background = `${images[(Math.floor(Math.random() * images.length))]}`;


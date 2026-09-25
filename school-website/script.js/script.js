// Welcome message in the browser console
console.log("Welcome to Green Valley School Website!");

// Display the current year automatically
const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    `&copy; ${year} Green Valley School. All Rights Reserved.`;
// Check if JavaScript is running
console.log("JavaScript is running!");

function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

async function greet() {
    const outputElement = document.getElementById("output");

    
    console.log("Hello");
    outputElement.textContent = "Hello"; 

    await delay(2000);
    
    
    console.log("World");
    outputElement.textContent += " react i wanna know you";
}

greet();

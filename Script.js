const wordPool = [
    "Truck", "Elephant", "Hotel", "Grapes", "Motorcycle", "Zebra", "Castle", "Cake", "Mountain", "Owl",
    "Whale", "School", "Monkey", "Airport", "Cinema", "Chocolate", "Tractor", "Banana", "Penguin", "Pasta",
    "Spaceship", "Rocket", "Popcorn", "Sushi", "Yacht", "Ice Cream", "Bicycle", "Lighthouse", "Crocodile", "Canoe",
    "Lion", "Chicken", "Scooter", "Taco", "Library", "Bus", "Submarine", "Apple", "Bear", "Steak",
    "Burger", "Jet", "Wolf", "Forest", "Ferry", "Village", "Train", "Fries", "Stadium", "Pineapple",
    "Desert", "Museum", "Restaurant", "Giraffe", "Zoo", "City", "Sandwich", "Fox", "Watermelon", "Airplane",
    "Tiger", "Jungle", "Park", "Van", "Panda", "Kangaroo", "Salad", "Seal", "Helicopter", "Shark",
    "Beach", "Hotdog", "Car", "Boat", "Hippo", "Skateboard", "Pizza", "Hospital", "Dolphin", "Eagle"
];

function pickWords() {
    const chosen = [];
    while (chosen.length < 3) {
        let word = wordPool[Math.floor(Math.random() * wordPool.length)];
        if (!chosen.includes(word)) chosen.push(word);
    }

    let imposter;
    do {
        imposter = wordPool[Math.floor(Math.random() * wordPool.length)];
    } while (chosen.includes(imposter));

    const finalWords = [...chosen, imposter].sort(() => Math.random() - 0.5);
    return finalWords;
}

const gameWords = pickWords();

function getWord() {
    const playerNumber = parseInt(document.getElementById('playerNumber').value);
    const wordDisplay = document.getElementById('wordDisplay');

    if (playerNumber >= 1 && playerNumber <= 4) {
        wordDisplay.innerText = "Your word is: " + gameWords[playerNumber - 1];
    } else {
        wordDisplay.innerText = "Please enter a valid player number (1-4).";
    }
}

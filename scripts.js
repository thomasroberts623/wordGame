const words = [
    "Abandon",
    "Accordion",
    "Acoustic",
    "Adventure",
    "Alligator",
    "Ambassador",
    "Amethyst",
    "Avalanche",
    "Balloon",
    "Bamboo",
    "Basilisk",
    "Blacksmith",
    "Blossom",
    "Blueberry",
    "Buccaneer",
    "Buttercup",
    "Candelabra",
    "Captain",
    "Caravan",
    "Caribou",
    "Carousel",
    "Cauldron",
    "Celestial",
    "Charisma",
    "Chimera",
    "Chocolate",
    "Cinnamon",
    "Cobalt",
    "Conundrum",
    "Corridor",
    "Crystal",
    "Cyclops",
    "Dandelion",
    "Daydream",
    "Dragonfly",
    "Echelon",
    "Elegance",
    "Elephant",
    "Emerald",
    "Enchantment",
    "Epicurean",
    "Evergreen",
    "Excalibur",
    "Fantastic",
    "Firefly",
    "Flamenco",
    "Flamingo",
    "Fortitude",
    "Fraternity",
    "Galactica",
    "Galaxy",
    "Gazelle",
    "Glitter",
    "Gratitude",
    "Gypsy",
    "Harmony",
    "Helicopter",
    "Horizon",
    "Hurricane",
    "Hypnotic",
    "Icicle",
    "Infinity",
    "Inquisitor",
    "Inspiration",
    "Jasmine",
    "Jubilee",
    "Kangaroo",
    "Kaleidoscope",
    "Labyrinth",
    "Lagoon",
    "Lighthouse",
    "Magnolia",
    "Marigold",
    "Masquerade",
    "Maverick",
    "Melody",
    "Midnight",
    "Mirage",
    "Moonlight",
    "Mountain",
    "Nebula",
    "Nightshade",
    "Oasis",
    "Octopus",
    "Odyssey",
    "Opulent",
    "Orchid",
    "Outlaw",
    "Panorama",
    "Paradox",
    "Paradise",
    "Pavilion",
    "Phoenix",
    "Pinnacle",
    "Pirate",
    "Plumeria",
    "Pomegranate",
    "Prism",
    "Quicksilver",
    "Radiance",
    "Rainbow",
    "Rapture",
    "Raspberry",
    "Raven",
    "Regal",
    "Reverie",
    "Rhapsody",
    "Serenade",
    "Serenity",
    "Shadow",
    "Skylark",
    "Solitude",
    "Sonnet",
    "Sorcerer",
    "Spectacle",
    "Starlight",
    "Sunshine",
    "Symphony",
    "Tangerine",
    "Tempest",
    "Thunder",
    "Tornado",
    "Twilight",
    "Umbrella",
    "Unicorn",
    "Universe",
    "Vanilla",
    "Vortex",
    "Voyager",
    "Waterfall",
    "Whisper",
    "Whistle",
    "Wilderness",
    "Willow",
    "Windmill",
    "Winsome",
    "Wonderland",
    "Wondrous",
    "Xanadu",
    "Xenon",
    "Yonder",
    "Zephyr",
    "Zenith",
    "Zodiac",
    "Abacus",
    "Abyss",
    "Alchemy",
    "Amulet",
    "Astral",
    "Aurora",
    "Bamboo",
    "Bellflower",
    "Bewilder",
    "Bonsai",
    "Cacophony",
    "Cascade",
    "Celestial",
    "Charisma",
    "Chrysalis",
    "Cinnamon",
    "Citrus",
    "Constellation",
    "Corridor",
    "Crystal",
    "Dandelion",
    "Daydream",
    "Dewdrop",
    "Dragonfly",
    "Echelon",
    "Effervescent",
    "Elegance",
    "Enigma",
    "Epiphany",
    "Ethereal",
    "Exquisite",
    "Fantasia",
    "Firework",
    "Flamenco",
    "Flamingo",
    "Frivolous",
    "Gazebo",
    "Gossamer",
    "Harmonious",
    "Helix",
    "Hologram",
    "Hypnotic",
    "Iridescent",
    "Jubilant",
    "Kaleidoscope",
    "Labyrinth",
    "Lavender",
    "Lighthouse",
    "Luminary",
    "Marigold",
    "Midnight",
    "Moonbeam",
    "Mystic",
    "Nebula",
    "Orchid",
    "Panorama",
    "Paradox",
    "Paradise",
    "Pavilion",
    "Phoenix",
    "Pinnacle",
    "Pirate",
    "Plumeria",
    "Pomegranate",
    "Prism",
    "Quicksilver",
    "Radiance",
    "Rainbow",
    "Rapture",
    "Raspberry",
    "Raven",
    "Regal",
    "Reverie",
    "Rhapsody",
    "Serenade",
    "Serenity",
    "Shadow",
    "Skylark",
    "Solitude",
    "Sonnet",
    "Sorcerer",
    "Spectacle",
    "Starlight",
    "Sunshine",
    "Symphony",
    "Tangerine",
    "Tempest",
    "Thunder",
    "Tornado",
    "Twilight",
    "Umbrella",
    "Unicorn",
    "Universe",
    "Vanilla",
    "Vortex",
    "Voyager",
    "Waterfall",
    "Whisper",
    "Whistle",
    "Wilderness",
    "Willow",
    "Windmill",
    "Winsome",
    "Wonderland",
    "Wondrous",
    "Xanadu",
    "Xenon",
    "Yonder",
    "Zephyr",
    "Zenith",
    "Zodiac"
];


// Shuffle the array to make word selection more random
shuffleArray(words);

let previousWords = [];
let currentWord = "";
let lives = 3; // Starting with 3 lives
let score = 0; // Initialize the score to 0
let highScore = localStorage.getItem("highScore") || 0; // Initialize highScore from local storage

const livesDisplay = document.getElementById("livesDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const highScoreDisplay = document.getElementById("highScoreDisplay"); // Added this line
const feedbackDisplay = document.getElementById("feedbackDisplay");
const wordDisplay = document.getElementById("wordDisplay");
const restartContainer = document.getElementById("restartContainer"); // Added this line

function getRandomWord() {
    // Generate a random number between 0 and 1
    const randomChance = Math.random();

    if (randomChance <= 0.3 && previousWords.length > 0) {
        // 20% chance of selecting a repeated word if there are previous words
        const randomIndex = Math.floor(Math.random() * previousWords.length);
        return previousWords[randomIndex];
    } else {
        // 80% chance of selecting a new word
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }
}

function displayWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
}

// Call displayWord() to display the first word when the page loads
displayWord();

function updateLivesDisplay() {
    livesDisplay.textContent = `Lives: ${lives}`;
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateHighScoreDisplay() {
    highScoreDisplay.textContent = `High Score: ${highScore}`;
}

function updateFeedback(message) {
    feedbackDisplay.textContent = message;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        updateHighScoreDisplay();
    }
}

function checkWord(hasBeenSeenBefore) {
    if (lives <= 0) {
        // If there are no lives left, return early to prevent further gameplay
        updateFeedback("Game over! You're out of lives.");
        // Optionally, you can display a "Restart" button to start a new game.
        return;
    }

    if (hasBeenSeenBefore && previousWords.includes(currentWord)) {
        updateFeedback("Correct! You remembered.");
        score++;
        updateScoreDisplay();
    } else if (!hasBeenSeenBefore && !previousWords.includes(currentWord)) {
        updateFeedback("Correct! It's a new word.");
        previousWords.push(currentWord);
        score++;
        updateScoreDisplay();
    } else {
        lives--;
        updateFeedback("Incorrect. You lose a life.");

        // Check if the player has run out of lives
        if (lives <= 0) {
            // Use an alert to display the game over message and the player's score
            updateFeedback(`Game over! Your score is ${score}.`);
            // Display the "Restart" button when the game is over
            restartContainer.style.display = "block";
            // Update the high score when the game is over
        updateHighScore();
        }
    }

    updateLivesDisplay();

    if (lives > 0) {
        displayWord();
    } else {
        // All words have been displayed, you can choose to end the game or restart it here
        // For example, you can call restartGame() to restart the game
    }
}

function restartGame() {
    // Reset game variables
    previousWords = [];
    shuffleArray(words);
    currentWord = "";
    lives = 3;
    score = 0;
    updateLivesDisplay();
    updateScoreDisplay();
    displayWord();
    updateFeedback("");
    // Hide the "Restart" button when the game restarts
    restartContainer.style.display = "none";
}

displayWord();
updateLivesDisplay();
updateScoreDisplay(); // Display the initial score
updateHighScoreDisplay(); // Display the initial high score
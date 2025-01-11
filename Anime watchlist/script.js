// Anime data (all animes)
const animeData = [
    { "link": "https://myanimelist.net/anime/34034", "name": "Pokémon the Series: Sun & Moon" },
    { "link": "https://myanimelist.net/anime/223", "name": "Dragon Ball" },
    { "link": "https://myanimelist.net/anime/21", "name": "One Piece" },
    { "link": "https://myanimelist.net/anime/16498", "name": "Attack on Titan" },
    { "link": "https://myanimelist.net/anime/1535", "name": "Death Note" },
    { "link": "https://myanimelist.net/anime/30276", "name": "One Punch Man" },
    { "link": "https://myanimelist.net/anime/40748", "name": "Jujutsu Kaisen (TV)" },
    { "link": "https://myanimelist.net/anime/50265", "name": "Spy x Family" },
    { "link": "https://myanimelist.net/anime/16870", "name": "The Last: Naruto the Movie" },
    { "link": "https://myanimelist.net/anime/19067", "name": "Future Card Buddyfight" },
    { "link": "https://myanimelist.net/anime/8557", "name": "The Squid Girl" },
    { "link": "https://myanimelist.net/anime/41094", "name": "The Daily Life of the Immortal King" },
    { "link": "https://myanimelist.net/anime/49926", "name": "The Demon Slayer: Kimetsu no Yaiba Mugen Train Arc TV" },
    { "link": "https://myanimelist.net/anime/38000", "name": "Demon Slayer: Kimetsu no Yaiba" },
    { "link": "https://myanimelist.net/anime/32281", "name": "Your Name" },
    { "link": "https://myanimelist.net/anime/38826", "name": "Weathering With You" },
    { "link": "https://myanimelist.net/anime/37447", "name": "Le Cirque de Karakuri" },
    { "link": "https://myanimelist.net/anime/1565", "name": "Pokemon Diamond & Pearl" },
    { "link": "https://myanimelist.net/anime/23283", "name": "Terror in Resonance" },
    { "link": "https://myanimelist.net/anime/22535", "name": "Parasyte -the maxim-" },
    { "link": "https://myanimelist.net/anime/31964", "name": "My Hero Academia" },
    { "link": "https://myanimelist.net/anime/49154", "name": "High Card" },
    { "link": "https://myanimelist.net/anime/3162", "name": "Katri, Girl of the Meadows" },
    { "link": "https://myanimelist.net/anime/51213", "name": "Vermeil in Gold" },
    { "link": "https://myanimelist.net/anime/41915", "name": "The Last Summoner" },
    { "link": "https://myanimelist.net/anime/34572", "name": "Black Clover" },
    { "link": "https://myanimelist.net/anime/44616", "name": "Crayon Shin-chan Movie 29: Mystery Meki! Hana no Tenkasu Gakuen" },
    { "link": "https://myanimelist.net/anime/37520", "name": "Dororo" },
    { "link": "https://myanimelist.net/anime/16782", "name": "The Garden of Words" },
    { "link": "https://myanimelist.net/anime/52608", "name": "The Aristocrat's Otherworldly Adventure: Serving Gods Who Go Too Far" },
    { "link": "https://myanimelist.net/anime/7088", "name": "Demon King Daimao" },
    { "link": "https://myanimelist.net/anime/52211", "name": "Mashle: Magic and Muscles" },
    { "link": "https://myanimelist.net/anime/15809", "name": "The Devil is a Part-Timer!" },
    { "link": "https://myanimelist.net/anime/52034", "name": "My Star" },
    { "link": "https://myanimelist.net/anime/18139", "name": "Tonari no Seki-kun: The Master of Killing Time" },
    { "link": "https://myanimelist.net/anime/235", "name": "Case Closed" },
    { "link": "https://myanimelist.net/anime/269", "name": "Bleach" },
    { "link": "https://myanimelist.net/anime/49596", "name": "Blue Lock" },
    { "link": "https://myanimelist.net/anime/54112", "name": "Zom 100: Bucket List of the Dead" },
    { "link": "https://myanimelist.net/anime/49894", "name": "Classroom for Heroes" },
    { "link": "https://myanimelist.net/anime/5958", "name": "Heaven's Lost Property" },
    { "link": "https://myanimelist.net/anime/28223", "name": "Death Parade" },
    { "link": "https://myanimelist.net/anime/44074", "name": "Link Click" },
    { "link": "https://myanimelist.net/anime/49918", "name": "My Hero Academia Season 6" },
    { "link": "https://myanimelist.net/anime/48633", "name": "Liar Liar" },
    { "link": "https://myanimelist.net/anime/34451", "name": "Blood Blockade Battlefront & Beyond" },
    { "link": "https://myanimelist.net/anime/20583", "name": "Haikyu!!" },
    { "link": "https://myanimelist.net/anime/121", "name": "Fullmetal Alchemist" },
    { "link": "https://myanimelist.net/anime/48316", "name": "The Eminence in Shadow" },
    { "link": "https://myanimelist.net/anime/11061", "name": "Hunter x Hunter" },
    { "link": "https://myanimelist.net/anime/22319", "name": "Tokyo Ghoul" },
    { "link": "https://myanimelist.net/anime/48413", "name": "The Devil is a Part-Timer!!" },
    { "link": "https://myanimelist.net/anime/22", "name": "The Prince of Tennis" },
    { "link": "https://myanimelist.net/anime/41345", "name": "Noblesse" },
    { "link": "https://myanimelist.net/anime/39535", "name": "Mushoku Tensei: Jobless Reincarnation" },
    { "link": "https://myanimelist.net/anime/32951", "name": "Akashic Records of Bastard Magic Instructor" },
    { "link": "https://myanimelist.net/anime/54852", "name": "A Returner's Magic Should Be Special" },
    { "link": "https://myanimelist.net/anime/51711", "name": "The Iceblade Sorcerer Shall Rule the World" },
    { "link": "https://myanimelist.net/anime/18689", "name": "Ace of Diamond" },
    { "link": "https://myanimelist.net/anime/50932", "name": "The Reincarnation of the Strongest Exorcist in Another World" },
    { "link": "https://myanimelist.net/anime/6746", "name": "Durarara!!" },
    { "link": "https://myanimelist.net/anime/28497", "name": "Rokka: Braves of the Six Flowers" },
    { "link": "https://myanimelist.net/anime/53149", "name": "Lookism" },
    { "link": "https://myanimelist.net/anime/37407", "name": "Penguin Highway" },
    { "link": "https://myanimelist.net/anime/24405", "name": "World Trigger" },
    { "link": "https://myanimelist.net/anime/50273", "name": "Friends Game" },
    { "link": "https://myanimelist.net/anime/41619", "name": "Munou na Nana" },
    { "link": "https://myanimelist.net/anime/43814", "name": "Battle in 5 seconds after meeting." },
    { "link": "https://myanimelist.net/anime/37345", "name": "Plunderer" },
    { "link": "https://myanimelist.net/anime/40496", "name": "The Misfit of Demon King Academy" },
    { "link": "https://myanimelist.net/anime/9919", "name": "Blue Exorcist" },
    { "link": "https://myanimelist.net/anime/24833", "name": "Assassination Classroom" },
    { "link": "https://myanimelist.net/anime/54900", "name": "Wind Breaker" },
    { "link": "https://myanimelist.net/anime/56690", "name": "Re:Monster" },
    { "link": "https://myanimelist.net/anime/38656", "name": "Darwin's Game" },
    { "link": "https://myanimelist.net/anime/5231", "name": "Inazuma Eleven" },
    { "link": "https://myanimelist.net/anime/55358", "name": "Bucchigiri?!" },
    { "link": "https://myanimelist.net/anime/47194", "name": "Summer Time Rendering" },
    { "link": "https://myanimelist.net/anime/49613", "name": "The Wrong Way to Use Healing Magic" },
    { "link": "https://myanimelist.net/anime/44942", "name": "Record of Ragnarok" },
    { "link": "https://myanimelist.net/anime/39552", "name": "JoJo's Bizarre Adventure: Stone Ocean" },
    { "link": "https://myanimelist.net/anime/52173", "name": "Orient" },
    { "link": "https://myanimelist.net/anime/45588", "name": "Fruits Basket" }
];

// Load anime list with filtering based on search input
function loadAnimeList(searchQuery = '') {
    const listContainer = document.getElementById('animeList');
    listContainer.innerHTML = '';

    // Filter the anime data based on the search query
    const filteredAnimeData = animeData.filter(anime => 
        anime.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Create and append list items
    filteredAnimeData.forEach(anime => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${anime.link}" target="_blank">${anime.name}</a>`;
        listContainer.appendChild(listItem);
    });
}


// Debounced search functionality
let debounceTimeout;
document.getElementById('searchBox').addEventListener('input', function () {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => loadAnimeList(this.value), 300);
});

// Load the list on page load
window.onload = () => loadAnimeList();

// Light/Dark Mode Toggle
const modeToggleButton = document.getElementById('modeToggle');
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    modeToggleButton.textContent = isDarkMode ? '🌞' : '🌙';
});
// Function to show random anime suggestion
function getRandomAnime() {
    const randomIndex = Math.floor(Math.random() * animeData.length);
    const randomAnime = animeData[randomIndex];
    alert(`How about watching ${randomAnime.name}?`);
}

// Add event listener for the random anime button
document.getElementById('randomAnimeBtn').addEventListener('click', getRandomAnime);



// Add Anime Form Handling
const addAnimeBtn = document.getElementById('addAnimeBtn');
const addAnimeModal = document.getElementById('addAnimeModal');
const closeModalBtn = document.getElementById('closeModal');
const addAnimeForm = document.getElementById('addAnimeForm');
const animeNameInput = document.getElementById('animeName');
const animeLinkInput = document.getElementById('animeLink');

// Show the modal on button click
addAnimeBtn.addEventListener('click', () => {
    addAnimeModal.style.display = 'flex';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
    addAnimeModal.style.display = 'none';
});

// Submit the form to add a new anime
addAnimeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newAnime = {
        name: animeNameInput.value,
        link: animeLinkInput.value
    };

    animeData.push(newAnime);
    loadAnimeList();
    addAnimeModal.style.display = 'none';

    // Reset the form
    animeNameInput.value = '';
    animeLinkInput.value = '';
});

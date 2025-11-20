const USER = { username: "ssaad", password: "12345" };

const songs = [
  { title: "Long Distance Love", src: "songs/song1.mp3", cover: "images/cover1.jpeg" },
  { title: "Saiyaara Title Song", src: "songs/song2.mp3", cover: "images/cover2.jpeg" },
  { title: "Bare Bare Aar Asha Hobena", src: "songs/song3.mp3", cover: "images/cover3.jpg" },
  { title: "Salam-e-Ishq", src: "songs/song4.mp3", cover: "images/cover4.jpeg" },
  { title: "DEEWANIYAT Title Track", src: "songs/song5.mp3", cover: "images/cover5.webp" },
  { title: "Tumko Naino Mein", src: "songs/song6.mp3", cover: "images/cover6.jpg" },
  { title: "Sundari", src: "songs/song7.mp3", cover: "images/cover7.jpeg" },
  { title: "Vaaste Song", src: "songs/song8.mp3", cover: "images/cover8.jpeg" },
  { title: "Aaye Ho Meri Zindagi Mein", src: "songs/song9.mp3", cover: "images/cover9.jpeg" },
  { title: "Apna Time Aayega", src: "songs/song10.mp3", cover: "images/cover10.jpeg" },
  { title: "Shitom Ahmed - Tomar Chaya", src: "songs/song11.mp3", cover: "images/cover11.jpeg" },
  { title: "Tera Mera Rishta Purana", src: "songs/song12.mp3", cover: "images/cover12.jpeg" },
  { title: "Hum Tumse - KING", src: "songs/song13.mp3", cover: "images/cover13.jpeg" },
  { title: "Laapata Official", src: "songs/song14.mp3", cover: "images/cover14.jpeg" },
  { title: "Rovalio & Abdul Hannan- Bikhra", src: "songs/song15.mp3", cover: "images/cover15.jpeg" },
  { title: "Zara Zara Bahekta Hai", src: "songs/song16.mp3", cover: "images/cover16.jpeg" },
  { title: "ILZAAM - ARJUN, KING", src: "songs/song17.mp3", cover: "images/cover17.jpeg" },
  { title: "Kahi Bankar Hawa", src: "songs/song18.mp3", cover: "images/cover18.jpeg" },
  { title: "Kaise Hua - Kabir Singh", src: "songs/song19.mp3", cover: "images/cover19.jpeg" },
  { title: "Mann Mera", src: "songs/song20.mp3", cover: "images/cover20.jpeg" },
  { title: "Tum Ho Toh", src: "songs/song21.mp3", cover: "images/cover21.jpg" },
  { title: "17 Prishtha", src: "songs/song22.mp3", cover: "images/cover22.jpg" },
  { title: "Tor Premete", src: "songs/song23.mp3", cover: "images/cover23.jpg" },
  { title: "Aaoge Tum Kabhi", src: "songs/song24.mp3", cover: "images/cover24.jpg" },
  { title: "Tore Mon Diya", src: "songs/song25.mp3", cover: "images/cover25.jpg" },
  { title: "Koi Fariyaad - Shrey Singhal", src: "songs/song26.mp3", cover: "images/cover26.jpg" },
  { title: "Akull - Laal Chunariya", src: "songs/song27.mp3", cover: "images/cover27.jpg" },
  { title: "Bondhura Elomelo", src: "songs/song28.mp3", cover: "images/cover28.jpg" },
  { title: "Uru Uru Swapne Ek Rajkonye", src: "songs/song29.mp3", cover: "images/cover29.jpg" },
  { title: "Brown Munde", src: "songs/song30.mp3", cover: "images/cover30.jpg" },
  { title: "Tum Ho Toh", src: "songs/song31.mp3", cover: "images/cover31.jpg" },
  { title: "Tum Ho Toh", src: "songs/song32.mp3", cover: "images/cover32.jpg" },
  { title: "Tum Ho Toh", src: "songs/song33.mp3", cover: "images/cover33.jpg" },
  { title: "Tum Ho Toh", src: "songs/song34.mp3", cover: "images/cover34.jpg" },
  { title: "Tum Ho Toh", src: "songs/song35.mp3", cover: "images/cover35.jpg" },
  { title: "Tum Ho Toh", src: "songs/song36.mp3", cover: "images/cover36.jpg" },
  { title: "Tum Ho Toh", src: "songs/song37.mp3", cover: "images/cover37.jpg" },
  { title: "Tum Ho Toh", src: "songs/song38.mp3", cover: "images/cover38.jpg" },
  { title: "Tum Ho Toh", src: "songs/song39.mp3", cover: "images/cover39.jpg" },
  { title: "Tum Ho Toh", src: "songs/song40.mp3", cover: "images/cover40.jpg" },
];

let currentIndex = 0;
const audio = document.getElementById("audio");
const songList = document.getElementById("songList");
const currentSong = document.getElementById("currentSong");
const search = document.getElementById("search");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("login-error");

  if (username === USER.username && password === USER.password) {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("music-page").classList.remove("hidden");
    loadSongs();
  } else {
    error.textContent = "Invalid username or password!";
  }
});

function loadSongs(filteredSongs = songs) {
  songList.innerHTML = "";
  filteredSongs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => playSong(index));
    songList.appendChild(li);
  });
}

search.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = songs.filter(s => s.title.toLowerCase().includes(term));
  loadSongs(filtered);
});

function playSong(index) {
  currentIndex = index;
  const song = songs[currentIndex];
  audio.src = song.src;
  cover.src = song.cover;
  audio.play();
  currentSong.textContent = `🎵 Now Playing: ${song.title}`;
  cover.classList.add("playing");
}

document.getElementById("play").addEventListener("click", () => {
  audio.play();
  cover.classList.add("playing");
});
document.getElementById("pause").addEventListener("click", () => {
  audio.pause();
  cover.classList.remove("playing");
});
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
});
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
    updateTimes();
  }
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function updateTimes() {
  let current = formatTime(audio.currentTime);
  let duration = formatTime(audio.duration);
  currentTimeEl.textContent = current;
  durationEl.textContent = duration || "0:00";
}

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}
// Scroll Button
scrollToContent = document.getElementById('scrollToContent');
scrollToContent.addEventListener('click', function () {
  window.scrollTo(0, 922);
})



// --------------------------- JavaScript for Songs ---------------------------

let songs = [
  { songName: "Your Name", songPath: "songs/anime/1.mp3", coverPath: "images/anime covers/1.jpg" },
  { songName: "Gurenge", songPath: "songs/anime/2.mp3", coverPath: "images/anime covers/2.jpg" },
  { songName: "Blue Bird", songPath: "songs/anime/3.mp3", coverPath: "images/anime covers/3.jpg" },
  { songName: "Seishun Buta Yarou", songPath: "songs/anime/4.mp3", coverPath: "images/anime covers/4.jpg" },
  { songName: "JoJo's Bizarre Adventure", songPath: "songs/anime/5.mp3", coverPath: "images/anime covers/5.jpg" },
  { songName: "Cry Baby", songPath: "songs/anime/6.mp3", coverPath: "images/anime covers/6.jpg" },
  { songName: "Tokyo Ghoul OP", songPath: "songs/anime/7.mp3", coverPath: "images/anime covers/7.jpg" },
  { songName: "Shigatsu wa kimi no uso", songPath: "songs/anime/8.mp3", coverPath: "images/anime covers/8.jpg" },
  { songName: "One Piece Classic", songPath: "songs/anime/9.mp3", coverPath: "images/anime covers/9.png" },
  { songName: "Attack on Titan", songPath: "songs/anime/10.mp3", coverPath: "images/anime covers/10.jpg" },
  { songName: "Death Note OP", songPath: "songs/anime/11.mp3", coverPath: "images/anime covers/11.jpg" },
  { songName: "We Are!", songPath: "songs/anime/12.mp3", coverPath: "images/anime covers/12.jpg" }
]

// Song Cover
songCard = Array.from(document.getElementsByClassName('songCard'));
songCard.forEach(songFunction);
// Function for forEach Loop
function songFunction(song, i) {
  song.getElementsByClassName("songCardName")[0].innerHTML = songs[i].songName;
  song.getElementsByTagName('img')[0].src = songs[i].coverPath;
} // song = [0: div.songCard, 1: div.songCard,.....]


// Declaring Variables
songNumber = 0;
audioElement = new Audio('../songs/1.mp3');
bottom_music_player = document.getElementById('bottom_music_player');
bottomPlayButton = document.getElementById("bottomPlayButton");
seekBar = document.getElementById("seekBar");
down_arrow = document.getElementById("down_arrow");
playingImage = document.getElementById("playingImage");
songCardButton = Array.from(document.getElementsByClassName("songCardButton"));
previous = document.getElementById("previous");
next = document.getElementById("next");
music_playing = document.getElementById("music_playing");



function displayBottomBar() {
  bottom_music_player.style.height = "150px";
}
function hideBottomBar() {
  bottom_music_player.style.height = "0px";
}

// Make All Play Function
function makeAllPlay() {
  songCardButton.forEach(targetSongCard);
  function targetSongCard(element) {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  }
}

// SONG CARD BUTTON CLICKED
songCardButton.forEach(songCardButtonFunction);
function songCardButtonFunction(element) {
  element.addEventListener('click', function (event) {
    displayBottomBar();

    // CASE 1
    if (audioElement.paused && audioElement.currentTime <= 0) {
      console.log("Audio is Paused && Current Time is 0");
      makeAllPlay();
      // songCardButton Pause Button
      element.classList.remove('fa-play');
      element.classList.add('fa-pause');

      // Bottom Bar Pause Button
      bottomPlayButton.classList.remove("fa-play");
      bottomPlayButton.classList.add("fa-pause");

      // Change Audio Src and Play Song
      audioElement.src = `songs/anime/${event.target.id}.mp3`;
      audioElement.play();

      // Change Bottom Image and Text
      songNumber = parseInt(event.target.id);
      music_playing.innerHTML = songs[songNumber - 1].songName;
      playingImage.src = songs[songNumber - 1].coverPath;
    }

    // CASE 2
    else if (!audioElement.paused && songNumber != event.target.id) {
      console.log("Audio was Playing && We Clicked Different Button");
      makeAllPlay();
      audioElement.pause();

      element.classList.remove("fa-play");
      element.classList.add("fa-pause");

      // Change Audio Src and Play Song
      audioElement.src = `songs/anime/${event.target.id}.mp3`;
      audioElement.play();

      // Change Bottom Image and Text
      songNumber = parseInt(event.target.id);
      music_playing.innerHTML = songs[songNumber - 1].songName;
      playingImage.src = songs[songNumber - 1].coverPath;

    }

    // CASE 3
    else if (audioElement.paused && songNumber != event.target.id) {
      console.log("Audio was Paused && We Clicked Different Button");
      makeAllPlay();
      audioElement.pause();

      element.classList.remove("fa-play");
      element.classList.add("fa-pause");

      // Bottom Bar Pause Button
      bottomPlayButton.classList.remove("fa-play");
      bottomPlayButton.classList.add("fa-pause");

      // Change Audio Src and Play Song
      audioElement.src = `songs/anime/${event.target.id}.mp3`;
      audioElement.play();

      // Change Bottom Image and Text
      songNumber = parseInt(event.target.id);
      music_playing.innerHTML = songs[songNumber - 1].songName;
      playingImage.src = songs[songNumber - 1].coverPath;

    }

    // CASE 4
    else if (!audioElement.paused && songNumber == event.target.id) {
      console.log("Audio was Playing && We Clicked Same Button");
      audioElement.pause();

      element.classList.remove("fa-pause");
      element.classList.add("fa-play");

      // Bottom Bar Play Button
      bottomPlayButton.classList.remove("fa-pause");
      bottomPlayButton.classList.add("fa-play");

      // Change Bottom Image and Text
      songNumber = parseInt(event.target.id);
      music_playing.innerHTML = songs[songNumber - 1].songName;
      playingImage.src = songs[songNumber - 1].coverPath;

    }

    // CASE 5
    else if (audioElement.paused && audioElement.currentTime > 0) {
      console.log("Audio was Paused while Playing");

      element.classList.remove("fa-play");
      element.classList.add("fa-pause");

      bottomPlayButton.classList.remove("fa-play");
      bottomPlayButton.classList.add("fa-pause");

      // Change Audio Src and Play Song
      audioElement.src = `songs/anime/${event.target.id}.mp3`;
      audioElement.play();

    }
  })
}

// BOTTOM BUTTON CLICKED
bottomPlayButton.addEventListener('click', function() {
  if (audioElement.paused) {
    // Play Audio
    audioElement.play();
    console.log("Audio was Paused");

    // Bottom Button Pause
    bottomPlayButton.classList.remove("fa-play");
    bottomPlayButton.classList.add("fa-pause");

    // Getting the Song Button 
    currentSongCard = document.getElementById(songNumber);
    currentSongCard.classList.remove("fa-play");
    currentSongCard.classList.add("fa-pause");
  }
  else {
    // Pause Audio

    audioElement.pause();
    console.log("Audio was Playing");

    // // Play Button Appears 
    bottomPlayButton.classList.remove("fa-pause");
    bottomPlayButton.classList.add("fa-play");

    // Getting the Playing Song Button
    currentSongCard = document.getElementById(songNumber);
    currentSongCard.classList.remove("fa-pause");
    currentSongCard.classList.add("fa-play");

  }
})



// Next Button
next.addEventListener('click', function () {
  if (songNumber == 12) {
    songNumber = 1;
  } else {
    songNumber += 1;
  }
  // Play Next Song
  audioElement.src = `songs/anime/${songNumber}.mp3`;
  audioElement.currentTime = 0;

  // Remove Bottom Play and Add Pause
  bottomPlayButton.classList.remove("fa-play");
  bottomPlayButton.classList.add("fa-pause");
  audioElement.play();

  // Make All Play
  makeAllPlay();

  // Getting the Playing Song Button
  currentSongCard = document.getElementById(`${songNumber}`);
  currentSongCard.classList.remove("fa-play");
  currentSongCard.classList.add("fa-pause");

  // Changing Bottom Text and Image
  music_playing.innerHTML = songs[songNumber - 1].songName;
  playingImage.src = songs[songNumber - 1].coverPath;
})

// Previous Button
previous.addEventListener('click', function () {
  if (songNumber == 1) {
    songNumber = 12;
  } else {
    songNumber -= 1;
  }
  // Play Next Song
  audioElement.src = `songs/anime/${songNumber}.mp3`;
  audioElement.currentTime = 0;

  // Remove Bottom Play and Add Pause
  bottomPlayButton.classList.remove("fa-play");
  bottomPlayButton.classList.add("fa-pause");
  audioElement.play();

  // Make All Play
  makeAllPlay();

  // Getting the Playing Song Button
  currentSongCard = document.getElementById(`${songNumber}`);
  currentSongCard.classList.remove("fa-play");
  currentSongCard.classList.add("fa-pause");

  // Changing Bottom Text and Image
  music_playing.innerHTML = songs[songNumber - 1].songName;
  playingImage.src = songs[songNumber - 1].coverPath;
})


// When Clicked on Down Arrow
down_arrow.addEventListener('click', function () {
  hideBottomBar();
  audioElement.pause();

  songCardButton.forEach(downArrowFunction);
  function downArrowFunction(element) {

    // Remove Pause Button and Add Play Button
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
  }
})


// SeekBar
audioElement.addEventListener('timeupdate', function () {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  seekBar.value = progress;
})
seekBar.addEventListener('change', function () {
  audioElement.currentTime = seekBar.value * audioElement.duration / 100;
})

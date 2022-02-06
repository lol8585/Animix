let bollywoodSongs = [
    { songName: "Excuses ", filePath: "songs/bollywood/1.mp3", coverPath: "images/bollywood covers/1.jpg" },
    { songName: "4men down", filePath: "songs/bollywood/2.mp3", coverPath: "images/bollywood covers/2.jpg" },
    { songName: "WARRIOR", filePath: "songs/bollywood/3.mp3", coverPath: "images/bollywood covers/3.jpg" },
    { songName: "Zindagi", filePath: "songs/bollywood/4.mp3", coverPath: "images/bollywood covers/4.jpg" },
    { songName: "High Rated Gabru", filePath: "songs/bollywood/5.mp3", coverPath: "images/bollywood covers/5.jpg" },
    { songName: "DiL Ki Baat", filePath: "songs/bollywood/6.mp3", coverPath: "images/bollywood covers/6.jpg" },
    { songName: "Kya Mujhe Pyaar Hai", filePath: "songs/bollywood/7.mp3", coverPath: "images/bollywood covers/7.jpg" },
    { songName: "Bekhayali", filePath: "songs/bollywood/8.mp3", coverPath: "images/bollywood covers/8.jpg" },
    { songName: "KHAIRIYAT ", filePath: "songs/bollywood/9.mp3", coverPath: "images/bollywood covers/9.jpg" },
]

// Song Cover
songCard = Array.from(document.getElementsByClassName('songCard'));
songCard.forEach(songFunction);
// Function for forEach Loop
function songFunction(song, i) {
  song.getElementsByClassName("songCardName")[0].innerHTML = bollywoodSongs[i].songName;
  song.getElementsByTagName('img')[0].src = bollywoodSongs[i].coverPath;
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
        audioElement.src = `songs/bollywood/${event.target.id}.mp3`;
        audioElement.play();
  
        // Change Bottom Image and Text
        songNumber = parseInt(event.target.id);
        music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
        playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
      }
  
      // CASE 2
      else if (!audioElement.paused && songNumber != event.target.id) {
        console.log("Audio was Playing && We Clicked Different Button");
        makeAllPlay();
        audioElement.pause();
  
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
  
        // Change Audio Src and Play Song
        audioElement.src = `songs/bollywood/${event.target.id}.mp3`;
        audioElement.play();
  
        // Change Bottom Image and Text
        songNumber = parseInt(event.target.id);
        music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
        playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
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
        audioElement.src = `songs/bollywood/${event.target.id}.mp3`;
        audioElement.play();
  
        // Change Bottom Image and Text
        songNumber = parseInt(event.target.id);
        music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
        playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
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
        music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
        playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
      }
  
      // CASE 5
      else if (audioElement.paused && audioElement.currentTime > 0) {
        console.log("Audio was Paused while Playing");
  
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
  
        bottomPlayButton.classList.remove("fa-play");
        bottomPlayButton.classList.add("fa-pause");
  
        // Change Audio Src and Play Song
        audioElement.src = `songs/bollywood/${event.target.id}.mp3`;
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
    audioElement.src = `songs/bollywood/${songNumber}.mp3`;
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
    music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
    playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
  })
  
  // Previous Button
  previous.addEventListener('click', function () {
    if (songNumber == 1) {
      songNumber = 12;
    } else {
      songNumber -= 1;
    }
    // Play Next Song
    audioElement.src = `songs/bollywood/${songNumber}.mp3`;
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
    music_playing.innerHTML = bollywoodSongs[songNumber - 1].songName;
    playingImage.src = bollywoodSongs[songNumber - 1].coverPath;
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

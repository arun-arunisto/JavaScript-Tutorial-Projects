let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let track = document.getElementById("track");
let trackName  = document.getElementById('track-name');
let trackImage = document.getElementById('track-img');
let idx = 0;


let trackList = [
    {
        name:"Until I found you ♡",
        path:"media/until-i-found-you.mp3",
        imgurl:"media/ifoundyou.jpeg"
    },
    {
        name:"Perfect ♡",
        path:"media/Perfect.mp3",
        imgurl:"media/perfect.jpeg"
    },
    {
        name:"Him & I ♡",
        path:"media/Him-and-i.mp3",
        imgurl:"media/himandi.jpeg"
    }
]


song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

let interval;


function playSong() {
    song.play();
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}


function playPause(){

    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        playSong();
    }
}

function trackChange(idx) {
    track.src = trackList[idx].path;
    trackImage.src = trackList[idx].imgurl;
    trackName.innerHTML = trackList[idx].name;
    song.load();
    playSong();
}

function nextTrack() {
    idx+=1;
    if (idx == trackList.length) {
        idx = 0;
    }
    trackChange(idx);
}

function previousTrack() {
    idx-=1;
    if (idx < 0) {
        idx = trackList.length-1;
    }
    trackChange(idx);
}


progress.onchange = function() {
    song.currentTime = progress.value;
}

song.onended = function() {
    nextTrack();
}

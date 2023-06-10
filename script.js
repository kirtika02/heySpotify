console.log("Welcome to Spotify");
//Initialize the variables
let songindex = 0;
let audioElement =new Audio('songs/2.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"I like it", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Tomorrow 2", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Up", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Bodak Yellow", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Please me", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"WAP", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Taki Taki", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Hot Shit", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Finesse", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Drip", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
    
]
songItems.forEach((Element, i)=>{
    
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');

         masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity =1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');

        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity =0;

    }
})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    

    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    
    myProgressbar.value = progress;

})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value* audioElement.duration/100;
})
const makeAllPlays= () =>{
    
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((Element)=>{
        //masterPlay.classList.remove('fa-circle-play');
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');


    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeAllPlays();
        
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0
    }
    else{
        songindex+=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex-=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

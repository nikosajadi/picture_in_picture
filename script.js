const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // capture live screen constent 
    // https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
    //in this part I going setting a constant that is going to be our media stream data and then we waiting to assign that until the user has actually selected which screen or window they want to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    // when the user clicks and loads the video ,it is going to call a function that going to play the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    //catch statment: to cache any arrors within the consol.log
  } catch (error) {
    //catch our Error Here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //strart picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});
//on Load
selectMediaStream();

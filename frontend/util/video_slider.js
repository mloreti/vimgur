export const videoSlider = () => {
  var getImages = () => {
    var images = $(".video-square").find("img");
    var imgs = Object.keys(images).map( id => (
      images[id].currentSrc)
    ).splice(0,8);
    return imgs;
  }

  var setImage = image => {
    $(".videos-hero").css("background-image", `url(${image})`);
  }

  var idx = 0;

  var imageSlider = () => {
    var images = getImages();
    if (idx == 7){
      idx = 0;
    } else {
      idx++;
    }
    setImage(images[idx]);
  }

  setTimeout( () => {
    var images = getImages();
    setImage(images[0]);
  }, 100)
  setInterval(imageSlider, 3000);
}

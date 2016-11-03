$(function() {
    let getImages = () => {
      let images = $(".video-square").find("img");
      let imgs = Object.keys(images).map(id => (images[id].currentSrc )).splice(0,8);
      return imgs;
    }

    let setImage = image => {
      $(".videos-hero").css("background-image", `url(${image})`);
    }

    let idx = 0;

    let imageSlider = () => {
      let images = getImages();
      if (idx == 7){
        idx = 0;
      } else {
        idx++;
      }
      setImage(images[idx]);
    }
    setTimeout(()=>{
      let images = getImages();
      setImage(images[0]);
    }, 100)
    setInterval(imageSlider, 3000);
});

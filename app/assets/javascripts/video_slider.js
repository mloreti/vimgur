$(function() {
    var getImages = function() {
      var images = $(".video-square").find("img");
      var imgs = Object.keys(images).map(function(id){
        return (images[id].currentSrc )).splice(0,8)
      });
      return imgs;
    }

    var setImage = function(image) {
      $(".videos-hero").css("background-image", `url(${image})`);
    }

    var idx = 0;

    var imageSlider = function() {
      var images = getImages();
      if (idx == 7){
        idx = 0;
      } else {
        idx++;
      }
      setImage(images[idx]);
    }
    setTimeout(function(){
      var images = getImages();
      setImage(images[0]);
    }, 100)
    setInterval(imageSlider, 3000);
});

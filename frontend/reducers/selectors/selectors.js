import _ from 'lodash';

export const top8selector = (videos) => {
  let vidArray = Object.keys(videos).map(id => videos[id]);
  return vidArray.sort(function(a, b) {
    return parseFloat(b.likes) - parseFloat(a.likes);
  }).splice(0,8);
}

export const new8selector = (videos) => {
  let vidArray = Object.keys(videos).map(id => videos[id]);
  return vidArray.sort(function(a, b) {
    return parseFloat(a.created_at) - parseFloat(b.created_at);
  }).splice(0,8);
}

export const videoIndex = (videos, video) => {
  let vidArray = _.values(videos);
  let idx = null;
  for (let i = 0; i < vidArray.length; i++){
    if (video.id == vidArray[i].id) {
      idx = i;
    }
  }
  return idx;
}

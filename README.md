[homepage]: docs/images/homepage.png "Homepage"
[best_videos]: docs/images/best_videos.png "Best Videos"
[new_link]: docs/images/new_link.png "New Link"
[user_profile]: docs/images/user_profile.png "User Profile"

# Vimgur

[Vimgur]("https://vimgur.herokuapp.com")

Vimgur is a site inspired by imgur and vimeo. It's a hybrid that is meant to showcase the most interesting videos people come across on vimeo.

### Features & Implementation

#### The Video Grid

Throughout vimgur videos are rendered in a similar style. So I used a `VideoGrid` component to handle rendering the videos. The component received one prop `videos`. I was able to use this same component on the homepage, videos page, video show page, and user profile pages.

The `VideoGrid` component:

```javascript
render() {
  const videos = this.props.videos;
  return(
    <div className="video-grid">
      {Object.keys(videos).map(id => {
        let video = videos[id];
        let divStyle = {backgroundImage: 'url(' + video.thumbnail + ')'}

        return (
          <Link key={id} to={`/videos/${video.id}`} className="video-square">
            <div className="video-thumb" style={divStyle}>
            </div>
            <div className="info-overlay">
              <p>
                <i className="fa fa-heart" aria-hidden="true"></i>
                {video.likes}
              </p>
              <h5>{video.title}</h5>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
```

#### Adding videos

Adding videos to the database is as easy as submitting a link from vimeo. Vimeo's oEmbed API allows lookup with just a url so with just a link I'm able to retrieve a video's title, thumbnail, and embed url. Each data field is inserted in my `Video` database which has the columns `title`, `embed_url`, `thumbnail`, and `user_id`. The `user_id` is optional because people should be allowed to submit links without signing up.

![alt text][new_link]

#### Viewing the Best/New Videos

Besides the top 8 videos on the homepage a user can click to see the top 20 best videos and top 20 new videos by going to the `/best` and `/new` routes. The API receives the url `videos?sort=best` which the rails controller reads the params and returns a list of 20 videos sorted by likes.

![alt text][best_videos]

#### User Profile & Likes

Likes are handled by a join table the holds the `user_id` and `video_id`. This join table allows the video to show whether the logged in user has liked the current video or not. Also, the user can see `liked_videos` on their profile page. Liking a video is restricted to users only. Clicking on like whilst not logged in will result in a modal asking for you to sign in. 

![alt text][user_profile]

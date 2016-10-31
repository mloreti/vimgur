## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
  - NavbarContainer
    * Search
    * NewLinkForm
    * Profile
  - IndexVideoContainer
    * BestVideos

**VideosContainer**
  - Best
    * BestVideosIndex
  - New
    * NewVideosIndex

**VideoViewContainer**
  - VideoHeader
    * Votes
  - VideoView
    * Next/Prev
    * Controls
  - CommentsContainer
    * Comment

**SearchContainer**
  - Search
  - VideoIndex

**ProfileContainer**
  - Username
  - Videos
    * Liked
    * Submitted



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/videos" | "VideosContainer" |
| "/videos/best" | "VideosContainer" |
| "/videos/new" | "VideosContainer" |
| "/videos/:id" | "VideoViewContainer" |
| "/search/:query" | "SearchContainer" |
| "/:username" | "ProfileContainer" |

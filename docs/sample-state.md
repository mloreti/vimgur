{
  currentUser: {
    id: 1,
    username: "mickey"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    addVideo: {errors: ["title can't be blank"]}
  },
  videos: {
    1: {
      title: "Sample State",
      link_url: "youtube.com/a1hfe22alfj2",
      author_id: 1,
      upvotes: 0,
      downvotes: 0,
      comments: {
        1: {
          author_id: 1
          body: "Cool"
        }
      }
    }
  },
}

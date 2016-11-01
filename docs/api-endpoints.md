# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Videos

- `GET /api/videos`
  - Videos index/search
  - accepts `week` query param to list best videos by week
- `POST /api/videos`
- `GET /api/videos/:id`
- `DELETE /api/videos/:id`

### Comments
- `GET /api/video/:id/comments`
- `POST /api/video/:id/comments`
- `DELETE /api/video/:id/comments/:id`

### Voting
- `POST /api/video/:id/votes`
- `DELETE /api/video/:id/votes`

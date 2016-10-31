# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
link_url    | string    | not null
upvotes     | integer   | not null
downvotes   | integer   | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
video_id    | integer   | not null, foreign key (references videos), indexed
body        | text      | nut null

# votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
voter_id    | integer   | not null, foreign key (references users), indexed
video_id    | integer   | not null, foreign key (references videos), indexed

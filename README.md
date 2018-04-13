# BlogApp

This is a NodeJS application to provide REST APIs for a blogging application.

## Application Features:

The application would allow logged in users to create blog posts & follow each other:
- POST /login
  - Should authenticate and log in user
- POST /register
  - Allows user to register herself on the platform with basic information
    - Username, password, firstname, lastname, blogURL
- POST /blogpost
  - Allows user to create a blog post with following parameters
    - Title, content
  - NOTE: Authentication should be handled here.
- PUT /follow/{username}
  - Allows you to follow new users
- GET /feed
  - Returns all blog posts of users you follow
  - NOTE: It should only return blogposts of user that you follow

# BlogApp

This is a NodeJS application to provide REST APIs for a blogging application.

## Application Features:

The application would allow logged in users to create blog posts & follow each other:

- POST /login
  - Authenticates and logs in user
  
- POST /register
  - Allows user to register himself/herself on the platform with basic information
    - Username, password, firstname, lastname, blogURL

- POST /blogpost
  - Allows user to create a blog post with following parameters
    - Title, content
  - Authentication is handled here.

- PUT /follow/{username}
  - Allows you to follow new users

- GET /feed
  - Returns all blog posts of users you follow
  - It only returns blogposts of user that you follow

### Built with
- Front-end
- ejs
- Bootstrap
- Back-end
- express
- mongoDB
- mongoose
- passport
- passport-local
- express-session
- method-override
- connect-flash
- Heroku
- Cloud9

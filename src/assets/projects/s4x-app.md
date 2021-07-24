---
  "sortOrder": 3
  "name": "Song Setlist Dashboard for Twitch"
  "languagesArray": ["React/Typescript", "Netlify", "Serverless", "FaunaDB"]
  "shortDescription": "A queue of setlist songs is exposed via API, which can be queried and used by a Twitch chatbot."
  "screenshotArray": [
    {
      "image": "./screenshots/s4x-overview.png"
    },
    {
      "image": "./screenshots/s4x-song-add.png"
    },
    {
      "image": "./screenshots/s4x-song-edit.png"
    },
    {
      "image": "./screenshots/s4x-logout.png"
    },
    {
      "image": "./screenshots/s4x-login.png"
    }
  ]
---

_Note: This is still in-progress. Styling and overall functionality will change as I get user feedback._

This is a fullstack project built for my friends' Twitch stream. It utilizes <a href="https://netlify.com" target="_blank">Netlify</a> for hosting, user management/authentication, and for serverless functions. While multiple user accounts aren't a strict necessity for this application, and a more simple approach to password protecting the website could have been used, this seemed like a good project to test Netlify's user management service.

This dashboard contains basic CRUD operations for managing the song database, as well as a "setlist" feature. Songs marked with an active checkbox are added to the setlist, which appears on the dashboard as well as in the response returned by quering an endpoint. This data is then utilized by their Twitch chatbot, which returns the current song via the `!song` command, and advances to the next song (i.e. dequeues from the song queue) with the admin command `!next`.

FaunaDB queries are currently written in FQL, though they may be refactored into GraphQL queries in the future.

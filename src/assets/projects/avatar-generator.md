---
  "sortOrder": 4
  "name": "Animated Avatars"
  "languagesArray": ["React/Typescript", "Django", "SVG", "Avataaars"]
  "shortDescription": "SVG Avatar Generator for Student Accounts."
  "screenshotArray": [
    {
      "image": "./screenshots/happy-done-avatar.png"
    } 
  ]
---

SVG Avatar Generator for Student Accounts. Students may choose to use an animated avatar rather than upload a photo of themselves. This feature is limited to Student accounts, Teacher accounts are required to have photograph profile picture. Avatar building blocks are pulled from the <a href="https://getavataaars.com" target="_blank">Avataaars library</a>.

The SVG data is saved to an image blob, which is then converted to a PNG. The PNG's URI is then generated via `canvas.toDataURL()` and stored in the database.

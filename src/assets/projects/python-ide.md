---
  "name": "Interactive Python IDE"
  "languagesArray": ["React", "Web Sockets", "Brython"]
  "shortDescription": "A real-time IDE used for teaching students basic Python."
  "screenshotArray": [
    {
      "image": "./screenshots/ide-featureintro.png"
    }
  ]
---

A real-time IDE used for teaching students basic Python. This tool allows a user with a Teacher account to host an IDE session for multiple Students.

Web sockets are used to ensure each account sees the same code in their IDE, and the Teacher assigns edit permissions via a "talking stick" mechinic, ensuring that only one account can edit the code at a time. The Python code is handled in-browser by an interesting library called Brython.

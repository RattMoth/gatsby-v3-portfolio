---
  "sortOrder": 2
  "name": "Vocabulary Database Dashboard"
  "languagesArray": ["React/Typescript", "Django", "SQL" ]
  "shortDescription": "Tool used to manage a database of common ACT and SAT vocabulary words."
  "screenshotArray": [
    {
      "image": "./screenshots/vocab-list-unsorted.png"
    },
    {
      "image": "./screenshots/vocab-update.png"
    },
    {
      "image": "./screenshots/subcategory-dropdown.png"
    },
    {
      "image": "./screenshots/vocab-category-create.png"
    },
    {
      "image": "./screenshots/vocab-subcategory-create.png"
    },
    {
      "image": "./screenshots/vocab-DB.jpeg"
    }
  ]
---

A database of common vocabulary words can be created and managed via this tool. In this case, the intent is to allow students to become familiar with common words found on tests such as the ACT and SAT.

This vocabulary dashboard serves as a way for Admin acounts to organize data so that Teachers may use it in their tutoring sessions. Each vocabulary entry is given a definition in English and a Chinese translation, and is then given a main category corresponding to the relevant test. From there, a smaller subcategory can be created in order to break the list up in to more managable chunks.

This was my first project in which I was responsible for database design, and as such it was the first time I needed to use relational database concepts such as many-to-one and one-to-many relationships. Because of this I chose to include the graphic I used to plan out the underlying schema.

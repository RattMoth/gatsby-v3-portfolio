---
  "sortOrder": 1
  "name": "DGNmstr"
  "languagesArray": ["React", "Redux Toolkit", "FastAPI", "PostgreSQL", "Docker", "OpenAI"]
  "shortDescription": "A full-stack campaign management platform for tabletop RPG game masters and players."
  "screenshotArray": [
    {
      "image": "./screenshots/dgnkeeper-1.png"
    },
    {
      "image": "./screenshots/dgnkeeper-2.png"
    },
    {
      "image": "./screenshots/dgnkeeper-3.png"
    },
    {
      "image": "./screenshots/dgnkeeper-4.png"
    },
  ]
  # "screenshotArray": [
  #   {
  #     "image": "./screenshots/dgnmstr-archive.png"
  #   },
  #   {
  #     "image": "./screenshots/dgnmstr-creator.png"
  #   },
  #   {
  #     "image": "./screenshots/dgnmstr-sessions.png"
  #   }
  # ]
---

DGNmstr is a full-stack web application built for tabletop RPG game masters and their players. It serves as a living campaign bible — a single place to create, organize, and reference every asset in a game world, from NPCs and factions to quests, scenes, and locations.

The app supports two distinct roles: **Game Master** and **Player**, each with a tailored view of the campaign. GMs have full creation and editing access, while players see only what's relevant to their character.

### Key Features

**Campaign Archive** — A tabbed interface for browsing and managing all world-building assets (Locations, NPCs, Factions, Items, Quests, Scenes). Assets support rich Markdown descriptions with a live editor, image uploads to DigitalOcean Spaces, and a side-by-side comparison tool for evaluating two assets simultaneously.

**AI Asset Generation** — GMs can generate asset descriptions on demand using the OpenAI API. A tagging system lets the user specify tone, type, and difficulty level before generation, with the result dropped directly into the creation form.

**Session Timeline** — A chronological log of play sessions attached to each campaign, giving the group a persistent record of what happened and when.

**Character System** — Players manage their own character sheets, ability scores, and journals. Character data is scoped to the active game and party via JWT claims, ensuring players only access their own records.

**Party & Game Management** — GMs create games and parties, invite players, and manage settings. Role-based access is enforced at both the frontend routing level and on every API endpoint via JWT claim inspection in the FastAPI backend.

### Architecture

The backend is split into two FastAPI services — one for authentication (SuperTokens + PostgreSQL) and one for all game data — orchestrated with Docker Compose. RTK Query handles all data fetching and caching on the frontend, keeping server state normalized across the Redux store. JWTs signed with RS256 carry embedded game-context claims (`In_Game.Role`, `In_Game.Game`, `In_Game.Party`) so the backend can authorize requests without additional DB lookups.

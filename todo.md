Author: Matt Roth  
Date: Fri-09-Jul-2021  
Subject: To do list for getting this project ready to go  

---------------------------------

### Project cards

1. Add modal to project cards
  - Fix odd resize animation
    - Maybe nah? It's cuz o the scrollbar
  - ONCLICK BEHAVIOR CUZ MAP DOESN'T WORK AS EXPECTED:
    - Click project and setActiveProject(e.target) or whatever
    - Modal accepts activeProject object nice n tidy
    - onExit setActiveProcject(null) null cuz empty on purpose
  - Create Modal component that will recieve data as props:
    - All screenshots
    - Description
    - All language tags
  - Modal component could also utilize hooks to export toggle functionality
2. Collect screenshots and descriptions
  - Figure out how to store data. E.g. single markdown file? Folder? Etc...
  - Keep in mind that items should be easily iterated over. Easy access to Screenshot, Descritpion, Languages array
3. Write Graphql query in src/components/landing/Projects/index.jsx
4. Iterate over returned Graphql data
  - Ensure lazy loading still functions after these changes
5. Update language tick styling to make font easier to read

### Resume link

1. Utilize node file/folder (??) to remove hashing from the resume's static file
2. Nevermind step 2 shouldn't be necessary b/c changing the static name should update the endpoint url as well

### Improve text

1. Proofread about me
2. Update project description

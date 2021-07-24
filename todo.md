Author: Matt Roth  
Date: Fri-09-Jul-2021  
Subject: To do list for getting this project ready to go  

---------------------------------

## Goals
- Plan out markdown/image relationship. I.e. Where to store each to end up with one graphQL query DONE
1. Test StaticImage with local files. Determine how to pass array of uris DONE
2. Test graphql querying a folder of screenshots, see if can grab array of file locations? DONE

- Add qualifiers to gatsbyImageData DONE
  1. Fix image aspect ratio/size to make all the same DONE
  2. Experiment with different placeholders DONE
  3. Ensure lazy loading is active DONE
- pass object to modal after setting activeProject state DONE
- ensure touch controlls work
- make modal size bigger DONE
- make card click behavior better/more clear
- make carousel controlls more visible

### Project cards

1. Add modal to project cards
  - Fix odd resize animation
    - Maybe nah? It's cuz o the scrollbar
  - ONCLICK BEHAVIOR CUZ MAP DOESN'T WORK AS EXPECTED:
    - Click project and setActiveProject(e.target) or whatever
    - Modal accepts activeProject object nice n tidy
    - onExit setActiveProcject(null) null cuz empty on purpose
  - Create Modal component that will recieve data as props: DONE
    - All screenshots
    - Description
    - All language tags
  - Modal component could also utilize hooks to export toggle functionality
2. Collect screenshots and descriptions
  - Figure out how to store data. E.g. single markdown file? Folder? Etc...
  - Keep in mind that items should be easily iterated over. Easy access to Screenshot, Descritpion, Languages array
  - **Object outline []**:
    - {name: string; screenshotArray: [picture uri in array]; description: string; languagesArray: [strings in array] }
3. Write Graphql query in src/components/landing/Projects/index.jsx DONE
4. Iterate over returned Graphql data
  - Ensure lazy loading still functions after these changes
5. Update language tick styling to make font easier to read DONE

### Projects to add
- IDE DONE
- Avatar DONE
- Vocab DONE
- Sax app
- Old portfolio?
- Face recognition?

### Resume link

1. Utilize node file/folder (??) to remove hashing from the resume's static file
2. Nevermind step 2 shouldn't be necessary b/c changing the static name should update the endpoint url as well

### Improve text

1. Proofread about me
2. Update project description

# Scaffolding for an AJAX demo
## The object:
- The pet name field is a text input (this is already part of the scaffold)
- When user hits <return> in the pet name field, record the change in the db via AJAX.
- After AJAX completes, display success / failure message on page in the browser.

## To install from scratch:

1. Fork or clone the repo
2. `$ npm install`
3. `$ npm run db:create`
4. `$ npm run db:seed`
5. `$ npm run dev:start`


SERVER
* use updatePetName to update the database - done
* associate pet names with pet IDs -- need a petId for updatePetName, add petId as part of the select in getPetsAndSpecies - done
* write a PUT route to process ajax call

CLIENT
* send petId and newName to server (via AJAX fetch)
* display response from AJAX
    * add empty div in pug template, give ID
    * format differently for success/failure
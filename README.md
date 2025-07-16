

## Installation

To install all dependencies, run:

    npm i


## Start

To start the application (both ui and server), run the following command:

    npm run all

This should start the UI on port 5173 and the backend on port 3001


## Tests

There are tests in the server side - made it easier to develop :D

To run these run:

    npm run test


## Notes

The frontend is a React app using react-router. There is mostly one CSS per component - I'm so used to using CSS modules which basically have one CSS file per component that I've replicated it here just out of habit... don't hate me :D  

The backend is using Express as a simple web server handling the two required endpoints (POST /assets/upload and GET /assets). Using Express due to familarity and simplicity.

I have provided an in-memory data store for storing the currently uploaded assets. This is a pretty rudimentary implementation, just for demonstration purposes (it should probably be a class but is just functions in a module...)


## Assumptions / Design Choices

* A company can have multiple of the same asset (where the address, latitude and longitude are all the same values)
* The table just shows the Asset properties, not company Id or anything else
* The model (Asset) is duplicated on both ui and backend - it bleeds through from the database to the ui (which is not ideal but figured it didn't matter too much in this instance)

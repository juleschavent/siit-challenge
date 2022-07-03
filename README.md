# Siit Frontend Challenge / Jules Chavent

## How to run the project on your local machine ?

- Clone the project from github using this link https://github.com/juleschavent/siit-challenge
- In your terminal, run the following commands : 
  - npm i
  - npm run dev (this will run the server)
  - npm run start (this will run the client)

- Then activate/download Allow Cors extension (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr)

------------
## What are the different features ?
- First section show a list of all the users
- Second section show a list of all the services
- You can use the magnifying glass icon to search for a single user
- You can click on a service to show all the users that are currently using it
- You can click the information icon to get on overview of the company like it's name, it's website and how much it costs
-------------
## How is this project organized ?

This project is build using React.

As such, you will find all the main components inside /src/components

For exemple, the users section is build like this :
- ServicesList (it is the main structure of the section, it gives a structure to the different parts)
  - Service (it is a generic component that receive on object and use this data to render all the informations)
    - ServiceModal (it is modal component used for displaying more details informations about the company)

Utils folder contains different utility components : 
- UseQuerry (it is a custom hook used to get data from the server, it takes a parameter like "/users.json" and return 3 stats, data, loading and error. If your request is in a loading state then Shimmer component is used to display a loading animation on your page. You can add threshold on you dev tool to test it out)
- UsePrice (it is a custom hook used to return the price of a service. It take a service param and returns it's total price. In the future it could easily be extended to manage different types of data)
- UseUserPerSerice (it is a custom hook used to return the amount of users using a service since this information is not returned by the backend. It also can be easily extended)

Context folder contains a store type file used as a react contexte. After reviewing the project is seemed like it was the cleanest/fastest/easiest way to manage the different states.
Depending on the future of this project, it would be needed to pivot into a more robust store (redux maybe ?)
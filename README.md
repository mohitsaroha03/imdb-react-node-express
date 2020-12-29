# Imdb-React

A simple web interface that displays list of movies. Here I fetch the data from IMDB website and stored it into a JSON file. Here user can also search on collected data through IMDB rating, genre and movie's name.

## Getting started

- Clone the repo using 'git clone https://github.com/mohitsaroha03/imdb-react-node-express'.
- Go to client and server folder one by one and do 'npm i' or 'npm install'.
- For server install nodemon using 'npm install -g nodemon' and 'set NODE_ENV=dev' or 'export NOD_ENV=dev' for windows and linux respectively
- Start the server by going into the client and server folder and use 'npm start'.

## Routes

Movie list can be seen on http://localhost:3000/ \
 You can view movie grid of 100 movies by loggin into the app. On clicking at a moview card you will be redirected to movie detail page

Route for the API is http://localhost:3001/ \
 For getting data from IMDB's website, you can enter http://localhost:3001/imdb/movies url on the browser, it will get data of 100 top movies.

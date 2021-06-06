## Project React Film App

### The goal of this project is to practice working with React, specifically reacting to changes

We will be using HTML, CSS, JavaScript and React.

**Basic functionality:** we want our app to request data from the Studio Ghibli API (https://ghibliapi.herokuapp.com), to show films, locations, film directors etc. 

**Additional functionality:** search function so that the user can search films, locations, and people.

Note: the basic CSS code has been created in the `index.css` file. Don't forget to import the css! This is what the app will look like (left: basic version, right: full version including search functionality):  

<img src="/project_react_film_app/studio_ghibli_basic.png" width="450" /> <img src="/project_react_film_app/studio_ghibli_with_search.png" width="450" />

### For students

**Basic setup:**  

1. Create a project folder using `npx create-react-app`
1. Delete all unnecessary code
1. Make sure you have *Ghibli Film App* as the title in your HTML (this will show in the tab when your app runs in the browser)
1. Use the classNames that are in the index.css file (and save yourself some time!)
1. Create a header in App.js (see example image above)
1. Create a Films.js component 
1. In Film.js write the code to get all the films from Studio Ghibli when the page loads: create a const `films` and a `setFilms` to update this; you use React's `useEffect()` method to load the films on the page with a `fetch()` request
1. Show the films on the screen as in the example image above: a header with the film title, and then the film details Director, Producer, Release date and Rotten Tomato Score
1. Add any styling you like to make it look better and more professional

### For graduates

**Full project:**

1. Create a Search.js component
1. Add an input field for a search plus a button with *Search*
1. Add search functionality to your app so that when the user types one character in the search box, the results (film titles starting with that character) should show up immediately; each time when more characters are typed, the results that do not match should disappear
1. For this, you have to create a search variable and a function to update the search in the Films component; the initial state is an empty string
1. The Search component gets passed the update function from Films as a prop
1. In the Search component, you create an input field for the search string; use the onChange event to update the search variable every time a character is typed as input
1. The Films component should use the search variable that is updated continuously for a filter across the film titles
1. The search string should return any film title that starts with the string that is typed into the input field; it should show the header with the film name, and the details Director, Producer, Release date and Rotten Tomato Score

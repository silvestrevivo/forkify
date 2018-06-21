// ----------------------------------------------------------------------//
// This project is an example of plain JavaScript ES6 application
// The compilation in development and production is done with ParcelJS
// Just start npm init to add the configuration modules and that's all
// For this case are imported : axios, babel-runtime and babel-preset-env
// ----------------------------------------------------------------------//
import Search from './search'

//-------------------------------
// Global State Object of the App
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked object

const state = {}

//-------------------------------

const controlSearch = async () => {
  const query = 'pizza';

  if (query) {
    // we create a new instance of Search object
    state.search = new Search(query);
    // we call the method getResults() asynchronously
    await state.search.getResults();
    // the code stops till the server retrieves a value
    console.log(state.search.result)
  }
}

// Event listener for search button
document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

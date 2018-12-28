//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
// This project is an example of plain JavaScript ES6 application
// The compilation in development and production is done with ParcelJS
// Just start npm init to add the configuration modules and that's all
// For this case are imported : axios, babel-runtime and babel-preset-env
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
import Search from './models/search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

//--------------------Global State Object of the App--------------------------//
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked object

const state = {}
//----------------------------------------------------------------------------//

const controlSearch = async () => {
  // 1) Get query from the view
  const query = searchView.getInput();

  if (query) {
    // 2) we create a new instance of Search object
    state.search = new Search(query);
    //3 ) Prepare de UI for results
    searchView.clearInput();
    searchView.clearResults();
    // 4) we call the method getResults() asynchronously for results
    await state.search.getResults();
    // 5) Render the result in de UI
    searchView.renderResults(state.search.result);
    console.log(state.search.result)
  }
}

// Event listener for search button
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

//import str from './search'
import axios from 'axios'
import keyapi from './keyapi'


async function getResults(query) {
  const PROXY = 'https://cors-anywhere.herokuapp.com/';
  const result = await axios(`${PROXY}http://food2fork.com/api/search?key=${keyapi}&q=${query}`)

  console.log(result.data.recipes)
}

getResults();



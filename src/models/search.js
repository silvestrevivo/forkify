import axios from 'axios'
import keyapi from '../../keyapi'

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const PROXY = 'https://cors-anywhere.herokuapp.com/';
    try {
      const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${keyapi}&q=${this.query}`)
      this.result = res.data.recipes;
    } catch (error) {
      alert(error)
    }
  }
}

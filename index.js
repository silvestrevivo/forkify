import Search from './search'

const search = new Search('pizza');

console.log(search)
search.getResults(); // this method creates a new element

setTimeout(() => {
  console.log(search)
}, 2000);

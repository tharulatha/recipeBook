import { useState } from 'react';
import './App.css';
import Product from './components/Products';

const App = () => {
  const [search, setSearch] = useState("");
  const [resData, setResData] = useState([])

  const YOUR_APP_ID = "9f35e042";
  const YOUR_APP_KEY = "a37c94e7796cdf57d3f54bffacd6afdc";

  const handleSubmit = (e) => {
    e.preventDefault();
    searchResult()
  }
  
  async function searchResult() {
    const resp = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`);
    const data = await resp.json();
    console.log(data);
     setResData(data.hits)
   }

  return (
    <div className='recipeContainer'>
      <h1>Search a Food</h1>
      <form className='recipeForm' onSubmit={handleSubmit}>
        <input type='text' className='searchInput' placeholder='Enter the food name' value={search} onChange={(e) => {
         setSearch(e.target.value)
        }}/>
        <button type='submit'>Search</button>
      </form>
      {resData ? <Product   data={resData} /> : null}
    </div>
  )
}
export default App
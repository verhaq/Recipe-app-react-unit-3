import React, {useEffect, useState} from 'react';
import AdBanner from './AdBanner';
import RecipeCard from '../RecipeCard'
import axios from 'axios';
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./Home.module.css"






const getRecipes = () => { 
  axios.get("https://recipes.devmountain.com/recipes")
  .then((res) => {
    getRecipes(res.data)
    console.log(res.data)
  })
  
}


const HomeScreen = () => {  
  
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(()=> { 
    getRecipes()
  },[])

  return (
    <div>
      <AdBanner />
      <div className='flex mt-3 bg-orange-200 text-black rounded-lg w-[300px] ml-[700px]'>
      <BiSearchAlt2 size="2em" color="#DA7635" />
      <input 
        type="text" 
        value={searchTerm} 
        onChange={event => setSearchTerm(event.target.value)} 
        placeholder="Search for a recipe"
        className='rounded-lg'
    
      />
      </div>
      <RecipeCard />
    
    </div>


  )
}

export default HomeScreen
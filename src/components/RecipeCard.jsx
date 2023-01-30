import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()
  const cakePic = "https://www.thespruceeats.com/thmb/RrNAI19fc1_c0tciCllU0mzuMkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TuxedoCakeHEROSLICE1-930c622d978f425d9f18a5775d349de7.jpg"
  const sushiPic= "https://assets3.thrillist.com/v1/image/3039003/1000x666/flatten;crop;webp=auto;jpeg_quality=60.jpg"
  const drinkPic= "https://www.archanaskitchen.com/images/archanaskitchen/World_Beverages/Mulled_Apple_Juice_Recipe-1.jpg"
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  
  return (
    <div className="flex justify-between">
        <div  className="relative p-6 bg-white rounded-lg" >

        <img src={cakePic} alt="pic of cake" className="h-[250px] w-[300px] object-cover rounded"/>
        <p className="text-gray-500 text-s ml-[100px] pt-1 pb-2"> Tuxedo Cake</p>
        <button className="ml-[100px] rounded bg-teal-600 px-3 pb-1 pt-1 text-white ">See More</button>
      

        </div>

    <div  className="relative p-6 bg-white rounded-lg" >

        <img src={sushiPic} alt="pic of sushi" className="h-[250px] w-[300px] object-cover rounded"/>
        <p className="text-gray-500 text-s ml-[150px] pt-1 pb-2"> Sushi </p>
        <button className="ml-[125px] rounded bg-teal-600 px-3 pb-1 pt-1 text-white ">See More</button>

    </div>

    <div  className="relative p-6 bg-white rounded-lg " >

        <img src={drinkPic} alt="pic of sushi" className="h-[250px] w-[300px] object-cover rounded"/>
        <p className="text-gray-500 text-s ml-[125px] pt-1 pb-2"> Apple Juice </p>
        <button className="ml-[125px] rounded bg-teal-600 px-3 pb-1 pt-1 text-white ">See More</button>

    </div>

    </div>
  );
};

export default RecipeCard;
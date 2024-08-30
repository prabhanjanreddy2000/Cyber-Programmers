import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import '../styles/food.css' 

export default function Food(){
    var [categories,setCategories]=useState([])
    var [meals,setMeals]=useState([])
    var [selectedCategory,setSelectedCategory]=useState(null)
    var [findCategory,setFindCategory]=useState("")
    var [findMeal,setFindMeal]=useState("")
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res)=>{
            setCategories(res.data.categories)
        })
    })
    function getMeals(e){
        document.getElementById("search-bar").value=""
        setSelectedCategory(e.target.value)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${e.target.value}`)
        .then((res)=>{
            setMeals(res.data.meals)
        })
    }
    function resetCategories(){
        setCategories([])
        setSelectedCategory(null)
        setFindCategory("")
        setFindMeal("")
        document.getElementById("search-bar").value=""
    }
    function searchCategory(e)
    {
        setFindCategory(e.target.value)
    }
    function searchMeals(e)
    {
        setFindMeal(e.target.value)
    }
    return(
        <>
        <div className="container-fluid bg-success-subtle">
            {selectedCategory?
            <div className="row">
                <div className="pt-3">
                <button className="btn btn-danger" onClick={resetCategories}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
                </div>
                <div>
                    <input type="text" className="form-control my-2" id="search-bar" placeholder="Search your favourite food ..." onChange={searchMeals}/>
                </div>
                <div className="p-3">
                    <h3 className="text-center text-danger"><u>{selectedCategory.toUpperCase()} ITEMS</u></h3>
                </div>
                {meals.filter((meal)=>meal.strMeal.includes(findMeal)).map((meal)=>
                    <div className="col-lg-4 col-md-6">
                        <div class="card meal-card d-block mx-auto">
                            <img src={meal.strMealThumb} class="card-img-top meal-image d-block mx-auto" alt="category image"/>
                            <div class="card-body meal-card-body">
                                <h5 class="card-title">{meal.strMeal}</h5>
                                <button class="btn btn-danger">Get Meal</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>:
            <div className="row">
                <div className="p-3">
                    <h2 className="text-danger text-center">Choose your favourite food :)</h2>
                </div>
                <div>
                    <input type="text" className="form-control my-2" id="search-bar" placeholder="Search your favourite category ..." onChange={searchCategory}/>
                </div>
                {categories.filter((category)=>category.strCategory.includes(findCategory)).map((category)=>
                    <div className="col-lg-4 col-md-6">
                        <div class="card category-card d-block mx-auto">
                            <img src={category.strCategoryThumb} class="card-img-top category-image d-block mx-auto" alt="category image"/>
                            <div class="card-body category-card-body">
                                <h5 class="card-title">{category.strCategory}</h5>
                                <button class="btn btn-danger" value={category.strCategory.toLowerCase()} onClick={getMeals}>Get Meals</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
}
        </div>
        </>
    );
}
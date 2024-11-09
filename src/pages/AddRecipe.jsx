import { useState } from "react"
import Header from "../components/Header"

const AddRecipe = () => {
    const [message, setMessage] = useState("")

    const [recipeData, setRecipeData] = useState({
        name: "",
        cuisineType: "",
        imageLink: "",
        ingredients: [],
        instructions: []
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setRecipeData((prev) => (
            {...prev, [name]: name === "ingredients" ? value.split(", ") : (name === "instructions" ? value.split(". ") : value)}
        ))
    }

    const handleAddRecipeForm = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch("https://recipe-organiser-backend.vercel.app/recipes", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipeData)
            })
            if(!response.ok) {
                throw "Failed to add recipe."
            }
            const addedRecipe = response.json()
            if(addedRecipe) {
                setMessage("Recipe added successfully.")
            }
        } catch (error) {
            console.log("Error adding recipe:", error)
        }
    }

    return (
        <div>
            <Header />
            <main className="container py-4">
                <h2>Add Recipe</h2>
                <form onSubmit={handleAddRecipeForm} className="mb-4">
                    <label>
                        Name:<br />
                        <input type="text" name="name" value={recipeData.name} onChange={handleChange} />
                    </label><br /><br />
                    <label>
                        Cuisine Type:<br />
                        <input type="text" name="cuisineType" value={recipeData.cuisineType} onChange={handleChange} />
                    </label><br /><br />
                    <label>
                        Image Link:<br />
                        <input type="text" name="imageLink" value={recipeData.imageLink} onChange={handleChange} />
                    </label><br /><br />
                    <label>
                        Ingredients:<br />
                        <textarea cols="25" name="ingredients" value={recipeData.ingredients.join(", ")} onChange={handleChange}></textarea>
                    </label><br /><br />
                    <label>
                        Instructions:<br />
                        <textarea cols="25" name="instructions" value={recipeData.instructions.join(". ")} onChange={handleChange}></textarea>
                    </label><br /><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>{message}</p>
            </main>
        </div>
    )

}

export default AddRecipe
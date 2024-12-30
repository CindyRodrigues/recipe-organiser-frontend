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
            {...prev, [name]: name === "ingredients" ? value.split(", ") : (name === "instructions" ? value.split(". ").map(instruction => instruction.slice(-1) === "." ? instruction : instruction + ".") : value)}
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
                setRecipeData({
                    name: "",
                    cuisineType: "",
                    imageLink: "",
                    ingredients: [],
                    instructions: []
                })
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
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" name="name" value={recipeData.name} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cuisineType" className="form-label">Cuisine Type:</label>
                        <input type="text" id="cuisineType" name="cuisineType" value={recipeData.cuisineType} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageLink" className="form-label">Image Link:</label>
                        <input type="url" id="imageLink" name="imageLink" value={recipeData.imageLink} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ingredients" className="form-label">Ingredients:</label>
                        <textarea id="ingredients" name="ingredients" value={recipeData.ingredients.join(", ")} onChange={handleChange} className="form-control" required></textarea>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="instructions" className="form-label">Instructions:</label>
                        <textarea id="instructions" name="instructions" value={recipeData.instructions.join(". ")} onChange={handleChange} className="form-control" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>{message}</p>
            </main>
        </div>
    )

}

export default AddRecipe
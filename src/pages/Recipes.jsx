import Header from "../components/Header"
import useFetch from "../hooks/useFetch"
import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [recipes, setRecipes] = useState([])

    const { data, loading, error } = useFetch('https://recipe-organiser-backend.vercel.app/recipes')

    useEffect(() => {
        if (data && data.length > 0) {
            const filteredRecipes = searchQuery === "" ? data : data.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()))
            setRecipes(filteredRecipes)
        }
    }, [data, searchQuery])


    return (
        <div>
            <Header />
            <main className="container py-4">
                {loading && <p>Loading recipes...</p>}
                {error && <p>Error!</p>}
                {data && data.length > 0 && (
                    <>
                        <div className="row mb-4">
                        <div className="col-6">
                            <form role="search">
                                <input className="form-control" type="search" placeholder="Search by recipe name..." aria-label="Search by recipe name" onChange={(e) => setSearchQuery(e.target.value)} />
                            </form>
                        </div>
                        </div>
                        <h2>All Recipes:</h2>
                    </>
                )}
                {recipes && recipes.length > 0 ? (
                        <div className="row mb-4">
                            {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)}
                        </div>
                ) : (!loading && <p>Sorry, there are no recipes!</p>)}
            </main>
        </div>
    )
}

export default Recipes
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../hooks/useFetch"

const RecipeDetail = () => {
    const recipeId = useParams()

    const { data, loading, error } = useFetch(`https://recipe-organiser-backend.vercel.app/recipes/${recipeId.recipeId}`)

    return (
        <div>
            <Header />
            <main className="container py-4">
            {loading && <p>Loading recipe...</p>}
            {error && <p>Error!</p>}
            {data && (
                <>
                    <h2>{data.name}</h2>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={data.imageLink} alt={data.name} className="img-fluid rounded-start" style={{ height: "600px", objectFit: "cover"}} />
                            </div>
                            <div className="col-md-8 px-4">
                                <div className="card-body">
                                    <h3 className="card-title">Cuisine: {data.cuisineType}</h3>
                                    <h4 className="card-text">Ingredients:</h4>
                                    <p className="card-text">{data.ingredients.join(", ")}</p>
                                    <h4 className="card-text">Instructions:</h4>
                                    <ol className="card-text">{data.instructions.map((instruction, index) => (<li>{instruction}</li>))}</ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            </main>
        </div>
    )
}

export default RecipeDetail
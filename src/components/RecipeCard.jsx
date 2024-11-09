import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src={recipe.imageLink} alt={recipe.name} style={{ height: "500px", objectFit: "cover"}} />
                <div className="card-body">
                    <h3 className="card-title">{recipe.name}</h3>
                    <p className="card-text"><strong>Cuisine Type:</strong> {recipe.cuisineType}</p>
                    <p className="card-text"><strong>Ingredients:</strong> <Link to={`/recipes/${recipe._id}`}>See Recipe &gt;</Link></p>
                    <p className="card-text"><strong>Instructions:</strong> <Link to={`/recipes/${recipe._id}`}>See Recipe &gt;</Link></p>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
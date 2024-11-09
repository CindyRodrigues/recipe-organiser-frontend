import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Recipe Organiser</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id="navbarNav">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className="nav-link link-primary" to="/recipes">Recipes</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link link-primary" to="/recipes/add">Add Recipe</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
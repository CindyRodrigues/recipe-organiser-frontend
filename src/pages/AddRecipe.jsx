import Header from "../components/Header"

const AddRecipe = () => {
    return (
        <div>
            <Header />
            <main className="container py-4">
                <form>
                    <h2>Add Recipe</h2>
                    <label>
                        Name:<br />
                        <input type="text" />
                    </label><br /><br />
                    <label>
                        Cuisine Type:<br />
                        <input type="text" />
                    </label><br /><br />
                    <label>
                        Image Link:<br />
                        <input type="text" />
                    </label><br /><br />
                    <label>
                        Ingredients:<br />
                        <textarea cols="25"></textarea>
                    </label><br /><br />
                    <label>
                        Instructions:<br />
                        <textarea cols="25"></textarea>
                    </label><br /><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </div>
    )

}

export default AddRecipe
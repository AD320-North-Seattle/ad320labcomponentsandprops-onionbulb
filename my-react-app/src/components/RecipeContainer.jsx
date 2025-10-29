import Recipe from './Recipe.jsx'

/**
 * Creates a container for all recipes
 * @param {array} recipes - All recipes
 * @returns a container for all recipes
 */
function RecipeContainer({recipes}) {
    return (
        <>  
            <h1>Ix's Autumn Recipes</h1>
            <hr/>
            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
        </>
    )
}

export default RecipeContainer
import Recipe from './Recipe.jsx'

/**
 * Creates a container for all recipes
 * @param {array} recipes - All recipes
 * @returns a container for all recipes
 */
function RecipeContainer({recipes}) {
    return (
        <>  
            <hr/>
            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
        </>
    )
}

export default RecipeContainer
import Recipe from './Recipe.jsx'

function RecipeContainer({recipes}) {
    return (
        <>
            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
        </>
    )
}

export default RecipeContainer
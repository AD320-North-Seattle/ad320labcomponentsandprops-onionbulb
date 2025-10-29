import Ingredient from './Ingredient.jsx'
import Instruction from './Instructions.jsx'

/**
 * Checks if optional glaze is in a recipe and renders it
 * @param {array} recipe - The recipe 
 * @returns div of ingredients/instructions for the glaze
 */
function optionalGlaze({recipe}) {
    if (recipe.optionalGlaze) {
        const glazeName = recipe.optionalGlaze.name
        return (
            <>
            <hr className="dotted-line"/>
            <h2>Optional - {glazeName}</h2>
            <div className="Ingredients">
                <h3>Ingredients</h3>
                {recipe.optionalGlaze.ingredients.map(ingredient => <Ingredient key={glazeName + " " + ingredient} ingredient={ingredient} />)}
            </div>

            <div className={"Instructions"}>
                <h3>Instructions</h3>
                <ol>
                    {recipe.optionalGlaze.instructions.map(instruction => <Instruction key={instruction} instruction={instruction} />)}  
                </ol>
            </div>
            </>
        )
    } else {
        return (null)
    }
}

export default optionalGlaze
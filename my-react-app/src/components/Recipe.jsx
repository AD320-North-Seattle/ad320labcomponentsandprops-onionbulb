import Ingredient from './Ingredient.jsx'
import Instruction from './Instructions.jsx'
import optionalGlaze from './OptionalGlaze.jsx'
import getImage from './Image.jsx'

/**
 * Creates a recipe
 * @param {array} recipe - A single recipe
 * @returns div of a recipe and its sections
 */
function Recipe({recipe}) {
    const optionalGlazeDiv = optionalGlaze({recipe})
    const imgSrc = getImage({recipe})
    return (
        <>  
            <div className={recipe.name}>
                <h1>{recipe.name}</h1>
                {imgSrc}

                <div className="Ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map(ingredient => <Ingredient key={recipe.name + " " + ingredient} ingredient={ingredient} />)}
                    </ul>

                </div>

                <div className={"Instructions"}>
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.instructions.map(instruction => <Instruction key={instruction} instruction={instruction} />)}  
                    </ol>
                </div>

                {optionalGlazeDiv}

            </div>
            <hr/>
        </>
    )
}

export default Recipe
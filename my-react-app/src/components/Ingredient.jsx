/**
 * Creates an ingredient
 * @param {string} - String to be used as text
 * @returns a bullet point of the ingredient
 */
function Ingredient({ingredient}) {
    return (
        <>
            <li>{ingredient}</li>
        </>
    )
}

export default Ingredient
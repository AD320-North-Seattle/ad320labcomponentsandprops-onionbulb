function Recipe(props) {
    return (
        <>
            <div>
                <p><strong>RECIPE: </strong>{props.recipe.name}</p>
                <p><strong>INGREDIENTS: </strong>{props.recipe.ingredients}</p>
                <p><strong>OPTIONAL GLAZE: </strong>{props.recipe.optionalglaze}</p>
                <p><strong>INSTRUCTIONS: </strong>{props.recipe.instructions}</p>
            </div>
            <hr/>
        </>
    )
}

export default Recipe
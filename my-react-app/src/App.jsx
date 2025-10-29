import './App.css'

import { recipes } from './data.js'
import RecipeContainer from './components/RecipeContainer.jsx'

function App() {

  return (
    <>
      <h1>Ix's Autumn Recipes</h1>
      <RecipeContainer recipes={recipes}/>
    </>
  )
}

export default App

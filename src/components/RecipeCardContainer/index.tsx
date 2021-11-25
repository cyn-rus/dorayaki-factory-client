import RecipeCard from './RecipeCard'
import type { RecipeType } from '../../types'

interface Props {
  recipes: RecipeType[]
}

const RecipeCardContainer = ({recipes}: Props) => {
  return (
    <div className='card-container card-container-recipe'>
      {recipes.map((recipe, idx: number) => 
        <RecipeCard recipe={recipe} key={idx} />
      )}
    </div>
  )
}

export default RecipeCardContainer
import type { RecipeType } from '../../../types'

interface Props {
  recipe: RecipeType
}

const RecipeCard = ({recipe}: Props) => {
  return (
    <div className='card-recipe'>
      <div className='recipe-materials'>
        <p>{recipe.nama_bahan}</p>
      </div>
      <div className='stock-recipe'>
        <p>{recipe.jumlah}</p>
      </div>
    </div>
  )
}

export default RecipeCard
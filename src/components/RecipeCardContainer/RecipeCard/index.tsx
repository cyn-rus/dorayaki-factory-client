import type { RecipeType } from '../../../types'

interface Props {
  recipe: RecipeType
}

const RecipeCard = ({recipe}: Props) => {
  return (
    <div className='card card-recipe'>
      <h3 className='title recipe-materials'>Recipe: {recipe.nama_bahan}</h3>
    </div>
  )
}

export default RecipeCard
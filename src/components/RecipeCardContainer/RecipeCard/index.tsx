import { capitalize } from '../../../helper'
import type { RecipeType } from '../../../types'

interface Props {
  recipe: RecipeType
}

const RecipeCard = ({recipe}: Props) => {
  return (
    <div className='card card-recipe'>
      <h2 className='title'>{capitalize(recipe.nama_resep)}</h2>
      <div className='col align-center materials-name'>
        <h2 className='title mt-1'>Materials</h2>
        {recipe.data_bahan.map((material, idx: number) =>
          <h3 key={idx}>{material.jumlah} {capitalize(material.nama_bahan)}</h3>
        )}
      </div>
    </div>
  )
}

export default RecipeCard
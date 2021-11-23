import MaterialCard from './MaterialCard'
import type { MaterialType } from '../../types'

interface Props {
  materials: MaterialType[]
  onEdit: Function
}

const MaterialCardContainer = ({materials, onEdit}: Props) => {
  return (
    <div className='card-container card-container-material'>
      {materials.map((material, idx: number) =>
        <MaterialCard material={material} onEdit={onEdit} key={idx} />
      )}
    </div>
  )
}

export default MaterialCardContainer
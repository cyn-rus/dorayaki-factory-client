import MaterialCard from './MaterialCard'
import type { MaterialType } from '../../types'

interface Props {
  materials: MaterialType[]
}

const MaterialCardContainer = ({materials}: Props) => {
  return (
    <div className='card-container-material'>
      {materials.map((material, idx: number) =>
        <MaterialCard material={material} key={idx} />
      )}
    </div>
  )
}

export default MaterialCardContainer
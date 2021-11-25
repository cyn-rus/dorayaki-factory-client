import type { MaterialType } from '../../../types'
import { capitalize } from '../../../helper'

interface Props {
  material: MaterialType
  onEdit: Function
}

const MaterialCard = ({material, onEdit}: Props) => {
  return (
    <div className='card card-material'>
      <h2 className='title'>{capitalize(material.nama_bahan)}</h2>
      <div className='material-stock'>
        <h3>Current Stock</h3>
        <h3 className=''>{material.stok}</h3>
      </div>
      <div className='edit-material'>
        <button className='button-edit-material' onClick={() => onEdit(material)}>Edit Stock</button>
      </div>
    </div>
  )
}

export default MaterialCard
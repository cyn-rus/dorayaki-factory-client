import type { MaterialType } from '../../../types'

interface Props {
  material: MaterialType
  onEdit: Function
}

const MaterialCard = ({material, onEdit}: Props) => {
  return (
    <div className='card-material'>
      <div className='material-name'>
        <p>{material.nama_bahan}</p>
      </div>
      <div className='stock-material-original'>
        <p>{material.stok}</p>
      </div>
      <div className='edit-material'>
        <button className='button-edit-material' onClick={() => onEdit(material)}>Edit</button>
      </div>
    </div>
  )
}

export default MaterialCard
import { useCallback, useState } from 'react'
import { axios } from '../../api'
import type { MaterialType } from '../../types'

interface Props {
  material?: MaterialType
}

const EditMaterialModal = ({material}: Props) => {
  const [originalStock, setOriginalStock] = useState(material!.stok)
  const [currStock, setCurrStock] = useState(material!.stok)

  const changeStock = useCallback(async () => {
    try {
      const res = await axios.post('/', {
        nama_bahan: material!.nama_bahan,
        jumlah: currStock
      })

      setOriginalStock(currStock)

    } catch (err) {
      console.log(err)
    }
  }, [])

  function reduceStock() {
    setCurrStock(currStock-1)
  }

  function addStock() {
    setCurrStock(currStock+1)
  }
  
  return (
    <div className='edit-modal-material'>
      <h1 className='modal-title'>Edit Material</h1>
      <div className='material-detail'>
        <h2 className='material-name'>Name: {material!.nama_bahan}</h2>
        <h2 className='curr-stock'>Stock{originalStock}</h2>
      </div>
      <div className='material-change-stock'>
        <h2 className='change-stock-title'>Change Stock</h2>
        <button className='reduce-button' onClick={reduceStock}>-</button>
        <h3 className='current-stock'>{currStock}</h3>
        <button className='add-button' onClick={addStock}>+</button>
      </div>
      <div className='submit-button' onClick={changeStock}>Edit</div>
    </div>
  )
}

export default EditMaterialModal
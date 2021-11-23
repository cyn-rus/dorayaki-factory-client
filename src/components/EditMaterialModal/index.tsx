import { useCallback, useState } from 'react'
import { axios } from '../../api'
import type { MaterialType } from '../../types'

interface Props {
  material?: MaterialType
  closeModal: Function
}

const EditMaterialModal = ({material, closeModal}: Props) => {
  const [currStock, setCurrStock] = useState(material ? material.stok : 0)

  const changeStock = useCallback(async () => {
    // try {
    //   const res = await axios.post('/', {
    //     nama_bahan: material!.nama_bahan,
        // jumlah: currStock
        closeModal()
    //   })

    //   setOriginalStock(currStock)

    // } catch (err) {
    //   console.log(err)
    // }
  }, [])

  function reduceStock() {
    if (currStock > 0) setCurrStock(currStock-1)
  }

  function addStock() {
    setCurrStock(currStock+1)
  }
  
  return (
    <>
    {material && 
      <div className='edit-modal'>
        <h1 className='modal-title'>Edit Material</h1>
        <div className='material-detail'>
          <h1>Material Name: {material!.nama_bahan}</h1>
          <h1>Stock: {material!.stok}</h1>
        </div>
        <div className='col align-center'>
          <h2 className='change-stock-title'>Change Stock</h2>
          <div className='row mt-2 modal-buttons'>
            <button onClick={reduceStock}>-</button>
            <h2 className='current-stock'>{currStock}</h2>
            <button onClick={addStock}>+</button>
          </div>
        </div>
        <div className='row'>
          <button className='submit-button mt-2' onClick={changeStock}>Edit</button>
          <button className='submit-button mt-2 ml-2' onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    }
    </>
  )
}

export default EditMaterialModal
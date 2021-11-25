import { useCallback, useState } from 'react'
import { axios } from '../../api'
import type { MaterialType } from '../../types'
import { capitalize } from '../../helper'

interface Props {
  material?: MaterialType
  closeModal: Function
}

const EditMaterialModal = ({material, closeModal}: Props) => {
  const [currStock, setCurrStock] = useState(material ? material.stok : 0)
  const [isEditInvalid, setIsEditInvalid] = useState(false)

  const changeStock = useCallback(async () => {
    try {
      const res = await axios.post('/editBahanBaku', {
        new_nama_bahan: material!.nama_bahan,
        new_stok: currStock,
        nama_bahan: material!.nama_bahan,
      })

      if (res) {
        closeModal()
      } else {
        setIsEditInvalid(true)
      }

    } catch (_) {
      setIsEditInvalid(true)
    }
  }, [currStock])

  function reduceStock() {
    if (currStock > 0) setCurrStock(currStock-1)
    setIsEditInvalid(false)
  }

  function addStock() {
    setCurrStock(currStock+1)
    setIsEditInvalid(false)
  }

  return (
    <>
    {material && 
      <div className='edit-modal'>
        <h1 className='modal-title'>Edit Material</h1>
        <div className='material-detail'>
          <h1>Material Name: {capitalize(material.nama_bahan)}</h1>
          <h1>Stock: {material.stok}</h1>
        </div>
        <div className='col align-center'>
          <h2 className='change-stock-title'>Change Stock</h2>
          <div className='row mt-2 modal-buttons'>
            <button onClick={reduceStock}>-</button>
            <h2 className='current-stock'>{currStock}</h2>
            <button onClick={addStock}>+</button>
          </div>
        </div>
        <p 
          className='error-message'
          style={isEditInvalid ? {opacity: '1'} : {opacity: '0'}}
        >
          Error on editing stock
        </p>
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
import { useState, useCallback } from 'react'
import { axios } from '../../../api'
import type { MaterialType } from '../../../types'

interface Props {
  material: MaterialType
}

const MaterialCard = ({material}: Props) => {
  const [originalStock, setOriginalStock] = useState(material.stok)
  const [currStock, setCurrStock] = useState(material.stok)

  const changeStock = useCallback(async () => {
    try {
      const res = await axios.post('/', {
        nama_bahan: material.nama_bahan,
        jumlah: material.stok
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
    <div className='card-material'>
      <div className='material-name'>
        <p>{material.nama_bahan}</p>
      </div>
      <div className='stock-material-original'>
        <p>{originalStock}</p>
      </div>
      <div className='material-change-stock'>
        <button className='button-reduce' onClick={reduceStock}>-</button>
        <p className='stock-material-current'>{currStock}</p>
        <button className='button-add' onClick={addStock}>+</button>
      </div>
    </div>
  )
}

export default MaterialCard
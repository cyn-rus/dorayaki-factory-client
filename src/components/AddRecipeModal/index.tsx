import { useState, useMemo } from 'react'
import type { RecipeType, MaterialType, IDataBahan, INamaBahan } from '../../types'
import { axios } from '../../api'
import { capitalize } from '../../helper'

interface Props {
  materialsName: INamaBahan[]
  closeModal: Function
}

const AddRecipeModal = ({materialsName, closeModal} : Props) => {
  const [recipeName, setRecipeName] = useState('')
  const [isRecipeTouched, setIsRecipeTouched] = useState(false)
  const [errorMaterial, setErrorMaterial] = useState(false)
  const materials = materialsName.map((nama_bahan) => ({...nama_bahan, jumlah: 0}))

  if (errorMaterial) console.log(materials)

  async function submitAdd() {
    if (!materials.some(material => material.jumlah > 0)) setErrorMaterial(true)
    else if (!errorMaterial) {
      try {
        materials.map(async (material) => {
          if (material.jumlah > 0) {
            await axios.post('/addResep', {
              nama_resep: recipeName,
              nama_bahan: material.nama_bahan,
              jumlah: material.jumlah
            })
          }
          
          if (material.nama_bahan === materialsName[materialsName.length-1].nama_bahan) {
            closeModal()
          }
        })
      } catch (err) {
        console.log(err)
        setErrorMaterial(true)
      }
    }
  }

  function onTouchName() {
    if (recipeName) setIsRecipeTouched(false)
    else setIsRecipeTouched(true)
  }

  function onChangeName(name: string) {
    setRecipeName(name)
    if (!name) setIsRecipeTouched(true)
    else setIsRecipeTouched(false)
  }

  function onChangeMaterial(materialName: string, stock: string) {
    console.log(stock)
    const stockInt = parseInt(stock)

    if (stockInt > 0) {
      console.log('meong')
      const i = materials.findIndex((material) => material.nama_bahan === materialName)
      materials[i].jumlah = stockInt
    } else if (stock === '') {
      setErrorMaterial(false)
    } else if (stockInt < 0 || stockInt !== parseInt(stock)) {
      console.log('he')
      setErrorMaterial(true)
    } 
  }

  return (
    <div className='add-modal'>
      <h1 className='modal-title'>Add Recipe</h1>
      <div className='form-container'>
        <div className='forms'>
          <div className='form-field'>
            <label htmlFor="nama_bahan">Recipe Name</label>
            <div className='input-form'>
              <p className='error-message'>{isRecipeTouched ? 'Recipe name is required' : '*'}</p>
              <input
                onClick={onTouchName}
                onChange={(e) => onChangeName(e.target.value)}
                name='nama_bahan'
                placeholder='Recipe Name'
              />
            </div>
          </div>

          {materials.map((material, idx: number) =>
            <div className='form-field' key={idx}>
              <label htmlFor={material.nama_bahan}>Stock for {capitalize(material.nama_bahan)}</label>
              <div className='input-form'>
                <input
                  type='text'
                  placeholder={`Stock for ${material.nama_bahan}`}
                  onChange={(e) => onChangeMaterial(material.nama_bahan, e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
        <p
          className='error-message'
          style={errorMaterial ? {opacity: '1'} : {opacity: '0'}}
        >
          Materials needed must be more than zero or and error occured when trying to add a new recipe
        </p>
        <div className='row m-1'>
          <button className='submit-button' type='submit' onClick={submitAdd}>Add</button>
          <button className='submit-button ml-2' onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddRecipeModal
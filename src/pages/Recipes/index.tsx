import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'
import { Template, RecipeCardContainer, AddRecipeModal } from '../../components'
import { axios } from '../../api'
import { IsAuth } from '../../helper'

const Recipes = () => {
  const history = useHistory()
  const auth = IsAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipes, setRecipes] = useState([{
    nama_bahan: 'tes',
    jumlah: 2,
  }, {
    nama_bahan: 'tes',
    jumlah: 2,
  }, {
    nama_bahan: 'tes',
    jumlah: 2,
  }, {
    nama_bahan: 'tes',
    jumlah: 2,
  }, {
    nama_bahan: 'tes',
    jumlah: 2,
  }])
  const [materials, setMaterials] = useState([{
    nama_bahan: 'tes',
    stok: 5
  }, {
    nama_bahan: 'tes',
    stok: 5,
  }, {
    nama_bahan: 'tes',
    stok: 5,
  }, {
    nama_bahan: 'tes',
    stok: 5
  }, {
    nama_bahan: 'tes',
    stok: 5
  }])

  document.title = 'Recipes | Mahi mahi'

  // useEffect(() => {
  //   axios.get('/materials')
  //     .then(function (res) {
  //       setMaterials(res.data)
  //     })
  // }, [])
  
  // useEffect(() => {
  //   axios.get('/recipes')
  //     .then(function (res) {
  //       setRecipes(res.data)
  //     })
  // }, [isModalOpen])

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      {!auth && history.push('/login')}
      <Template>
        <div>
          <div className='col align-center'>
            <h1>Recipes</h1>
            <h3 className='add-button mt-1' onClick={openModal}>Add Recipe</h3>
          </div>
          <div className='line'>-</div>
          <RecipeCardContainer recipes={recipes} />
        </div>

        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
        >
          <AddRecipeModal materials={materials} closeModal={closeModal} />
        </Modal>
      </Template>
    </>
  )
}

export default Recipes
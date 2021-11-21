import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Template, RecipeCardContainer, AddRecipeModal } from '../../components'
import { axios } from '../../api'

const Recipes = () => {
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
  const [materials, setMaterials] = useState([])

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
    <Template>
      <div className='recipe-page'>
        <div className='m-2 mb-0 col align-center'>
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
        {/* <AddRecipeModal materials={materials} /> */}
        <button className='close-modal' onClick={closeModal}>Close</button>
      </Modal>
    </Template>
  )
}

export default Recipes
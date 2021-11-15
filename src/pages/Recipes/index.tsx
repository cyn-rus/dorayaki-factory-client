import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Template, RecipeCardContainer, AddRecipeModal } from '../../components'
import { axios } from '../../api'

const Recipes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    axios.get('/materials')
      .then(function (res) {
        setMaterials(res.data)
      })
  }, [])
  
  useEffect(() => {
    axios.get('/recipes')
      .then(function (res) {
        setRecipes(res.data)
      })
  }, [isModalOpen])

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <Template>
      <div className='recipe-page'>
        <div className='recipe-title'>
          <h1>Recipes</h1>
          <h2 className='add-recipe' onClick={openModal}>Add Recipe</h2>
        </div>
        <RecipeCardContainer recipes={recipes} />
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
      >
        <AddRecipeModal materials={materials} />
        <button className='close-modal' onClick={closeModal}>Close</button>
      </Modal>
    </Template>
  )
}

export default Recipes
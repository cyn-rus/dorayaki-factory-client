import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import { Template, RecipeCardContainer, AddRecipeModal } from '../../components'
import { axios } from '../../api'
import { IsAuth } from '../../helper'
import { INamaBahan } from '../../types'

const Recipes = () => {
  const auth = IsAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [materials, setMaterials] = useState([])

  document.title = 'Recipes | Mahi mahi'

  useEffect(() => {
    axios.get('/getAllBahanBakuNames')
      .then(function (res) {
        setMaterials(res.data)
      })
  }, [])
  
  useEffect(() => {
    axios.get('/getAllResep')
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
    <>
      {!auth && auth !== undefined && <Redirect to='/login' />}
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
          <AddRecipeModal materialsName={materials} closeModal={closeModal} />
        </Modal>
      </Template>
    </>
  )
}

export default Recipes
import { useState, useEffect } from 'react'
import Modal  from 'react-modal'
import { Template, MaterialCardContainer, AddMaterialModal } from '../../components'
import { axios } from '../../api'

const Materials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    axios.get('/materials')
      .then(function (res) {
        setMaterials(res.data)
      })
  }, [isModalOpen])

  function closeModal() {
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <Template>
      <div className='material-page'>
        <div className='material-title'>
          <h1>Materials</h1>
          <h2 className='add-material' onClick={openModal}>Add Material</h2>
        </div>

      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
      >
        <AddMaterialModal />
        <button className='close-modal' onClick={closeModal}>Close</button>
      </Modal>
      </div>
    </Template>
  )

}

export default Materials
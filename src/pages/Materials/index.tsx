import { useState, useEffect } from 'react'
import Modal  from 'react-modal'
import { Template, MaterialCardContainer, AddMaterialModal, EditMaterialModal } from '../../components'
import { axios } from '../../api'
import { MaterialType } from '../../types'

const Materials = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [materials, setMaterials] = useState([])
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [editMaterial, setEditMaterial] = useState<MaterialType>()

  useEffect(() => {
    axios.get('/materials')
      .then(function (res) {
        setMaterials(res.data)
      })
  }, [isAddModalOpen, isEditModalOpen])

  function closeModal() {
    setIsAddModalOpen(false)
  }

  function openModal() {
    setIsAddModalOpen(true)
  }

  function openEdit(material: MaterialType) {
    setEditModalOpen(true)
    setEditMaterial(material)
  }

  function closeEdit() {
    setEditModalOpen(false)
    setEditMaterial(undefined)
  }

  return (
    <Template>
      <div className='material-page'>
        <div className='material-title'>
          <h1>Materials</h1>
          <h2 className='add-material' onClick={openModal}>Add Material</h2>
        </div>
        <MaterialCardContainer materials={materials} onEdit={openEdit} />
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isAddModalOpen}
      >
        <AddMaterialModal />
        <button className='close-modal' onClick={closeModal}>Close</button>
      </Modal>

      <Modal
        ariaHideApp={false}
        isOpen={isEditModalOpen}
      >
        <EditMaterialModal material={editMaterial} />
        <button className='clode-modal' onClick={closeEdit}>Close</button>
      </Modal>

    </Template>
  )

}

export default Materials
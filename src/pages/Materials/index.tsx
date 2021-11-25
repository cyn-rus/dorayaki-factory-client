import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-modal'
import { Template, MaterialCardContainer, AddMaterialModal, EditMaterialModal } from '../../components'
import { axios } from '../../api'
import { MaterialType } from '../../types'
import { IsAuth } from '../../helper'

const Materials = () => {
  const auth = IsAuth()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [materials, setMaterials] = useState([])
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [editMaterial, setEditMaterial] = useState<MaterialType>()

  document.title = 'Materials | Mahi mahi'  

  useEffect(() => {
    axios.get('/getAllBahanBaku')
      .then(function (res) {
        setMaterials(res.data)
      })
  }, [isAddModalOpen, isEditModalOpen, auth])

  function closeAdd() {
    setIsAddModalOpen(false)
  }

  function openAdd() {
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
    <>
      {!auth && auth !== undefined && <Redirect to='/login' />}
      <Template>
        <div>
          <div className='col align-center'>
            <h1>Materials</h1>
            <h3 className='add-button mt-1' onClick={openAdd}>Add Material</h3>
          </div>
          <div className='line'>-</div>
          <MaterialCardContainer materials={materials} onEdit={openEdit} />
        </div>

        <Modal
          ariaHideApp={false}
          isOpen={isAddModalOpen}
        >
          <AddMaterialModal closeModal={closeAdd} />
        </Modal>

        <Modal
          ariaHideApp={false}
          isOpen={isEditModalOpen}
        >
          <EditMaterialModal material={editMaterial} closeModal={closeEdit} />
        </Modal>

      </Template>
    </>
  )
}

export default Materials
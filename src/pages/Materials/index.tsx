import { useState, useEffect } from 'react'
import Modal  from 'react-modal'
import { Template, MaterialCardContainer, AddMaterialModal, EditMaterialModal } from '../../components'
import { axios } from '../../api'
import { MaterialType } from '../../types'

const Materials = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
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
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [editMaterial, setEditMaterial] = useState<MaterialType>()

  document.title = 'Materials | Mahi mahi'  

  // useEffect(() => {
  //   axios.get('/materials')
  //     .then(function (res) {
  //       setMaterials(res.data)
  //     })
  // }, [isAddModalOpen, isEditModalOpen])

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
    <Template>
      <div className='mt-1'>
        <div className='m-2 mb-0 col align-center'>
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
  )

}

export default Materials
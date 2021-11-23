import { useMemo } from 'react'
import { Formik, Field, Form, FormikProps, FormikValues } from 'formik'
import { object, string, number } from 'yup'
import type { RecipeType, MaterialType } from '../../types'
import { axios } from '../../api'

interface Props {
  materials: MaterialType[]
  closeModal: Function
}

const initialValues = {
  nama_bahan: '',
  jumlah: 0
}

const validationSchema = object().shape({
  name: string().required('Recipe name is required'),
  stock: number().integer().min(0)
})

const AddRecipeModal = ({materials, closeModal} : Props) => {
  const materialsName = useMemo(() => {
    const tes = materials.map((material) => {
      const obj: any = new Object()
      obj.nama = material.nama_bahan
      obj.stok = 0
      // return material.nama_bahan
    })

  }, [])

  async function submitAdd({nama_bahan, jumlah}: RecipeType) {
    try {
      await axios.post('/recipe/add', {
        nama_bahan: nama_bahan,
        jumlah: jumlah,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add-modal'>
      <h1 className='modal-title'>Add Recipe</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitAdd(values)}
        validationSchema={validationSchema}
      >
        {({ errors }: FormikProps<FormikValues>) => (
          <Form className='form-container'>
            <div className='forms'>
              <div className='form-field'>
                <label htmlFor="nama_bahan">Recipe Name</label>
                <div className='input-form'>
                  <p className='error-message'>{errors.nama_bahan || '*'}</p>
                  <Field name='nama_bahan' placeholder='Recipe Name' />
                </div>
              </div>

              <div className='form-field'>
                <label htmlFor="stock">Stock</label>
                <div className='input-form'>
                  <p className='error-message'>{errors.stock && 'Stock Invalid' || '*'}</p>
                  <Field name='stock' placeholder='Stock' />
                </div>
              </div>
            </div>  
            <div className='row'>
              <button className='submit-button' type='submit'>Add</button>
              <button className='submit-button ml-2' onClick={() => closeModal()}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
      

    </div>
  )
}

export default AddRecipeModal
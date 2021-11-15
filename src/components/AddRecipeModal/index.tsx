import { Formik, Field, Form, FormikProps, FormikValues } from 'formik'
import { object, string, number } from 'yup'
import type { RecipeType, MaterialType } from '../../types'
import { axios } from '../../api'
import { useMemo } from 'react'

interface Props {
  materials: MaterialType[]
}

const initialValues = {
  nama_bahan: '',
  jumlah: 0
}

const validationSchema = object().shape({
  name: string().required('Recipe name is required'),
  stock: number().integer().min(0)
})

const AddRecipeModal = ({materials} : Props) => {
  const totalMaterial = useMemo(() => {
    const obj = new Object()
    // materials.map(())
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
    <div className='add-modal-recipe'>
      <h1 className='modal-title'>Add Recipe</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitAdd(values)}
        validationSchema={validationSchema}
      >
        {({ errors }: FormikProps<FormikValues>) => (
          <Form>
            <label htmlFor="nama_bahan">Recipe Name</label>
            <div className='error-message'>
              <p>{errors.nama_bahan || '*'}</p>
            </div>
            <Field name='nama_bahan' placeholder='Recipe Name' />

            <label htmlFor="stock">Stock</label>
            <div className='error-message'>
              <p>{errors.stock && 'Stock Invalid' || '*'}</p>
            </div>
            <Field name='stock' placeholder='Stock' />
          </Form>
        )}
      </Formik>
      

    </div>
  )
}

export default AddRecipeModal
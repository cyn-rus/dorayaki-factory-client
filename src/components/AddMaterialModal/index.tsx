import { Formik, Field, Form, FormikProps, FormikValues } from 'formik'
import { object, string, number } from 'yup'
import type { MaterialType } from '../../types'
import { axios } from '../../api'

const initialValues = {
  nama_bahan: '',
  stok: 0
}

const validationSchema = object().shape({
  name: string().required('Material name is required'),
  stock: number().integer().min(0)
})

const AddMaterialModal = () => {
  async function submitAdd({nama_bahan, stok}: MaterialType) {
    try {
      await axios.post('/material/add', {
        nama_bahan: nama_bahan,
        stok: stok,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='add-modal-material'>
      <h1 className='modal-title'>Add Material</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitAdd(values)}
        validationSchema={validationSchema}
      >
        {({ errors }: FormikProps<FormikValues>) => (
          <Form>
            <label htmlFor="nama_bahan">Material Name</label>
            <div className='error-message'>
              <p>{errors.nama_bahan || '*'}</p>
            </div>
            <Field name='nama_bahan' placeholder='Material Name' />

            <label htmlFor="stock">Stock</label>
            <div className='error-message'>
              <p>{errors.jumlah && 'Stok Invalid' || '*'}</p>
            </div>
            <Field name='stock' placeholder='Stock' />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddMaterialModal
import { Formik, Field, Form, FormikProps, FormikValues } from 'formik'
import { object, string, number } from 'yup'
import type { MaterialType } from '../../types'
import { axios } from '../../api'

interface Props {
  closeModal: Function
}

const initialValues = {
  nama_bahan: '',
  stok: 0
}

const validationSchema = object().shape({
  nama_bahan: string().required('Material name is required'),
  stok: number().integer().required('Stock is required')
})

const AddMaterialModal = ({closeModal}: Props) => {
  async function submitAdd({nama_bahan, stok}: MaterialType) {
    // try {
    //   await axios.post('/material/add', {
    //     nama_bahan: nama_bahan,
    //     stok: stok,
    //   })
        closeModal()
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <div className='add-modal'>
      <h1 className='modal-title'>Add Material</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitAdd(values)}
        validationSchema={validationSchema}
      >
        {({ errors }: FormikProps<FormikValues>) => (
          <Form className='form-container'>
            <div className='forms'>
              <div className='form-field'>
                <label htmlFor="nama_bahan">Material Name</label>
                <div className='input-form'>
                  <p className='error-message'>{errors.nama_bahan || '*'}</p>
                  <Field name='nama_bahan' placeholder='Material Name' />
                </div>
              </div>

              <div className='form-field'>
                <label htmlFor="stok">Stock</label>
                <div className='input-form'>
                  <p className='error-message'>{errors.stok && 'Stock Invalid' || '*'}</p>
                  <Field name='stok' placeholder='Stock' />
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

export default AddMaterialModal
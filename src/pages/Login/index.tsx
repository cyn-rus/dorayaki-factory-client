import { useHistory } from "react-router-dom"
import { Formik, Field, Form, FormikProps, FormikValues } from "formik"
import { object, string } from 'yup'
import { axios } from "../../api"
import { LogFormType } from '../../types'
import { isAuth } from '../../helper'

interface LoginType {
  username: string
  password: string
}

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = object().shape({
  username: string().required('Username is required'),
  password: string().required('Password is required')
})

const Login = () => {
  const history = useHistory()
  const auth = isAuth()
  const forms: LogFormType[] = [{
    type: 'username',
    placeholder: 'Username',
  }, {
    type: 'password',
    placeholder: 'Password'
  }]

  document.title = 'Login | Mahi mahi'
  
  async function submitLogin({username, password}: LoginType) {
    try {
      const res = await axios.post('/login', {
        username: username,
        password: password,
      })

      console.log(res)

      history.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {auth && history.push('/recipes')}
      <div className='col align-center'>
        <h1 className='mt-5'>
          Log In Factory
        </h1>
        <div className='mt-2 col align-center'>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => submitLogin(values)}
            validationSchema={validationSchema}
          >
            {({ errors }: FormikProps<FormikValues>) => (
              <Form className='form-container'>
                <div className='forms'>
                  {forms.map((form, i: number) =>
                    <div className='form-field' key={i}>
                      <label htmlFor={form.type}>{form.placeholder}</label>
                      <div className='input-form'>
                        <p className='error-message'>{errors[form.type] || '*'}</p>
                        <Field name={form.type} type={form.type} placeholder={form.placeholder} />
                      </div>
                    </div>
                  )}
                </div>
                <button className='submit-button mt-2' type='submit'>Log In</button>
              </Form>
            )}
          </Formik>
          <a className='mt-2 font-medium' href='/register'>Create Account</a>
        </div>
      </div>
    </>
  )
}

export default Login
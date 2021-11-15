import { useHistory } from "react-router-dom"
import { Formik, Field, Form, FormikProps, FormikValues } from "formik"
import { object, string } from 'yup'
import { axios } from "../../api"
import { Template } from "../../components"

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
    <Template>
      <div className='login-page'>
        <div className='login-container'>
          <div className='login-title'>
            Log In Factory
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => submitLogin(values)}
            validationSchema={validationSchema}
          >
            {({ errors }: FormikProps<FormikValues>) => (
              <Form>
                <label htmlFor="username">Username</label>
                <div className='error-message'>
                  <p>{errors.username || '*'}</p>
                </div>
                <Field name='username' placeholder='Username' />

                <label htmlFor="password">Password</label>
                <div className='error-message'>
                  <p>{errors.password || '*'}</p>
                </div>
                <Field name='password' type='password' placeholder='Password'></Field>

                <button type='submit'>Log In</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Template>
  )
}

export default Login
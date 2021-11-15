import { useState } from 'react'
import { useHistory } from "react-router"
import { Formik, Field, Form, FormikProps, FormikValues } from "formik"
import { object, string, ref } from 'yup'
import axios from '../../api/axios'
import { Template } from "../../components"

interface RegisterType {
  email: string
  username: string
  password: string
}

const initialValues = {
  email: '',
  username: '',
  password: '',
  confPassword: '',
}

const validationSchema = object().shape({
  email: string()
    .required('Email is required')
    .email('Invalid email address'),
  username: string()
    .required('Username is required')
    .matches(
      /^[a-z0-9_\.]+$/,
      'Invalid Username'  
    ),
  password: string()
    .required("Password is required")
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confPassword: string()
    .required("Confirmation Password is required")
    .when("password", {
        is: (password: string) => (password && password.length > 0 ? true : false),
        then: string().oneOf([ref("password")], "Password and Confirmation Password don't match")
    })
})

const Register = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
  const history = useHistory()

  async function submitRegister ({email, username, password}: RegisterType) {
    try {
      const res = await axios.post('/register', {
        email: email,
        username: username,
        password: password,
      })

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Template>
      <div className='register-page'>
        <div className='register-container'>
          <div className='register-title'>
            Register Account for Factory
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => submitRegister(values)}
            validationSchema={validationSchema}
          >
            {({ errors }: FormikProps<FormikValues>) => (
              <Form>
                <label htmlFor="email">Email</label>
                <div className='error-message'>
                  <p>{errors.email || '*'}</p>
                </div>
                <Field name='email' placeholder='Email' />

                <label htmlFor="username">Username</label>
                <div className='error-message'>
                  <p>{errors.username || '*'}</p>
                </div>
                <Field name='username' placeholder='Username' />

                <label htmlFor="password">Password</label>
                <div className='error-message'>
                  <p>{errors.password || '*'}</p>
                </div>
                <Field name='password' placeholder='Password' type='password' />

                <label htmlFor="confPassword">Confirmation Password</label>
                <div className='error-message'>
                  <p>{errors.confPassword || '*'}</p>
                </div>
                <Field name='confPassword' placeholder='Confirmation Password' type='password' />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Template>
  )
}

export default Register
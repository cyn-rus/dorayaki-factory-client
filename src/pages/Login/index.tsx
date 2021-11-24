import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Formik, Field, Form, FormikProps, FormikValues } from "formik"
import { object, string } from 'yup'
import axios from 'axios'
import useContext from '../../context'
import { LogFormType } from '../../types'
import { IsAuth } from '../../helper'

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
  const [isLoginInvalid, setIsLoginInvalid] = useState(false)
  const { setData } = useContext()
  const history = useHistory()
  const auth = IsAuth()
  const forms: LogFormType[] = [{
    type: 'username',
    placeholder: 'Username',
  }, {
    type: 'password',
    placeholder: 'Password'
  }]

  document.title = 'Login | Mahi mahi'
  
  async function submitLogin({username, password}: LoginType, resetForm: Function) {
    try {
      const res = await axios.post('http://localhost:8005/login', {
        username: username,
        password: password,
      })
      
      if (res.data.length !== 0) {
        setData(res.data[0])
        history.push('/recipes')
      } else {
        resetForm()
        setIsLoginInvalid(true)
      }
    } catch (err) {
        setIsLoginInvalid(true)
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
            onSubmit={(values, { resetForm }) => submitLogin(values, resetForm)}
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
                        <Field 
                          name={form.type}
                          type={form.type}
                          placeholder={form.placeholder}
                          onBlur={() => setIsLoginInvalid(false)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p
                  className='error-message'
                  style={isLoginInvalid ? {opacity: '1'} : {opacity: '0'}}
                >
                  Login Invalid
                </p>
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
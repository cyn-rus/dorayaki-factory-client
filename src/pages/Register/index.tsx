import { useState } from 'react'
import { Redirect, useHistory } from "react-router-dom"
import { Formik, Field, Form, FormikProps, FormikValues } from "formik"
import { object, string, ref } from 'yup'
import axios from '../../api/axios'
import { LogFormType } from '../../types'
import { IsAuth } from '../../helper'

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
        'Invalid Password'
    ),
  confPassword: string()
    .required("Confirmation Password is required")
    .when("password", {
        is: (password: string) => (password && password.length > 0 ? true : false),
        then: string().oneOf([ref("password")], "Password and Confirmation Password don't match")
    })
})

const Register = () => {
  const auth = IsAuth()
  const [isRegisterInvalid, setIsRegisterInvalid] = useState(false)
  const history = useHistory()
  const forms: LogFormType[] = [{
    type: 'email',
    placeholder: 'Email',
  }, {
    type: 'username',
    placeholder: 'Username',
  }, {
    type: 'password',
    placeholder: 'Password',
  }, {
    type: 'confPassword',
    placeholder: 'Confirmation Password',
  }]

  document.title = 'Register | Mahi mahi'

  async function submitRegister ({email, username, password}: RegisterType) {
    try {
      const res = await axios.post('/register', {
        email: email,
        username: username,
        password: password,
      })

      if (res) {
        history.push('/login')
      }
    } catch (err) {
      setIsRegisterInvalid(true)
    }
  }

  return (
    <>
      {auth && <Redirect to='/recipes' />} 
      <div className='col align-center'>
        <h1 className='mt-5'>
          Register Account Factory
        </h1>
        <div className='mt-2 col align-center'>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => submitRegister(values)}
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
                          type={form.type.toLowerCase().includes('password') ? 'password' : form.type}
                          placeholder={form.placeholder}
                          onBlur={() => setIsRegisterInvalid(false)}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p
                  className='error-message'
                  style={isRegisterInvalid ? {opacity: '1'} : {opacity: '0'}}
                >
                  Register Invalid
                </p>
                <button className='submit-button mt-2' type='submit'>Register</button>
              </Form>
            )}
          </Formik>
          <a className='mt-2 font-medium' href="/login">Have an Account?</a>
        </div>
      </div>
    </>
  )
}

export default Register
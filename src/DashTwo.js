import React from 'react'
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

import './DashTwo.css'

const CustomTextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
    <label htmlfor={props.id || props.name}>{label}</label>
    <input className='text-input' {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null }
    </>
  )
}

function DashTwo() {
  return (
    <div>
      <Formik
        initialValues= {{
          projectName: '',
          projectSummary: '',
          numUnits: '',
          techSummary: '',
          photos: [],
        }}
        validationSchema={Yup.object({
            projectName: Yup.string()
              .min(3, 'must be at least 3 characters')
              .max(25, 'Must be 25 characters or less')
              .required('Required'),
            projectSummary: Yup.string()
              .min(20, 'must be at least 20 characters')
              .max(200, 'Must be 200 characters or less')
              .required('Required'),
            numMin: Yup.number()
              .min(1, 'must be at least one unit')
              .max(100, 'must be under 100 units')
              .required('Required'),
            numMax: Yup.number()
              .min(1, 'must be at least one unit')
              .max(100, 'must be under 100 units')
              .required('Required'),
            techSummary: Yup.string()
              .min(20, 'must be at least 20 characters')
              .max(400, 'Must be 400 characters or less')
              .required('Required'),
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000)
        }}
      >
        {props => (
          <Form>
            <h1 className='Title_Frame'>`Welcome, $User. What are you making?`</h1>
            <CustomTextInput 
              className="Project__Name" 
              label ='PROJECT NAME*' 
              name='projectName' 
              type='text' 
              placeholder='GIVE IT A NAME...' />
            <></> 
            <CustomTextInput label='PROJECT SUMMARY*' name='projectSummary' type='text' placeholder='WHAT ARE YOU MAKING?' />
            <CustomTextInput label='TECHNICAL SUMMARY' name='techSummary' type='text' placeholder='ENTER DETAILS...' />
            <></>
            
            <button type="submit">{props.isSubmitting ? 'Loading...' : 'Save & Next'}</button>
          </Form>
        )}
    </Formik>
    </div>
  )
}

export default DashTwo

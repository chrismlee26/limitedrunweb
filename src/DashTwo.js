import React from 'react'
import { Formik, useField, Field, Form } from 'formik';
import * as Yup from 'yup';

import './DashTwo.css'
import { withRouter } from 'react-router';

const CustomTextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className='text-input' {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null }
    </>
  )
}

const CustomTextArea = ({ label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className='text-area' {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null }
    </>
  )
}

const CustomCheckbox = ({ children, ...props}) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
    <label className="checkbox"></label>
      <input type="checkbox" {...field} {...props} />
      {children}
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
          checkIndividual: false,
          checkTeam: false,
          checkCommercial: false,
          checkSample: false,
          checkLimited: false,
          checkPreProd: false,
          checkBlueprint: false,
          checkProto: false,
          checkTool: false,
          projectSummary: '',
          numUnits: 0,
          techSummary: '',
          photos: [],
        }}
        validationSchema={Yup.object({
            projectName: Yup.string()
              .min(3, 'Must be at least 3 characters')
              .max(25, 'Must be 25 characters or less')
              .required('Required'),
            checkIndividual: Yup.boolean(),
            checkTeam: Yup.boolean(),
            checkCommercial: Yup.boolean(),
            checkSample: Yup.boolean(),
            checkLimited: Yup.boolean(),
            checkPreProd: Yup.boolean(),
            checkProto: Yup.boolean(),
            checkTool: Yup.boolean(),
            projectSummary: Yup.string()
              .min(20, 'Must be at least 20 characters')
              .max(200, 'Must be 200 characters or less')
              .required('Required'),
            numMin: Yup.number()
              .min(1, 'Must be at least one unit')
              .max(100, 'Must be under 100 units')
              .required('Required'),
            numMax: Yup.number()
              .min(1, 'Must be at least one unit')
              .max(100, 'Must be under 100 units')
              .required('Required'),
            techSummary: Yup.string()
              .min(20, 'Must be at least 20 characters')
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
            <div className="project__name" >
              <CustomTextInput
                style={{ height: 40, width: 550 }}  
                label='PROJECT NAME *' 
                name='projectName' 
                type='text'
                autocomplete="off"
                placeholder='GIVE IT A NAME...' />
            </div>
            <div className="checkbox_left">
              <CustomCheckbox name="idk_yet">INDIVIDUAL</CustomCheckbox>
              <CustomCheckbox name="idk_yet">TEAM</CustomCheckbox>
              <CustomCheckbox name="idk_yet">COMPANY</CustomCheckbox>
            </div>
            <div className="checkbox_mid">
              <CustomCheckbox name="idk_yet">SAMPLE</CustomCheckbox>
              <CustomCheckbox name="idk_yet">LIMITED PRODUCT</CustomCheckbox>
              <CustomCheckbox name="idk_yet">PRE-PRODUCTION</CustomCheckbox>
            </div>
            <div className="checkbox_right">
              <CustomCheckbox name="idk_yet">BLUEPRINTS</CustomCheckbox>
              <CustomCheckbox name="idk_yet">PROTOTYPE</CustomCheckbox>
              <CustomCheckbox name="idk_yet">TOOLING</CustomCheckbox>
            </div>
            <div className="project__summary" >
              <CustomTextArea
                style={{ height: 120, width: 550 }}  
                label='PROJECT SUMMARY *' 
                name='projectSummary' 
                rows="4"
                autocomplete="off"
                placeholder='WHAT ARE YOU MAKING?' />
            </div>
            <div className="technical__summary" >
              <CustomTextArea 
                style={{ height: 550, width: 550 }} 
                label='TECHNICAL SUMMARY *'
                name='techSummary' 
                rows='10'
                autocomplete="off"
                placeholder='ENTER DETAILS...' />
            </div>
            <button type="submit">{props.isSubmitting ? 'Loading...' : 'Save & Next'}</button>
          </Form>
        )}
    </Formik>
    </div>
  )
}

export default DashTwo

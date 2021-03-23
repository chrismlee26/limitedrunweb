import React from 'react'
import { Formik, useField, Field, Form } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router';

import './DashOne.css'


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
    <textarea className='text-area' {...field} {...props} />
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

const CustomImage = ({ children, ...props}) => {
  const [field, meta] = useField(props, 'custom_image');
  return (
    <>
    <label className="custom_image"></label>
      <input type="file" {...field} {...props} />
      {children}
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null }
    </>
  )
}

function DashOne() {
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
            alert(JSON.stringify(values, null, 2));  // This isn't working yet, check
            resetForm();
            setSubmitting(false);
          }, 3000)
        }}
      >
        {props => (
          <Form>
            {/* Begin Column 1 */}
            <h1 className='Title_Frame'>`Welcome, $User. What are you making?`</h1>
            <h1 className='Fees_Frame'>`Discount: $x.x%`</h1>
            <div className="project__name" >
              <CustomTextInput
                style={{ height: 40, width: 500 }}  
                label='PROJECT NAME *' 
                name='projectName'
                id="project-name"
                type='text'
                autocomplete="off"
                placeholder='GIVE IT A NAME...' />
            </div>
            <div className="checkbox_left">
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> INDIVIDUAL</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> TEAM</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> COMPANY</span></CustomCheckbox>
            </div>
            <div className="checkbox_mid">
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> SAMPLE</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> LIMITED PRODUCT</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> PRE-PRODUCTION</span></CustomCheckbox>
            </div>
            <div className="checkbox_right">
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> BLUEPRINTS</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> PROTOTYPE</span></CustomCheckbox>
              <CustomCheckbox name="idk_yet"><span className='checkbox_active'> TOOLING</span></CustomCheckbox>
            </div>
            <div className="project__summary" >
              <CustomTextArea
                style={{ height: 120, width: 500 }}  
                label='PROJECT SUMMARY *'
                component='textarea'
                rows="1"
                name='projectSummary'
                type='textarea'
                autocomplete="off"
                placeholder='WHAT ARE YOU MAKING?' />
            </div>
            <div className="min_max_units">NUMBER OF UNITS*</div>
            <div className="min_units">
              <CustomTextInput
                style={{ height: 40, width: 100 }}  
                label='' 
                name='min_units' 
                type='text'
                autocomplete="off"
                placeholder='MIN...' />
            </div>
            <div className="max_units" >
              <CustomTextInput
                style={{ height: 40, width: 100 }}  
                label='' 
                name='max_units' 
                type='text'
                autocomplete="off"
                placeholder='MAX...' />
            </div>

            <div className="address">ADDRESS
              <CustomTextInput
                style={{ height: 40, width: 500 }}  
                label='' 
                name='contact-address' 
                type='text'
                autocomplete="off"
                placeholder='STREET' />
            </div>
            <div className="city">
              <CustomTextInput
                style={{ height: 40, width: 238 }}  
                label='' 
                name='contact-city' 
                type='text'
                autocomplete="off"
                placeholder='CITY' />
            </div>
            <div className="state">
              <CustomTextInput
                style={{ height: 40, width: 238 }}  
                label='' 
                name='contact-state' 
                type='text'
                autocomplete="off"
                placeholder='STATE' />
            </div>
            <div className="country">
              <CustomTextInput
                style={{ height: 40, width: 238 }}  
                label='' 
                name='contact-country' 
                type='text'
                autocomplete="off"
                placeholder='COUNTRY' />
            </div>
            <div className="zip">
              <CustomTextInput
                style={{ height: 40, width: 238 }}  
                label='' 
                name='contact-zip' 
                type='text'
                autocomplete="off"
                placeholder='ZIP' />
            </div>
            <div className="website">WEBSITE
              <CustomTextInput
                style={{ height: 40, width: 238 }}  
                label='' 
                name='contact-website' 
                type='text'
                autocomplete="off"
                placeholder='WEBSITE' />
            </div>
            <div className="phone-area">PHONE
              <CustomTextInput
                style={{ height: 40, width: 66 }}  
                label='' 
                name='contact-phone-area' 
                type='text'
                autocomplete="off"
                placeholder='AREA' />
            </div>
            <div className="phone-main">
              <CustomTextInput
                style={{ height: 40, width: 150 }}  
                label='' 
                name='contact-phone-number' 
                type='text'
                autocomplete="off"
                placeholder='PHONE' />
            </div>
            {/* Begin Column 2 */}
            <div className="technical__summary" >
              <CustomTextArea 
                style={{ height: 398, width: 500 }} 
                label='TECHNICAL SUMMARY *'
                name='techSummary' 
                type='textarea'
                rows='10'
                autocomplete="off"
                placeholder="◦  TECHNICAL DETAILS ARE THINGS YOUR CUSTOMERS MIGHT WANT TO KNOW
                ◦  LIKE MATERIALS
                ◦  CONSTRUCTION METHODS
                ◦  SPECIAL TECHNIQUES
                ◦  PERFORMANCE CHARACTERISTICS
                ◦  FEATURES
                ◦  AND ETC."/>
            </div>
            {/* Photo Upload */}
            <div className="photo_title">PHOTOS</div>
            <div className="photo_upload">
              <CustomImage
                style={{ height: 95, width: 95 }}  
                name='photo_upload' 
                autocomplete="off" 
                />
            </div>
            <div className="photo_upload2">
              <CustomImage
                style={{ height: 95, width: 95 }}  
                name='photo_upload' 
                autocomplete="off" />
            </div>
            <div className="photo_upload3">
              <CustomImage
                style={{ height: 95, width: 95 }}  
                name='photo_upload' 
                autocomplete="off" />
            </div>
            <div className="photo_upload4">
              <CustomImage
                style={{ height: 95, width: 95 }}  
                name='photo_upload' 
                autocomplete="off" />
            </div>

            {/* Begin Column 3 */}
            <div className="TIMELINE__SECTION">
              <div className="estimated_timeline">ESTIMATED TIMELINE
                <CustomTextInput
                  style={{ height: 40, width: 325 }}  
                  label='' 
                  name='timeline' 
                  type='text'
                  autocomplete="off"
                  placeholder='TASK' />
              </div>
              <div className="estimated_timeline_num">
                <CustomTextInput
                  style={{ height: 40, width: 50 }}  
                  label='' 
                  name='timeline-number' 
                  type='text'
                  autocomplete="off"
                  placeholder='NUM' />
              </div>
              <div className="estimated_timeline_units">
                <CustomTextInput
                  style={{ height: 40, width: 70 }}  
                  label='' 
                  name='timeline-unit' 
                  type='text'
                  autocomplete="off"
                  placeholder='UNITS' />
              </div>
            </div>
            {/* Submit button */}
            <button type="submit">{props.isSubmitting ? 'Loading...' : 'SAVE & NEXT'}</button>
          </Form>
        )}
        
    </Formik>
    
    </div>
  )
}

export default DashOne

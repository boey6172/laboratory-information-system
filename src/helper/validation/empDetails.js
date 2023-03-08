import * as Yup from 'yup'

const empDetailsSchema = Yup.object({

    empDate: Yup
      .string('Enter your Employment date ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Employment Date  is required'),
    philNumber: Yup
      .number().positive()
      .typeError('Must be digits')
      .integer('Must be digits')
      .min(12, 'Philhealth Number should be of minimum 12 digits length')
      .required('Philhealth Number  is required'),
    gsisNumber: Yup
      .number().positive()
      .typeError('Must be digits')
      .min(11, 'GSIS should be of minimum 11 digits length')
      .required('GSIS Number  is required'),
    nhmcNumber: Yup
      .number().positive()
      .integer('Must be digits')
      .typeError('Must be digits')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('NHMC Number  is required'),
    tinNumber: Yup
      .number().positive()
      .integer('Must be digits')
      .typeError('Must be digits')
      .min(9, 'TIN number should be of minimum 9 digits length')
      .required('TIN Number  is required'),
    pagIbigNumber: Yup
      .number().positive()
      .integer('Must be digits')
      .typeError('Must be digits')
      .min(9, 'PagIbig number should be of minimum 9 digits length')
      .required('Pagibig Number  is required'),
    taxstat: Yup
      .string('Enter your Tax Status')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Tax Status  is required'),
    salaryGrade: Yup
      .string('Enter your Salary Grade')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Salary Grade is required'),
    rank: Yup
      .string('Select a Rank')
      // .min(2, 'Rank should be of minimum 2 characters length')
      .required('Select a Rank'),
    regionAssignment: Yup
      .string('Select a RegionAssignment')
      // .min(2, 'Rank should be of minimum 2 characters length')
      .required('Select a RegionAssignment'),
    
    
  });
  
  export default empDetailsSchema;
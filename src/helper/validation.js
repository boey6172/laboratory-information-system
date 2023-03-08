import * as Yup from 'yup'

const validationSchema = Yup.object({
    rank: Yup
      .string('Enter a Rank')
      .min(2, 'Rank should be of minimum 2 characters length')
      .required('Enter a Rank'),
    username: Yup
      .string('Enter your Username')
      .min(8, 'username should be of minimum 8 characters length')
      .required('Username is required'),
    password: Yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required('Password is required'),
    confirmPassword:Yup
      .string('Enter your password')
      .oneOf([Yup.ref('password'),null], 'Password Must match')
      .required('Please Confirm password'),
    gender: Yup
      .string('Select a Gender')
      // .min(2, 'Rank should be of minimum 2 characters length')
      .required('Select a Gender'),
    firstname: Yup
      .string('Enter your Firstname')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('First Name  is required'),
    middlename: Yup
      .string('Enter your Middle Name')
      .min(1, 'Put _ if none ')
      .required('Middle Name  is required Put "_" if none'),
    lastname: Yup
      .string('Enter your Last name')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Last Name  is required'),
    suffix: Yup
      .string('Enter your Suffix'),
      // .min(8, 'username should be of minimum 8 characters length')
      // .required('First Name  is required'),
    birthday: Yup
      .string('Enter your Birthday ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Birthday  is required'),
    contactNumber: Yup
      .string('Enter your Contact Number ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Contact Number  is required'),
    region: Yup
      .string('Enter your  ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('First Name  is required'),
    region: Yup
      .string('Enter your  ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('First Name  is required'),
    province: Yup
      .string('Enter your  Province')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Proivince  is required'),
    munincipality: Yup
      .string('Enter your Munincipality ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('munincipality  is required'),
    barangay: Yup
      .string('Enter your Barangay')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Barangay is required'),
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
    taxstat: Yup
      .string('Enter your Tax Status')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Tax Status  is required'),
    salaryGrade: Yup
      .string('Enter your Salary Grade')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Salary Grade is required'),
    
    
  });
  
  export default validationSchema;
import * as Yup from 'yup'

const personalValidation = Yup.object({

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
    email:Yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    contactNumber: Yup
      .string('Enter your Contact Number ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Contact Number  is required'),
    region: Yup
      .string('Enter your Region ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('region is required'),
    region: Yup
      .string('Enter your  ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('First Name  is required'),
    province: Yup
      .string('Enter your  Province')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Proivince  is required'),
    municipality: Yup
      .string('Enter your Munincipality ')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('munincipality  is required'),
    barangay: Yup
      .string('Enter your Barangay')
      // .min(8, 'username should be of minimum 8 characters length')
      .required('Barangay is required'),
    religion: Yup
      .string('Select a Religion')
      // .min(2, 'Rank should be of minimum 2 characters length')
      .required('Select a Religion'),
  });
  
  export default personalValidation;
import * as Yup from 'yup'

const auth = Yup.object({

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

    
  });
  
  export default auth;
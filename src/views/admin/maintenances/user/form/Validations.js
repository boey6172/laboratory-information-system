  export const checkFirstName = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "First name is required" };
    }
    return { message: "", hasError: false };
  };

  export const checkMiddleName = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Middle name is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkLastName = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Last name is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkAddress = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Address is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkGender = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Gender is required" };
    }
    return { message: "", hasError: false };
  };

  export const checkRole = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Role is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkEmail = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Email is required" };
    } else if (errors?.type === "pattern") {
      return { hasError: true, message: "Invalid Email address" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkBirthDate = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Birth Date is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkMobileNumber = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Mobile Number is required" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkUsername = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Username is required" };
    } else if (errors?.type === "isExist") {
      return { hasError: true, message: "Username already registered" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkPassword = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "password is required" };
    } else if (errors?.type === "lengthRequired") {
      return { hasError: true, message: "Password length must be greater than 8" };
    }
    return { message: "", hasError: false };
  };
  
  export const checkConfirmPassword = (errors) => {
    if (errors?.type === "required") {
      return { hasError: true, message: "Confirm Password is required" };
    } else if (errors?.type === "isNotMatch") {
      return { hasError: true, message: "Confirm Password is not match" };
    }
    return { message: "", hasError: false };
  };
  
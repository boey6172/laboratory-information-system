import AccountInfo from "./AccountInfo";

export const checkFirstName = (errors) => {
  if (errors?.info?.first_name?.type === "required") {
    return { hasError: true, message: "First name is required" };
  }
  return { message: "", hasError: false };
};

export const checkDate = (errors) => {
  if (errors?.reserved_at?.type === "required") {
    return { hasError: true, message: "Date is required" };
  }
  return { message: "", hasError: false };
};

export const checkLastName = (errors) => {
  if (errors?.info?.last_name?.type === "required") {
    return { hasError: true, message: "Last name is required" };
  }
  return { message: "", hasError: false };
};

export const checkAddress = (errors) => {
  if (errors?.info?.address?.type === "required") {
    return { hasError: true, message: "Address is required" };
  }
  return { message: "", hasError: false };
};

export const checkGender = (errors) => {
  if (errors?.accountInfo?.info?.gender?.type === "required") {
    return { hasError: true, message: "Gender is required" };
  }
  return { message: "", hasError: false };
};

export const checkRoles = (errors) => {
  if (errors?.credential?.roles?.type === "required") {
    return { hasError: true, message: "Roles is required" };
  }
  return { message: "", hasError: false };
};

export const checkEmail = (errors) => {
  if (errors?.info?.email?.type === "required") {
    return { hasError: true, message: "Email is required" };
  }
  return { message: "", hasError: false };
};

export const checkBirthDate = (errors) => {
  if (errors?.type === "required") {
    return { hasError: true, message: "Birthdate is required" };
  } else if (errors?.type === "isValidBirthDate") {
    return { hasError: true, message: "Invalid Birthdate" };
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
    return { hasError: true, message: "Password is required" };
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

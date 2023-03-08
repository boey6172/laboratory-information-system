import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      info {
        first_name
        last_name
        middle_name
        address
        email
        birth_date
        mobile_number
        gender {
          _id
          name
        }
        photo
      }
      credential {
        username
        tokens {
          token
        }
        roles
      }
    }
  }
`;

export const GET_BIRTH_MONTH = gql`
  query($month: Int) {
    employeesBirthMonth(month: $month) {
      _id
      applicant_status {
        code
      }
      status {
        name
      }


    }
  }
`;

export const GET_APPLICANT_STATUSES = gql`
  query GetApplicantStatuses{
    applicantstatuses{
      _id
      name
      code
    }
  }
`;

export const GET_EMPLOYEE_STATUSES = gql`
  query GetEmployeeStatus{
    employeeStatus{
      _id
      name
      description
    }
  }
`;

export const GET_EMPLOYEE_BY_APPLICANT_STATUS = gql`
  query employeesWtApplicantStatus($status: String $applicant_status: String){
    employeesWtApplicantStatus(status: {
      status: $status,
      applicant_status: $applicant_status
  }) {
    _id
  }
}
`;

export const GET_COMPANIES = gql`
  query Companies {
    companies {
      _id
    }
  }
`;
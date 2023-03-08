import { gql } from "@apollo/client";

/* Query  */

/* Mutation  */

export const GET_BIRTH_MONTH = gql`
  query($month: Int) {
    employeesBirthMonth(month: $month) {
      _id
      personal_info {
        first_name
        middle_name
        last_name
        suffix
        nick_name
        birth_date
        birth_place
        religion {
          name
        }
        marital_status {
          name
        }
        gender {
          name
        }
      }
      skills {
        _id
        name
      }
      document_attachments {
        type {
          name
        }
        path
      }
      applicant_status {
        code
      }
      contact_info {
        email
        mobile_number
        secondary_mobile_number
        tel_number
      }
      address_info {
        present_address {
          location
          province
          barangay
          city
          postal_code
        }
        permanent_address {
          location
          province
          barangay
          city
          postal_code
        }
      }
      employee_info {
        _id
        employee_id
        contract_number
        identification_number
        company {
          name
        }
        branch {
          name
        }
        department {
          name
        }
        position {
          name
        }
        salary
        start_date
        immediate_superior {
          name
          position
        }
        is_contract_ended
      }
      previous_employment {
        company_name
        address
        position
        salary
        start_date
        end_date
        reason_of_leaving
        immediate_superior {
          name
          position
          contact_number
        }
      }
      educational_attainment {
        primary {
          school_name
          school_address
          year_graduated
          year_attainment
        }
        secondary {
          school_name
          school_address
          year_graduated
          year_attainment
        }
        tertiary {
          course
          school_name
          school_address
          year_graduated
          year_attainment
        }
      }
      government_info {
        tin
        sss
        pag_ibig
        philhealth
      }
      bank_info {
        name
        account_number
        account_type
      }
      emergency_contact {
        primary_contact {
          name
          relationship
          address
          mobile_number
        }
      }
      status {
        name
      }
      account {
        _id
        info {
          first_name
          middle_name
          last_name
        }
        credential {
          username
          roles
        }
      }
    }
  }
`;

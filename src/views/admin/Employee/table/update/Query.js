import { gql } from "@apollo/client";

/* Query  */

/* Mutation  */

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      _id
    }
  }
`;


export const UPDATE_EMPLOYEE_INFO = gql`
  mutation UpdateEmployeeInfo($id: ID!, $input: EmployeeInfoInput!) {
    updateEmployeeInfo(id: $id, input: $input) {
      _id
    }
  }
`;


export const UPDATE_USER_ROLE = gql`
  mutation UpdateUserRole($id: ID!, $roles: [String]!) {
    changeUserRoles(id: $id, roles: $roles) {
      _id
    }
  }
`;

export const GET_QUERY = gql`
  query GetQuery {
    employeeStatus {
      _id
      name
    }
    workLocations {
      _id
      name
    }
    positions {
      _id
      name
    }
  }
`;

export const DOCUMENT_ATTACHMENTS = gql`
  mutation($input: DocumentAttachmentInput!) {
    createDocumentAttachment(input: $input) {
      _id
    }
  }
`;

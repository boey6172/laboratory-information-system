import { gql } from "@apollo/client";

/* Query  */

/* Mutation  */

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateGovInfo($id: ID!, $input: EmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      _id
    }
  }
`;

export const GET_DOCUMENT_TYPE = gql`
  query GetDocumentType {
    documenttypes {
      _id
      name
    }
  }
`;

export const GET_SKILLS = gql`
  query GetDocumentType {
    skills {
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

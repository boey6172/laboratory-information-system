import { gql } from "@apollo/client";

/* Query  */
export const GET_GENDERS = gql`
  query GetGenders {
    genders {
      _id
      name
    }
  }
`;

/* Mutation  */
export const CHECK_IS_USERNAME_EXIST = gql`
  mutation CreateUserNameExist($input: String!) {
    checkUsernameExist(input: $input)
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      user {
        _id
        info {
          first_name
          last_name
        }
        credential {
          roles
          permissions
          username
        }
      }
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      _id
      info {
        first_name
        middle_name
        last_name
      }
      credential {
        roles
        permissions
        username
      }
    }
  }
`;

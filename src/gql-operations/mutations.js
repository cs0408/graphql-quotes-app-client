import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation createNewUser($newUserDetails: UserInput!) {
    user: signupUser(userNew: $newUserDetails) {
      _id
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`

export const LOGIN_USER = gql`
  mutation userSignin($userInput: UserSigninInput!) {
    user: signinUser(userSignin: $userInput) {
      token
    }
  }
`

export const CREATE_QUOTE = gql`
  mutation creatNewQuote($quoteName: String!) {
    quote: createQuote(name: $quoteName)
  }
`

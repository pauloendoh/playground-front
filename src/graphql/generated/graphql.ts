import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthUserOutput = {
  email: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type LoginValidInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  loginMutation: AuthUserOutput;
  registerMutation: AuthUserOutput;
};


export type MutationLoginMutationArgs = {
  data: LoginValidInput;
};


export type MutationRegisterMutationArgs = {
  data: RegisterValidInput;
};

export type Query = {
  meQuery: AuthUserOutput;
};

export type RegisterValidInput = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};

export type AuthUserFragment = { id: string, username: string, email: string, token: string, expiresAt: any };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { meQuery: { id: string, username: string, email: string, token: string, expiresAt: any } };

export type LoginMutationMutationVariables = Exact<{
  data: LoginValidInput;
}>;


export type LoginMutationMutation = { loginMutation: { id: string, username: string, email: string, token: string, expiresAt: any } };

export type RegisterMutationMutationVariables = Exact<{
  data: RegisterValidInput;
}>;


export type RegisterMutationMutation = { registerMutation: { id: string, username: string, email: string, token: string, expiresAt: any } };

export const AuthUserFragmentDoc = gql`
    fragment AuthUser on AuthUserOutput {
  id
  username
  email
  token
  expiresAt
}
    `;
export const MeQueryDocument = gql`
    query MeQuery {
  meQuery {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export const LoginMutationDocument = gql`
    mutation LoginMutation($data: LoginValidInput!) {
  loginMutation(data: $data) {
    id
    username
    email
    token
    expiresAt
  }
}
    `;
export const RegisterMutationDocument = gql`
    mutation RegisterMutation($data: RegisterValidInput!) {
  registerMutation(data: $data) {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MeQuery(variables?: MeQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQueryQuery>(MeQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MeQuery', 'query');
    },
    LoginMutation(variables: LoginMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutationMutation>(LoginMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginMutation', 'mutation');
    },
    RegisterMutation(variables: RegisterMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutationMutation>(RegisterMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterMutation', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
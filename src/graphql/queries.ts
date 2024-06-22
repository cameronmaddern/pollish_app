/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPoll = /* GraphQL */ `query GetPoll($id: ID!) {
  getPoll(id: $id) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPollQueryVariables, APITypes.GetPollQuery>;
export const listPolls = /* GraphQL */ `query ListPolls(
  $filter: ModelPollFilterInput
  $limit: Int
  $nextToken: String
) {
  listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPollsQueryVariables, APITypes.ListPollsQuery>;

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
export const getTextOption = /* GraphQL */ `query GetTextOption($id: ID!) {
  getTextOption(id: $id) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTextOptionQueryVariables,
  APITypes.GetTextOptionQuery
>;
export const getTextPoll = /* GraphQL */ `query GetTextPoll($id: ID!) {
  getTextPoll(id: $id) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTextPollQueryVariables,
  APITypes.GetTextPollQuery
>;
export const getVote = /* GraphQL */ `query GetVote($id: ID!) {
  getVote(id: $id) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetVoteQueryVariables, APITypes.GetVoteQuery>;
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
export const listTextOptions = /* GraphQL */ `query ListTextOptions(
  $filter: ModelTextOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTextOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      poll
      text
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTextOptionsQueryVariables,
  APITypes.ListTextOptionsQuery
>;
export const listTextPolls = /* GraphQL */ `query ListTextPolls(
  $filter: ModelTextPollFilterInput
  $limit: Int
  $nextToken: String
) {
  listTextPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      image
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTextPollsQueryVariables,
  APITypes.ListTextPollsQuery
>;
export const listVotes = /* GraphQL */ `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      option
      owner
      poll
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListVotesQueryVariables, APITypes.ListVotesQuery>;

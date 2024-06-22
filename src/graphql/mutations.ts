/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPoll = /* GraphQL */ `mutation CreatePoll(
  $condition: ModelPollConditionInput
  $input: CreatePollInput!
) {
  createPoll(condition: $condition, input: $input) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePollMutationVariables,
  APITypes.CreatePollMutation
>;
export const deletePoll = /* GraphQL */ `mutation DeletePoll(
  $condition: ModelPollConditionInput
  $input: DeletePollInput!
) {
  deletePoll(condition: $condition, input: $input) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePollMutationVariables,
  APITypes.DeletePollMutation
>;
export const updatePoll = /* GraphQL */ `mutation UpdatePoll(
  $condition: ModelPollConditionInput
  $input: UpdatePollInput!
) {
  updatePoll(condition: $condition, input: $input) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePollMutationVariables,
  APITypes.UpdatePollMutation
>;

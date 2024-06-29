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
export const createTextOption = /* GraphQL */ `mutation CreateTextOption(
  $condition: ModelTextOptionConditionInput
  $input: CreateTextOptionInput!
) {
  createTextOption(condition: $condition, input: $input) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTextOptionMutationVariables,
  APITypes.CreateTextOptionMutation
>;
export const createTextPoll = /* GraphQL */ `mutation CreateTextPoll(
  $condition: ModelTextPollConditionInput
  $input: CreateTextPollInput!
) {
  createTextPoll(condition: $condition, input: $input) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTextPollMutationVariables,
  APITypes.CreateTextPollMutation
>;
export const createVote = /* GraphQL */ `mutation CreateVote(
  $condition: ModelVoteConditionInput
  $input: CreateVoteInput!
) {
  createVote(condition: $condition, input: $input) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVoteMutationVariables,
  APITypes.CreateVoteMutation
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
export const deleteTextOption = /* GraphQL */ `mutation DeleteTextOption(
  $condition: ModelTextOptionConditionInput
  $input: DeleteTextOptionInput!
) {
  deleteTextOption(condition: $condition, input: $input) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTextOptionMutationVariables,
  APITypes.DeleteTextOptionMutation
>;
export const deleteTextPoll = /* GraphQL */ `mutation DeleteTextPoll(
  $condition: ModelTextPollConditionInput
  $input: DeleteTextPollInput!
) {
  deleteTextPoll(condition: $condition, input: $input) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTextPollMutationVariables,
  APITypes.DeleteTextPollMutation
>;
export const deleteVote = /* GraphQL */ `mutation DeleteVote(
  $condition: ModelVoteConditionInput
  $input: DeleteVoteInput!
) {
  deleteVote(condition: $condition, input: $input) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVoteMutationVariables,
  APITypes.DeleteVoteMutation
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
export const updateTextOption = /* GraphQL */ `mutation UpdateTextOption(
  $condition: ModelTextOptionConditionInput
  $input: UpdateTextOptionInput!
) {
  updateTextOption(condition: $condition, input: $input) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTextOptionMutationVariables,
  APITypes.UpdateTextOptionMutation
>;
export const updateTextPoll = /* GraphQL */ `mutation UpdateTextPoll(
  $condition: ModelTextPollConditionInput
  $input: UpdateTextPollInput!
) {
  updateTextPoll(condition: $condition, input: $input) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTextPollMutationVariables,
  APITypes.UpdateTextPollMutation
>;
export const updateVote = /* GraphQL */ `mutation UpdateVote(
  $condition: ModelVoteConditionInput
  $input: UpdateVoteInput!
) {
  updateVote(condition: $condition, input: $input) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVoteMutationVariables,
  APITypes.UpdateVoteMutation
>;

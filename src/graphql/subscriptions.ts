/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePoll = /* GraphQL */ `subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
  onCreatePoll(filter: $filter) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePollSubscriptionVariables,
  APITypes.OnCreatePollSubscription
>;
export const onCreateTextOption = /* GraphQL */ `subscription OnCreateTextOption(
  $filter: ModelSubscriptionTextOptionFilterInput
) {
  onCreateTextOption(filter: $filter) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTextOptionSubscriptionVariables,
  APITypes.OnCreateTextOptionSubscription
>;
export const onCreateTextPoll = /* GraphQL */ `subscription OnCreateTextPoll($filter: ModelSubscriptionTextPollFilterInput) {
  onCreateTextPoll(filter: $filter) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTextPollSubscriptionVariables,
  APITypes.OnCreateTextPollSubscription
>;
export const onCreateVote = /* GraphQL */ `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
  onCreateVote(filter: $filter) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVoteSubscriptionVariables,
  APITypes.OnCreateVoteSubscription
>;
export const onDeletePoll = /* GraphQL */ `subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
  onDeletePoll(filter: $filter) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePollSubscriptionVariables,
  APITypes.OnDeletePollSubscription
>;
export const onDeleteTextOption = /* GraphQL */ `subscription OnDeleteTextOption(
  $filter: ModelSubscriptionTextOptionFilterInput
) {
  onDeleteTextOption(filter: $filter) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTextOptionSubscriptionVariables,
  APITypes.OnDeleteTextOptionSubscription
>;
export const onDeleteTextPoll = /* GraphQL */ `subscription OnDeleteTextPoll($filter: ModelSubscriptionTextPollFilterInput) {
  onDeleteTextPoll(filter: $filter) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTextPollSubscriptionVariables,
  APITypes.OnDeleteTextPollSubscription
>;
export const onDeleteVote = /* GraphQL */ `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
  onDeleteVote(filter: $filter) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVoteSubscriptionVariables,
  APITypes.OnDeleteVoteSubscription
>;
export const onUpdatePoll = /* GraphQL */ `subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
  onUpdatePoll(filter: $filter) {
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePollSubscriptionVariables,
  APITypes.OnUpdatePollSubscription
>;
export const onUpdateTextOption = /* GraphQL */ `subscription OnUpdateTextOption(
  $filter: ModelSubscriptionTextOptionFilterInput
) {
  onUpdateTextOption(filter: $filter) {
    createdAt
    id
    poll
    text
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTextOptionSubscriptionVariables,
  APITypes.OnUpdateTextOptionSubscription
>;
export const onUpdateTextPoll = /* GraphQL */ `subscription OnUpdateTextPoll($filter: ModelSubscriptionTextPollFilterInput) {
  onUpdateTextPoll(filter: $filter) {
    createdAt
    id
    image
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTextPollSubscriptionVariables,
  APITypes.OnUpdateTextPollSubscription
>;
export const onUpdateVote = /* GraphQL */ `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
  onUpdateVote(filter: $filter) {
    createdAt
    id
    option
    owner
    poll
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVoteSubscriptionVariables,
  APITypes.OnUpdateVoteSubscription
>;

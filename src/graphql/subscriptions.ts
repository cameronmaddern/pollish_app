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

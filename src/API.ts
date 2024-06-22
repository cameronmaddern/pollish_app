/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelPollConditionInput = {
  and?: Array< ModelPollConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPollConditionInput | null,
  or?: Array< ModelPollConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreatePollInput = {
  id?: string | null,
  title: string,
};

export type Poll = {
  __typename: "Poll",
  createdAt: string,
  id: string,
  title: string,
  updatedAt: string,
};

export type DeletePollInput = {
  id: string,
};

export type UpdatePollInput = {
  id: string,
  title?: string | null,
};

export type ModelPollFilterInput = {
  and?: Array< ModelPollFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPollFilterInput | null,
  or?: Array< ModelPollFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPollConnection = {
  __typename: "ModelPollConnection",
  items:  Array<Poll | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPollFilterInput = {
  and?: Array< ModelSubscriptionPollFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPollFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type CreatePollMutationVariables = {
  condition?: ModelPollConditionInput | null,
  input: CreatePollInput,
};

export type CreatePollMutation = {
  createPoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeletePollMutationVariables = {
  condition?: ModelPollConditionInput | null,
  input: DeletePollInput,
};

export type DeletePollMutation = {
  deletePoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdatePollMutationVariables = {
  condition?: ModelPollConditionInput | null,
  input: UpdatePollInput,
};

export type UpdatePollMutation = {
  updatePoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetPollQueryVariables = {
  id: string,
};

export type GetPollQuery = {
  getPoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type ListPollsQueryVariables = {
  filter?: ModelPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPollsQuery = {
  listPolls?:  {
    __typename: "ModelPollConnection",
    items:  Array< {
      __typename: "Poll",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnCreatePollSubscription = {
  onCreatePoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnDeletePollSubscription = {
  onDeletePoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePollSubscriptionVariables = {
  filter?: ModelSubscriptionPollFilterInput | null,
};

export type OnUpdatePollSubscription = {
  onUpdatePoll?:  {
    __typename: "Poll",
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

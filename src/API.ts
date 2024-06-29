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

export type ModelTextOptionConditionInput = {
  and?: Array< ModelTextOptionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTextOptionConditionInput | null,
  or?: Array< ModelTextOptionConditionInput | null > | null,
  poll?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTextOptionInput = {
  id?: string | null,
  poll: string,
  text: string,
};

export type TextOption = {
  __typename: "TextOption",
  createdAt: string,
  id: string,
  poll: string,
  text: string,
  updatedAt: string,
};

export type ModelTextPollConditionInput = {
  and?: Array< ModelTextPollConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  image?: ModelStringInput | null,
  not?: ModelTextPollConditionInput | null,
  or?: Array< ModelTextPollConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTextPollInput = {
  id?: string | null,
  image: string,
  title: string,
};

export type TextPoll = {
  __typename: "TextPoll",
  createdAt: string,
  id: string,
  image: string,
  title: string,
  updatedAt: string,
};

export type ModelVoteConditionInput = {
  and?: Array< ModelVoteConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelVoteConditionInput | null,
  option?: ModelStringInput | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  owner?: ModelStringInput | null,
  poll?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateVoteInput = {
  id?: string | null,
  option: string,
  owner: string,
  poll: string,
};

export type Vote = {
  __typename: "Vote",
  createdAt: string,
  id: string,
  option: string,
  owner: string,
  poll: string,
  updatedAt: string,
};

export type DeletePollInput = {
  id: string,
};

export type DeleteTextOptionInput = {
  id: string,
};

export type DeleteTextPollInput = {
  id: string,
};

export type DeleteVoteInput = {
  id: string,
};

export type UpdatePollInput = {
  id: string,
  title?: string | null,
};

export type UpdateTextOptionInput = {
  id: string,
  poll?: string | null,
  text?: string | null,
};

export type UpdateTextPollInput = {
  id: string,
  image?: string | null,
  title?: string | null,
};

export type UpdateVoteInput = {
  id: string,
  option?: string | null,
  owner?: string | null,
  poll?: string | null,
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

export type ModelTextOptionFilterInput = {
  and?: Array< ModelTextOptionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTextOptionFilterInput | null,
  or?: Array< ModelTextOptionFilterInput | null > | null,
  poll?: ModelStringInput | null,
  text?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTextOptionConnection = {
  __typename: "ModelTextOptionConnection",
  items:  Array<TextOption | null >,
  nextToken?: string | null,
};

export type ModelTextPollFilterInput = {
  and?: Array< ModelTextPollFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  not?: ModelTextPollFilterInput | null,
  or?: Array< ModelTextPollFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTextPollConnection = {
  __typename: "ModelTextPollConnection",
  items:  Array<TextPoll | null >,
  nextToken?: string | null,
};

export type ModelVoteFilterInput = {
  and?: Array< ModelVoteFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelVoteFilterInput | null,
  option?: ModelStringInput | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  poll?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
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

export type ModelSubscriptionTextOptionFilterInput = {
  and?: Array< ModelSubscriptionTextOptionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTextOptionFilterInput | null > | null,
  poll?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTextPollFilterInput = {
  and?: Array< ModelSubscriptionTextPollFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTextPollFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionVoteFilterInput = {
  and?: Array< ModelSubscriptionVoteFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  option?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionVoteFilterInput | null > | null,
  owner?: ModelSubscriptionStringInput | null,
  poll?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
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

export type CreateTextOptionMutationVariables = {
  condition?: ModelTextOptionConditionInput | null,
  input: CreateTextOptionInput,
};

export type CreateTextOptionMutation = {
  createTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type CreateTextPollMutationVariables = {
  condition?: ModelTextPollConditionInput | null,
  input: CreateTextPollInput,
};

export type CreateTextPollMutation = {
  createTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreateVoteMutationVariables = {
  condition?: ModelVoteConditionInput | null,
  input: CreateVoteInput,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type DeleteTextOptionMutationVariables = {
  condition?: ModelTextOptionConditionInput | null,
  input: DeleteTextOptionInput,
};

export type DeleteTextOptionMutation = {
  deleteTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type DeleteTextPollMutationVariables = {
  condition?: ModelTextPollConditionInput | null,
  input: DeleteTextPollInput,
};

export type DeleteTextPollMutation = {
  deleteTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  condition?: ModelVoteConditionInput | null,
  input: DeleteVoteInput,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type UpdateTextOptionMutationVariables = {
  condition?: ModelTextOptionConditionInput | null,
  input: UpdateTextOptionInput,
};

export type UpdateTextOptionMutation = {
  updateTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type UpdateTextPollMutationVariables = {
  condition?: ModelTextPollConditionInput | null,
  input: UpdateTextPollInput,
};

export type UpdateTextPollMutation = {
  updateTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  condition?: ModelVoteConditionInput | null,
  input: UpdateVoteInput,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type GetTextOptionQueryVariables = {
  id: string,
};

export type GetTextOptionQuery = {
  getTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type GetTextPollQueryVariables = {
  id: string,
};

export type GetTextPollQuery = {
  getTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type ListTextOptionsQueryVariables = {
  filter?: ModelTextOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTextOptionsQuery = {
  listTextOptions?:  {
    __typename: "ModelTextOptionConnection",
    items:  Array< {
      __typename: "TextOption",
      createdAt: string,
      id: string,
      poll: string,
      text: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTextPollsQueryVariables = {
  filter?: ModelTextPollFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTextPollsQuery = {
  listTextPolls?:  {
    __typename: "ModelTextPollConnection",
    items:  Array< {
      __typename: "TextPoll",
      createdAt: string,
      id: string,
      image: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      createdAt: string,
      id: string,
      option: string,
      owner: string,
      poll: string,
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

export type OnCreateTextOptionSubscriptionVariables = {
  filter?: ModelSubscriptionTextOptionFilterInput | null,
};

export type OnCreateTextOptionSubscription = {
  onCreateTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTextPollSubscriptionVariables = {
  filter?: ModelSubscriptionTextPollFilterInput | null,
};

export type OnCreateTextPollSubscription = {
  onCreateTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type OnDeleteTextOptionSubscriptionVariables = {
  filter?: ModelSubscriptionTextOptionFilterInput | null,
};

export type OnDeleteTextOptionSubscription = {
  onDeleteTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTextPollSubscriptionVariables = {
  filter?: ModelSubscriptionTextPollFilterInput | null,
};

export type OnDeleteTextPollSubscription = {
  onDeleteTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
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

export type OnUpdateTextOptionSubscriptionVariables = {
  filter?: ModelSubscriptionTextOptionFilterInput | null,
};

export type OnUpdateTextOptionSubscription = {
  onUpdateTextOption?:  {
    __typename: "TextOption",
    createdAt: string,
    id: string,
    poll: string,
    text: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTextPollSubscriptionVariables = {
  filter?: ModelSubscriptionTextPollFilterInput | null,
};

export type OnUpdateTextPollSubscription = {
  onUpdateTextPoll?:  {
    __typename: "TextPoll",
    createdAt: string,
    id: string,
    image: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    createdAt: string,
    id: string,
    option: string,
    owner: string,
    poll: string,
    updatedAt: string,
  } | null,
};

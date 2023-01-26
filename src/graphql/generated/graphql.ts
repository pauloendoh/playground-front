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
  DateTime: string;
  Decimal: string;
};

export type AffectedRowsOutput = {
  count: Scalars['Int'];
};

export type AggregateCurrentSaving = {
  _avg?: Maybe<CurrentSavingAvgAggregate>;
  _count?: Maybe<CurrentSavingCountAggregate>;
  _max?: Maybe<CurrentSavingMaxAggregate>;
  _min?: Maybe<CurrentSavingMinAggregate>;
  _sum?: Maybe<CurrentSavingSumAggregate>;
};

export type AggregateRecipe = {
  _avg?: Maybe<RecipeAvgAggregate>;
  _count?: Maybe<RecipeCountAggregate>;
  _max?: Maybe<RecipeMaxAggregate>;
  _min?: Maybe<RecipeMinAggregate>;
  _sum?: Maybe<RecipeSumAggregate>;
};

export type AggregateUser = {
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateWishlistItem = {
  _avg?: Maybe<WishlistItemAvgAggregate>;
  _count?: Maybe<WishlistItemCountAggregate>;
  _max?: Maybe<WishlistItemMaxAggregate>;
  _min?: Maybe<WishlistItemMinAggregate>;
  _sum?: Maybe<WishlistItemSumAggregate>;
};

export type AuthUserOutput = {
  email: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type CurrentSaving = {
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type CurrentSavingAvgAggregate = {
  value?: Maybe<Scalars['Decimal']>;
};

export type CurrentSavingAvgOrderByAggregateInput = {
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type CurrentSavingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCurrentSavingsInput;
  value: Scalars['Decimal'];
};

export type CurrentSavingCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type CurrentSavingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CurrentSavingCreateManyUserInputEnvelope = {
  data: Array<CurrentSavingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CurrentSavingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CurrentSavingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CurrentSavingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CurrentSavingCreateWithoutUserInput>>;
  createMany?: InputMaybe<CurrentSavingCreateManyUserInputEnvelope>;
};

export type CurrentSavingCreateOrConnectWithoutUserInput = {
  create: CurrentSavingCreateWithoutUserInput;
  where: CurrentSavingWhereUniqueInput;
};

export type CurrentSavingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type CurrentSavingGroupBy = {
  _avg?: Maybe<CurrentSavingAvgAggregate>;
  _count?: Maybe<CurrentSavingCountAggregate>;
  _max?: Maybe<CurrentSavingMaxAggregate>;
  _min?: Maybe<CurrentSavingMinAggregate>;
  _sum?: Maybe<CurrentSavingSumAggregate>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type CurrentSavingListRelationFilter = {
  every?: InputMaybe<CurrentSavingWhereInput>;
  none?: InputMaybe<CurrentSavingWhereInput>;
  some?: InputMaybe<CurrentSavingWhereInput>;
};

export type CurrentSavingMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CurrentSavingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Decimal']>;
};

export type CurrentSavingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CurrentSavingOrderByWithAggregationInput = {
  _avg?: InputMaybe<CurrentSavingAvgOrderByAggregateInput>;
  _count?: InputMaybe<CurrentSavingCountOrderByAggregateInput>;
  _max?: InputMaybe<CurrentSavingMaxOrderByAggregateInput>;
  _min?: InputMaybe<CurrentSavingMinOrderByAggregateInput>;
  _sum?: InputMaybe<CurrentSavingSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum CurrentSavingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Value = 'value'
}

export type CurrentSavingScalarWhereInput = {
  AND?: InputMaybe<Array<CurrentSavingScalarWhereInput>>;
  NOT?: InputMaybe<Array<CurrentSavingScalarWhereInput>>;
  OR?: InputMaybe<Array<CurrentSavingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type CurrentSavingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CurrentSavingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CurrentSavingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CurrentSavingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type CurrentSavingSumAggregate = {
  value?: Maybe<Scalars['Decimal']>;
};

export type CurrentSavingSumOrderByAggregateInput = {
  value?: InputMaybe<SortOrder>;
};

export type CurrentSavingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCurrentSavingsNestedInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CurrentSavingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CurrentSavingUpdateManyWithWhereWithoutUserInput = {
  data: CurrentSavingUpdateManyMutationInput;
  where: CurrentSavingScalarWhereInput;
};

export type CurrentSavingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CurrentSavingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CurrentSavingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CurrentSavingCreateWithoutUserInput>>;
  createMany?: InputMaybe<CurrentSavingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CurrentSavingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CurrentSavingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CurrentSavingWhereUniqueInput>>;
  set?: InputMaybe<Array<CurrentSavingWhereUniqueInput>>;
  update?: InputMaybe<Array<CurrentSavingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CurrentSavingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CurrentSavingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CurrentSavingUpdateWithWhereUniqueWithoutUserInput = {
  data: CurrentSavingUpdateWithoutUserInput;
  where: CurrentSavingWhereUniqueInput;
};

export type CurrentSavingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type CurrentSavingUpsertWithWhereUniqueWithoutUserInput = {
  create: CurrentSavingCreateWithoutUserInput;
  update: CurrentSavingUpdateWithoutUserInput;
  where: CurrentSavingWhereUniqueInput;
};

export type CurrentSavingValidInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type CurrentSavingWhereInput = {
  AND?: InputMaybe<Array<CurrentSavingWhereInput>>;
  NOT?: InputMaybe<Array<CurrentSavingWhereInput>>;
  OR?: InputMaybe<Array<CurrentSavingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<DecimalFilter>;
};

export type CurrentSavingWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginValidInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type Mutation = {
  createManyCurrentSaving: AffectedRowsOutput;
  createManyRecipe: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWishlistItem: AffectedRowsOutput;
  createOneCurrentSaving: CurrentSaving;
  createOneRecipe: Recipe;
  createOneUser: User;
  createOneWishlistItem: WishlistItem;
  deleteManyCurrentSaving: AffectedRowsOutput;
  deleteManyRecipe: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWishlistItem: AffectedRowsOutput;
  deleteOneCurrentSaving?: Maybe<CurrentSaving>;
  deleteOneRecipe?: Maybe<Recipe>;
  deleteOneUser?: Maybe<User>;
  deleteOneWishlistItem?: Maybe<WishlistItem>;
  deleteRecipeMutation: Scalars['Boolean'];
  deleteSavingMutation: Scalars['Boolean'];
  loginMutation: AuthUserOutput;
  registerMutation: AuthUserOutput;
  saveCurrentSavingMutation: CurrentSaving;
  saveRecipeMutation: Recipe;
  saveWishlistItemMutation: WishlistItem;
  updateManyCurrentSaving: AffectedRowsOutput;
  updateManyRecipe: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWishlistItem: AffectedRowsOutput;
  updateOneCurrentSaving?: Maybe<CurrentSaving>;
  updateOneRecipe?: Maybe<Recipe>;
  updateOneUser?: Maybe<User>;
  updateOneWishlistItem?: Maybe<WishlistItem>;
  upsertOneCurrentSaving: CurrentSaving;
  upsertOneRecipe: Recipe;
  upsertOneUser: User;
  upsertOneWishlistItem: WishlistItem;
};


export type MutationCreateManyCurrentSavingArgs = {
  data: Array<CurrentSavingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRecipeArgs = {
  data: Array<RecipeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyWishlistItemArgs = {
  data: Array<WishlistItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneCurrentSavingArgs = {
  data: CurrentSavingCreateInput;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneWishlistItemArgs = {
  data: WishlistItemCreateInput;
};


export type MutationDeleteManyCurrentSavingArgs = {
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type MutationDeleteManyRecipeArgs = {
  where?: InputMaybe<RecipeWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWishlistItemArgs = {
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type MutationDeleteOneCurrentSavingArgs = {
  where: CurrentSavingWhereUniqueInput;
};


export type MutationDeleteOneRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneWishlistItemArgs = {
  where: WishlistItemWhereUniqueInput;
};


export type MutationDeleteRecipeMutationArgs = {
  recipeId: Scalars['String'];
};


export type MutationDeleteSavingMutationArgs = {
  savingId: Scalars['String'];
};


export type MutationLoginMutationArgs = {
  data: LoginValidInput;
};


export type MutationRegisterMutationArgs = {
  data: RegisterValidInput;
};


export type MutationSaveCurrentSavingMutationArgs = {
  data: CurrentSavingValidInput;
};


export type MutationSaveRecipeMutationArgs = {
  data: RecipeInput;
};


export type MutationSaveWishlistItemMutationArgs = {
  data: WishlistItemValidInput;
};


export type MutationUpdateManyCurrentSavingArgs = {
  data: CurrentSavingUpdateManyMutationInput;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type MutationUpdateManyRecipeArgs = {
  data: RecipeUpdateManyMutationInput;
  where?: InputMaybe<RecipeWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWishlistItemArgs = {
  data: WishlistItemUpdateManyMutationInput;
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type MutationUpdateOneCurrentSavingArgs = {
  data: CurrentSavingUpdateInput;
  where: CurrentSavingWhereUniqueInput;
};


export type MutationUpdateOneRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneWishlistItemArgs = {
  data: WishlistItemUpdateInput;
  where: WishlistItemWhereUniqueInput;
};


export type MutationUpsertOneCurrentSavingArgs = {
  create: CurrentSavingCreateInput;
  update: CurrentSavingUpdateInput;
  where: CurrentSavingWhereUniqueInput;
};


export type MutationUpsertOneRecipeArgs = {
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneWishlistItemArgs = {
  create: WishlistItemCreateInput;
  update: WishlistItemUpdateInput;
  where: WishlistItemWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  aggregateCurrentSaving: AggregateCurrentSaving;
  aggregateRecipe: AggregateRecipe;
  aggregateUser: AggregateUser;
  aggregateWishlistItem: AggregateWishlistItem;
  currentSaving?: Maybe<CurrentSaving>;
  currentSavings: Array<CurrentSaving>;
  currentSavingsQuery: Array<CurrentSaving>;
  findFirstCurrentSaving?: Maybe<CurrentSaving>;
  findFirstCurrentSavingOrThrow?: Maybe<CurrentSaving>;
  findFirstRecipe?: Maybe<Recipe>;
  findFirstRecipeOrThrow?: Maybe<Recipe>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstWishlistItem?: Maybe<WishlistItem>;
  findFirstWishlistItemOrThrow?: Maybe<WishlistItem>;
  getCurrentSaving?: Maybe<CurrentSaving>;
  getRecipe?: Maybe<Recipe>;
  getRecipesQuery: Array<Recipe>;
  getUser?: Maybe<User>;
  getWishlistItem?: Maybe<WishlistItem>;
  groupByCurrentSaving: Array<CurrentSavingGroupBy>;
  groupByRecipe: Array<RecipeGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWishlistItem: Array<WishlistItemGroupBy>;
  meQuery: AuthUserOutput;
  recipe?: Maybe<Recipe>;
  recipes: Array<Recipe>;
  user?: Maybe<User>;
  users: Array<User>;
  wishlistItem?: Maybe<WishlistItem>;
  wishlistItems: Array<WishlistItem>;
  wishlistItemsQuery: Array<WishlistItem>;
};


export type QueryAggregateCurrentSavingArgs = {
  cursor?: InputMaybe<CurrentSavingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type QueryAggregateRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateWishlistItemArgs = {
  cursor?: InputMaybe<WishlistItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type QueryCurrentSavingArgs = {
  where: CurrentSavingWhereUniqueInput;
};


export type QueryCurrentSavingsArgs = {
  cursor?: InputMaybe<CurrentSavingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CurrentSavingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type QueryFindFirstCurrentSavingArgs = {
  cursor?: InputMaybe<CurrentSavingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CurrentSavingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type QueryFindFirstCurrentSavingOrThrowArgs = {
  cursor?: InputMaybe<CurrentSavingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CurrentSavingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type QueryFindFirstRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryFindFirstRecipeOrThrowArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstWishlistItemArgs = {
  cursor?: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type QueryFindFirstWishlistItemOrThrowArgs = {
  cursor?: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type QueryGetCurrentSavingArgs = {
  where: CurrentSavingWhereUniqueInput;
};


export type QueryGetRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetWishlistItemArgs = {
  where: WishlistItemWhereUniqueInput;
};


export type QueryGroupByCurrentSavingArgs = {
  by: Array<CurrentSavingScalarFieldEnum>;
  having?: InputMaybe<CurrentSavingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type QueryGroupByRecipeArgs = {
  by: Array<RecipeScalarFieldEnum>;
  having?: InputMaybe<RecipeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByWishlistItemArgs = {
  by: Array<WishlistItemScalarFieldEnum>;
  having?: InputMaybe<WishlistItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWishlistItemArgs = {
  where: WishlistItemWhereUniqueInput;
};


export type QueryWishlistItemsArgs = {
  cursor?: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Recipe = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  savedPosition?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type RecipeAvgAggregate = {
  rating?: Maybe<Scalars['Float']>;
  savedPosition?: Maybe<Scalars['Float']>;
};

export type RecipeAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
};

export type RecipeCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  rating: Scalars['Int'];
  savedPosition: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RecipeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RecipeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  savedPosition?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRecipeInput;
};

export type RecipeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  savedPosition?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RecipeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  savedPosition?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipeCreateManyUserInputEnvelope = {
  data: Array<RecipeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RecipeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyUserInputEnvelope>;
};

export type RecipeCreateOrConnectWithoutUserInput = {
  create: RecipeCreateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  savedPosition?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecipeGroupBy = {
  _avg?: Maybe<RecipeAvgAggregate>;
  _count?: Maybe<RecipeCountAggregate>;
  _max?: Maybe<RecipeMaxAggregate>;
  _min?: Maybe<RecipeMinAggregate>;
  _sum?: Maybe<RecipeSumAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  savedPosition?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RecipeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  savedPosition?: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type RecipeListRelationFilter = {
  every?: InputMaybe<RecipeWhereInput>;
  none?: InputMaybe<RecipeWhereInput>;
  some?: InputMaybe<RecipeWhereInput>;
};

export type RecipeMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  savedPosition?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RecipeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RecipeMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  savedPosition?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type RecipeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RecipeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithAggregationInput = {
  _avg?: InputMaybe<RecipeAvgOrderByAggregateInput>;
  _count?: InputMaybe<RecipeCountOrderByAggregateInput>;
  _max?: InputMaybe<RecipeMaxOrderByAggregateInput>;
  _min?: InputMaybe<RecipeMinOrderByAggregateInput>;
  _sum?: InputMaybe<RecipeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RecipeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Rating = 'rating',
  SavedPosition = 'savedPosition',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RecipeScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntNullableFilter>;
  savedPosition?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RecipeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntNullableWithAggregatesFilter>;
  savedPosition?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type RecipeSumAggregate = {
  rating?: Maybe<Scalars['Int']>;
  savedPosition?: Maybe<Scalars['Int']>;
};

export type RecipeSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  savedPosition?: InputMaybe<SortOrder>;
};

export type RecipeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRecipeNestedInput>;
};

export type RecipeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpdateManyWithWhereWithoutUserInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RecipeCreateWithoutUserInput>>;
  createMany?: InputMaybe<RecipeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
  data: RecipeUpdateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
  create: RecipeCreateWithoutUserInput;
  update: RecipeUpdateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntNullableFilter>;
  savedPosition?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type RegisterValidInput = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  currentSavings: Array<CurrentSaving>;
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  recipe: Array<Recipe>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  wishlistItems: Array<WishlistItem>;
};


export type UserCurrentSavingsArgs = {
  cursor?: InputMaybe<CurrentSavingWhereUniqueInput>;
  distinct?: InputMaybe<Array<CurrentSavingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CurrentSavingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrentSavingWhereInput>;
};


export type UserRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type UserWishlistItemsArgs = {
  cursor?: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WishlistItemWhereInput>;
};

export type UserCount = {
  currentSavings: Scalars['Int'];
  recipe: Scalars['Int'];
  wishlistItems: Scalars['Int'];
};

export type UserCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currentSavings?: InputMaybe<CurrentSavingCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  recipe?: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems?: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutCurrentSavingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCurrentSavingsInput>;
  create?: InputMaybe<UserCreateWithoutCurrentSavingsInput>;
};

export type UserCreateNestedOneWithoutRecipeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipeInput>;
  create?: InputMaybe<UserCreateWithoutRecipeInput>;
};

export type UserCreateNestedOneWithoutWishlistItemsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWishlistItemsInput>;
  create?: InputMaybe<UserCreateWithoutWishlistItemsInput>;
};

export type UserCreateOrConnectWithoutCurrentSavingsInput = {
  create: UserCreateWithoutCurrentSavingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRecipeInput = {
  create: UserCreateWithoutRecipeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWishlistItemsInput = {
  create: UserCreateWithoutWishlistItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCurrentSavingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  recipe?: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems?: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRecipeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currentSavings?: InputMaybe<CurrentSavingCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems?: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutWishlistItemsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currentSavings?: InputMaybe<CurrentSavingCreateNestedManyWithoutUserInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  recipe?: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  currentSavings?: InputMaybe<CurrentSavingOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  recipe?: InputMaybe<RecipeOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  wishlistItems?: InputMaybe<WishlistItemOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentSavings?: InputMaybe<CurrentSavingUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems?: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCurrentSavingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCurrentSavingsInput>;
  create?: InputMaybe<UserCreateWithoutCurrentSavingsInput>;
  update?: InputMaybe<UserUpdateWithoutCurrentSavingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCurrentSavingsInput>;
};

export type UserUpdateOneRequiredWithoutRecipeNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRecipeInput>;
  create?: InputMaybe<UserCreateWithoutRecipeInput>;
  update?: InputMaybe<UserUpdateWithoutRecipeInput>;
  upsert?: InputMaybe<UserUpsertWithoutRecipeInput>;
};

export type UserUpdateOneRequiredWithoutWishlistItemsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWishlistItemsInput>;
  create?: InputMaybe<UserCreateWithoutWishlistItemsInput>;
  update?: InputMaybe<UserUpdateWithoutWishlistItemsInput>;
  upsert?: InputMaybe<UserUpsertWithoutWishlistItemsInput>;
};

export type UserUpdateWithoutCurrentSavingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems?: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutRecipeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentSavings?: InputMaybe<CurrentSavingUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems?: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutWishlistItemsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  currentSavings?: InputMaybe<CurrentSavingUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipe?: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCurrentSavingsInput = {
  create: UserCreateWithoutCurrentSavingsInput;
  update: UserUpdateWithoutCurrentSavingsInput;
};

export type UserUpsertWithoutRecipeInput = {
  create: UserCreateWithoutRecipeInput;
  update: UserUpdateWithoutRecipeInput;
};

export type UserUpsertWithoutWishlistItemsInput = {
  create: UserCreateWithoutWishlistItemsInput;
  update: UserUpdateWithoutWishlistItemsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentSavings?: InputMaybe<CurrentSavingListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  recipe?: InputMaybe<RecipeListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  wishlistItems?: InputMaybe<WishlistItemListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type WishlistItem = {
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type WishlistItemAvgAggregate = {
  priceInThousands?: Maybe<Scalars['Decimal']>;
};

export type WishlistItemAvgOrderByAggregateInput = {
  priceInThousands?: InputMaybe<SortOrder>;
};

export type WishlistItemCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  itemName: Scalars['Int'];
  priceInThousands: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type WishlistItemCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  priceInThousands?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WishlistItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutWishlistItemsInput;
};

export type WishlistItemCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type WishlistItemCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WishlistItemCreateManyUserInputEnvelope = {
  data: Array<WishlistItemCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type WishlistItemCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WishlistItemCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<WishlistItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<WishlistItemCreateManyUserInputEnvelope>;
};

export type WishlistItemCreateOrConnectWithoutUserInput = {
  create: WishlistItemCreateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WishlistItemGroupBy = {
  _avg?: Maybe<WishlistItemAvgAggregate>;
  _count?: Maybe<WishlistItemCountAggregate>;
  _max?: Maybe<WishlistItemMaxAggregate>;
  _min?: Maybe<WishlistItemMinAggregate>;
  _sum?: Maybe<WishlistItemSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type WishlistItemListRelationFilter = {
  every?: InputMaybe<WishlistItemWhereInput>;
  none?: InputMaybe<WishlistItemWhereInput>;
  some?: InputMaybe<WishlistItemWhereInput>;
};

export type WishlistItemMaxAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  priceInThousands?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type WishlistItemMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  priceInThousands?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WishlistItemMinAggregate = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  itemName?: Maybe<Scalars['String']>;
  priceInThousands?: Maybe<Scalars['Decimal']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type WishlistItemMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  priceInThousands?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<WishlistItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<WishlistItemCountOrderByAggregateInput>;
  _max?: InputMaybe<WishlistItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<WishlistItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<WishlistItemSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  priceInThousands?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  itemName?: InputMaybe<SortOrder>;
  priceInThousands?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum WishlistItemScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ItemName = 'itemName',
  PriceInThousands = 'priceInThousands',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type WishlistItemScalarWhereInput = {
  AND?: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  OR?: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  itemName?: InputMaybe<StringFilter>;
  priceInThousands?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type WishlistItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  itemName?: InputMaybe<StringWithAggregatesFilter>;
  priceInThousands?: InputMaybe<DecimalWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type WishlistItemSumAggregate = {
  priceInThousands?: Maybe<Scalars['Decimal']>;
};

export type WishlistItemSumOrderByAggregateInput = {
  priceInThousands?: InputMaybe<SortOrder>;
};

export type WishlistItemUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWishlistItemsNestedInput>;
};

export type WishlistItemUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WishlistItemUpdateManyWithWhereWithoutUserInput = {
  data: WishlistItemUpdateManyMutationInput;
  where: WishlistItemScalarWhereInput;
};

export type WishlistItemUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WishlistItemCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<WishlistItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<WishlistItemCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  set?: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  update?: InputMaybe<Array<WishlistItemUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<WishlistItemUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<WishlistItemUpsertWithWhereUniqueWithoutUserInput>>;
};

export type WishlistItemUpdateWithWhereUniqueWithoutUserInput = {
  data: WishlistItemUpdateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName?: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WishlistItemUpsertWithWhereUniqueWithoutUserInput = {
  create: WishlistItemCreateWithoutUserInput;
  update: WishlistItemUpdateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemValidInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type WishlistItemWhereInput = {
  AND?: InputMaybe<Array<WishlistItemWhereInput>>;
  NOT?: InputMaybe<Array<WishlistItemWhereInput>>;
  OR?: InputMaybe<Array<WishlistItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  itemName?: InputMaybe<StringFilter>;
  priceInThousands?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type WishlistItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AuthUserFragment = { id: string, username: string, email: string, token: string, expiresAt: string };

export type RecipeFragment = { id: string, userId: string, title: string, description: string, rating?: number | null, savedPosition?: number | null, createdAt: string, updatedAt: string };

export type CurrentSavingFragment = { id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string };

export type WishlistItemFragment = { id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { meQuery: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type CurrentSavingsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentSavingsQueryQuery = { currentSavingsQuery: Array<{ id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string }> };

export type DeleteSavingMutationMutationVariables = Exact<{
  savingId: Scalars['String'];
}>;


export type DeleteSavingMutationMutation = { deleteSavingMutation: boolean };

export type SaveCurrentSavingMutationMutationVariables = Exact<{
  data: CurrentSavingValidInput;
}>;


export type SaveCurrentSavingMutationMutation = { saveCurrentSavingMutation: { id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string } };

export type SaveWishlistItemMutationMutationVariables = Exact<{
  data: WishlistItemValidInput;
}>;


export type SaveWishlistItemMutationMutation = { saveWishlistItemMutation: { id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string } };

export type WishlistItemsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type WishlistItemsQueryQuery = { wishlistItemsQuery: Array<{ id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string }> };

export type LoginMutationMutationVariables = Exact<{
  data: LoginValidInput;
}>;


export type LoginMutationMutation = { loginMutation: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type RegisterMutationMutationVariables = Exact<{
  data: RegisterValidInput;
}>;


export type RegisterMutationMutation = { registerMutation: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type SaveRecipeMutationMutationVariables = Exact<{
  data: RecipeInput;
}>;


export type SaveRecipeMutationMutation = { saveRecipeMutation: { id: string, userId: string, title: string, description: string, rating?: number | null, savedPosition?: number | null, createdAt: string, updatedAt: string } };

export type DeleteRecipeMutationMutationVariables = Exact<{
  recipeId: Scalars['String'];
}>;


export type DeleteRecipeMutationMutation = { deleteRecipeMutation: boolean };

export type GetRecipesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipesQueryQuery = { getRecipesQuery: Array<{ id: string, userId: string, title: string, description: string, rating?: number | null, savedPosition?: number | null, createdAt: string, updatedAt: string }> };

export const AuthUserFragmentDoc = gql`
    fragment AuthUser on AuthUserOutput {
  id
  username
  email
  token
  expiresAt
}
    `;
export const RecipeFragmentDoc = gql`
    fragment Recipe on Recipe {
  id
  userId
  title
  description
  rating
  savedPosition
  createdAt
  updatedAt
}
    `;
export const CurrentSavingFragmentDoc = gql`
    fragment CurrentSaving on CurrentSaving {
  id
  userId
  value
  date
  createdAt
  updatedAt
}
    `;
export const WishlistItemFragmentDoc = gql`
    fragment WishlistItem on WishlistItem {
  id
  userId
  itemName
  priceInThousands
  createdAt
  updatedAt
}
    `;
export const MeQueryDocument = gql`
    query MeQuery {
  meQuery {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;
export const CurrentSavingsQueryDocument = gql`
    query CurrentSavingsQuery {
  currentSavingsQuery {
    ...CurrentSaving
  }
}
    ${CurrentSavingFragmentDoc}`;
export const DeleteSavingMutationDocument = gql`
    mutation DeleteSavingMutation($savingId: String!) {
  deleteSavingMutation(savingId: $savingId)
}
    `;
export const SaveCurrentSavingMutationDocument = gql`
    mutation SaveCurrentSavingMutation($data: CurrentSavingValidInput!) {
  saveCurrentSavingMutation(data: $data) {
    ...CurrentSaving
  }
}
    ${CurrentSavingFragmentDoc}`;
export const SaveWishlistItemMutationDocument = gql`
    mutation SaveWishlistItemMutation($data: WishlistItemValidInput!) {
  saveWishlistItemMutation(data: $data) {
    ...WishlistItem
  }
}
    ${WishlistItemFragmentDoc}`;
export const WishlistItemsQueryDocument = gql`
    query WishlistItemsQuery {
  wishlistItemsQuery {
    ...WishlistItem
  }
}
    ${WishlistItemFragmentDoc}`;
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
export const SaveRecipeMutationDocument = gql`
    mutation SaveRecipeMutation($data: RecipeInput!) {
  saveRecipeMutation(data: $data) {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;
export const DeleteRecipeMutationDocument = gql`
    mutation DeleteRecipeMutation($recipeId: String!) {
  deleteRecipeMutation(recipeId: $recipeId)
}
    `;
export const GetRecipesQueryDocument = gql`
    query GetRecipesQuery {
  getRecipesQuery {
    ...Recipe
  }
}
    ${RecipeFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MeQuery(variables?: MeQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MeQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQueryQuery>(MeQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MeQuery', 'query');
    },
    CurrentSavingsQuery(variables?: CurrentSavingsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CurrentSavingsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentSavingsQueryQuery>(CurrentSavingsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CurrentSavingsQuery', 'query');
    },
    DeleteSavingMutation(variables: DeleteSavingMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSavingMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteSavingMutationMutation>(DeleteSavingMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteSavingMutation', 'mutation');
    },
    SaveCurrentSavingMutation(variables: SaveCurrentSavingMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveCurrentSavingMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveCurrentSavingMutationMutation>(SaveCurrentSavingMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveCurrentSavingMutation', 'mutation');
    },
    SaveWishlistItemMutation(variables: SaveWishlistItemMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveWishlistItemMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveWishlistItemMutationMutation>(SaveWishlistItemMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveWishlistItemMutation', 'mutation');
    },
    WishlistItemsQuery(variables?: WishlistItemsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WishlistItemsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WishlistItemsQueryQuery>(WishlistItemsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WishlistItemsQuery', 'query');
    },
    LoginMutation(variables: LoginMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutationMutation>(LoginMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginMutation', 'mutation');
    },
    RegisterMutation(variables: RegisterMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutationMutation>(RegisterMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterMutation', 'mutation');
    },
    SaveRecipeMutation(variables: SaveRecipeMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveRecipeMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveRecipeMutationMutation>(SaveRecipeMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveRecipeMutation', 'mutation');
    },
    DeleteRecipeMutation(variables: DeleteRecipeMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRecipeMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRecipeMutationMutation>(DeleteRecipeMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteRecipeMutation', 'mutation');
    },
    GetRecipesQuery(variables?: GetRecipesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRecipesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRecipesQueryQuery>(GetRecipesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetRecipesQuery', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
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

export type AggregateCategory = {
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
};

export type AggregateColorProportion = {
  _avg: Maybe<ColorProportionAvgAggregate>;
  _count: Maybe<ColorProportionCountAggregate>;
  _max: Maybe<ColorProportionMaxAggregate>;
  _min: Maybe<ColorProportionMinAggregate>;
  _sum: Maybe<ColorProportionSumAggregate>;
};

export type AggregateExpense = {
  _avg: Maybe<ExpenseAvgAggregate>;
  _count: Maybe<ExpenseCountAggregate>;
  _max: Maybe<ExpenseMaxAggregate>;
  _min: Maybe<ExpenseMinAggregate>;
  _sum: Maybe<ExpenseSumAggregate>;
};

export type AggregateIssue = {
  _avg: Maybe<IssueAvgAggregate>;
  _count: Maybe<IssueCountAggregate>;
  _max: Maybe<IssueMaxAggregate>;
  _min: Maybe<IssueMinAggregate>;
  _sum: Maybe<IssueSumAggregate>;
};

export type AggregateIssueLabel = {
  _count: Maybe<IssueLabelCountAggregate>;
  _max: Maybe<IssueLabelMaxAggregate>;
  _min: Maybe<IssueLabelMinAggregate>;
};

export type AggregateMixedColor = {
  _count: Maybe<MixedColorCountAggregate>;
  _max: Maybe<MixedColorMaxAggregate>;
  _min: Maybe<MixedColorMinAggregate>;
};

export type AggregateNhAuthor = {
  _count: Maybe<NhAuthorCountAggregate>;
  _max: Maybe<NhAuthorMaxAggregate>;
  _min: Maybe<NhAuthorMinAggregate>;
};

export type AggregateNhFavorite = {
  _count: Maybe<NhFavoriteCountAggregate>;
  _max: Maybe<NhFavoriteMaxAggregate>;
  _min: Maybe<NhFavoriteMinAggregate>;
};

export type AggregateRawColor = {
  _count: Maybe<RawColorCountAggregate>;
  _max: Maybe<RawColorMaxAggregate>;
  _min: Maybe<RawColorMinAggregate>;
};

export type AggregateRecipe = {
  _avg: Maybe<RecipeAvgAggregate>;
  _count: Maybe<RecipeCountAggregate>;
  _max: Maybe<RecipeMaxAggregate>;
  _min: Maybe<RecipeMinAggregate>;
  _sum: Maybe<RecipeSumAggregate>;
};

export type AggregateSalary = {
  _avg: Maybe<SalaryAvgAggregate>;
  _count: Maybe<SalaryCountAggregate>;
  _max: Maybe<SalaryMaxAggregate>;
  _min: Maybe<SalaryMinAggregate>;
  _sum: Maybe<SalarySumAggregate>;
};

export type AggregateSaving = {
  _avg: Maybe<SavingAvgAggregate>;
  _count: Maybe<SavingCountAggregate>;
  _max: Maybe<SavingMaxAggregate>;
  _min: Maybe<SavingMinAggregate>;
  _sum: Maybe<SavingSumAggregate>;
};

export type AggregateUser = {
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
};

export type AggregateWishlistItem = {
  _avg: Maybe<WishlistItemAvgAggregate>;
  _count: Maybe<WishlistItemCountAggregate>;
  _max: Maybe<WishlistItemMaxAggregate>;
  _min: Maybe<WishlistItemMinAggregate>;
  _sum: Maybe<WishlistItemSumAggregate>;
};

export type AuthUserOutput = {
  email: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type AuthorCount = {
  authorUrl: Scalars['String'];
  count: Scalars['Float'];
};

export type BoolFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedBoolFilter>;
  _min: InputMaybe<NestedBoolFilter>;
  equals: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
  _count: Maybe<CategoryCount>;
  bgColor: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expenses: Array<Expense>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type CategoryExpensesArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  distinct: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};

export type CategoryCount = {
  expenses: Scalars['Int'];
};

export type CategoryCountAggregate = {
  _all: Scalars['Int'];
  bgColor: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutCategoriesInput>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateManyInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CategoryCreateManyUserInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyUserInputEnvelope = {
  data: Array<CategoryCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type CategoryCreateNestedManyWithoutExpensesInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutExpensesInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutExpensesInput>>;
};

export type CategoryCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutUserInput>>;
  createMany: InputMaybe<CategoryCreateManyUserInputEnvelope>;
};

export type CategoryCreateOrConnectWithoutExpensesInput = {
  create: CategoryCreateWithoutExpensesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutUserInput = {
  create: CategoryCreateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutExpensesInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutCategoriesInput;
};

export type CategoryCreateWithoutUserInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutCategoriesInput>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type CategoryGroupBy = {
  _count: Maybe<CategoryCountAggregate>;
  _max: Maybe<CategoryMaxAggregate>;
  _min: Maybe<CategoryMinAggregate>;
  bgColor: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type CategoryInput = {
  bgColor: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every: InputMaybe<CategoryWhereInput>;
  none: InputMaybe<CategoryWhereInput>;
  some: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  bgColor: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CategoryMaxOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  bgColor: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type CategoryMinOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _count: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min: InputMaybe<CategoryMinOrderByAggregateInput>;
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  expenses: InputMaybe<ExpenseOrderByRelationAggregateInput>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  BgColor = 'bgColor',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CategoryScalarWhereInput = {
  AND: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR: InputMaybe<Array<CategoryScalarWhereInput>>;
  bgColor: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  bgColor: InputMaybe<StringWithAggregatesFilter>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  name: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type CategoryUpdateInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutCategoriesNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutCategoriesNestedInput>;
};

export type CategoryUpdateManyMutationInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutExpensesInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithWhereWithoutUserInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutExpensesNestedInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutExpensesInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutExpensesInput>>;
  delete: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutExpensesInput>>;
  updateMany: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutExpensesInput>>;
  upsert: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutExpensesInput>>;
};

export type CategoryUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<CategoryCreateWithoutUserInput>>;
  createMany: InputMaybe<CategoryCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutExpensesInput = {
  data: CategoryUpdateWithoutExpensesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
  data: CategoryUpdateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutExpensesInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutCategoriesNestedInput>;
};

export type CategoryUpdateWithoutUserInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutCategoriesNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutExpensesInput = {
  create: CategoryCreateWithoutExpensesInput;
  update: CategoryUpdateWithoutExpensesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
  create: CategoryCreateWithoutUserInput;
  update: CategoryUpdateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND: InputMaybe<Array<CategoryWhereInput>>;
  NOT: InputMaybe<Array<CategoryWhereInput>>;
  OR: InputMaybe<Array<CategoryWhereInput>>;
  bgColor: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  expenses: InputMaybe<ExpenseListRelationFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type ChangeIssuePositionInput = {
  fromPosition: Scalars['Int'];
  issueId: Scalars['String'];
  toPosition: Scalars['Int'];
};

export type ColorProportion = {
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mixedColor: MixedColor;
  mixedColorId: Scalars['String'];
  proportion: Scalars['Decimal'];
  rawColor: RawColor;
  rawColorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ColorProportionAvgAggregate = {
  proportion: Maybe<Scalars['Decimal']>;
};

export type ColorProportionAvgOrderByAggregateInput = {
  proportion: InputMaybe<SortOrder>;
};

export type ColorProportionCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  mixedColorId: Scalars['Int'];
  proportion: Scalars['Int'];
  rawColorId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ColorProportionCountOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  mixedColorId: InputMaybe<SortOrder>;
  proportion: InputMaybe<SortOrder>;
  rawColorId: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type ColorProportionCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColor: MixedColorCreateNestedOneWithoutColorProportionsInput;
  proportion: Scalars['Decimal'];
  rawColor: RawColorCreateNestedOneWithoutColorProportionsInput;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutColorProportionsInput;
};

export type ColorProportionCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColorId: Scalars['String'];
  proportion: Scalars['Decimal'];
  rawColorId: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ColorProportionCreateManyMixedColorInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  proportion: Scalars['Decimal'];
  rawColorId: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ColorProportionCreateManyMixedColorInputEnvelope = {
  data: Array<ColorProportionCreateManyMixedColorInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type ColorProportionCreateManyRawColorInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColorId: Scalars['String'];
  proportion: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ColorProportionCreateManyRawColorInputEnvelope = {
  data: Array<ColorProportionCreateManyRawColorInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type ColorProportionCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColorId: Scalars['String'];
  proportion: Scalars['Decimal'];
  rawColorId: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ColorProportionCreateManyUserInputEnvelope = {
  data: Array<ColorProportionCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type ColorProportionCreateNestedManyWithoutMixedColorInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutMixedColorInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutMixedColorInput>>;
  createMany: InputMaybe<ColorProportionCreateManyMixedColorInputEnvelope>;
};

export type ColorProportionCreateNestedManyWithoutRawColorInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutRawColorInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutRawColorInput>>;
  createMany: InputMaybe<ColorProportionCreateManyRawColorInputEnvelope>;
};

export type ColorProportionCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutUserInput>>;
  createMany: InputMaybe<ColorProportionCreateManyUserInputEnvelope>;
};

export type ColorProportionCreateOrConnectWithoutMixedColorInput = {
  create: ColorProportionCreateWithoutMixedColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionCreateOrConnectWithoutRawColorInput = {
  create: ColorProportionCreateWithoutRawColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionCreateOrConnectWithoutUserInput = {
  create: ColorProportionCreateWithoutUserInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionCreateWithoutMixedColorInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  proportion: Scalars['Decimal'];
  rawColor: RawColorCreateNestedOneWithoutColorProportionsInput;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutColorProportionsInput;
};

export type ColorProportionCreateWithoutRawColorInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColor: MixedColorCreateNestedOneWithoutColorProportionsInput;
  proportion: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutColorProportionsInput;
};

export type ColorProportionCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColor: MixedColorCreateNestedOneWithoutColorProportionsInput;
  proportion: Scalars['Decimal'];
  rawColor: RawColorCreateNestedOneWithoutColorProportionsInput;
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type ColorProportionGroupBy = {
  _avg: Maybe<ColorProportionAvgAggregate>;
  _count: Maybe<ColorProportionCountAggregate>;
  _max: Maybe<ColorProportionMaxAggregate>;
  _min: Maybe<ColorProportionMinAggregate>;
  _sum: Maybe<ColorProportionSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  mixedColorId: Scalars['String'];
  proportion: Scalars['Decimal'];
  rawColorId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type ColorProportionInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  mixedColorId: InputMaybe<Scalars['String']>;
  proportion: Scalars['String'];
  rawColorId: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['String']>;
};

export type ColorProportionListRelationFilter = {
  every: InputMaybe<ColorProportionWhereInput>;
  none: InputMaybe<ColorProportionWhereInput>;
  some: InputMaybe<ColorProportionWhereInput>;
};

export type ColorProportionMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  mixedColorId: Maybe<Scalars['String']>;
  proportion: Maybe<Scalars['Decimal']>;
  rawColorId: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type ColorProportionMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  mixedColorId: InputMaybe<SortOrder>;
  proportion: InputMaybe<SortOrder>;
  rawColorId: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type ColorProportionMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  mixedColorId: Maybe<Scalars['String']>;
  proportion: Maybe<Scalars['Decimal']>;
  rawColorId: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type ColorProportionMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  mixedColorId: InputMaybe<SortOrder>;
  proportion: InputMaybe<SortOrder>;
  rawColorId: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type ColorProportionOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type ColorProportionOrderByWithAggregationInput = {
  _avg: InputMaybe<ColorProportionAvgOrderByAggregateInput>;
  _count: InputMaybe<ColorProportionCountOrderByAggregateInput>;
  _max: InputMaybe<ColorProportionMaxOrderByAggregateInput>;
  _min: InputMaybe<ColorProportionMinOrderByAggregateInput>;
  _sum: InputMaybe<ColorProportionSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  mixedColorId: InputMaybe<SortOrder>;
  proportion: InputMaybe<SortOrder>;
  rawColorId: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type ColorProportionOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  mixedColor: InputMaybe<MixedColorOrderByWithRelationInput>;
  mixedColorId: InputMaybe<SortOrder>;
  proportion: InputMaybe<SortOrder>;
  rawColor: InputMaybe<RawColorOrderByWithRelationInput>;
  rawColorId: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export enum ColorProportionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MixedColorId = 'mixedColorId',
  Proportion = 'proportion',
  RawColorId = 'rawColorId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ColorProportionScalarWhereInput = {
  AND: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  NOT: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  OR: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  mixedColorId: InputMaybe<StringFilter>;
  proportion: InputMaybe<DecimalFilter>;
  rawColorId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type ColorProportionScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<ColorProportionScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<ColorProportionScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<ColorProportionScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  mixedColorId: InputMaybe<StringWithAggregatesFilter>;
  proportion: InputMaybe<DecimalWithAggregatesFilter>;
  rawColorId: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type ColorProportionSumAggregate = {
  proportion: Maybe<Scalars['Decimal']>;
};

export type ColorProportionSumOrderByAggregateInput = {
  proportion: InputMaybe<SortOrder>;
};

export type ColorProportionUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  mixedColor: InputMaybe<MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  proportion: InputMaybe<DecimalFieldUpdateOperationsInput>;
  rawColor: InputMaybe<RawColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutColorProportionsNestedInput>;
};

export type ColorProportionUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  proportion: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorProportionUpdateManyWithWhereWithoutMixedColorInput = {
  data: ColorProportionUpdateManyMutationInput;
  where: ColorProportionScalarWhereInput;
};

export type ColorProportionUpdateManyWithWhereWithoutRawColorInput = {
  data: ColorProportionUpdateManyMutationInput;
  where: ColorProportionScalarWhereInput;
};

export type ColorProportionUpdateManyWithWhereWithoutUserInput = {
  data: ColorProportionUpdateManyMutationInput;
  where: ColorProportionScalarWhereInput;
};

export type ColorProportionUpdateManyWithoutMixedColorNestedInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutMixedColorInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutMixedColorInput>>;
  createMany: InputMaybe<ColorProportionCreateManyMixedColorInputEnvelope>;
  delete: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  disconnect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  set: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  update: InputMaybe<Array<ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput>>;
  updateMany: InputMaybe<Array<ColorProportionUpdateManyWithWhereWithoutMixedColorInput>>;
  upsert: InputMaybe<Array<ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput>>;
};

export type ColorProportionUpdateManyWithoutRawColorNestedInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutRawColorInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutRawColorInput>>;
  createMany: InputMaybe<ColorProportionCreateManyRawColorInputEnvelope>;
  delete: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  disconnect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  set: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  update: InputMaybe<Array<ColorProportionUpdateWithWhereUniqueWithoutRawColorInput>>;
  updateMany: InputMaybe<Array<ColorProportionUpdateManyWithWhereWithoutRawColorInput>>;
  upsert: InputMaybe<Array<ColorProportionUpsertWithWhereUniqueWithoutRawColorInput>>;
};

export type ColorProportionUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ColorProportionCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ColorProportionCreateWithoutUserInput>>;
  createMany: InputMaybe<ColorProportionCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ColorProportionScalarWhereInput>>;
  disconnect: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  set: InputMaybe<Array<ColorProportionWhereUniqueInput>>;
  update: InputMaybe<Array<ColorProportionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<ColorProportionUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<ColorProportionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ColorProportionUpdateWithWhereUniqueWithoutMixedColorInput = {
  data: ColorProportionUpdateWithoutMixedColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionUpdateWithWhereUniqueWithoutRawColorInput = {
  data: ColorProportionUpdateWithoutRawColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionUpdateWithWhereUniqueWithoutUserInput = {
  data: ColorProportionUpdateWithoutUserInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionUpdateWithoutMixedColorInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  proportion: InputMaybe<DecimalFieldUpdateOperationsInput>;
  rawColor: InputMaybe<RawColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutColorProportionsNestedInput>;
};

export type ColorProportionUpdateWithoutRawColorInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  mixedColor: InputMaybe<MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  proportion: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutColorProportionsNestedInput>;
};

export type ColorProportionUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  mixedColor: InputMaybe<MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  proportion: InputMaybe<DecimalFieldUpdateOperationsInput>;
  rawColor: InputMaybe<RawColorUpdateOneRequiredWithoutColorProportionsNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ColorProportionUpsertWithWhereUniqueWithoutMixedColorInput = {
  create: ColorProportionCreateWithoutMixedColorInput;
  update: ColorProportionUpdateWithoutMixedColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionUpsertWithWhereUniqueWithoutRawColorInput = {
  create: ColorProportionCreateWithoutRawColorInput;
  update: ColorProportionUpdateWithoutRawColorInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionUpsertWithWhereUniqueWithoutUserInput = {
  create: ColorProportionCreateWithoutUserInput;
  update: ColorProportionUpdateWithoutUserInput;
  where: ColorProportionWhereUniqueInput;
};

export type ColorProportionWhereInput = {
  AND: InputMaybe<Array<ColorProportionWhereInput>>;
  NOT: InputMaybe<Array<ColorProportionWhereInput>>;
  OR: InputMaybe<Array<ColorProportionWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  mixedColor: InputMaybe<MixedColorRelationFilter>;
  mixedColorId: InputMaybe<StringFilter>;
  proportion: InputMaybe<DecimalFilter>;
  rawColor: InputMaybe<RawColorRelationFilter>;
  rawColorId: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type ColorProportionWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedDateTimeNullableFilter>;
  _min: InputMaybe<NestedDateTimeNullableFilter>;
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedDateTimeFilter>;
  _min: InputMaybe<NestedDateTimeFilter>;
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Decimal']>;
  divide: InputMaybe<Scalars['Decimal']>;
  increment: InputMaybe<Scalars['Decimal']>;
  multiply: InputMaybe<Scalars['Decimal']>;
  set: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableFilter = {
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableWithAggregatesFilter = {
  _avg: InputMaybe<NestedDecimalNullableFilter>;
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedDecimalNullableFilter>;
  _min: InputMaybe<NestedDecimalNullableFilter>;
  _sum: InputMaybe<NestedDecimalNullableFilter>;
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg: InputMaybe<NestedDecimalFilter>;
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedDecimalFilter>;
  _min: InputMaybe<NestedDecimalFilter>;
  _sum: InputMaybe<NestedDecimalFilter>;
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type Expense = {
  _count: Maybe<ExpenseCount>;
  categories: Array<Category>;
  createdAt: Scalars['DateTime'];
  date: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  rating: Maybe<Scalars['Int']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};


export type ExpenseCategoriesArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};

export type ExpenseAvgAggregate = {
  rating: Maybe<Scalars['Float']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  value: Maybe<Scalars['Decimal']>;
};

export type ExpenseAvgOrderByAggregateInput = {
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseCount = {
  categories: Scalars['Int'];
};

export type ExpenseCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  rating: Scalars['Int'];
  timesPerMonth: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type ExpenseCountOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseCreateInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutExpensesInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Int']>;
  timesPerMonth: InputMaybe<Scalars['Decimal']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutExpensesInput;
  value: Scalars['Decimal'];
};

export type ExpenseCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Int']>;
  timesPerMonth: InputMaybe<Scalars['Decimal']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type ExpenseCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Int']>;
  timesPerMonth: InputMaybe<Scalars['Decimal']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type ExpenseCreateManyUserInputEnvelope = {
  data: Array<ExpenseCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type ExpenseCreateNestedManyWithoutCategoriesInput = {
  connect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ExpenseCreateOrConnectWithoutCategoriesInput>>;
  create: InputMaybe<Array<ExpenseCreateWithoutCategoriesInput>>;
};

export type ExpenseCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ExpenseCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ExpenseCreateWithoutUserInput>>;
  createMany: InputMaybe<ExpenseCreateManyUserInputEnvelope>;
};

export type ExpenseCreateOrConnectWithoutCategoriesInput = {
  create: ExpenseCreateWithoutCategoriesInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutUserInput = {
  create: ExpenseCreateWithoutUserInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateWithoutCategoriesInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Int']>;
  timesPerMonth: InputMaybe<Scalars['Decimal']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutExpensesInput;
  value: Scalars['Decimal'];
};

export type ExpenseCreateWithoutUserInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutExpensesInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Int']>;
  timesPerMonth: InputMaybe<Scalars['Decimal']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type ExpenseFilterInput = {
  expensesByText: InputMaybe<Scalars['String']>;
};

export type ExpenseGroupBy = {
  _avg: Maybe<ExpenseAvgAggregate>;
  _count: Maybe<ExpenseCountAggregate>;
  _max: Maybe<ExpenseMaxAggregate>;
  _min: Maybe<ExpenseMinAggregate>;
  _sum: Maybe<ExpenseSumAggregate>;
  createdAt: Scalars['DateTime'];
  date: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  rating: Maybe<Scalars['Int']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type ExpenseInput = {
  categoryIds: InputMaybe<Array<Scalars['String']>>;
  date: InputMaybe<Scalars['DateTime']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating: InputMaybe<Scalars['Float']>;
  timesPerMonth: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type ExpenseListRelationFilter = {
  every: InputMaybe<ExpenseWhereInput>;
  none: InputMaybe<ExpenseWhereInput>;
  some: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  date: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Decimal']>;
};

export type ExpenseMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  date: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Decimal']>;
};

export type ExpenseMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type ExpenseOrderByWithAggregationInput = {
  _avg: InputMaybe<ExpenseAvgOrderByAggregateInput>;
  _count: InputMaybe<ExpenseCountOrderByAggregateInput>;
  _max: InputMaybe<ExpenseMaxOrderByAggregateInput>;
  _min: InputMaybe<ExpenseMinOrderByAggregateInput>;
  _sum: InputMaybe<ExpenseSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseOrderByWithRelationInput = {
  categories: InputMaybe<CategoryOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export enum ExpenseScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Rating = 'rating',
  TimesPerMonth = 'timesPerMonth',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Value = 'value'
}

export type ExpenseScalarWhereInput = {
  AND: InputMaybe<Array<ExpenseScalarWhereInput>>;
  NOT: InputMaybe<Array<ExpenseScalarWhereInput>>;
  OR: InputMaybe<Array<ExpenseScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  date: InputMaybe<DateTimeNullableFilter>;
  description: InputMaybe<StringNullableFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  rating: InputMaybe<IntNullableFilter>;
  timesPerMonth: InputMaybe<DecimalNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
  value: InputMaybe<DecimalFilter>;
};

export type ExpenseScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<ExpenseScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<ExpenseScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<ExpenseScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  date: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description: InputMaybe<StringNullableWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  name: InputMaybe<StringWithAggregatesFilter>;
  rating: InputMaybe<IntNullableWithAggregatesFilter>;
  timesPerMonth: InputMaybe<DecimalNullableWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
  value: InputMaybe<DecimalWithAggregatesFilter>;
};

export type ExpenseSumAggregate = {
  rating: Maybe<Scalars['Int']>;
  timesPerMonth: Maybe<Scalars['Decimal']>;
  value: Maybe<Scalars['Decimal']>;
};

export type ExpenseSumOrderByAggregateInput = {
  rating: InputMaybe<SortOrder>;
  timesPerMonth: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type ExpenseUpdateInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutExpensesNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  timesPerMonth: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ExpenseUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  timesPerMonth: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ExpenseUpdateManyWithWhereWithoutCategoriesInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithWhereWithoutUserInput = {
  data: ExpenseUpdateManyMutationInput;
  where: ExpenseScalarWhereInput;
};

export type ExpenseUpdateManyWithoutCategoriesNestedInput = {
  connect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ExpenseCreateOrConnectWithoutCategoriesInput>>;
  create: InputMaybe<Array<ExpenseCreateWithoutCategoriesInput>>;
  delete: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type ExpenseUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<ExpenseCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<ExpenseCreateWithoutUserInput>>;
  createMany: InputMaybe<ExpenseCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<ExpenseScalarWhereInput>>;
  disconnect: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  set: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  update: InputMaybe<Array<ExpenseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<ExpenseUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<ExpenseUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ExpenseUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: ExpenseUpdateWithoutCategoriesInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
  data: ExpenseUpdateWithoutUserInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpdateWithoutCategoriesInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  timesPerMonth: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutExpensesNestedInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ExpenseUpdateWithoutUserInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutExpensesNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  timesPerMonth: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type ExpenseUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: ExpenseCreateWithoutCategoriesInput;
  update: ExpenseUpdateWithoutCategoriesInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
  create: ExpenseCreateWithoutUserInput;
  update: ExpenseUpdateWithoutUserInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseWhereInput = {
  AND: InputMaybe<Array<ExpenseWhereInput>>;
  NOT: InputMaybe<Array<ExpenseWhereInput>>;
  OR: InputMaybe<Array<ExpenseWhereInput>>;
  categories: InputMaybe<CategoryListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  date: InputMaybe<DateTimeNullableFilter>;
  description: InputMaybe<StringNullableFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  rating: InputMaybe<IntNullableFilter>;
  timesPerMonth: InputMaybe<DecimalNullableFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
  value: InputMaybe<DecimalFilter>;
};

export type ExpenseWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Int']>;
  divide: InputMaybe<Scalars['Int']>;
  increment: InputMaybe<Scalars['Int']>;
  multiply: InputMaybe<Scalars['Int']>;
  set: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg: InputMaybe<NestedFloatNullableFilter>;
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedIntNullableFilter>;
  _min: InputMaybe<NestedIntNullableFilter>;
  _sum: InputMaybe<NestedIntNullableFilter>;
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg: InputMaybe<NestedFloatFilter>;
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedIntFilter>;
  _min: InputMaybe<NestedIntFilter>;
  _sum: InputMaybe<NestedIntFilter>;
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type Issue = {
  _count: Maybe<IssueCount>;
  createdAt: Scalars['DateTime'];
  frequency: Scalars['Int'];
  id: Scalars['String'];
  intensity: Scalars['Int'];
  isSolved: Scalars['Boolean'];
  labels: Array<IssueLabel>;
  position: Scalars['Int'];
  solution: Scalars['String'];
  solvedAt: Maybe<Scalars['DateTime']>;
  solvedPosition: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type IssueLabelsArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};

export type IssueAvgAggregate = {
  frequency: Maybe<Scalars['Float']>;
  intensity: Maybe<Scalars['Float']>;
  position: Maybe<Scalars['Float']>;
  solvedPosition: Maybe<Scalars['Float']>;
};

export type IssueAvgOrderByAggregateInput = {
  frequency: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
};

export type IssueCount = {
  labels: Scalars['Int'];
};

export type IssueCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  frequency: Scalars['Int'];
  id: Scalars['Int'];
  intensity: Scalars['Int'];
  isSolved: Scalars['Int'];
  position: Scalars['Int'];
  solution: Scalars['Int'];
  solvedAt: Scalars['Int'];
  solvedPosition: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type IssueCountOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  frequency: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  isSolved: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solution: InputMaybe<SortOrder>;
  solvedAt: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  intensity: InputMaybe<Scalars['Int']>;
  isSolved: InputMaybe<Scalars['Boolean']>;
  labels: InputMaybe<IssueLabelCreateNestedManyWithoutIssuesInput>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  solvedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIssuesInput;
};

export type IssueCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  intensity: InputMaybe<Scalars['Int']>;
  isSolved: InputMaybe<Scalars['Boolean']>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  solvedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IssueCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  intensity: InputMaybe<Scalars['Int']>;
  isSolved: InputMaybe<Scalars['Boolean']>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  solvedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type IssueCreateManyUserInputEnvelope = {
  data: Array<IssueCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type IssueCreateNestedManyWithoutLabelsInput = {
  connect: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueCreateOrConnectWithoutLabelsInput>>;
  create: InputMaybe<Array<IssueCreateWithoutLabelsInput>>;
};

export type IssueCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<IssueCreateWithoutUserInput>>;
  createMany: InputMaybe<IssueCreateManyUserInputEnvelope>;
};

export type IssueCreateOrConnectWithoutLabelsInput = {
  create: IssueCreateWithoutLabelsInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutUserInput = {
  create: IssueCreateWithoutUserInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateWithoutLabelsInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  intensity: InputMaybe<Scalars['Int']>;
  isSolved: InputMaybe<Scalars['Boolean']>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  solvedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIssuesInput;
};

export type IssueCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  intensity: InputMaybe<Scalars['Int']>;
  isSolved: InputMaybe<Scalars['Boolean']>;
  labels: InputMaybe<IssueLabelCreateNestedManyWithoutIssuesInput>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  solvedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type IssueGroupBy = {
  _avg: Maybe<IssueAvgAggregate>;
  _count: Maybe<IssueCountAggregate>;
  _max: Maybe<IssueMaxAggregate>;
  _min: Maybe<IssueMinAggregate>;
  _sum: Maybe<IssueSumAggregate>;
  createdAt: Scalars['DateTime'];
  frequency: Scalars['Int'];
  id: Scalars['String'];
  intensity: Scalars['Int'];
  isSolved: Scalars['Boolean'];
  position: Scalars['Int'];
  solution: Scalars['String'];
  solvedAt: Maybe<Scalars['DateTime']>;
  solvedPosition: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type IssueInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  frequency: Scalars['Int'];
  id: InputMaybe<Scalars['String']>;
  intensity: Scalars['Int'];
  isSolved: Scalars['Boolean'];
  labelIds: InputMaybe<Array<Scalars['String']>>;
  position: InputMaybe<Scalars['Int']>;
  solution: Scalars['String'];
  solvedAt: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['String']>;
};

export type IssueLabel = {
  _count: Maybe<IssueLabelCount>;
  bgColor: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  issues: Array<Issue>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type IssueLabelIssuesArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};

export type IssueLabelCount = {
  issues: Scalars['Int'];
};

export type IssueLabelCountAggregate = {
  _all: Scalars['Int'];
  bgColor: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type IssueLabelCountOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueLabelCreateInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  issues: InputMaybe<IssueCreateNestedManyWithoutLabelsInput>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIssueLabelsInput;
};

export type IssueLabelCreateManyInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type IssueLabelCreateManyUserInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type IssueLabelCreateManyUserInputEnvelope = {
  data: Array<IssueLabelCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type IssueLabelCreateNestedManyWithoutIssuesInput = {
  connect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueLabelCreateOrConnectWithoutIssuesInput>>;
  create: InputMaybe<Array<IssueLabelCreateWithoutIssuesInput>>;
};

export type IssueLabelCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueLabelCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<IssueLabelCreateWithoutUserInput>>;
  createMany: InputMaybe<IssueLabelCreateManyUserInputEnvelope>;
};

export type IssueLabelCreateOrConnectWithoutIssuesInput = {
  create: IssueLabelCreateWithoutIssuesInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelCreateOrConnectWithoutUserInput = {
  create: IssueLabelCreateWithoutUserInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelCreateWithoutIssuesInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutIssueLabelsInput;
};

export type IssueLabelCreateWithoutUserInput = {
  bgColor: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  issues: InputMaybe<IssueCreateNestedManyWithoutLabelsInput>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type IssueLabelGroupBy = {
  _count: Maybe<IssueLabelCountAggregate>;
  _max: Maybe<IssueLabelMaxAggregate>;
  _min: Maybe<IssueLabelMinAggregate>;
  bgColor: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type IssueLabelInput = {
  bgColor: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type IssueLabelListRelationFilter = {
  every: InputMaybe<IssueLabelWhereInput>;
  none: InputMaybe<IssueLabelWhereInput>;
  some: InputMaybe<IssueLabelWhereInput>;
};

export type IssueLabelMaxAggregate = {
  bgColor: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type IssueLabelMaxOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueLabelMinAggregate = {
  bgColor: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type IssueLabelMinOrderByAggregateInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByWithAggregationInput = {
  _count: InputMaybe<IssueLabelCountOrderByAggregateInput>;
  _max: InputMaybe<IssueLabelMaxOrderByAggregateInput>;
  _min: InputMaybe<IssueLabelMinOrderByAggregateInput>;
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByWithRelationInput = {
  bgColor: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  issues: InputMaybe<IssueOrderByRelationAggregateInput>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export enum IssueLabelScalarFieldEnum {
  BgColor = 'bgColor',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type IssueLabelScalarWhereInput = {
  AND: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  NOT: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  OR: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  bgColor: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type IssueLabelScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  bgColor: InputMaybe<StringWithAggregatesFilter>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  name: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type IssueLabelUpdateInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issues: InputMaybe<IssueUpdateManyWithoutLabelsNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutIssueLabelsNestedInput>;
};

export type IssueLabelUpdateManyMutationInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueLabelUpdateManyWithWhereWithoutIssuesInput = {
  data: IssueLabelUpdateManyMutationInput;
  where: IssueLabelScalarWhereInput;
};

export type IssueLabelUpdateManyWithWhereWithoutUserInput = {
  data: IssueLabelUpdateManyMutationInput;
  where: IssueLabelScalarWhereInput;
};

export type IssueLabelUpdateManyWithoutIssuesNestedInput = {
  connect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueLabelCreateOrConnectWithoutIssuesInput>>;
  create: InputMaybe<Array<IssueLabelCreateWithoutIssuesInput>>;
  delete: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  disconnect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  set: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  update: InputMaybe<Array<IssueLabelUpdateWithWhereUniqueWithoutIssuesInput>>;
  updateMany: InputMaybe<Array<IssueLabelUpdateManyWithWhereWithoutIssuesInput>>;
  upsert: InputMaybe<Array<IssueLabelUpsertWithWhereUniqueWithoutIssuesInput>>;
};

export type IssueLabelUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueLabelCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<IssueLabelCreateWithoutUserInput>>;
  createMany: InputMaybe<IssueLabelCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  disconnect: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  set: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  update: InputMaybe<Array<IssueLabelUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<IssueLabelUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<IssueLabelUpsertWithWhereUniqueWithoutUserInput>>;
};

export type IssueLabelUpdateWithWhereUniqueWithoutIssuesInput = {
  data: IssueLabelUpdateWithoutIssuesInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpdateWithWhereUniqueWithoutUserInput = {
  data: IssueLabelUpdateWithoutUserInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpdateWithoutIssuesInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutIssueLabelsNestedInput>;
};

export type IssueLabelUpdateWithoutUserInput = {
  bgColor: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issues: InputMaybe<IssueUpdateManyWithoutLabelsNestedInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueLabelUpsertWithWhereUniqueWithoutIssuesInput = {
  create: IssueLabelCreateWithoutIssuesInput;
  update: IssueLabelUpdateWithoutIssuesInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpsertWithWhereUniqueWithoutUserInput = {
  create: IssueLabelCreateWithoutUserInput;
  update: IssueLabelUpdateWithoutUserInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelWhereInput = {
  AND: InputMaybe<Array<IssueLabelWhereInput>>;
  NOT: InputMaybe<Array<IssueLabelWhereInput>>;
  OR: InputMaybe<Array<IssueLabelWhereInput>>;
  bgColor: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  issues: InputMaybe<IssueListRelationFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type IssueLabelWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type IssueListRelationFilter = {
  every: InputMaybe<IssueWhereInput>;
  none: InputMaybe<IssueWhereInput>;
  some: InputMaybe<IssueWhereInput>;
};

export type IssueMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  frequency: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  intensity: Maybe<Scalars['Int']>;
  isSolved: Maybe<Scalars['Boolean']>;
  position: Maybe<Scalars['Int']>;
  solution: Maybe<Scalars['String']>;
  solvedAt: Maybe<Scalars['DateTime']>;
  solvedPosition: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type IssueMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  frequency: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  isSolved: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solution: InputMaybe<SortOrder>;
  solvedAt: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  frequency: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  intensity: Maybe<Scalars['Int']>;
  isSolved: Maybe<Scalars['Boolean']>;
  position: Maybe<Scalars['Int']>;
  solution: Maybe<Scalars['String']>;
  solvedAt: Maybe<Scalars['DateTime']>;
  solvedPosition: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type IssueMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  frequency: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  isSolved: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solution: InputMaybe<SortOrder>;
  solvedAt: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type IssueOrderByWithAggregationInput = {
  _avg: InputMaybe<IssueAvgOrderByAggregateInput>;
  _count: InputMaybe<IssueCountOrderByAggregateInput>;
  _max: InputMaybe<IssueMaxOrderByAggregateInput>;
  _min: InputMaybe<IssueMinOrderByAggregateInput>;
  _sum: InputMaybe<IssueSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  frequency: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  isSolved: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solution: InputMaybe<SortOrder>;
  solvedAt: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type IssueOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  frequency: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  isSolved: InputMaybe<SortOrder>;
  labels: InputMaybe<IssueLabelOrderByRelationAggregateInput>;
  position: InputMaybe<SortOrder>;
  solution: InputMaybe<SortOrder>;
  solvedAt: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export enum IssueScalarFieldEnum {
  CreatedAt = 'createdAt',
  Frequency = 'frequency',
  Id = 'id',
  Intensity = 'intensity',
  IsSolved = 'isSolved',
  Position = 'position',
  Solution = 'solution',
  SolvedAt = 'solvedAt',
  SolvedPosition = 'solvedPosition',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type IssueScalarWhereInput = {
  AND: InputMaybe<Array<IssueScalarWhereInput>>;
  NOT: InputMaybe<Array<IssueScalarWhereInput>>;
  OR: InputMaybe<Array<IssueScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  frequency: InputMaybe<IntFilter>;
  id: InputMaybe<StringFilter>;
  intensity: InputMaybe<IntFilter>;
  isSolved: InputMaybe<BoolFilter>;
  position: InputMaybe<IntFilter>;
  solution: InputMaybe<StringFilter>;
  solvedAt: InputMaybe<DateTimeNullableFilter>;
  solvedPosition: InputMaybe<IntFilter>;
  title: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type IssueScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  frequency: InputMaybe<IntWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  intensity: InputMaybe<IntWithAggregatesFilter>;
  isSolved: InputMaybe<BoolWithAggregatesFilter>;
  position: InputMaybe<IntWithAggregatesFilter>;
  solution: InputMaybe<StringWithAggregatesFilter>;
  solvedAt: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  solvedPosition: InputMaybe<IntWithAggregatesFilter>;
  title: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type IssueSumAggregate = {
  frequency: Maybe<Scalars['Int']>;
  intensity: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['Int']>;
  solvedPosition: Maybe<Scalars['Int']>;
};

export type IssueSumOrderByAggregateInput = {
  frequency: InputMaybe<SortOrder>;
  intensity: InputMaybe<SortOrder>;
  position: InputMaybe<SortOrder>;
  solvedPosition: InputMaybe<SortOrder>;
};

export type IssueUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  frequency: InputMaybe<IntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  intensity: InputMaybe<IntFieldUpdateOperationsInput>;
  isSolved: InputMaybe<BoolFieldUpdateOperationsInput>;
  labels: InputMaybe<IssueLabelUpdateManyWithoutIssuesNestedInput>;
  position: InputMaybe<IntFieldUpdateOperationsInput>;
  solution: InputMaybe<StringFieldUpdateOperationsInput>;
  solvedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  solvedPosition: InputMaybe<IntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutIssuesNestedInput>;
};

export type IssueUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  frequency: InputMaybe<IntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  intensity: InputMaybe<IntFieldUpdateOperationsInput>;
  isSolved: InputMaybe<BoolFieldUpdateOperationsInput>;
  position: InputMaybe<IntFieldUpdateOperationsInput>;
  solution: InputMaybe<StringFieldUpdateOperationsInput>;
  solvedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  solvedPosition: InputMaybe<IntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateManyWithWhereWithoutLabelsInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutUserInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithoutLabelsNestedInput = {
  connect: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueCreateOrConnectWithoutLabelsInput>>;
  create: InputMaybe<Array<IssueCreateWithoutLabelsInput>>;
  delete: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect: InputMaybe<Array<IssueWhereUniqueInput>>;
  set: InputMaybe<Array<IssueWhereUniqueInput>>;
  update: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutLabelsInput>>;
  updateMany: InputMaybe<Array<IssueUpdateManyWithWhereWithoutLabelsInput>>;
  upsert: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutLabelsInput>>;
};

export type IssueUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<IssueCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<IssueCreateWithoutUserInput>>;
  createMany: InputMaybe<IssueCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect: InputMaybe<Array<IssueWhereUniqueInput>>;
  set: InputMaybe<Array<IssueWhereUniqueInput>>;
  update: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<IssueUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutUserInput>>;
};

export type IssueUpdateWithWhereUniqueWithoutLabelsInput = {
  data: IssueUpdateWithoutLabelsInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutUserInput = {
  data: IssueUpdateWithoutUserInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithoutLabelsInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  frequency: InputMaybe<IntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  intensity: InputMaybe<IntFieldUpdateOperationsInput>;
  isSolved: InputMaybe<BoolFieldUpdateOperationsInput>;
  position: InputMaybe<IntFieldUpdateOperationsInput>;
  solution: InputMaybe<StringFieldUpdateOperationsInput>;
  solvedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  solvedPosition: InputMaybe<IntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutIssuesNestedInput>;
};

export type IssueUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  frequency: InputMaybe<IntFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  intensity: InputMaybe<IntFieldUpdateOperationsInput>;
  isSolved: InputMaybe<BoolFieldUpdateOperationsInput>;
  labels: InputMaybe<IssueLabelUpdateManyWithoutIssuesNestedInput>;
  position: InputMaybe<IntFieldUpdateOperationsInput>;
  solution: InputMaybe<StringFieldUpdateOperationsInput>;
  solvedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  solvedPosition: InputMaybe<IntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpsertWithWhereUniqueWithoutLabelsInput = {
  create: IssueCreateWithoutLabelsInput;
  update: IssueUpdateWithoutLabelsInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutUserInput = {
  create: IssueCreateWithoutUserInput;
  update: IssueUpdateWithoutUserInput;
  where: IssueWhereUniqueInput;
};

export type IssueWhereInput = {
  AND: InputMaybe<Array<IssueWhereInput>>;
  NOT: InputMaybe<Array<IssueWhereInput>>;
  OR: InputMaybe<Array<IssueWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  frequency: InputMaybe<IntFilter>;
  id: InputMaybe<StringFilter>;
  intensity: InputMaybe<IntFilter>;
  isSolved: InputMaybe<BoolFilter>;
  labels: InputMaybe<IssueLabelListRelationFilter>;
  position: InputMaybe<IntFilter>;
  solution: InputMaybe<StringFilter>;
  solvedAt: InputMaybe<DateTimeNullableFilter>;
  solvedPosition: InputMaybe<IntFilter>;
  title: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type IssueWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type LoginValidInput = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type MixedColor = {
  _count: Maybe<MixedColorCount>;
  color: Scalars['String'];
  colorProportions: Array<ColorProportion>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type MixedColorColorProportionsArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};

export type MixedColorCount = {
  colorProportions: Scalars['Int'];
};

export type MixedColorCountAggregate = {
  _all: Scalars['Int'];
  color: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MixedColorCountOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type MixedColorCreateInput = {
  color: Scalars['String'];
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutMixedColorInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutMixedColorsInput;
};

export type MixedColorCreateManyInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MixedColorCreateManyUserInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type MixedColorCreateManyUserInputEnvelope = {
  data: Array<MixedColorCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type MixedColorCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<MixedColorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MixedColorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<MixedColorCreateWithoutUserInput>>;
  createMany: InputMaybe<MixedColorCreateManyUserInputEnvelope>;
};

export type MixedColorCreateNestedOneWithoutColorProportionsInput = {
  connect: InputMaybe<MixedColorWhereUniqueInput>;
  connectOrCreate: InputMaybe<MixedColorCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<MixedColorCreateWithoutColorProportionsInput>;
};

export type MixedColorCreateOrConnectWithoutColorProportionsInput = {
  create: MixedColorCreateWithoutColorProportionsInput;
  where: MixedColorWhereUniqueInput;
};

export type MixedColorCreateOrConnectWithoutUserInput = {
  create: MixedColorCreateWithoutUserInput;
  where: MixedColorWhereUniqueInput;
};

export type MixedColorCreateWithoutColorProportionsInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutMixedColorsInput;
};

export type MixedColorCreateWithoutUserInput = {
  color: Scalars['String'];
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutMixedColorInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type MixedColorGroupBy = {
  _count: Maybe<MixedColorCountAggregate>;
  _max: Maybe<MixedColorMaxAggregate>;
  _min: Maybe<MixedColorMinAggregate>;
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MixedColorInput = {
  color: Scalars['String'];
  colorProportions: InputMaybe<Array<ColorProportionInput>>;
  createdAt: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['String']>;
};

export type MixedColorListRelationFilter = {
  every: InputMaybe<MixedColorWhereInput>;
  none: InputMaybe<MixedColorWhereInput>;
  some: InputMaybe<MixedColorWhereInput>;
};

export type MixedColorMaxAggregate = {
  color: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type MixedColorMaxOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type MixedColorMinAggregate = {
  color: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type MixedColorMinOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type MixedColorOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type MixedColorOrderByWithAggregationInput = {
  _count: InputMaybe<MixedColorCountOrderByAggregateInput>;
  _max: InputMaybe<MixedColorMaxOrderByAggregateInput>;
  _min: InputMaybe<MixedColorMinOrderByAggregateInput>;
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type MixedColorOrderByWithRelationInput = {
  color: InputMaybe<SortOrder>;
  colorProportions: InputMaybe<ColorProportionOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export type MixedColorRelationFilter = {
  is: InputMaybe<MixedColorWhereInput>;
  isNot: InputMaybe<MixedColorWhereInput>;
};

export enum MixedColorScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type MixedColorScalarWhereInput = {
  AND: InputMaybe<Array<MixedColorScalarWhereInput>>;
  NOT: InputMaybe<Array<MixedColorScalarWhereInput>>;
  OR: InputMaybe<Array<MixedColorScalarWhereInput>>;
  color: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type MixedColorScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<MixedColorScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<MixedColorScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<MixedColorScalarWhereWithAggregatesInput>>;
  color: InputMaybe<StringWithAggregatesFilter>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  name: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type MixedColorUpdateInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutMixedColorNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutMixedColorsNestedInput>;
};

export type MixedColorUpdateManyMutationInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MixedColorUpdateManyWithWhereWithoutUserInput = {
  data: MixedColorUpdateManyMutationInput;
  where: MixedColorScalarWhereInput;
};

export type MixedColorUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<MixedColorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<MixedColorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<MixedColorCreateWithoutUserInput>>;
  createMany: InputMaybe<MixedColorCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<MixedColorWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<MixedColorScalarWhereInput>>;
  disconnect: InputMaybe<Array<MixedColorWhereUniqueInput>>;
  set: InputMaybe<Array<MixedColorWhereUniqueInput>>;
  update: InputMaybe<Array<MixedColorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<MixedColorUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<MixedColorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MixedColorUpdateOneRequiredWithoutColorProportionsNestedInput = {
  connect: InputMaybe<MixedColorWhereUniqueInput>;
  connectOrCreate: InputMaybe<MixedColorCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<MixedColorCreateWithoutColorProportionsInput>;
  update: InputMaybe<MixedColorUpdateWithoutColorProportionsInput>;
  upsert: InputMaybe<MixedColorUpsertWithoutColorProportionsInput>;
};

export type MixedColorUpdateWithWhereUniqueWithoutUserInput = {
  data: MixedColorUpdateWithoutUserInput;
  where: MixedColorWhereUniqueInput;
};

export type MixedColorUpdateWithoutColorProportionsInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutMixedColorsNestedInput>;
};

export type MixedColorUpdateWithoutUserInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutMixedColorNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MixedColorUpsertWithWhereUniqueWithoutUserInput = {
  create: MixedColorCreateWithoutUserInput;
  update: MixedColorUpdateWithoutUserInput;
  where: MixedColorWhereUniqueInput;
};

export type MixedColorUpsertWithoutColorProportionsInput = {
  create: MixedColorCreateWithoutColorProportionsInput;
  update: MixedColorUpdateWithoutColorProportionsInput;
};

export type MixedColorWhereInput = {
  AND: InputMaybe<Array<MixedColorWhereInput>>;
  NOT: InputMaybe<Array<MixedColorWhereInput>>;
  OR: InputMaybe<Array<MixedColorWhereInput>>;
  color: InputMaybe<StringFilter>;
  colorProportions: InputMaybe<ColorProportionListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type MixedColorWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  changeIssuePositionMutation: Scalars['Boolean'];
  createManyCategory: AffectedRowsOutput;
  createManyColorProportion: AffectedRowsOutput;
  createManyExpense: AffectedRowsOutput;
  createManyIssue: AffectedRowsOutput;
  createManyIssueLabel: AffectedRowsOutput;
  createManyMixedColor: AffectedRowsOutput;
  createManyNhAuthor: AffectedRowsOutput;
  createManyNhFavorite: AffectedRowsOutput;
  createManyRawColor: AffectedRowsOutput;
  createManyRecipe: AffectedRowsOutput;
  createManySalary: AffectedRowsOutput;
  createManySaving: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWishlistItem: AffectedRowsOutput;
  createOneCategory: Category;
  createOneColorProportion: ColorProportion;
  createOneExpense: Expense;
  createOneIssue: Issue;
  createOneIssueLabel: IssueLabel;
  createOneMixedColor: MixedColor;
  createOneNhAuthor: NhAuthor;
  createOneNhFavorite: NhFavorite;
  createOneRawColor: RawColor;
  createOneRecipe: Recipe;
  createOneSalary: Salary;
  createOneSaving: Saving;
  createOneUser: User;
  createOneWishlistItem: WishlistItem;
  deleteCategoryMutation: Scalars['Boolean'];
  deleteExpenseMutation: Scalars['Boolean'];
  deleteIssueLabelMutation: Scalars['Boolean'];
  deleteIssueMutation: Scalars['Boolean'];
  deleteManyCategory: AffectedRowsOutput;
  deleteManyColorProportion: AffectedRowsOutput;
  deleteManyExpense: AffectedRowsOutput;
  deleteManyIssue: AffectedRowsOutput;
  deleteManyIssueLabel: AffectedRowsOutput;
  deleteManyMixedColor: AffectedRowsOutput;
  deleteManyNhAuthor: AffectedRowsOutput;
  deleteManyNhFavorite: AffectedRowsOutput;
  deleteManyRawColor: AffectedRowsOutput;
  deleteManyRecipe: AffectedRowsOutput;
  deleteManySalary: AffectedRowsOutput;
  deleteManySaving: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWishlistItem: AffectedRowsOutput;
  deleteOneCategory: Maybe<Category>;
  deleteOneColorProportion: Maybe<ColorProportion>;
  deleteOneExpense: Maybe<Expense>;
  deleteOneIssue: Maybe<Issue>;
  deleteOneIssueLabel: Maybe<IssueLabel>;
  deleteOneMixedColor: Maybe<MixedColor>;
  deleteOneNhAuthor: Maybe<NhAuthor>;
  deleteOneNhFavorite: Maybe<NhFavorite>;
  deleteOneRawColor: Maybe<RawColor>;
  deleteOneRecipe: Maybe<Recipe>;
  deleteOneSalary: Maybe<Salary>;
  deleteOneSaving: Maybe<Saving>;
  deleteOneUser: Maybe<User>;
  deleteOneWishlistItem: Maybe<WishlistItem>;
  deleteRecipeMutation: Scalars['Boolean'];
  deleteSavingMutation: Scalars['Boolean'];
  deleteWishlistMutation: Scalars['Boolean'];
  loginMutation: AuthUserOutput;
  registerMutation: AuthUserOutput;
  saveCategoryMutation: Category;
  saveExpenseMutation: Expense;
  saveIssueLabelMutation: IssueLabel;
  saveIssueMutation: Issue;
  saveMixedColorMutation: MixedColor;
  saveRawColorMutation: RawColor;
  saveRecipeMutation: Recipe;
  saveSalaryMutation: Salary;
  saveSavingMutation: Saving;
  saveWishlistItemMutation: WishlistItem;
  toggleNhAuthorMutation: NhAuthor;
  updateManyCategory: AffectedRowsOutput;
  updateManyColorProportion: AffectedRowsOutput;
  updateManyExpense: AffectedRowsOutput;
  updateManyIssue: AffectedRowsOutput;
  updateManyIssueLabel: AffectedRowsOutput;
  updateManyMixedColor: AffectedRowsOutput;
  updateManyNhAuthor: AffectedRowsOutput;
  updateManyNhFavorite: AffectedRowsOutput;
  updateManyRawColor: AffectedRowsOutput;
  updateManyRecipe: AffectedRowsOutput;
  updateManySalary: AffectedRowsOutput;
  updateManySaving: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWishlistItem: AffectedRowsOutput;
  updateOneCategory: Maybe<Category>;
  updateOneColorProportion: Maybe<ColorProportion>;
  updateOneExpense: Maybe<Expense>;
  updateOneIssue: Maybe<Issue>;
  updateOneIssueLabel: Maybe<IssueLabel>;
  updateOneMixedColor: Maybe<MixedColor>;
  updateOneNhAuthor: Maybe<NhAuthor>;
  updateOneNhFavorite: Maybe<NhFavorite>;
  updateOneRawColor: Maybe<RawColor>;
  updateOneRecipe: Maybe<Recipe>;
  updateOneSalary: Maybe<Salary>;
  updateOneSaving: Maybe<Saving>;
  updateOneUser: Maybe<User>;
  updateOneWishlistItem: Maybe<WishlistItem>;
  upsertOneCategory: Category;
  upsertOneColorProportion: ColorProportion;
  upsertOneExpense: Expense;
  upsertOneIssue: Issue;
  upsertOneIssueLabel: IssueLabel;
  upsertOneMixedColor: MixedColor;
  upsertOneNhAuthor: NhAuthor;
  upsertOneNhFavorite: NhFavorite;
  upsertOneRawColor: RawColor;
  upsertOneRecipe: Recipe;
  upsertOneSalary: Salary;
  upsertOneSaving: Saving;
  upsertOneUser: User;
  upsertOneWishlistItem: WishlistItem;
};


export type MutationChangeIssuePositionMutationArgs = {
  data: ChangeIssuePositionInput;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyColorProportionArgs = {
  data: Array<ColorProportionCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyExpenseArgs = {
  data: Array<ExpenseCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIssueArgs = {
  data: Array<IssueCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyIssueLabelArgs = {
  data: Array<IssueLabelCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMixedColorArgs = {
  data: Array<MixedColorCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNhAuthorArgs = {
  data: Array<NhAuthorCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNhFavoriteArgs = {
  data: Array<NhFavoriteCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRawColorArgs = {
  data: Array<RawColorCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRecipeArgs = {
  data: Array<RecipeCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySalaryArgs = {
  data: Array<SalaryCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySavingArgs = {
  data: Array<SavingCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyWishlistItemArgs = {
  data: Array<WishlistItemCreateManyInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneColorProportionArgs = {
  data: ColorProportionCreateInput;
};


export type MutationCreateOneExpenseArgs = {
  data: ExpenseCreateInput;
};


export type MutationCreateOneIssueArgs = {
  data: IssueCreateInput;
};


export type MutationCreateOneIssueLabelArgs = {
  data: IssueLabelCreateInput;
};


export type MutationCreateOneMixedColorArgs = {
  data: MixedColorCreateInput;
};


export type MutationCreateOneNhAuthorArgs = {
  data: NhAuthorCreateInput;
};


export type MutationCreateOneNhFavoriteArgs = {
  data: NhFavoriteCreateInput;
};


export type MutationCreateOneRawColorArgs = {
  data: RawColorCreateInput;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateOneSalaryArgs = {
  data: SalaryCreateInput;
};


export type MutationCreateOneSavingArgs = {
  data: SavingCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneWishlistItemArgs = {
  data: WishlistItemCreateInput;
};


export type MutationDeleteCategoryMutationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteExpenseMutationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteIssueLabelMutationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteIssueMutationArgs = {
  issueId: Scalars['String'];
};


export type MutationDeleteManyCategoryArgs = {
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyColorProportionArgs = {
  where: InputMaybe<ColorProportionWhereInput>;
};


export type MutationDeleteManyExpenseArgs = {
  where: InputMaybe<ExpenseWhereInput>;
};


export type MutationDeleteManyIssueArgs = {
  where: InputMaybe<IssueWhereInput>;
};


export type MutationDeleteManyIssueLabelArgs = {
  where: InputMaybe<IssueLabelWhereInput>;
};


export type MutationDeleteManyMixedColorArgs = {
  where: InputMaybe<MixedColorWhereInput>;
};


export type MutationDeleteManyNhAuthorArgs = {
  where: InputMaybe<NhAuthorWhereInput>;
};


export type MutationDeleteManyNhFavoriteArgs = {
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type MutationDeleteManyRawColorArgs = {
  where: InputMaybe<RawColorWhereInput>;
};


export type MutationDeleteManyRecipeArgs = {
  where: InputMaybe<RecipeWhereInput>;
};


export type MutationDeleteManySalaryArgs = {
  where: InputMaybe<SalaryWhereInput>;
};


export type MutationDeleteManySavingArgs = {
  where: InputMaybe<SavingWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyWishlistItemArgs = {
  where: InputMaybe<WishlistItemWhereInput>;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneColorProportionArgs = {
  where: ColorProportionWhereUniqueInput;
};


export type MutationDeleteOneExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type MutationDeleteOneIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type MutationDeleteOneIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type MutationDeleteOneMixedColorArgs = {
  where: MixedColorWhereUniqueInput;
};


export type MutationDeleteOneNhAuthorArgs = {
  where: NhAuthorWhereUniqueInput;
};


export type MutationDeleteOneNhFavoriteArgs = {
  where: NhFavoriteWhereUniqueInput;
};


export type MutationDeleteOneRawColorArgs = {
  where: RawColorWhereUniqueInput;
};


export type MutationDeleteOneRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteOneSalaryArgs = {
  where: SalaryWhereUniqueInput;
};


export type MutationDeleteOneSavingArgs = {
  where: SavingWhereUniqueInput;
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


export type MutationDeleteWishlistMutationArgs = {
  id: Scalars['String'];
};


export type MutationLoginMutationArgs = {
  data: LoginValidInput;
};


export type MutationRegisterMutationArgs = {
  data: RegisterValidInput;
};


export type MutationSaveCategoryMutationArgs = {
  data: CategoryInput;
};


export type MutationSaveExpenseMutationArgs = {
  data: ExpenseInput;
};


export type MutationSaveIssueLabelMutationArgs = {
  data: IssueLabelInput;
};


export type MutationSaveIssueMutationArgs = {
  data: IssueInput;
};


export type MutationSaveMixedColorMutationArgs = {
  data: MixedColorInput;
};


export type MutationSaveRawColorMutationArgs = {
  data: RawColorInput;
};


export type MutationSaveRecipeMutationArgs = {
  data: RecipeInput;
};


export type MutationSaveSalaryMutationArgs = {
  data: SalaryValidInput;
};


export type MutationSaveSavingMutationArgs = {
  data: SavingValidInput;
};


export type MutationSaveWishlistItemMutationArgs = {
  data: WishlistItemValidInput;
};


export type MutationToggleNhAuthorMutationArgs = {
  authorUrl: Scalars['String'];
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyColorProportionArgs = {
  data: ColorProportionUpdateManyMutationInput;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type MutationUpdateManyExpenseArgs = {
  data: ExpenseUpdateManyMutationInput;
  where: InputMaybe<ExpenseWhereInput>;
};


export type MutationUpdateManyIssueArgs = {
  data: IssueUpdateManyMutationInput;
  where: InputMaybe<IssueWhereInput>;
};


export type MutationUpdateManyIssueLabelArgs = {
  data: IssueLabelUpdateManyMutationInput;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type MutationUpdateManyMixedColorArgs = {
  data: MixedColorUpdateManyMutationInput;
  where: InputMaybe<MixedColorWhereInput>;
};


export type MutationUpdateManyNhAuthorArgs = {
  data: NhAuthorUpdateManyMutationInput;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type MutationUpdateManyNhFavoriteArgs = {
  data: NhFavoriteUpdateManyMutationInput;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type MutationUpdateManyRawColorArgs = {
  data: RawColorUpdateManyMutationInput;
  where: InputMaybe<RawColorWhereInput>;
};


export type MutationUpdateManyRecipeArgs = {
  data: RecipeUpdateManyMutationInput;
  where: InputMaybe<RecipeWhereInput>;
};


export type MutationUpdateManySalaryArgs = {
  data: SalaryUpdateManyMutationInput;
  where: InputMaybe<SalaryWhereInput>;
};


export type MutationUpdateManySavingArgs = {
  data: SavingUpdateManyMutationInput;
  where: InputMaybe<SavingWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyWishlistItemArgs = {
  data: WishlistItemUpdateManyMutationInput;
  where: InputMaybe<WishlistItemWhereInput>;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneColorProportionArgs = {
  data: ColorProportionUpdateInput;
  where: ColorProportionWhereUniqueInput;
};


export type MutationUpdateOneExpenseArgs = {
  data: ExpenseUpdateInput;
  where: ExpenseWhereUniqueInput;
};


export type MutationUpdateOneIssueArgs = {
  data: IssueUpdateInput;
  where: IssueWhereUniqueInput;
};


export type MutationUpdateOneIssueLabelArgs = {
  data: IssueLabelUpdateInput;
  where: IssueLabelWhereUniqueInput;
};


export type MutationUpdateOneMixedColorArgs = {
  data: MixedColorUpdateInput;
  where: MixedColorWhereUniqueInput;
};


export type MutationUpdateOneNhAuthorArgs = {
  data: NhAuthorUpdateInput;
  where: NhAuthorWhereUniqueInput;
};


export type MutationUpdateOneNhFavoriteArgs = {
  data: NhFavoriteUpdateInput;
  where: NhFavoriteWhereUniqueInput;
};


export type MutationUpdateOneRawColorArgs = {
  data: RawColorUpdateInput;
  where: RawColorWhereUniqueInput;
};


export type MutationUpdateOneRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateOneSalaryArgs = {
  data: SalaryUpdateInput;
  where: SalaryWhereUniqueInput;
};


export type MutationUpdateOneSavingArgs = {
  data: SavingUpdateInput;
  where: SavingWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneWishlistItemArgs = {
  data: WishlistItemUpdateInput;
  where: WishlistItemWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneColorProportionArgs = {
  create: ColorProportionCreateInput;
  update: ColorProportionUpdateInput;
  where: ColorProportionWhereUniqueInput;
};


export type MutationUpsertOneExpenseArgs = {
  create: ExpenseCreateInput;
  update: ExpenseUpdateInput;
  where: ExpenseWhereUniqueInput;
};


export type MutationUpsertOneIssueArgs = {
  create: IssueCreateInput;
  update: IssueUpdateInput;
  where: IssueWhereUniqueInput;
};


export type MutationUpsertOneIssueLabelArgs = {
  create: IssueLabelCreateInput;
  update: IssueLabelUpdateInput;
  where: IssueLabelWhereUniqueInput;
};


export type MutationUpsertOneMixedColorArgs = {
  create: MixedColorCreateInput;
  update: MixedColorUpdateInput;
  where: MixedColorWhereUniqueInput;
};


export type MutationUpsertOneNhAuthorArgs = {
  create: NhAuthorCreateInput;
  update: NhAuthorUpdateInput;
  where: NhAuthorWhereUniqueInput;
};


export type MutationUpsertOneNhFavoriteArgs = {
  create: NhFavoriteCreateInput;
  update: NhFavoriteUpdateInput;
  where: NhFavoriteWhereUniqueInput;
};


export type MutationUpsertOneRawColorArgs = {
  create: RawColorCreateInput;
  update: RawColorUpdateInput;
  where: RawColorWhereUniqueInput;
};


export type MutationUpsertOneRecipeArgs = {
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpsertOneSalaryArgs = {
  create: SalaryCreateInput;
  update: SalaryUpdateInput;
  where: SalaryWhereUniqueInput;
};


export type MutationUpsertOneSavingArgs = {
  create: SavingCreateInput;
  update: SavingUpdateInput;
  where: SavingWhereUniqueInput;
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

export type NestedBoolFilter = {
  equals: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedBoolFilter>;
  _min: InputMaybe<NestedBoolFilter>;
  equals: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedDateTimeNullableFilter>;
  _min: InputMaybe<NestedDateTimeNullableFilter>;
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedDateTimeFilter>;
  _min: InputMaybe<NestedDateTimeFilter>;
  equals: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<Scalars['DateTime']>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableFilter = {
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
  _avg: InputMaybe<NestedDecimalNullableFilter>;
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedDecimalNullableFilter>;
  _min: InputMaybe<NestedDecimalNullableFilter>;
  _sum: InputMaybe<NestedDecimalNullableFilter>;
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg: InputMaybe<NestedDecimalFilter>;
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedDecimalFilter>;
  _min: InputMaybe<NestedDecimalFilter>;
  _sum: InputMaybe<NestedDecimalFilter>;
  equals: InputMaybe<Scalars['Decimal']>;
  gt: InputMaybe<Scalars['Decimal']>;
  gte: InputMaybe<Scalars['Decimal']>;
  in: InputMaybe<Array<Scalars['Decimal']>>;
  lt: InputMaybe<Scalars['Decimal']>;
  lte: InputMaybe<Scalars['Decimal']>;
  not: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatFilter = {
  equals: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<Scalars['Float']>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  not: InputMaybe<NestedFloatFilter>;
  notIn: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<Scalars['Float']>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  not: InputMaybe<NestedFloatNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg: InputMaybe<NestedFloatNullableFilter>;
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedIntNullableFilter>;
  _min: InputMaybe<NestedIntNullableFilter>;
  _sum: InputMaybe<NestedIntNullableFilter>;
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg: InputMaybe<NestedFloatFilter>;
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedIntFilter>;
  _min: InputMaybe<NestedIntFilter>;
  _sum: InputMaybe<NestedIntFilter>;
  equals: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<Scalars['Int']>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  not: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedStringNullableFilter>;
  _min: InputMaybe<NestedStringNullableFilter>;
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedStringFilter>;
  _min: InputMaybe<NestedStringFilter>;
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  not: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type NhAuthor = {
  _count: Maybe<NhAuthorCount>;
  checkedAt: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  favorites: Array<NhFavorite>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};


export type NhAuthorFavoritesArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  distinct: InputMaybe<Array<NhFavoriteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};

export type NhAuthorCount = {
  favorites: Scalars['Int'];
};

export type NhAuthorCountAggregate = {
  _all: Scalars['Int'];
  checkedAt: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  url: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NhAuthorCountOrderByAggregateInput = {
  checkedAt: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhAuthorCreateInput = {
  checkedAt: InputMaybe<Scalars['DateTime']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  favorites: InputMaybe<NhFavoriteCreateNestedManyWithoutAuthorInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  user: UserCreateNestedOneWithoutNhAuthorsInput;
};

export type NhAuthorCreateManyInput = {
  checkedAt: InputMaybe<Scalars['DateTime']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NhAuthorCreateManyUserInput = {
  checkedAt: InputMaybe<Scalars['DateTime']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type NhAuthorCreateManyUserInputEnvelope = {
  data: Array<NhAuthorCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type NhAuthorCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<NhAuthorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhAuthorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<NhAuthorCreateWithoutUserInput>>;
  createMany: InputMaybe<NhAuthorCreateManyUserInputEnvelope>;
};

export type NhAuthorCreateNestedOneWithoutFavoritesInput = {
  connect: InputMaybe<NhAuthorWhereUniqueInput>;
  connectOrCreate: InputMaybe<NhAuthorCreateOrConnectWithoutFavoritesInput>;
  create: InputMaybe<NhAuthorCreateWithoutFavoritesInput>;
};

export type NhAuthorCreateOrConnectWithoutFavoritesInput = {
  create: NhAuthorCreateWithoutFavoritesInput;
  where: NhAuthorWhereUniqueInput;
};

export type NhAuthorCreateOrConnectWithoutUserInput = {
  create: NhAuthorCreateWithoutUserInput;
  where: NhAuthorWhereUniqueInput;
};

export type NhAuthorCreateWithoutFavoritesInput = {
  checkedAt: InputMaybe<Scalars['DateTime']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
  user: UserCreateNestedOneWithoutNhAuthorsInput;
};

export type NhAuthorCreateWithoutUserInput = {
  checkedAt: InputMaybe<Scalars['DateTime']>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  favorites: InputMaybe<NhFavoriteCreateNestedManyWithoutAuthorInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type NhAuthorGroupBy = {
  _count: Maybe<NhAuthorCountAggregate>;
  _max: Maybe<NhAuthorMaxAggregate>;
  _min: Maybe<NhAuthorMinAggregate>;
  checkedAt: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NhAuthorListRelationFilter = {
  every: InputMaybe<NhAuthorWhereInput>;
  none: InputMaybe<NhAuthorWhereInput>;
  some: InputMaybe<NhAuthorWhereInput>;
};

export type NhAuthorMaxAggregate = {
  checkedAt: Maybe<Scalars['DateTime']>;
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type NhAuthorMaxOrderByAggregateInput = {
  checkedAt: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhAuthorMinAggregate = {
  checkedAt: Maybe<Scalars['DateTime']>;
  createdAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type NhAuthorMinOrderByAggregateInput = {
  checkedAt: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhAuthorOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type NhAuthorOrderByWithAggregationInput = {
  _count: InputMaybe<NhAuthorCountOrderByAggregateInput>;
  _max: InputMaybe<NhAuthorMaxOrderByAggregateInput>;
  _min: InputMaybe<NhAuthorMinOrderByAggregateInput>;
  checkedAt: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhAuthorOrderByWithRelationInput = {
  checkedAt: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  favorites: InputMaybe<NhFavoriteOrderByRelationAggregateInput>;
  updatedAt: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export type NhAuthorRelationFilter = {
  is: InputMaybe<NhAuthorWhereInput>;
  isNot: InputMaybe<NhAuthorWhereInput>;
};

export enum NhAuthorScalarFieldEnum {
  CheckedAt = 'checkedAt',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Url = 'url',
  UserId = 'userId'
}

export type NhAuthorScalarWhereInput = {
  AND: InputMaybe<Array<NhAuthorScalarWhereInput>>;
  NOT: InputMaybe<Array<NhAuthorScalarWhereInput>>;
  OR: InputMaybe<Array<NhAuthorScalarWhereInput>>;
  checkedAt: InputMaybe<DateTimeNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
  userId: InputMaybe<StringFilter>;
};

export type NhAuthorScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<NhAuthorScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<NhAuthorScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<NhAuthorScalarWhereWithAggregatesInput>>;
  checkedAt: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  url: InputMaybe<StringWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type NhAuthorUpdateInput = {
  checkedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorites: InputMaybe<NhFavoriteUpdateManyWithoutAuthorNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutNhAuthorsNestedInput>;
};

export type NhAuthorUpdateManyMutationInput = {
  checkedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NhAuthorUpdateManyWithWhereWithoutUserInput = {
  data: NhAuthorUpdateManyMutationInput;
  where: NhAuthorScalarWhereInput;
};

export type NhAuthorUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<NhAuthorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhAuthorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<NhAuthorCreateWithoutUserInput>>;
  createMany: InputMaybe<NhAuthorCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<NhAuthorWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<NhAuthorScalarWhereInput>>;
  disconnect: InputMaybe<Array<NhAuthorWhereUniqueInput>>;
  set: InputMaybe<Array<NhAuthorWhereUniqueInput>>;
  update: InputMaybe<Array<NhAuthorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<NhAuthorUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<NhAuthorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput = {
  connect: InputMaybe<NhAuthorWhereUniqueInput>;
  connectOrCreate: InputMaybe<NhAuthorCreateOrConnectWithoutFavoritesInput>;
  create: InputMaybe<NhAuthorCreateWithoutFavoritesInput>;
  update: InputMaybe<NhAuthorUpdateWithoutFavoritesInput>;
  upsert: InputMaybe<NhAuthorUpsertWithoutFavoritesInput>;
};

export type NhAuthorUpdateWithWhereUniqueWithoutUserInput = {
  data: NhAuthorUpdateWithoutUserInput;
  where: NhAuthorWhereUniqueInput;
};

export type NhAuthorUpdateWithoutFavoritesInput = {
  checkedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutNhAuthorsNestedInput>;
};

export type NhAuthorUpdateWithoutUserInput = {
  checkedAt: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favorites: InputMaybe<NhFavoriteUpdateManyWithoutAuthorNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NhAuthorUpsertWithWhereUniqueWithoutUserInput = {
  create: NhAuthorCreateWithoutUserInput;
  update: NhAuthorUpdateWithoutUserInput;
  where: NhAuthorWhereUniqueInput;
};

export type NhAuthorUpsertWithoutFavoritesInput = {
  create: NhAuthorCreateWithoutFavoritesInput;
  update: NhAuthorUpdateWithoutFavoritesInput;
};

export type NhAuthorWhereInput = {
  AND: InputMaybe<Array<NhAuthorWhereInput>>;
  NOT: InputMaybe<Array<NhAuthorWhereInput>>;
  OR: InputMaybe<Array<NhAuthorWhereInput>>;
  checkedAt: InputMaybe<DateTimeNullableFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  favorites: InputMaybe<NhFavoriteListRelationFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  url: InputMaybe<StringFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type NhAuthorWhereUniqueInput = {
  url: InputMaybe<Scalars['String']>;
};

export type NhFavorite = {
  author: NhAuthor;
  authorUrl: Scalars['String'];
  url: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type NhFavoriteCountAggregate = {
  _all: Scalars['Int'];
  authorUrl: Scalars['Int'];
  url: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NhFavoriteCountOrderByAggregateInput = {
  authorUrl: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhFavoriteCreateInput = {
  author: NhAuthorCreateNestedOneWithoutFavoritesInput;
  url: Scalars['String'];
  user: UserCreateNestedOneWithoutNhFavoritesInput;
};

export type NhFavoriteCreateManyAuthorInput = {
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NhFavoriteCreateManyAuthorInputEnvelope = {
  data: Array<NhFavoriteCreateManyAuthorInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type NhFavoriteCreateManyInput = {
  authorUrl: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NhFavoriteCreateManyUserInput = {
  authorUrl: Scalars['String'];
  url: Scalars['String'];
};

export type NhFavoriteCreateManyUserInputEnvelope = {
  data: Array<NhFavoriteCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type NhFavoriteCreateNestedManyWithoutAuthorInput = {
  connect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhFavoriteCreateOrConnectWithoutAuthorInput>>;
  create: InputMaybe<Array<NhFavoriteCreateWithoutAuthorInput>>;
  createMany: InputMaybe<NhFavoriteCreateManyAuthorInputEnvelope>;
};

export type NhFavoriteCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhFavoriteCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<NhFavoriteCreateWithoutUserInput>>;
  createMany: InputMaybe<NhFavoriteCreateManyUserInputEnvelope>;
};

export type NhFavoriteCreateOrConnectWithoutAuthorInput = {
  create: NhFavoriteCreateWithoutAuthorInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteCreateOrConnectWithoutUserInput = {
  create: NhFavoriteCreateWithoutUserInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteCreateWithoutAuthorInput = {
  url: Scalars['String'];
  user: UserCreateNestedOneWithoutNhFavoritesInput;
};

export type NhFavoriteCreateWithoutUserInput = {
  author: NhAuthorCreateNestedOneWithoutFavoritesInput;
  url: Scalars['String'];
};

export type NhFavoriteGroupBy = {
  _count: Maybe<NhFavoriteCountAggregate>;
  _max: Maybe<NhFavoriteMaxAggregate>;
  _min: Maybe<NhFavoriteMinAggregate>;
  authorUrl: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NhFavoriteListRelationFilter = {
  every: InputMaybe<NhFavoriteWhereInput>;
  none: InputMaybe<NhFavoriteWhereInput>;
  some: InputMaybe<NhFavoriteWhereInput>;
};

export type NhFavoriteMaxAggregate = {
  authorUrl: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type NhFavoriteMaxOrderByAggregateInput = {
  authorUrl: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhFavoriteMinAggregate = {
  authorUrl: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['String']>;
};

export type NhFavoriteMinOrderByAggregateInput = {
  authorUrl: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhFavoriteOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type NhFavoriteOrderByWithAggregationInput = {
  _count: InputMaybe<NhFavoriteCountOrderByAggregateInput>;
  _max: InputMaybe<NhFavoriteMaxOrderByAggregateInput>;
  _min: InputMaybe<NhFavoriteMinOrderByAggregateInput>;
  authorUrl: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type NhFavoriteOrderByWithRelationInput = {
  author: InputMaybe<NhAuthorOrderByWithRelationInput>;
  authorUrl: InputMaybe<SortOrder>;
  url: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export enum NhFavoriteScalarFieldEnum {
  AuthorUrl = 'authorUrl',
  Url = 'url',
  UserId = 'userId'
}

export type NhFavoriteScalarWhereInput = {
  AND: InputMaybe<Array<NhFavoriteScalarWhereInput>>;
  NOT: InputMaybe<Array<NhFavoriteScalarWhereInput>>;
  OR: InputMaybe<Array<NhFavoriteScalarWhereInput>>;
  authorUrl: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
  userId: InputMaybe<StringFilter>;
};

export type NhFavoriteScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<NhFavoriteScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<NhFavoriteScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<NhFavoriteScalarWhereWithAggregatesInput>>;
  authorUrl: InputMaybe<StringWithAggregatesFilter>;
  url: InputMaybe<StringWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type NhFavoriteUpdateInput = {
  author: InputMaybe<NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutNhFavoritesNestedInput>;
};

export type NhFavoriteUpdateManyMutationInput = {
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NhFavoriteUpdateManyWithWhereWithoutAuthorInput = {
  data: NhFavoriteUpdateManyMutationInput;
  where: NhFavoriteScalarWhereInput;
};

export type NhFavoriteUpdateManyWithWhereWithoutUserInput = {
  data: NhFavoriteUpdateManyMutationInput;
  where: NhFavoriteScalarWhereInput;
};

export type NhFavoriteUpdateManyWithoutAuthorNestedInput = {
  connect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhFavoriteCreateOrConnectWithoutAuthorInput>>;
  create: InputMaybe<Array<NhFavoriteCreateWithoutAuthorInput>>;
  createMany: InputMaybe<NhFavoriteCreateManyAuthorInputEnvelope>;
  delete: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<NhFavoriteScalarWhereInput>>;
  disconnect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  set: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  update: InputMaybe<Array<NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany: InputMaybe<Array<NhFavoriteUpdateManyWithWhereWithoutAuthorInput>>;
  upsert: InputMaybe<Array<NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type NhFavoriteUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<NhFavoriteCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<NhFavoriteCreateWithoutUserInput>>;
  createMany: InputMaybe<NhFavoriteCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<NhFavoriteScalarWhereInput>>;
  disconnect: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  set: InputMaybe<Array<NhFavoriteWhereUniqueInput>>;
  update: InputMaybe<Array<NhFavoriteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<NhFavoriteUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<NhFavoriteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NhFavoriteUpdateWithWhereUniqueWithoutAuthorInput = {
  data: NhFavoriteUpdateWithoutAuthorInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteUpdateWithWhereUniqueWithoutUserInput = {
  data: NhFavoriteUpdateWithoutUserInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteUpdateWithoutAuthorInput = {
  url: InputMaybe<StringFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutNhFavoritesNestedInput>;
};

export type NhFavoriteUpdateWithoutUserInput = {
  author: InputMaybe<NhAuthorUpdateOneRequiredWithoutFavoritesNestedInput>;
  url: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NhFavoriteUpsertWithWhereUniqueWithoutAuthorInput = {
  create: NhFavoriteCreateWithoutAuthorInput;
  update: NhFavoriteUpdateWithoutAuthorInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteUpsertWithWhereUniqueWithoutUserInput = {
  create: NhFavoriteCreateWithoutUserInput;
  update: NhFavoriteUpdateWithoutUserInput;
  where: NhFavoriteWhereUniqueInput;
};

export type NhFavoriteWhereInput = {
  AND: InputMaybe<Array<NhFavoriteWhereInput>>;
  NOT: InputMaybe<Array<NhFavoriteWhereInput>>;
  OR: InputMaybe<Array<NhFavoriteWhereInput>>;
  author: InputMaybe<NhAuthorRelationFilter>;
  authorUrl: InputMaybe<StringFilter>;
  url: InputMaybe<StringFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type NhFavoriteWhereUniqueInput = {
  url: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['DateTime']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Decimal']>;
  divide: InputMaybe<Scalars['Decimal']>;
  increment: InputMaybe<Scalars['Decimal']>;
  multiply: InputMaybe<Scalars['Decimal']>;
  set: InputMaybe<Scalars['Decimal']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement: InputMaybe<Scalars['Int']>;
  divide: InputMaybe<Scalars['Int']>;
  increment: InputMaybe<Scalars['Int']>;
  multiply: InputMaybe<Scalars['Int']>;
  set: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']>;
};

export type PaginationInput = {
  page: InputMaybe<Scalars['Float']>;
  pageSize: InputMaybe<Scalars['Float']>;
};

export type Query = {
  aggregateCategory: AggregateCategory;
  aggregateColorProportion: AggregateColorProportion;
  aggregateExpense: AggregateExpense;
  aggregateIssue: AggregateIssue;
  aggregateIssueLabel: AggregateIssueLabel;
  aggregateMixedColor: AggregateMixedColor;
  aggregateNhAuthor: AggregateNhAuthor;
  aggregateNhFavorite: AggregateNhFavorite;
  aggregateRawColor: AggregateRawColor;
  aggregateRecipe: AggregateRecipe;
  aggregateSalary: AggregateSalary;
  aggregateSaving: AggregateSaving;
  aggregateUser: AggregateUser;
  aggregateWishlistItem: AggregateWishlistItem;
  categories: Array<Category>;
  categoriesQuery: Array<Category>;
  category: Maybe<Category>;
  colorProportion: Maybe<ColorProportion>;
  colorProportions: Array<ColorProportion>;
  expense: Maybe<Expense>;
  expenses: Array<Expense>;
  expensesQuery: Array<Expense>;
  findFirstCategory: Maybe<Category>;
  findFirstCategoryOrThrow: Maybe<Category>;
  findFirstColorProportion: Maybe<ColorProportion>;
  findFirstColorProportionOrThrow: Maybe<ColorProportion>;
  findFirstExpense: Maybe<Expense>;
  findFirstExpenseOrThrow: Maybe<Expense>;
  findFirstIssue: Maybe<Issue>;
  findFirstIssueLabel: Maybe<IssueLabel>;
  findFirstIssueLabelOrThrow: Maybe<IssueLabel>;
  findFirstIssueOrThrow: Maybe<Issue>;
  findFirstMixedColor: Maybe<MixedColor>;
  findFirstMixedColorOrThrow: Maybe<MixedColor>;
  findFirstNhAuthor: Maybe<NhAuthor>;
  findFirstNhAuthorOrThrow: Maybe<NhAuthor>;
  findFirstNhFavorite: Maybe<NhFavorite>;
  findFirstNhFavoriteOrThrow: Maybe<NhFavorite>;
  findFirstRawColor: Maybe<RawColor>;
  findFirstRawColorOrThrow: Maybe<RawColor>;
  findFirstRecipe: Maybe<Recipe>;
  findFirstRecipeOrThrow: Maybe<Recipe>;
  findFirstSalary: Maybe<Salary>;
  findFirstSalaryOrThrow: Maybe<Salary>;
  findFirstSaving: Maybe<Saving>;
  findFirstSavingOrThrow: Maybe<Saving>;
  findFirstUser: Maybe<User>;
  findFirstUserOrThrow: Maybe<User>;
  findFirstWishlistItem: Maybe<WishlistItem>;
  findFirstWishlistItemOrThrow: Maybe<WishlistItem>;
  getCategory: Maybe<Category>;
  getColorProportion: Maybe<ColorProportion>;
  getExpense: Maybe<Expense>;
  getIssue: Maybe<Issue>;
  getIssueLabel: Maybe<IssueLabel>;
  getMixedColor: Maybe<MixedColor>;
  getNhAuthor: Maybe<NhAuthor>;
  getNhFavorite: Maybe<NhFavorite>;
  getRawColor: Maybe<RawColor>;
  getRecipe: Maybe<Recipe>;
  getRecipesQuery: Array<Recipe>;
  getSalary: Maybe<Salary>;
  getSaving: Maybe<Saving>;
  getUser: Maybe<User>;
  getWishlistItem: Maybe<WishlistItem>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByColorProportion: Array<ColorProportionGroupBy>;
  groupByExpense: Array<ExpenseGroupBy>;
  groupByIssue: Array<IssueGroupBy>;
  groupByIssueLabel: Array<IssueLabelGroupBy>;
  groupByMixedColor: Array<MixedColorGroupBy>;
  groupByNhAuthor: Array<NhAuthorGroupBy>;
  groupByNhFavorite: Array<NhFavoriteGroupBy>;
  groupByRawColor: Array<RawColorGroupBy>;
  groupByRecipe: Array<RecipeGroupBy>;
  groupBySalary: Array<SalaryGroupBy>;
  groupBySaving: Array<SavingGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByWishlistItem: Array<WishlistItemGroupBy>;
  groupedNhFavoritesQuery: Array<AuthorCount>;
  issue: Maybe<Issue>;
  issueLabel: Maybe<IssueLabel>;
  issueLabels: Array<IssueLabel>;
  issueLabelsQuery: Array<IssueLabel>;
  issues: Array<Issue>;
  issuesQuery: Array<Issue>;
  meQuery: AuthUserOutput;
  mixedColor: Maybe<MixedColor>;
  mixedColors: Array<MixedColor>;
  mixedColorsQuery: Array<MixedColor>;
  nhAuthor: Maybe<NhAuthor>;
  nhAuthors: Array<NhAuthor>;
  nhAuthorsQuery: Array<NhAuthor>;
  nhFavorite: Maybe<NhFavorite>;
  nhFavorites: Array<NhFavorite>;
  rawColor: Maybe<RawColor>;
  rawColors: Array<RawColor>;
  rawColorsQuery: Array<RawColor>;
  recipe: Maybe<Recipe>;
  recipes: Array<Recipe>;
  recurrentExpensesQuery: Array<Expense>;
  salaries: Array<Salary>;
  salary: Maybe<Salary>;
  salaryQuery: Maybe<Salary>;
  saving: Maybe<Saving>;
  savings: Array<Saving>;
  savingsQuery: Array<Saving>;
  user: Maybe<User>;
  users: Array<User>;
  wishlistItem: Maybe<WishlistItem>;
  wishlistItems: Array<WishlistItem>;
  wishlistItemsQuery: Array<WishlistItem>;
};


export type QueryAggregateCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateColorProportionArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type QueryAggregateExpenseArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type QueryAggregateIssueArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type QueryAggregateIssueLabelArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type QueryAggregateMixedColorArgs = {
  cursor: InputMaybe<MixedColorWhereUniqueInput>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type QueryAggregateNhAuthorArgs = {
  cursor: InputMaybe<NhAuthorWhereUniqueInput>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type QueryAggregateNhFavoriteArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type QueryAggregateRawColorArgs = {
  cursor: InputMaybe<RawColorWhereUniqueInput>;
  orderBy: InputMaybe<Array<RawColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type QueryAggregateRecipeArgs = {
  cursor: InputMaybe<RecipeWhereUniqueInput>;
  orderBy: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type QueryAggregateSalaryArgs = {
  cursor: InputMaybe<SalaryWhereUniqueInput>;
  orderBy: InputMaybe<Array<SalaryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SalaryWhereInput>;
};


export type QueryAggregateSavingArgs = {
  cursor: InputMaybe<SavingWhereUniqueInput>;
  orderBy: InputMaybe<Array<SavingOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryAggregateWishlistItemArgs = {
  cursor: InputMaybe<WishlistItemWhereUniqueInput>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryColorProportionArgs = {
  where: ColorProportionWhereUniqueInput;
};


export type QueryColorProportionsArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type QueryExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type QueryExpensesArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  distinct: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type QueryExpensesQueryArgs = {
  filter: InputMaybe<ExpenseFilterInput>;
  pagination: InputMaybe<PaginationInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCategoryOrThrowArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstColorProportionArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type QueryFindFirstColorProportionOrThrowArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type QueryFindFirstExpenseArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  distinct: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type QueryFindFirstExpenseOrThrowArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  distinct: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type QueryFindFirstIssueArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type QueryFindFirstIssueLabelArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type QueryFindFirstIssueLabelOrThrowArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type QueryFindFirstIssueOrThrowArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type QueryFindFirstMixedColorArgs = {
  cursor: InputMaybe<MixedColorWhereUniqueInput>;
  distinct: InputMaybe<Array<MixedColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type QueryFindFirstMixedColorOrThrowArgs = {
  cursor: InputMaybe<MixedColorWhereUniqueInput>;
  distinct: InputMaybe<Array<MixedColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type QueryFindFirstNhAuthorArgs = {
  cursor: InputMaybe<NhAuthorWhereUniqueInput>;
  distinct: InputMaybe<Array<NhAuthorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type QueryFindFirstNhAuthorOrThrowArgs = {
  cursor: InputMaybe<NhAuthorWhereUniqueInput>;
  distinct: InputMaybe<Array<NhAuthorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type QueryFindFirstNhFavoriteArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  distinct: InputMaybe<Array<NhFavoriteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type QueryFindFirstNhFavoriteOrThrowArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  distinct: InputMaybe<Array<NhFavoriteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type QueryFindFirstRawColorArgs = {
  cursor: InputMaybe<RawColorWhereUniqueInput>;
  distinct: InputMaybe<Array<RawColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RawColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type QueryFindFirstRawColorOrThrowArgs = {
  cursor: InputMaybe<RawColorWhereUniqueInput>;
  distinct: InputMaybe<Array<RawColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RawColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type QueryFindFirstRecipeArgs = {
  cursor: InputMaybe<RecipeWhereUniqueInput>;
  distinct: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type QueryFindFirstRecipeOrThrowArgs = {
  cursor: InputMaybe<RecipeWhereUniqueInput>;
  distinct: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type QueryFindFirstSalaryArgs = {
  cursor: InputMaybe<SalaryWhereUniqueInput>;
  distinct: InputMaybe<Array<SalaryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SalaryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SalaryWhereInput>;
};


export type QueryFindFirstSalaryOrThrowArgs = {
  cursor: InputMaybe<SalaryWhereUniqueInput>;
  distinct: InputMaybe<Array<SalaryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SalaryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SalaryWhereInput>;
};


export type QueryFindFirstSavingArgs = {
  cursor: InputMaybe<SavingWhereUniqueInput>;
  distinct: InputMaybe<Array<SavingScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SavingOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type QueryFindFirstSavingOrThrowArgs = {
  cursor: InputMaybe<SavingWhereUniqueInput>;
  distinct: InputMaybe<Array<SavingScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SavingOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstWishlistItemArgs = {
  cursor: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};


export type QueryFindFirstWishlistItemOrThrowArgs = {
  cursor: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};


export type QueryGetCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetColorProportionArgs = {
  where: ColorProportionWhereUniqueInput;
};


export type QueryGetExpenseArgs = {
  where: ExpenseWhereUniqueInput;
};


export type QueryGetIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type QueryGetIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type QueryGetMixedColorArgs = {
  where: MixedColorWhereUniqueInput;
};


export type QueryGetNhAuthorArgs = {
  where: NhAuthorWhereUniqueInput;
};


export type QueryGetNhFavoriteArgs = {
  where: NhFavoriteWhereUniqueInput;
};


export type QueryGetRawColorArgs = {
  where: RawColorWhereUniqueInput;
};


export type QueryGetRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryGetSalaryArgs = {
  where: SalaryWhereUniqueInput;
};


export type QueryGetSavingArgs = {
  where: SavingWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetWishlistItemArgs = {
  where: WishlistItemWhereUniqueInput;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByColorProportionArgs = {
  by: Array<ColorProportionScalarFieldEnum>;
  having: InputMaybe<ColorProportionScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type QueryGroupByExpenseArgs = {
  by: Array<ExpenseScalarFieldEnum>;
  having: InputMaybe<ExpenseScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type QueryGroupByIssueArgs = {
  by: Array<IssueScalarFieldEnum>;
  having: InputMaybe<IssueScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<IssueOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type QueryGroupByIssueLabelArgs = {
  by: Array<IssueLabelScalarFieldEnum>;
  having: InputMaybe<IssueLabelScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type QueryGroupByMixedColorArgs = {
  by: Array<MixedColorScalarFieldEnum>;
  having: InputMaybe<MixedColorScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type QueryGroupByNhAuthorArgs = {
  by: Array<NhAuthorScalarFieldEnum>;
  having: InputMaybe<NhAuthorScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type QueryGroupByNhFavoriteArgs = {
  by: Array<NhFavoriteScalarFieldEnum>;
  having: InputMaybe<NhFavoriteScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type QueryGroupByRawColorArgs = {
  by: Array<RawColorScalarFieldEnum>;
  having: InputMaybe<RawColorScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<RawColorOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type QueryGroupByRecipeArgs = {
  by: Array<RecipeScalarFieldEnum>;
  having: InputMaybe<RecipeScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<RecipeOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type QueryGroupBySalaryArgs = {
  by: Array<SalaryScalarFieldEnum>;
  having: InputMaybe<SalaryScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<SalaryOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SalaryWhereInput>;
};


export type QueryGroupBySavingArgs = {
  by: Array<SavingScalarFieldEnum>;
  having: InputMaybe<SavingScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<SavingOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryGroupByWishlistItemArgs = {
  by: Array<WishlistItemScalarFieldEnum>;
  having: InputMaybe<WishlistItemScalarWhereWithAggregatesInput>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithAggregationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};


export type QueryIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type QueryIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type QueryIssueLabelsArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type QueryIssuesArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type QueryMixedColorArgs = {
  where: MixedColorWhereUniqueInput;
};


export type QueryMixedColorsArgs = {
  cursor: InputMaybe<MixedColorWhereUniqueInput>;
  distinct: InputMaybe<Array<MixedColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type QueryNhAuthorArgs = {
  where: NhAuthorWhereUniqueInput;
};


export type QueryNhAuthorsArgs = {
  cursor: InputMaybe<NhAuthorWhereUniqueInput>;
  distinct: InputMaybe<Array<NhAuthorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type QueryNhFavoriteArgs = {
  where: NhFavoriteWhereUniqueInput;
};


export type QueryNhFavoritesArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  distinct: InputMaybe<Array<NhFavoriteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type QueryRawColorArgs = {
  where: RawColorWhereUniqueInput;
};


export type QueryRawColorsArgs = {
  cursor: InputMaybe<RawColorWhereUniqueInput>;
  distinct: InputMaybe<Array<RawColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RawColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryRecipesArgs = {
  cursor: InputMaybe<RecipeWhereUniqueInput>;
  distinct: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type QuerySalariesArgs = {
  cursor: InputMaybe<SalaryWhereUniqueInput>;
  distinct: InputMaybe<Array<SalaryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SalaryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SalaryWhereInput>;
};


export type QuerySalaryArgs = {
  where: SalaryWhereUniqueInput;
};


export type QuerySavingArgs = {
  where: SavingWhereUniqueInput;
};


export type QuerySavingsArgs = {
  cursor: InputMaybe<SavingWhereUniqueInput>;
  distinct: InputMaybe<Array<SavingScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SavingOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor: InputMaybe<UserWhereUniqueInput>;
  distinct: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<UserWhereInput>;
};


export type QueryWishlistItemArgs = {
  where: WishlistItemWhereUniqueInput;
};


export type QueryWishlistItemsArgs = {
  cursor: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RawColor = {
  _count: Maybe<RawColorCount>;
  color: Scalars['String'];
  colorProportions: Array<ColorProportion>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};


export type RawColorColorProportionsArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};

export type RawColorCount = {
  colorProportions: Scalars['Int'];
};

export type RawColorCountAggregate = {
  _all: Scalars['Int'];
  color: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RawColorCountOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RawColorCreateInput = {
  color: Scalars['String'];
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutRawColorInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRawColorsInput;
};

export type RawColorCreateManyInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RawColorCreateManyUserInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type RawColorCreateManyUserInputEnvelope = {
  data: Array<RawColorCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type RawColorCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<RawColorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<RawColorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<RawColorCreateWithoutUserInput>>;
  createMany: InputMaybe<RawColorCreateManyUserInputEnvelope>;
};

export type RawColorCreateNestedOneWithoutColorProportionsInput = {
  connect: InputMaybe<RawColorWhereUniqueInput>;
  connectOrCreate: InputMaybe<RawColorCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<RawColorCreateWithoutColorProportionsInput>;
};

export type RawColorCreateOrConnectWithoutColorProportionsInput = {
  create: RawColorCreateWithoutColorProportionsInput;
  where: RawColorWhereUniqueInput;
};

export type RawColorCreateOrConnectWithoutUserInput = {
  create: RawColorCreateWithoutUserInput;
  where: RawColorWhereUniqueInput;
};

export type RawColorCreateWithoutColorProportionsInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRawColorsInput;
};

export type RawColorCreateWithoutUserInput = {
  color: Scalars['String'];
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutRawColorInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type RawColorGroupBy = {
  _count: Maybe<RawColorCountAggregate>;
  _max: Maybe<RawColorMaxAggregate>;
  _min: Maybe<RawColorMinAggregate>;
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RawColorInput = {
  color: Scalars['String'];
  createdAt: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['String']>;
};

export type RawColorListRelationFilter = {
  every: InputMaybe<RawColorWhereInput>;
  none: InputMaybe<RawColorWhereInput>;
  some: InputMaybe<RawColorWhereInput>;
};

export type RawColorMaxAggregate = {
  color: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type RawColorMaxOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RawColorMinAggregate = {
  color: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type RawColorMinOrderByAggregateInput = {
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RawColorOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type RawColorOrderByWithAggregationInput = {
  _count: InputMaybe<RawColorCountOrderByAggregateInput>;
  _max: InputMaybe<RawColorMaxOrderByAggregateInput>;
  _min: InputMaybe<RawColorMinOrderByAggregateInput>;
  color: InputMaybe<SortOrder>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RawColorOrderByWithRelationInput = {
  color: InputMaybe<SortOrder>;
  colorProportions: InputMaybe<ColorProportionOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  name: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
};

export type RawColorRelationFilter = {
  is: InputMaybe<RawColorWhereInput>;
  isNot: InputMaybe<RawColorWhereInput>;
};

export enum RawColorScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RawColorScalarWhereInput = {
  AND: InputMaybe<Array<RawColorScalarWhereInput>>;
  NOT: InputMaybe<Array<RawColorScalarWhereInput>>;
  OR: InputMaybe<Array<RawColorScalarWhereInput>>;
  color: InputMaybe<StringFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type RawColorScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<RawColorScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<RawColorScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<RawColorScalarWhereWithAggregatesInput>>;
  color: InputMaybe<StringWithAggregatesFilter>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  name: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type RawColorUpdateInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutRawColorNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutRawColorsNestedInput>;
};

export type RawColorUpdateManyMutationInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RawColorUpdateManyWithWhereWithoutUserInput = {
  data: RawColorUpdateManyMutationInput;
  where: RawColorScalarWhereInput;
};

export type RawColorUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<RawColorWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<RawColorCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<RawColorCreateWithoutUserInput>>;
  createMany: InputMaybe<RawColorCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<RawColorWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<RawColorScalarWhereInput>>;
  disconnect: InputMaybe<Array<RawColorWhereUniqueInput>>;
  set: InputMaybe<Array<RawColorWhereUniqueInput>>;
  update: InputMaybe<Array<RawColorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<RawColorUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<RawColorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RawColorUpdateOneRequiredWithoutColorProportionsNestedInput = {
  connect: InputMaybe<RawColorWhereUniqueInput>;
  connectOrCreate: InputMaybe<RawColorCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<RawColorCreateWithoutColorProportionsInput>;
  update: InputMaybe<RawColorUpdateWithoutColorProportionsInput>;
  upsert: InputMaybe<RawColorUpsertWithoutColorProportionsInput>;
};

export type RawColorUpdateWithWhereUniqueWithoutUserInput = {
  data: RawColorUpdateWithoutUserInput;
  where: RawColorWhereUniqueInput;
};

export type RawColorUpdateWithoutColorProportionsInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutRawColorsNestedInput>;
};

export type RawColorUpdateWithoutUserInput = {
  color: InputMaybe<StringFieldUpdateOperationsInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutRawColorNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  name: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RawColorUpsertWithWhereUniqueWithoutUserInput = {
  create: RawColorCreateWithoutUserInput;
  update: RawColorUpdateWithoutUserInput;
  where: RawColorWhereUniqueInput;
};

export type RawColorUpsertWithoutColorProportionsInput = {
  create: RawColorCreateWithoutColorProportionsInput;
  update: RawColorUpdateWithoutColorProportionsInput;
};

export type RawColorWhereInput = {
  AND: InputMaybe<Array<RawColorWhereInput>>;
  NOT: InputMaybe<Array<RawColorWhereInput>>;
  OR: InputMaybe<Array<RawColorWhereInput>>;
  color: InputMaybe<StringFilter>;
  colorProportions: InputMaybe<ColorProportionListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  name: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type RawColorWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type Recipe = {
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  rating: Maybe<Scalars['Int']>;
  savedPosition: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type RecipeAvgAggregate = {
  rating: Maybe<Scalars['Float']>;
  savedPosition: Maybe<Scalars['Float']>;
};

export type RecipeAvgOrderByAggregateInput = {
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
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
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RecipeCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Int']>;
  savedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRecipeInput;
};

export type RecipeCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Int']>;
  savedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type RecipeCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Int']>;
  savedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type RecipeCreateManyUserInputEnvelope = {
  data: Array<RecipeCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type RecipeCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<RecipeCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<RecipeCreateWithoutUserInput>>;
  createMany: InputMaybe<RecipeCreateManyUserInputEnvelope>;
};

export type RecipeCreateOrConnectWithoutUserInput = {
  create: RecipeCreateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Int']>;
  savedPosition: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type RecipeGroupBy = {
  _avg: Maybe<RecipeAvgAggregate>;
  _count: Maybe<RecipeCountAggregate>;
  _max: Maybe<RecipeMaxAggregate>;
  _min: Maybe<RecipeMinAggregate>;
  _sum: Maybe<RecipeSumAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  rating: Maybe<Scalars['Int']>;
  savedPosition: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type RecipeInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  rating: InputMaybe<Scalars['Float']>;
  savedPosition: InputMaybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['String']>;
};

export type RecipeListRelationFilter = {
  every: InputMaybe<RecipeWhereInput>;
  none: InputMaybe<RecipeWhereInput>;
  some: InputMaybe<RecipeWhereInput>;
};

export type RecipeMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  savedPosition: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type RecipeMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RecipeMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  rating: Maybe<Scalars['Int']>;
  savedPosition: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type RecipeMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RecipeOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithAggregationInput = {
  _avg: InputMaybe<RecipeAvgOrderByAggregateInput>;
  _count: InputMaybe<RecipeCountOrderByAggregateInput>;
  _max: InputMaybe<RecipeMaxOrderByAggregateInput>;
  _min: InputMaybe<RecipeMinOrderByAggregateInput>;
  _sum: InputMaybe<RecipeSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type RecipeOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  description: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
  title: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
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
  AND: InputMaybe<Array<RecipeScalarWhereInput>>;
  NOT: InputMaybe<Array<RecipeScalarWhereInput>>;
  OR: InputMaybe<Array<RecipeScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  rating: InputMaybe<IntNullableFilter>;
  savedPosition: InputMaybe<IntNullableFilter>;
  title: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type RecipeScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<RecipeScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  description: InputMaybe<StringWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  rating: InputMaybe<IntNullableWithAggregatesFilter>;
  savedPosition: InputMaybe<IntNullableWithAggregatesFilter>;
  title: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type RecipeSumAggregate = {
  rating: Maybe<Scalars['Int']>;
  savedPosition: Maybe<Scalars['Int']>;
};

export type RecipeSumOrderByAggregateInput = {
  rating: InputMaybe<SortOrder>;
  savedPosition: InputMaybe<SortOrder>;
};

export type RecipeUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutRecipeNestedInput>;
};

export type RecipeUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpdateManyWithWhereWithoutUserInput = {
  data: RecipeUpdateManyMutationInput;
  where: RecipeScalarWhereInput;
};

export type RecipeUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<RecipeWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<RecipeCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<RecipeCreateWithoutUserInput>>;
  createMany: InputMaybe<RecipeCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<RecipeWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<RecipeScalarWhereInput>>;
  disconnect: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set: InputMaybe<Array<RecipeWhereUniqueInput>>;
  update: InputMaybe<Array<RecipeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<RecipeUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<RecipeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
  data: RecipeUpdateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  rating: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  savedPosition: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
  create: RecipeCreateWithoutUserInput;
  update: RecipeUpdateWithoutUserInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeWhereInput = {
  AND: InputMaybe<Array<RecipeWhereInput>>;
  NOT: InputMaybe<Array<RecipeWhereInput>>;
  OR: InputMaybe<Array<RecipeWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  description: InputMaybe<StringFilter>;
  id: InputMaybe<StringFilter>;
  rating: InputMaybe<IntNullableFilter>;
  savedPosition: InputMaybe<IntNullableFilter>;
  title: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type RecipeWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type RegisterValidInput = {
  email: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  username: Scalars['String'];
};

export type Salary = {
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type SalaryAvgAggregate = {
  value: Maybe<Scalars['Float']>;
};

export type SalaryAvgOrderByAggregateInput = {
  value: InputMaybe<SortOrder>;
};

export type SalaryCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type SalaryCountOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SalaryCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSalaryInput;
  value: Scalars['Int'];
};

export type SalaryCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type SalaryCreateNestedOneWithoutUserInput = {
  connect: InputMaybe<SalaryWhereUniqueInput>;
  connectOrCreate: InputMaybe<SalaryCreateOrConnectWithoutUserInput>;
  create: InputMaybe<SalaryCreateWithoutUserInput>;
};

export type SalaryCreateOrConnectWithoutUserInput = {
  create: SalaryCreateWithoutUserInput;
  where: SalaryWhereUniqueInput;
};

export type SalaryCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Int'];
};

export type SalaryGroupBy = {
  _avg: Maybe<SalaryAvgAggregate>;
  _count: Maybe<SalaryCountAggregate>;
  _max: Maybe<SalaryMaxAggregate>;
  _min: Maybe<SalaryMinAggregate>;
  _sum: Maybe<SalarySumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  value: Scalars['Int'];
};

export type SalaryMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Int']>;
};

export type SalaryMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SalaryMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Int']>;
};

export type SalaryMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SalaryOrderByWithAggregationInput = {
  _avg: InputMaybe<SalaryAvgOrderByAggregateInput>;
  _count: InputMaybe<SalaryCountOrderByAggregateInput>;
  _max: InputMaybe<SalaryMaxOrderByAggregateInput>;
  _min: InputMaybe<SalaryMinOrderByAggregateInput>;
  _sum: InputMaybe<SalarySumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SalaryOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SalaryRelationFilter = {
  is: InputMaybe<SalaryWhereInput>;
  isNot: InputMaybe<SalaryWhereInput>;
};

export enum SalaryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Value = 'value'
}

export type SalaryScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<SalaryScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<SalaryScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<SalaryScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
  value: InputMaybe<IntWithAggregatesFilter>;
};

export type SalarySumAggregate = {
  value: Maybe<Scalars['Int']>;
};

export type SalarySumOrderByAggregateInput = {
  value: InputMaybe<SortOrder>;
};

export type SalaryUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutSalaryNestedInput>;
  value: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalaryUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalaryUpdateOneWithoutUserNestedInput = {
  connect: InputMaybe<SalaryWhereUniqueInput>;
  connectOrCreate: InputMaybe<SalaryCreateOrConnectWithoutUserInput>;
  create: InputMaybe<SalaryCreateWithoutUserInput>;
  delete: InputMaybe<Scalars['Boolean']>;
  disconnect: InputMaybe<Scalars['Boolean']>;
  update: InputMaybe<SalaryUpdateWithoutUserInput>;
  upsert: InputMaybe<SalaryUpsertWithoutUserInput>;
};

export type SalaryUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SalaryUpsertWithoutUserInput = {
  create: SalaryCreateWithoutUserInput;
  update: SalaryUpdateWithoutUserInput;
};

export type SalaryValidInput = {
  id: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['Int']>;
};

export type SalaryWhereInput = {
  AND: InputMaybe<Array<SalaryWhereInput>>;
  NOT: InputMaybe<Array<SalaryWhereInput>>;
  OR: InputMaybe<Array<SalaryWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
  value: InputMaybe<IntFilter>;
};

export type SalaryWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['String']>;
};

export type Saving = {
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type SavingAvgAggregate = {
  value: Maybe<Scalars['Decimal']>;
};

export type SavingAvgOrderByAggregateInput = {
  value: InputMaybe<SortOrder>;
};

export type SavingCountAggregate = {
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type SavingCountOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SavingCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSavingsInput;
  value: Scalars['Decimal'];
};

export type SavingCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type SavingCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type SavingCreateManyUserInputEnvelope = {
  data: Array<SavingCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type SavingCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<SavingWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<SavingCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<SavingCreateWithoutUserInput>>;
  createMany: InputMaybe<SavingCreateManyUserInputEnvelope>;
};

export type SavingCreateOrConnectWithoutUserInput = {
  create: SavingCreateWithoutUserInput;
  where: SavingWhereUniqueInput;
};

export type SavingCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  value: Scalars['Decimal'];
};

export type SavingGroupBy = {
  _avg: Maybe<SavingAvgAggregate>;
  _count: Maybe<SavingCountAggregate>;
  _max: Maybe<SavingMaxAggregate>;
  _min: Maybe<SavingMinAggregate>;
  _sum: Maybe<SavingSumAggregate>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  value: Scalars['Decimal'];
};

export type SavingListRelationFilter = {
  every: InputMaybe<SavingWhereInput>;
  none: InputMaybe<SavingWhereInput>;
  some: InputMaybe<SavingWhereInput>;
};

export type SavingMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Decimal']>;
};

export type SavingMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SavingMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  date: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
  value: Maybe<Scalars['Decimal']>;
};

export type SavingMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SavingOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type SavingOrderByWithAggregationInput = {
  _avg: InputMaybe<SavingAvgOrderByAggregateInput>;
  _count: InputMaybe<SavingCountOrderByAggregateInput>;
  _max: InputMaybe<SavingMaxOrderByAggregateInput>;
  _min: InputMaybe<SavingMinOrderByAggregateInput>;
  _sum: InputMaybe<SavingSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export type SavingOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  date: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
  value: InputMaybe<SortOrder>;
};

export enum SavingScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Value = 'value'
}

export type SavingScalarWhereInput = {
  AND: InputMaybe<Array<SavingScalarWhereInput>>;
  NOT: InputMaybe<Array<SavingScalarWhereInput>>;
  OR: InputMaybe<Array<SavingScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  date: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
  value: InputMaybe<DecimalFilter>;
};

export type SavingScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<SavingScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<SavingScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<SavingScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  date: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
  value: InputMaybe<DecimalWithAggregatesFilter>;
};

export type SavingSumAggregate = {
  value: Maybe<Scalars['Decimal']>;
};

export type SavingSumOrderByAggregateInput = {
  value: InputMaybe<SortOrder>;
};

export type SavingUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutSavingsNestedInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type SavingUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type SavingUpdateManyWithWhereWithoutUserInput = {
  data: SavingUpdateManyMutationInput;
  where: SavingScalarWhereInput;
};

export type SavingUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<SavingWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<SavingCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<SavingCreateWithoutUserInput>>;
  createMany: InputMaybe<SavingCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<SavingWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<SavingScalarWhereInput>>;
  disconnect: InputMaybe<Array<SavingWhereUniqueInput>>;
  set: InputMaybe<Array<SavingWhereUniqueInput>>;
  update: InputMaybe<Array<SavingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<SavingUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<SavingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SavingUpdateWithWhereUniqueWithoutUserInput = {
  data: SavingUpdateWithoutUserInput;
  where: SavingWhereUniqueInput;
};

export type SavingUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type SavingUpsertWithWhereUniqueWithoutUserInput = {
  create: SavingCreateWithoutUserInput;
  update: SavingUpdateWithoutUserInput;
  where: SavingWhereUniqueInput;
};

export type SavingValidInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  date: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: InputMaybe<Scalars['String']>;
  value: Scalars['String'];
};

export type SavingWhereInput = {
  AND: InputMaybe<Array<SavingWhereInput>>;
  NOT: InputMaybe<Array<SavingWhereInput>>;
  OR: InputMaybe<Array<SavingWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  date: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
  value: InputMaybe<DecimalFilter>;
};

export type SavingWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringNullableFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count: InputMaybe<NestedIntNullableFilter>;
  _max: InputMaybe<NestedStringNullableFilter>;
  _min: InputMaybe<NestedStringNullableFilter>;
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count: InputMaybe<NestedIntFilter>;
  _max: InputMaybe<NestedStringFilter>;
  _min: InputMaybe<NestedStringFilter>;
  contains: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  equals: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<Scalars['String']>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  mode: InputMaybe<QueryMode>;
  not: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn: InputMaybe<Array<Scalars['String']>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type User = {
  _count: Maybe<UserCount>;
  categories: Array<Category>;
  colorProportions: Array<ColorProportion>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  expenses: Array<Expense>;
  id: Scalars['String'];
  issueLabels: Array<IssueLabel>;
  issues: Array<Issue>;
  mixedColors: Array<MixedColor>;
  nhAuthors: Array<NhAuthor>;
  nhFavorites: Array<NhFavorite>;
  password: Scalars['String'];
  rawColors: Array<RawColor>;
  recipe: Array<Recipe>;
  salary: Maybe<Salary>;
  savings: Array<Saving>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  wishlistItems: Array<WishlistItem>;
};


export type UserCategoriesArgs = {
  cursor: InputMaybe<CategoryWhereUniqueInput>;
  distinct: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<CategoryWhereInput>;
};


export type UserColorProportionsArgs = {
  cursor: InputMaybe<ColorProportionWhereUniqueInput>;
  distinct: InputMaybe<Array<ColorProportionScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ColorProportionOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ColorProportionWhereInput>;
};


export type UserExpensesArgs = {
  cursor: InputMaybe<ExpenseWhereUniqueInput>;
  distinct: InputMaybe<Array<ExpenseScalarFieldEnum>>;
  orderBy: InputMaybe<Array<ExpenseOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExpenseWhereInput>;
};


export type UserIssueLabelsArgs = {
  cursor: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueLabelWhereInput>;
};


export type UserIssuesArgs = {
  cursor: InputMaybe<IssueWhereUniqueInput>;
  distinct: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<IssueWhereInput>;
};


export type UserMixedColorsArgs = {
  cursor: InputMaybe<MixedColorWhereUniqueInput>;
  distinct: InputMaybe<Array<MixedColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<MixedColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<MixedColorWhereInput>;
};


export type UserNhAuthorsArgs = {
  cursor: InputMaybe<NhAuthorWhereUniqueInput>;
  distinct: InputMaybe<Array<NhAuthorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhAuthorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhAuthorWhereInput>;
};


export type UserNhFavoritesArgs = {
  cursor: InputMaybe<NhFavoriteWhereUniqueInput>;
  distinct: InputMaybe<Array<NhFavoriteScalarFieldEnum>>;
  orderBy: InputMaybe<Array<NhFavoriteOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<NhFavoriteWhereInput>;
};


export type UserRawColorsArgs = {
  cursor: InputMaybe<RawColorWhereUniqueInput>;
  distinct: InputMaybe<Array<RawColorScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RawColorOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RawColorWhereInput>;
};


export type UserRecipeArgs = {
  cursor: InputMaybe<RecipeWhereUniqueInput>;
  distinct: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<RecipeWhereInput>;
};


export type UserSavingsArgs = {
  cursor: InputMaybe<SavingWhereUniqueInput>;
  distinct: InputMaybe<Array<SavingScalarFieldEnum>>;
  orderBy: InputMaybe<Array<SavingOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SavingWhereInput>;
};


export type UserWishlistItemsArgs = {
  cursor: InputMaybe<WishlistItemWhereUniqueInput>;
  distinct: InputMaybe<Array<WishlistItemScalarFieldEnum>>;
  orderBy: InputMaybe<Array<WishlistItemOrderByWithRelationInput>>;
  skip: InputMaybe<Scalars['Int']>;
  take: InputMaybe<Scalars['Int']>;
  where: InputMaybe<WishlistItemWhereInput>;
};

export type UserCount = {
  categories: Scalars['Int'];
  colorProportions: Scalars['Int'];
  expenses: Scalars['Int'];
  issueLabels: Scalars['Int'];
  issues: Scalars['Int'];
  mixedColors: Scalars['Int'];
  nhAuthors: Scalars['Int'];
  nhFavorites: Scalars['Int'];
  rawColors: Scalars['Int'];
  recipe: Scalars['Int'];
  savings: Scalars['Int'];
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
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  password: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  username: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutCategoriesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create: InputMaybe<UserCreateWithoutCategoriesInput>;
};

export type UserCreateNestedOneWithoutColorProportionsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<UserCreateWithoutColorProportionsInput>;
};

export type UserCreateNestedOneWithoutExpensesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutExpensesInput>;
  create: InputMaybe<UserCreateWithoutExpensesInput>;
};

export type UserCreateNestedOneWithoutIssueLabelsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutIssueLabelsInput>;
  create: InputMaybe<UserCreateWithoutIssueLabelsInput>;
};

export type UserCreateNestedOneWithoutIssuesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutIssuesInput>;
  create: InputMaybe<UserCreateWithoutIssuesInput>;
};

export type UserCreateNestedOneWithoutMixedColorsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutMixedColorsInput>;
  create: InputMaybe<UserCreateWithoutMixedColorsInput>;
};

export type UserCreateNestedOneWithoutNhAuthorsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutNhAuthorsInput>;
  create: InputMaybe<UserCreateWithoutNhAuthorsInput>;
};

export type UserCreateNestedOneWithoutNhFavoritesInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutNhFavoritesInput>;
  create: InputMaybe<UserCreateWithoutNhFavoritesInput>;
};

export type UserCreateNestedOneWithoutRawColorsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutRawColorsInput>;
  create: InputMaybe<UserCreateWithoutRawColorsInput>;
};

export type UserCreateNestedOneWithoutRecipeInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutRecipeInput>;
  create: InputMaybe<UserCreateWithoutRecipeInput>;
};

export type UserCreateNestedOneWithoutSalaryInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutSalaryInput>;
  create: InputMaybe<UserCreateWithoutSalaryInput>;
};

export type UserCreateNestedOneWithoutSavingsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutSavingsInput>;
  create: InputMaybe<UserCreateWithoutSavingsInput>;
};

export type UserCreateNestedOneWithoutWishlistItemsInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutWishlistItemsInput>;
  create: InputMaybe<UserCreateWithoutWishlistItemsInput>;
};

export type UserCreateOrConnectWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutColorProportionsInput = {
  create: UserCreateWithoutColorProportionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutExpensesInput = {
  create: UserCreateWithoutExpensesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIssueLabelsInput = {
  create: UserCreateWithoutIssueLabelsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIssuesInput = {
  create: UserCreateWithoutIssuesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMixedColorsInput = {
  create: UserCreateWithoutMixedColorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNhAuthorsInput = {
  create: UserCreateWithoutNhAuthorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNhFavoritesInput = {
  create: UserCreateWithoutNhFavoritesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRawColorsInput = {
  create: UserCreateWithoutRawColorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRecipeInput = {
  create: UserCreateWithoutRecipeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSalaryInput = {
  create: UserCreateWithoutSalaryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSavingsInput = {
  create: UserCreateWithoutSavingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWishlistItemsInput = {
  create: UserCreateWithoutWishlistItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCategoriesInput = {
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutColorProportionsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutExpensesInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutIssueLabelsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutIssuesInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutMixedColorsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNhAuthorsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNhFavoritesInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRawColorsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRecipeInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSalaryInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSavingsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  wishlistItems: InputMaybe<WishlistItemCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutWishlistItemsInput = {
  categories: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  colorProportions: InputMaybe<ColorProportionCreateNestedManyWithoutUserInput>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expenses: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id: InputMaybe<Scalars['String']>;
  issueLabels: InputMaybe<IssueLabelCreateNestedManyWithoutUserInput>;
  issues: InputMaybe<IssueCreateNestedManyWithoutUserInput>;
  mixedColors: InputMaybe<MixedColorCreateNestedManyWithoutUserInput>;
  nhAuthors: InputMaybe<NhAuthorCreateNestedManyWithoutUserInput>;
  nhFavorites: InputMaybe<NhFavoriteCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  rawColors: InputMaybe<RawColorCreateNestedManyWithoutUserInput>;
  recipe: InputMaybe<RecipeCreateNestedManyWithoutUserInput>;
  salary: InputMaybe<SalaryCreateNestedOneWithoutUserInput>;
  savings: InputMaybe<SavingCreateNestedManyWithoutUserInput>;
  updatedAt: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  _count: Maybe<UserCountAggregate>;
  _max: Maybe<UserMaxAggregate>;
  _min: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  username: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  password: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  username: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  username: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  password: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  username: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count: InputMaybe<UserCountOrderByAggregateInput>;
  _max: InputMaybe<UserMaxOrderByAggregateInput>;
  _min: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  password: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  username: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  categories: InputMaybe<CategoryOrderByRelationAggregateInput>;
  colorProportions: InputMaybe<ColorProportionOrderByRelationAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  email: InputMaybe<SortOrder>;
  expenses: InputMaybe<ExpenseOrderByRelationAggregateInput>;
  id: InputMaybe<SortOrder>;
  issueLabels: InputMaybe<IssueLabelOrderByRelationAggregateInput>;
  issues: InputMaybe<IssueOrderByRelationAggregateInput>;
  mixedColors: InputMaybe<MixedColorOrderByRelationAggregateInput>;
  nhAuthors: InputMaybe<NhAuthorOrderByRelationAggregateInput>;
  nhFavorites: InputMaybe<NhFavoriteOrderByRelationAggregateInput>;
  password: InputMaybe<SortOrder>;
  rawColors: InputMaybe<RawColorOrderByRelationAggregateInput>;
  recipe: InputMaybe<RecipeOrderByRelationAggregateInput>;
  salary: InputMaybe<SalaryOrderByWithRelationInput>;
  savings: InputMaybe<SavingOrderByRelationAggregateInput>;
  updatedAt: InputMaybe<SortOrder>;
  username: InputMaybe<SortOrder>;
  wishlistItems: InputMaybe<WishlistItemOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is: InputMaybe<UserWhereInput>;
  isNot: InputMaybe<UserWhereInput>;
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
  AND: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  email: InputMaybe<StringWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  password: InputMaybe<StringWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  username: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create: InputMaybe<UserCreateWithoutCategoriesInput>;
  update: InputMaybe<UserUpdateWithoutCategoriesInput>;
  upsert: InputMaybe<UserUpsertWithoutCategoriesInput>;
};

export type UserUpdateOneRequiredWithoutColorProportionsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutColorProportionsInput>;
  create: InputMaybe<UserCreateWithoutColorProportionsInput>;
  update: InputMaybe<UserUpdateWithoutColorProportionsInput>;
  upsert: InputMaybe<UserUpsertWithoutColorProportionsInput>;
};

export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutExpensesInput>;
  create: InputMaybe<UserCreateWithoutExpensesInput>;
  update: InputMaybe<UserUpdateWithoutExpensesInput>;
  upsert: InputMaybe<UserUpsertWithoutExpensesInput>;
};

export type UserUpdateOneRequiredWithoutIssueLabelsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutIssueLabelsInput>;
  create: InputMaybe<UserCreateWithoutIssueLabelsInput>;
  update: InputMaybe<UserUpdateWithoutIssueLabelsInput>;
  upsert: InputMaybe<UserUpsertWithoutIssueLabelsInput>;
};

export type UserUpdateOneRequiredWithoutIssuesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutIssuesInput>;
  create: InputMaybe<UserCreateWithoutIssuesInput>;
  update: InputMaybe<UserUpdateWithoutIssuesInput>;
  upsert: InputMaybe<UserUpsertWithoutIssuesInput>;
};

export type UserUpdateOneRequiredWithoutMixedColorsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutMixedColorsInput>;
  create: InputMaybe<UserCreateWithoutMixedColorsInput>;
  update: InputMaybe<UserUpdateWithoutMixedColorsInput>;
  upsert: InputMaybe<UserUpsertWithoutMixedColorsInput>;
};

export type UserUpdateOneRequiredWithoutNhAuthorsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutNhAuthorsInput>;
  create: InputMaybe<UserCreateWithoutNhAuthorsInput>;
  update: InputMaybe<UserUpdateWithoutNhAuthorsInput>;
  upsert: InputMaybe<UserUpsertWithoutNhAuthorsInput>;
};

export type UserUpdateOneRequiredWithoutNhFavoritesNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutNhFavoritesInput>;
  create: InputMaybe<UserCreateWithoutNhFavoritesInput>;
  update: InputMaybe<UserUpdateWithoutNhFavoritesInput>;
  upsert: InputMaybe<UserUpsertWithoutNhFavoritesInput>;
};

export type UserUpdateOneRequiredWithoutRawColorsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutRawColorsInput>;
  create: InputMaybe<UserCreateWithoutRawColorsInput>;
  update: InputMaybe<UserUpdateWithoutRawColorsInput>;
  upsert: InputMaybe<UserUpsertWithoutRawColorsInput>;
};

export type UserUpdateOneRequiredWithoutRecipeNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutRecipeInput>;
  create: InputMaybe<UserCreateWithoutRecipeInput>;
  update: InputMaybe<UserUpdateWithoutRecipeInput>;
  upsert: InputMaybe<UserUpsertWithoutRecipeInput>;
};

export type UserUpdateOneRequiredWithoutSalaryNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutSalaryInput>;
  create: InputMaybe<UserCreateWithoutSalaryInput>;
  update: InputMaybe<UserUpdateWithoutSalaryInput>;
  upsert: InputMaybe<UserUpsertWithoutSalaryInput>;
};

export type UserUpdateOneRequiredWithoutSavingsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutSavingsInput>;
  create: InputMaybe<UserCreateWithoutSavingsInput>;
  update: InputMaybe<UserUpdateWithoutSavingsInput>;
  upsert: InputMaybe<UserUpsertWithoutSavingsInput>;
};

export type UserUpdateOneRequiredWithoutWishlistItemsNestedInput = {
  connect: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate: InputMaybe<UserCreateOrConnectWithoutWishlistItemsInput>;
  create: InputMaybe<UserCreateWithoutWishlistItemsInput>;
  update: InputMaybe<UserUpdateWithoutWishlistItemsInput>;
  upsert: InputMaybe<UserUpsertWithoutWishlistItemsInput>;
};

export type UserUpdateWithoutCategoriesInput = {
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutColorProportionsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutExpensesInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutIssueLabelsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutIssuesInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutMixedColorsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutNhAuthorsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutNhFavoritesInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutRawColorsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutRecipeInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSalaryInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutSavingsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
  wishlistItems: InputMaybe<WishlistItemUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutWishlistItemsInput = {
  categories: InputMaybe<CategoryUpdateManyWithoutUserNestedInput>;
  colorProportions: InputMaybe<ColorProportionUpdateManyWithoutUserNestedInput>;
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email: InputMaybe<StringFieldUpdateOperationsInput>;
  expenses: InputMaybe<ExpenseUpdateManyWithoutUserNestedInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  issueLabels: InputMaybe<IssueLabelUpdateManyWithoutUserNestedInput>;
  issues: InputMaybe<IssueUpdateManyWithoutUserNestedInput>;
  mixedColors: InputMaybe<MixedColorUpdateManyWithoutUserNestedInput>;
  nhAuthors: InputMaybe<NhAuthorUpdateManyWithoutUserNestedInput>;
  nhFavorites: InputMaybe<NhFavoriteUpdateManyWithoutUserNestedInput>;
  password: InputMaybe<StringFieldUpdateOperationsInput>;
  rawColors: InputMaybe<RawColorUpdateManyWithoutUserNestedInput>;
  recipe: InputMaybe<RecipeUpdateManyWithoutUserNestedInput>;
  salary: InputMaybe<SalaryUpdateOneWithoutUserNestedInput>;
  savings: InputMaybe<SavingUpdateManyWithoutUserNestedInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  update: UserUpdateWithoutCategoriesInput;
};

export type UserUpsertWithoutColorProportionsInput = {
  create: UserCreateWithoutColorProportionsInput;
  update: UserUpdateWithoutColorProportionsInput;
};

export type UserUpsertWithoutExpensesInput = {
  create: UserCreateWithoutExpensesInput;
  update: UserUpdateWithoutExpensesInput;
};

export type UserUpsertWithoutIssueLabelsInput = {
  create: UserCreateWithoutIssueLabelsInput;
  update: UserUpdateWithoutIssueLabelsInput;
};

export type UserUpsertWithoutIssuesInput = {
  create: UserCreateWithoutIssuesInput;
  update: UserUpdateWithoutIssuesInput;
};

export type UserUpsertWithoutMixedColorsInput = {
  create: UserCreateWithoutMixedColorsInput;
  update: UserUpdateWithoutMixedColorsInput;
};

export type UserUpsertWithoutNhAuthorsInput = {
  create: UserCreateWithoutNhAuthorsInput;
  update: UserUpdateWithoutNhAuthorsInput;
};

export type UserUpsertWithoutNhFavoritesInput = {
  create: UserCreateWithoutNhFavoritesInput;
  update: UserUpdateWithoutNhFavoritesInput;
};

export type UserUpsertWithoutRawColorsInput = {
  create: UserCreateWithoutRawColorsInput;
  update: UserUpdateWithoutRawColorsInput;
};

export type UserUpsertWithoutRecipeInput = {
  create: UserCreateWithoutRecipeInput;
  update: UserUpdateWithoutRecipeInput;
};

export type UserUpsertWithoutSalaryInput = {
  create: UserCreateWithoutSalaryInput;
  update: UserUpdateWithoutSalaryInput;
};

export type UserUpsertWithoutSavingsInput = {
  create: UserCreateWithoutSavingsInput;
  update: UserUpdateWithoutSavingsInput;
};

export type UserUpsertWithoutWishlistItemsInput = {
  create: UserCreateWithoutWishlistItemsInput;
  update: UserUpdateWithoutWishlistItemsInput;
};

export type UserWhereInput = {
  AND: InputMaybe<Array<UserWhereInput>>;
  NOT: InputMaybe<Array<UserWhereInput>>;
  OR: InputMaybe<Array<UserWhereInput>>;
  categories: InputMaybe<CategoryListRelationFilter>;
  colorProportions: InputMaybe<ColorProportionListRelationFilter>;
  createdAt: InputMaybe<DateTimeFilter>;
  email: InputMaybe<StringFilter>;
  expenses: InputMaybe<ExpenseListRelationFilter>;
  id: InputMaybe<StringFilter>;
  issueLabels: InputMaybe<IssueLabelListRelationFilter>;
  issues: InputMaybe<IssueListRelationFilter>;
  mixedColors: InputMaybe<MixedColorListRelationFilter>;
  nhAuthors: InputMaybe<NhAuthorListRelationFilter>;
  nhFavorites: InputMaybe<NhFavoriteListRelationFilter>;
  password: InputMaybe<StringFilter>;
  rawColors: InputMaybe<RawColorListRelationFilter>;
  recipe: InputMaybe<RecipeListRelationFilter>;
  salary: InputMaybe<SalaryRelationFilter>;
  savings: InputMaybe<SavingListRelationFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  username: InputMaybe<StringFilter>;
  wishlistItems: InputMaybe<WishlistItemListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  username: InputMaybe<Scalars['String']>;
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
  priceInThousands: Maybe<Scalars['Decimal']>;
};

export type WishlistItemAvgOrderByAggregateInput = {
  priceInThousands: InputMaybe<SortOrder>;
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
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  itemName: InputMaybe<SortOrder>;
  priceInThousands: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type WishlistItemCreateInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutWishlistItemsInput;
};

export type WishlistItemCreateManyInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type WishlistItemCreateManyUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type WishlistItemCreateManyUserInputEnvelope = {
  data: Array<WishlistItemCreateManyUserInput>;
  skipDuplicates: InputMaybe<Scalars['Boolean']>;
};

export type WishlistItemCreateNestedManyWithoutUserInput = {
  connect: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<WishlistItemCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<WishlistItemCreateWithoutUserInput>>;
  createMany: InputMaybe<WishlistItemCreateManyUserInputEnvelope>;
};

export type WishlistItemCreateOrConnectWithoutUserInput = {
  create: WishlistItemCreateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemCreateWithoutUserInput = {
  createdAt: InputMaybe<Scalars['DateTime']>;
  id: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: InputMaybe<Scalars['DateTime']>;
};

export type WishlistItemGroupBy = {
  _avg: Maybe<WishlistItemAvgAggregate>;
  _count: Maybe<WishlistItemCountAggregate>;
  _max: Maybe<WishlistItemMaxAggregate>;
  _min: Maybe<WishlistItemMinAggregate>;
  _sum: Maybe<WishlistItemSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  itemName: Scalars['String'];
  priceInThousands: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type WishlistItemListRelationFilter = {
  every: InputMaybe<WishlistItemWhereInput>;
  none: InputMaybe<WishlistItemWhereInput>;
  some: InputMaybe<WishlistItemWhereInput>;
};

export type WishlistItemMaxAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  itemName: Maybe<Scalars['String']>;
  priceInThousands: Maybe<Scalars['Decimal']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type WishlistItemMaxOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  itemName: InputMaybe<SortOrder>;
  priceInThousands: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type WishlistItemMinAggregate = {
  createdAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['String']>;
  itemName: Maybe<Scalars['String']>;
  priceInThousands: Maybe<Scalars['Decimal']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  userId: Maybe<Scalars['String']>;
};

export type WishlistItemMinOrderByAggregateInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  itemName: InputMaybe<SortOrder>;
  priceInThousands: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByRelationAggregateInput = {
  _count: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByWithAggregationInput = {
  _avg: InputMaybe<WishlistItemAvgOrderByAggregateInput>;
  _count: InputMaybe<WishlistItemCountOrderByAggregateInput>;
  _max: InputMaybe<WishlistItemMaxOrderByAggregateInput>;
  _min: InputMaybe<WishlistItemMinOrderByAggregateInput>;
  _sum: InputMaybe<WishlistItemSumOrderByAggregateInput>;
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  itemName: InputMaybe<SortOrder>;
  priceInThousands: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  userId: InputMaybe<SortOrder>;
};

export type WishlistItemOrderByWithRelationInput = {
  createdAt: InputMaybe<SortOrder>;
  id: InputMaybe<SortOrder>;
  itemName: InputMaybe<SortOrder>;
  priceInThousands: InputMaybe<SortOrder>;
  updatedAt: InputMaybe<SortOrder>;
  user: InputMaybe<UserOrderByWithRelationInput>;
  userId: InputMaybe<SortOrder>;
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
  AND: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  NOT: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  OR: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  itemName: InputMaybe<StringFilter>;
  priceInThousands: InputMaybe<DecimalFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  userId: InputMaybe<StringFilter>;
};

export type WishlistItemScalarWhereWithAggregatesInput = {
  AND: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  NOT: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  OR: InputMaybe<Array<WishlistItemScalarWhereWithAggregatesInput>>;
  createdAt: InputMaybe<DateTimeWithAggregatesFilter>;
  id: InputMaybe<StringWithAggregatesFilter>;
  itemName: InputMaybe<StringWithAggregatesFilter>;
  priceInThousands: InputMaybe<DecimalWithAggregatesFilter>;
  updatedAt: InputMaybe<DateTimeWithAggregatesFilter>;
  userId: InputMaybe<StringWithAggregatesFilter>;
};

export type WishlistItemSumAggregate = {
  priceInThousands: Maybe<Scalars['Decimal']>;
};

export type WishlistItemSumOrderByAggregateInput = {
  priceInThousands: InputMaybe<SortOrder>;
};

export type WishlistItemUpdateInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user: InputMaybe<UserUpdateOneRequiredWithoutWishlistItemsNestedInput>;
};

export type WishlistItemUpdateManyMutationInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WishlistItemUpdateManyWithWhereWithoutUserInput = {
  data: WishlistItemUpdateManyMutationInput;
  where: WishlistItemScalarWhereInput;
};

export type WishlistItemUpdateManyWithoutUserNestedInput = {
  connect: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  connectOrCreate: InputMaybe<Array<WishlistItemCreateOrConnectWithoutUserInput>>;
  create: InputMaybe<Array<WishlistItemCreateWithoutUserInput>>;
  createMany: InputMaybe<WishlistItemCreateManyUserInputEnvelope>;
  delete: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  deleteMany: InputMaybe<Array<WishlistItemScalarWhereInput>>;
  disconnect: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  set: InputMaybe<Array<WishlistItemWhereUniqueInput>>;
  update: InputMaybe<Array<WishlistItemUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany: InputMaybe<Array<WishlistItemUpdateManyWithWhereWithoutUserInput>>;
  upsert: InputMaybe<Array<WishlistItemUpsertWithWhereUniqueWithoutUserInput>>;
};

export type WishlistItemUpdateWithWhereUniqueWithoutUserInput = {
  data: WishlistItemUpdateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemUpdateWithoutUserInput = {
  createdAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id: InputMaybe<StringFieldUpdateOperationsInput>;
  itemName: InputMaybe<StringFieldUpdateOperationsInput>;
  priceInThousands: InputMaybe<DecimalFieldUpdateOperationsInput>;
  updatedAt: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WishlistItemUpsertWithWhereUniqueWithoutUserInput = {
  create: WishlistItemCreateWithoutUserInput;
  update: WishlistItemUpdateWithoutUserInput;
  where: WishlistItemWhereUniqueInput;
};

export type WishlistItemValidInput = {
  createdAt: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  itemName: Scalars['String'];
  priceInThousands: Scalars['String'];
  updatedAt: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['String']>;
};

export type WishlistItemWhereInput = {
  AND: InputMaybe<Array<WishlistItemWhereInput>>;
  NOT: InputMaybe<Array<WishlistItemWhereInput>>;
  OR: InputMaybe<Array<WishlistItemWhereInput>>;
  createdAt: InputMaybe<DateTimeFilter>;
  id: InputMaybe<StringFilter>;
  itemName: InputMaybe<StringFilter>;
  priceInThousands: InputMaybe<DecimalFilter>;
  updatedAt: InputMaybe<DateTimeFilter>;
  user: InputMaybe<UserRelationFilter>;
  userId: InputMaybe<StringFilter>;
};

export type WishlistItemWhereUniqueInput = {
  id: InputMaybe<Scalars['String']>;
};

export type AuthUserFragment = { id: string, username: string, email: string, token: string, expiresAt: string };

export type RecipeFragment = { id: string, userId: string, title: string, description: string, rating: number | null, savedPosition: number | null, createdAt: string, updatedAt: string };

export type CurrentSavingFragment = { id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string };

export type WishlistItemFragment = { id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string };

export type ExpenseFragment = { id: string, userId: string, name: string, value: string, rating: number | null, date: string | null, description: string | null, createdAt: string, updatedAt: string, timesPerMonth: string | null, categories: Array<{ id: string }> };

export type CategoryFragment = { id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string };

export type SalaryFragment = { id: string, userId: string, value: number, createdAt: string, updatedAt: string };

export type SavingFragment = { id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string };

export type IssueFragment = { id: string, userId: string, title: string, solution: string, isSolved: boolean, position: number, frequency: number, intensity: number, createdAt: string, solvedAt: string | null, updatedAt: string, labels: Array<{ id: string }> };

export type IssueLabelFragment = { id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string };

export type RawColorFragment = { id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string };

export type MixedColorFragment = { id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string, colorProportions: Array<{ id: string, userId: string, rawColorId: string, proportion: string, createdAt: string, updatedAt: string }> };

export type ColorProportionFragment = { id: string, userId: string, rawColorId: string, proportion: string, createdAt: string, updatedAt: string };

export type AuthorCountFragment = { authorUrl: string, count: number };

export type NhAuthorFragment = { url: string, userId: string, checkedAt: string | null };

export type MeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQueryQuery = { meQuery: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type LoginMutationMutationVariables = Exact<{
  data: LoginValidInput;
}>;


export type LoginMutationMutation = { loginMutation: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type RegisterMutationMutationVariables = Exact<{
  data: RegisterValidInput;
}>;


export type RegisterMutationMutation = { registerMutation: { id: string, username: string, email: string, token: string, expiresAt: string } };

export type MixedColorsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MixedColorsQueryQuery = { mixedColorsQuery: Array<{ id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string, colorProportions: Array<{ id: string, userId: string, rawColorId: string, proportion: string, createdAt: string, updatedAt: string }> }> };

export type SaveMixedColorMutationMutationVariables = Exact<{
  data: MixedColorInput;
}>;


export type SaveMixedColorMutationMutation = { saveMixedColorMutation: { id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string, colorProportions: Array<{ id: string, userId: string, rawColorId: string, proportion: string, createdAt: string, updatedAt: string }> } };

export type RawColorsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type RawColorsQueryQuery = { rawColorsQuery: Array<{ id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string }> };

export type SaveRawColorMutationMutationVariables = Exact<{
  data: RawColorInput;
}>;


export type SaveRawColorMutationMutation = { saveRawColorMutation: { id: string, userId: string, name: string, color: string, createdAt: string, updatedAt: string } };

export type CategoriesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQueryQuery = { categoriesQuery: Array<{ id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string }> };

export type DeleteCategoryMutationMutationVariables = Exact<{
  deleteCategoryMutationId: Scalars['String'];
}>;


export type DeleteCategoryMutationMutation = { deleteCategoryMutation: boolean };

export type SaveCategoryMutationMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type SaveCategoryMutationMutation = { saveCategoryMutation: { id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string } };

export type DeleteExpenseMutationMutationVariables = Exact<{
  deleteExpenseMutationId: Scalars['String'];
}>;


export type DeleteExpenseMutationMutation = { deleteExpenseMutation: boolean };

export type ExpensesQueryQueryVariables = Exact<{
  pagination: InputMaybe<PaginationInput>;
  filter: InputMaybe<ExpenseFilterInput>;
}>;


export type ExpensesQueryQuery = { expensesQuery: Array<{ id: string, userId: string, name: string, value: string, rating: number | null, date: string | null, description: string | null, createdAt: string, updatedAt: string, timesPerMonth: string | null, categories: Array<{ id: string }> }> };

export type RecurrentExpensesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type RecurrentExpensesQueryQuery = { recurrentExpensesQuery: Array<{ id: string, userId: string, name: string, value: string, rating: number | null, date: string | null, description: string | null, createdAt: string, updatedAt: string, timesPerMonth: string | null, categories: Array<{ id: string }> }> };

export type SaveExpenseV2MutationVariables = Exact<{
  data: ExpenseInput;
}>;


export type SaveExpenseV2Mutation = { saveExpenseMutation: { id: string, userId: string, name: string, value: string, rating: number | null, date: string | null, description: string | null, createdAt: string, updatedAt: string, timesPerMonth: string | null, categories: Array<{ id: string }> } };

export type DeleteIssueLabelMutationMutationVariables = Exact<{
  deleteIssueLabelMutationId: Scalars['String'];
}>;


export type DeleteIssueLabelMutationMutation = { deleteIssueLabelMutation: boolean };

export type IssueLabelsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IssueLabelsQueryQuery = { issueLabelsQuery: Array<{ id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string }> };

export type SaveIssueLabelMutationMutationVariables = Exact<{
  data: IssueLabelInput;
}>;


export type SaveIssueLabelMutationMutation = { saveIssueLabelMutation: { id: string, userId: string, name: string, bgColor: string, createdAt: string, updatedAt: string } };

export type ChangeIssuePositionMutationMutationVariables = Exact<{
  data: ChangeIssuePositionInput;
}>;


export type ChangeIssuePositionMutationMutation = { changeIssuePositionMutation: boolean };

export type DeleteIssueMutationMutationVariables = Exact<{
  issueId: Scalars['String'];
}>;


export type DeleteIssueMutationMutation = { deleteIssueMutation: boolean };

export type IssuesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type IssuesQueryQuery = { issuesQuery: Array<{ id: string, userId: string, title: string, solution: string, isSolved: boolean, position: number, frequency: number, intensity: number, createdAt: string, solvedAt: string | null, updatedAt: string, labels: Array<{ id: string }> }> };

export type SaveIssueMutationMutationVariables = Exact<{
  data: IssueInput;
}>;


export type SaveIssueMutationMutation = { saveIssueMutation: { id: string, userId: string, title: string, solution: string, isSolved: boolean, position: number, frequency: number, intensity: number, createdAt: string, solvedAt: string | null, updatedAt: string, labels: Array<{ id: string }> } };

export type SalaryQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SalaryQueryQuery = { salaryQuery: { id: string, userId: string, value: number, createdAt: string, updatedAt: string } | null };

export type SaveSalaryMutationMutationVariables = Exact<{
  data: SalaryValidInput;
}>;


export type SaveSalaryMutationMutation = { saveSalaryMutation: { id: string, userId: string, value: number, createdAt: string, updatedAt: string } };

export type DeleteSavingMutationMutationVariables = Exact<{
  savingId: Scalars['String'];
}>;


export type DeleteSavingMutationMutation = { deleteSavingMutation: boolean };

export type SaveSavingMutationMutationVariables = Exact<{
  data: SavingValidInput;
}>;


export type SaveSavingMutationMutation = { saveSavingMutation: { id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string } };

export type SavingsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SavingsQueryQuery = { savingsQuery: Array<{ id: string, userId: string, value: string, date: string, createdAt: string, updatedAt: string }> };

export type DeleteWishlistMutationMutationVariables = Exact<{
  deleteWishlistMutationId: Scalars['String'];
}>;


export type DeleteWishlistMutationMutation = { deleteWishlistMutation: boolean };

export type SaveWishlistItemMutationMutationVariables = Exact<{
  data: WishlistItemValidInput;
}>;


export type SaveWishlistItemMutationMutation = { saveWishlistItemMutation: { id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string } };

export type WishlistItemsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type WishlistItemsQueryQuery = { wishlistItemsQuery: Array<{ id: string, userId: string, itemName: string, priceInThousands: string, createdAt: string, updatedAt: string }> };

export type GroupedNhFavoritesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupedNhFavoritesQueryQuery = { groupedNhFavoritesQuery: Array<{ authorUrl: string, count: number }> };

export type NhAuthorsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type NhAuthorsQueryQuery = { nhAuthorsQuery: Array<{ url: string, userId: string, checkedAt: string | null }> };

export type ToggleNhAuthorMutationMutationVariables = Exact<{
  data: Scalars['String'];
}>;


export type ToggleNhAuthorMutationMutation = { toggleNhAuthorMutation: { url: string, userId: string, checkedAt: string | null } };

export type SaveRecipeMutationMutationVariables = Exact<{
  data: RecipeInput;
}>;


export type SaveRecipeMutationMutation = { saveRecipeMutation: { id: string, userId: string, title: string, description: string, rating: number | null, savedPosition: number | null, createdAt: string, updatedAt: string } };

export type DeleteRecipeMutationMutationVariables = Exact<{
  recipeId: Scalars['String'];
}>;


export type DeleteRecipeMutationMutation = { deleteRecipeMutation: boolean };

export type GetRecipesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecipesQueryQuery = { getRecipesQuery: Array<{ id: string, userId: string, title: string, description: string, rating: number | null, savedPosition: number | null, createdAt: string, updatedAt: string }> };

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
    fragment CurrentSaving on Saving {
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
export const ExpenseFragmentDoc = gql`
    fragment Expense on Expense {
  id
  userId
  name
  value
  rating
  date
  description
  createdAt
  updatedAt
  timesPerMonth
  categories {
    id
  }
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  userId
  name
  bgColor
  createdAt
  updatedAt
}
    `;
export const SalaryFragmentDoc = gql`
    fragment Salary on Salary {
  id
  userId
  value
  createdAt
  updatedAt
}
    `;
export const SavingFragmentDoc = gql`
    fragment Saving on Saving {
  id
  userId
  value
  date
  createdAt
  updatedAt
}
    `;
export const IssueFragmentDoc = gql`
    fragment Issue on Issue {
  id
  userId
  title
  solution
  isSolved
  position
  frequency
  intensity
  createdAt
  solvedAt
  labels {
    id
  }
  updatedAt
}
    `;
export const IssueLabelFragmentDoc = gql`
    fragment IssueLabel on IssueLabel {
  id
  userId
  name
  bgColor
  createdAt
  updatedAt
}
    `;
export const RawColorFragmentDoc = gql`
    fragment RawColor on RawColor {
  id
  userId
  name
  color
  createdAt
  updatedAt
}
    `;
export const ColorProportionFragmentDoc = gql`
    fragment ColorProportion on ColorProportion {
  id
  userId
  rawColorId
  proportion
  createdAt
  updatedAt
}
    `;
export const MixedColorFragmentDoc = gql`
    fragment MixedColor on MixedColor {
  id
  userId
  name
  color
  colorProportions {
    ...ColorProportion
  }
  createdAt
  updatedAt
}
    ${ColorProportionFragmentDoc}`;
export const AuthorCountFragmentDoc = gql`
    fragment AuthorCount on AuthorCount {
  authorUrl
  count
}
    `;
export const NhAuthorFragmentDoc = gql`
    fragment NhAuthor on NhAuthor {
  url
  userId
  checkedAt
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
export const MixedColorsQueryDocument = gql`
    query MixedColorsQuery {
  mixedColorsQuery {
    ...MixedColor
  }
}
    ${MixedColorFragmentDoc}`;
export const SaveMixedColorMutationDocument = gql`
    mutation SaveMixedColorMutation($data: MixedColorInput!) {
  saveMixedColorMutation(data: $data) {
    ...MixedColor
  }
}
    ${MixedColorFragmentDoc}`;
export const RawColorsQueryDocument = gql`
    query RawColorsQuery {
  rawColorsQuery {
    ...RawColor
  }
}
    ${RawColorFragmentDoc}`;
export const SaveRawColorMutationDocument = gql`
    mutation SaveRawColorMutation($data: RawColorInput!) {
  saveRawColorMutation(data: $data) {
    ...RawColor
  }
}
    ${RawColorFragmentDoc}`;
export const CategoriesQueryDocument = gql`
    query CategoriesQuery {
  categoriesQuery {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export const DeleteCategoryMutationDocument = gql`
    mutation DeleteCategoryMutation($deleteCategoryMutationId: String!) {
  deleteCategoryMutation(id: $deleteCategoryMutationId)
}
    `;
export const SaveCategoryMutationDocument = gql`
    mutation SaveCategoryMutation($data: CategoryInput!) {
  saveCategoryMutation(data: $data) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export const DeleteExpenseMutationDocument = gql`
    mutation DeleteExpenseMutation($deleteExpenseMutationId: String!) {
  deleteExpenseMutation(id: $deleteExpenseMutationId)
}
    `;
export const ExpensesQueryDocument = gql`
    query ExpensesQuery($pagination: PaginationInput, $filter: ExpenseFilterInput) {
  expensesQuery(pagination: $pagination, filter: $filter) {
    ...Expense
  }
}
    ${ExpenseFragmentDoc}`;
export const RecurrentExpensesQueryDocument = gql`
    query RecurrentExpensesQuery {
  recurrentExpensesQuery {
    ...Expense
  }
}
    ${ExpenseFragmentDoc}`;
export const SaveExpenseV2Document = gql`
    mutation SaveExpenseV2($data: ExpenseInput!) {
  saveExpenseMutation(data: $data) {
    ...Expense
  }
}
    ${ExpenseFragmentDoc}`;
export const DeleteIssueLabelMutationDocument = gql`
    mutation DeleteIssueLabelMutation($deleteIssueLabelMutationId: String!) {
  deleteIssueLabelMutation(id: $deleteIssueLabelMutationId)
}
    `;
export const IssueLabelsQueryDocument = gql`
    query IssueLabelsQuery {
  issueLabelsQuery {
    ...IssueLabel
  }
}
    ${IssueLabelFragmentDoc}`;
export const SaveIssueLabelMutationDocument = gql`
    mutation SaveIssueLabelMutation($data: IssueLabelInput!) {
  saveIssueLabelMutation(data: $data) {
    ...IssueLabel
  }
}
    ${IssueLabelFragmentDoc}`;
export const ChangeIssuePositionMutationDocument = gql`
    mutation ChangeIssuePositionMutation($data: ChangeIssuePositionInput!) {
  changeIssuePositionMutation(data: $data)
}
    `;
export const DeleteIssueMutationDocument = gql`
    mutation DeleteIssueMutation($issueId: String!) {
  deleteIssueMutation(issueId: $issueId)
}
    `;
export const IssuesQueryDocument = gql`
    query IssuesQuery {
  issuesQuery {
    ...Issue
  }
}
    ${IssueFragmentDoc}`;
export const SaveIssueMutationDocument = gql`
    mutation SaveIssueMutation($data: IssueInput!) {
  saveIssueMutation(data: $data) {
    ...Issue
  }
}
    ${IssueFragmentDoc}`;
export const SalaryQueryDocument = gql`
    query SalaryQuery {
  salaryQuery {
    ...Salary
  }
}
    ${SalaryFragmentDoc}`;
export const SaveSalaryMutationDocument = gql`
    mutation SaveSalaryMutation($data: SalaryValidInput!) {
  saveSalaryMutation(data: $data) {
    ...Salary
  }
}
    ${SalaryFragmentDoc}`;
export const DeleteSavingMutationDocument = gql`
    mutation DeleteSavingMutation($savingId: String!) {
  deleteSavingMutation(savingId: $savingId)
}
    `;
export const SaveSavingMutationDocument = gql`
    mutation SaveSavingMutation($data: SavingValidInput!) {
  saveSavingMutation(data: $data) {
    ...CurrentSaving
  }
}
    ${CurrentSavingFragmentDoc}`;
export const SavingsQueryDocument = gql`
    query SavingsQuery {
  savingsQuery {
    ...CurrentSaving
  }
}
    ${CurrentSavingFragmentDoc}`;
export const DeleteWishlistMutationDocument = gql`
    mutation DeleteWishlistMutation($deleteWishlistMutationId: String!) {
  deleteWishlistMutation(id: $deleteWishlistMutationId)
}
    `;
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
export const GroupedNhFavoritesQueryDocument = gql`
    query GroupedNhFavoritesQuery {
  groupedNhFavoritesQuery {
    ...AuthorCount
  }
}
    ${AuthorCountFragmentDoc}`;
export const NhAuthorsQueryDocument = gql`
    query NhAuthorsQuery {
  nhAuthorsQuery {
    ...NhAuthor
  }
}
    ${NhAuthorFragmentDoc}`;
export const ToggleNhAuthorMutationDocument = gql`
    mutation ToggleNhAuthorMutation($data: String!) {
  toggleNhAuthorMutation(authorUrl: $data) {
    ...NhAuthor
  }
}
    ${NhAuthorFragmentDoc}`;
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
    LoginMutation(variables: LoginMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutationMutation>(LoginMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginMutation', 'mutation');
    },
    RegisterMutation(variables: RegisterMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutationMutation>(RegisterMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterMutation', 'mutation');
    },
    MixedColorsQuery(variables?: MixedColorsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MixedColorsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MixedColorsQueryQuery>(MixedColorsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MixedColorsQuery', 'query');
    },
    SaveMixedColorMutation(variables: SaveMixedColorMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveMixedColorMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveMixedColorMutationMutation>(SaveMixedColorMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveMixedColorMutation', 'mutation');
    },
    RawColorsQuery(variables?: RawColorsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RawColorsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RawColorsQueryQuery>(RawColorsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RawColorsQuery', 'query');
    },
    SaveRawColorMutation(variables: SaveRawColorMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveRawColorMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveRawColorMutationMutation>(SaveRawColorMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveRawColorMutation', 'mutation');
    },
    CategoriesQuery(variables?: CategoriesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CategoriesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoriesQueryQuery>(CategoriesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CategoriesQuery', 'query');
    },
    DeleteCategoryMutation(variables: DeleteCategoryMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteCategoryMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCategoryMutationMutation>(DeleteCategoryMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteCategoryMutation', 'mutation');
    },
    SaveCategoryMutation(variables: SaveCategoryMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveCategoryMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveCategoryMutationMutation>(SaveCategoryMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveCategoryMutation', 'mutation');
    },
    DeleteExpenseMutation(variables: DeleteExpenseMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteExpenseMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteExpenseMutationMutation>(DeleteExpenseMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteExpenseMutation', 'mutation');
    },
    ExpensesQuery(variables?: ExpensesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExpensesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ExpensesQueryQuery>(ExpensesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ExpensesQuery', 'query');
    },
    RecurrentExpensesQuery(variables?: RecurrentExpensesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecurrentExpensesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecurrentExpensesQueryQuery>(RecurrentExpensesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RecurrentExpensesQuery', 'query');
    },
    SaveExpenseV2(variables: SaveExpenseV2MutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveExpenseV2Mutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveExpenseV2Mutation>(SaveExpenseV2Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveExpenseV2', 'mutation');
    },
    DeleteIssueLabelMutation(variables: DeleteIssueLabelMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteIssueLabelMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteIssueLabelMutationMutation>(DeleteIssueLabelMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteIssueLabelMutation', 'mutation');
    },
    IssueLabelsQuery(variables?: IssueLabelsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IssueLabelsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IssueLabelsQueryQuery>(IssueLabelsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IssueLabelsQuery', 'query');
    },
    SaveIssueLabelMutation(variables: SaveIssueLabelMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveIssueLabelMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveIssueLabelMutationMutation>(SaveIssueLabelMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveIssueLabelMutation', 'mutation');
    },
    ChangeIssuePositionMutation(variables: ChangeIssuePositionMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeIssuePositionMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeIssuePositionMutationMutation>(ChangeIssuePositionMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ChangeIssuePositionMutation', 'mutation');
    },
    DeleteIssueMutation(variables: DeleteIssueMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteIssueMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteIssueMutationMutation>(DeleteIssueMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteIssueMutation', 'mutation');
    },
    IssuesQuery(variables?: IssuesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IssuesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IssuesQueryQuery>(IssuesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'IssuesQuery', 'query');
    },
    SaveIssueMutation(variables: SaveIssueMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveIssueMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveIssueMutationMutation>(SaveIssueMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveIssueMutation', 'mutation');
    },
    SalaryQuery(variables?: SalaryQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalaryQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalaryQueryQuery>(SalaryQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SalaryQuery', 'query');
    },
    SaveSalaryMutation(variables: SaveSalaryMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveSalaryMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveSalaryMutationMutation>(SaveSalaryMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveSalaryMutation', 'mutation');
    },
    DeleteSavingMutation(variables: DeleteSavingMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSavingMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteSavingMutationMutation>(DeleteSavingMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteSavingMutation', 'mutation');
    },
    SaveSavingMutation(variables: SaveSavingMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveSavingMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveSavingMutationMutation>(SaveSavingMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveSavingMutation', 'mutation');
    },
    SavingsQuery(variables?: SavingsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SavingsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SavingsQueryQuery>(SavingsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SavingsQuery', 'query');
    },
    DeleteWishlistMutation(variables: DeleteWishlistMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteWishlistMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteWishlistMutationMutation>(DeleteWishlistMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteWishlistMutation', 'mutation');
    },
    SaveWishlistItemMutation(variables: SaveWishlistItemMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveWishlistItemMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SaveWishlistItemMutationMutation>(SaveWishlistItemMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SaveWishlistItemMutation', 'mutation');
    },
    WishlistItemsQuery(variables?: WishlistItemsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WishlistItemsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WishlistItemsQueryQuery>(WishlistItemsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WishlistItemsQuery', 'query');
    },
    GroupedNhFavoritesQuery(variables?: GroupedNhFavoritesQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GroupedNhFavoritesQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GroupedNhFavoritesQueryQuery>(GroupedNhFavoritesQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GroupedNhFavoritesQuery', 'query');
    },
    NhAuthorsQuery(variables?: NhAuthorsQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NhAuthorsQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NhAuthorsQueryQuery>(NhAuthorsQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'NhAuthorsQuery', 'query');
    },
    ToggleNhAuthorMutation(variables: ToggleNhAuthorMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToggleNhAuthorMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleNhAuthorMutationMutation>(ToggleNhAuthorMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ToggleNhAuthorMutation', 'mutation');
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
export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Article = {
  title: string;
  coverImage: string;
};

export type Reactions = {
  like_count: number;
  love_count: number;
  clap_count: number;
  party_count: number;
};

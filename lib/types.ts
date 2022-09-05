export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export enum AdType {
  ARTICLE,
  RESPONSIVE
}

export enum PageType {
  WEBSITE = 'website',
  ARTICLE = 'article'
}

export type FormState = {
  state: Form;
  message?: string;
};

export enum SubscribeSize {
  SMALL = 'small',
  LARGE = 'large'
}

export type SocialFollowers = {
  followers: number;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

export type Article = {
  title: string;
  tags?: string[];
  coverImage: string;
  summary: string;
  publishedDate?: any;
  lastUpdatedDate?: any;
};

export type Reactions = {
  like_count: number;
  love_count: number;
  clap_count: number;
  party_count: number;
};

export type WorkTimeline = {
  title: string;
  duration: string;
  company: string;
  company_link?: string;
  content: any;
};

export type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';

import { BQQueryEnum } from "./get-data";

export type BQQuery = `${BQQueryEnum}`;

export type Totals = {
  posts: number;
  comments: number;
  mirrors: number;
  collects: number;
};

export type Publications = {
  period: string;
  posts: number;
  mirrors: number;
  comments: number;
};

export type Profile = {
  handle: string;
  name: string;
  picture: string;
  posts: number;
  mirrors: number;
  comments: number;
  collects: number;
  curated: boolean;
};

import { BQQueryEnum } from "./get-data";

export type BQQuery = `${BQQueryEnum}`;

export type Totals = {
  posts: number;
  comments: number;
  mirrors: number;
  collects: number;
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

export type PeriodicData = PublicationDataSet[] | ProfileDataset[];

export type MomokaAdoption = {
  period: string;
  momoka: number;
  legacy: number;
};

export type Publications = {
  period: string;
  posts: number;
  mirrors: number;
  comments: number;
};

export type ProfileDataset = {
  period: string;
  profiles: number;
};

import { Everest } from "../models/mountains/everest";
import { Fuji } from "../models/mountains/fuji";
import { K2 } from "../models/mountains/k2";
import { Kilimanjaro } from "../models/mountains/kilimanjaro";
import { Matterhorn } from "../models/mountains/matterhorn";

export const MOUNTAINS = [
  new Everest(),
  new K2(),
  new Kilimanjaro(),
  new Matterhorn(),
  new Fuji(),
  // TODO: Change unique characters
  new Fuji(),
  new Fuji(),
] as const;

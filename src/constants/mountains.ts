import { Everest } from "../models/mountains/everest";
import { Fuji } from "../models/mountains/fuji";
import { K2 } from "../models/mountains/k2";

export const MOUNTAINS = [
  new Everest(),
  new K2(),
  new Fuji(),
  // TODO: Change unique characters
  new Fuji(),
  new Fuji(),
  new Fuji(),
  new Fuji(),
] as const;

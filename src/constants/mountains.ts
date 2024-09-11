import { Everest } from "../models/mountains/everest";
import { Fuji } from "../models/mountains/fuji";

export const MOUNTAINS = [
  new Everest(),
  new Fuji(),
  // TODO: Change unique characters
  new Fuji(),
  new Fuji(),
  new Fuji(),
  new Fuji(),
  new Fuji(),
] as const;

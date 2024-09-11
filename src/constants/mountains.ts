import { Aconcagua } from "../models/mountains/aconcagua";
import { Everest } from "../models/mountains/everest";
import { Fuji } from "../models/mountains/fuji";
import { K2 } from "../models/mountains/k2";
import { Kilauea } from "../models/mountains/kilauea";
import { Kilimanjaro } from "../models/mountains/kilimanjaro";
import { Matterhorn } from "../models/mountains/matterhorn";

export const MOUNTAINS = [
  new Everest(),
  new K2(),
  new Kilimanjaro(),
  new Matterhorn(),
  new Aconcagua(),
  new Fuji(),
  new Kilauea(),
] as const;

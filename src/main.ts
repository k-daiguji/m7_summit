import { Fuji } from "./models/mountains/fuji";

const fuji = new Fuji();
const img = document.createElement("img");
img.src = fuji.getPath();
img.className = "fill";
document.body.appendChild(img);

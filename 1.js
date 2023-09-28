// export function abc(x,y,z){
//     console.log(x,y,z);
//     return x+y+z
// }
import { person } from "./2.js";

console.log(`imported value of ${person} from 2.js`);

console.log("just consoled");

export const object = { x: person, y: 1, z: 3 };

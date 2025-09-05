import {Body, HelioState} from "astronomy-engine";
import { writeFileSync } from "fs";

const AU_IN_KM = 149_597_871;

const bodies = [
    Body.Mercury,
    Body.Venus,
    Body.Earth,
    Body.Mars,
    Body.Jupiter,
    Body.Saturn,
    Body.Uranus,
    Body.Neptune,
    Body.Pluto
];

let now = new Date();

interface MotionState {
    pos: number,
    vx: number
    vy: number,
    vz: number
}

let state = new Map<Body, MotionState>;

for (let body of bodies) {
    let bodyPos = HelioState(body, now);
    let {x, y, z, vx, vy, vz} = bodyPos;
    state.set(body, {
        pos: Length(x, y, z) * AU_IN_KM,
        vx: Kmh(vx),
        vy: Kmh(vy),
        vz: Kmh(vz)
    });
}

function Length(x: number, y: number, z: number) : number {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}

/**
 * @param velocityCoord - velocity coordinate expressed in AU/day
 * @returns velocity coordinate in KM/H
 */
function Kmh(velocityCoord: number) : number {
    return velocityCoord * AU_IN_KM / 24; 
}

let jsonState = JSON.stringify(Array.from(state.entries()), null, 2);

try {
    writeFileSync("state.json", jsonState);
}
catch(err) {
    console.error(err);
}


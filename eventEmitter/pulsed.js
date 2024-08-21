import { Pulser } from "./pulser.js";
const pulser = new Pulser();
pulser.on('pulse', () => {
    console.log(`A pulse is received at time ${new Date().toISOString()}`);
})

pulser.start()

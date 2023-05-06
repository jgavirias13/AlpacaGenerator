import { ElementOption } from "./ElementOption";
import { Headers } from "./Headers";

const accessoriesPath = '/assets/accessories';
const backgroundsPath = '/assets/backgrounds';
const earsPath = '/assets/ears';
const eyesPath = '/assets/eyes';
const hairPath = '/assets/hair';
const legPath = '/assets/leg';
const mouthPath = '/assets/mouth';
const neckPath = '/assets/neck';

const alpacaOptions = new Map<Headers, Array<ElementOption>>();

alpacaOptions.set(Headers.ACCESORIES, [
  {
    name: 'Earings',
    imagePath: `${accessoriesPath}/earings.png`
  },
  {
    name: 'Flower',
    imagePath: `${accessoriesPath}/flower.png`
  },
  {
    name: 'Glasses',
    imagePath: `${accessoriesPath}/glasses.png`
  },
  {
    name: 'Headphone',
    imagePath: `${accessoriesPath}/headphone.png`
  },
]);

alpacaOptions.set(Headers.BACKGROUND, [
  {
    name: `Blue 50`,
    imagePath: `${backgroundsPath}/blue50.png`
  },
  {
    name: `Blue 60`,
    imagePath: `${backgroundsPath}/blue60.png`
  },
  {
    name: `Blue 70`,
    imagePath: `${backgroundsPath}/blue70.png`
  },
  {
    name: `Dark Blue 30`,
    imagePath: `${backgroundsPath}/darkblue30.png`
  },
  {
    name: `Dark Blue 50`,
    imagePath: `${backgroundsPath}/darkblue50.png`
  },
  {
    name: `Dark Blue 70`,
    imagePath: `${backgroundsPath}/darkblue70.png`
  },
  {
    name: `Green 50`,
    imagePath: `${backgroundsPath}/green50.png`
  },
  {
    name: `Green 60`,
    imagePath: `${backgroundsPath}/green60.png`
  },
  {
    name: `Green 70`,
    imagePath: `${backgroundsPath}/green70.png`
  },
  {
    name: `Grey 40`,
    imagePath: `${backgroundsPath}/grey40.png`
  },
  {
    name: `Grey 70`,
    imagePath: `${backgroundsPath}/grey70.png`
  },
  {
    name: `Grey 80`,
    imagePath: `${backgroundsPath}/grey80.png`
  },
  {
    name: `Red 50`,
    imagePath: `${backgroundsPath}/red50.png`
  },
  {
    name: `Red 60`,
    imagePath: `${backgroundsPath}/red60.png`
  },
  {
    name: `Red 70`,
    imagePath: `${backgroundsPath}/red70.png`
  },
  {
    name: `Yellow 50`,
    imagePath: `${backgroundsPath}/yellow50.png`
  },
  {
    name: `Yellow 60`,
    imagePath: `${backgroundsPath}/yellow60.png`
  },
  {
    name: `Yellow 70`,
    imagePath: `${backgroundsPath}/yellow70.png`
  },
]);

alpacaOptions.set(Headers.EARS, [
  {
    name: `Default`,
    imagePath: `${earsPath}/default.png`
  },
  {
    name: `Tilt backward`,
    imagePath: `${earsPath}/tilt-backward.png`
  },
  {
    name: `Tilt forward`,
    imagePath: `${earsPath}/tilt-forward.png`
  },
]);

alpacaOptions.set(Headers.EYES, [
  {
    name: `Angry`,
    imagePath: `${eyesPath}/angry.png`
  },
  {
    name: `Default`,
    imagePath: `${eyesPath}/default.png`
  },
  {
    name: `Naughty`,
    imagePath: `${eyesPath}/naughty.png`
  },
  {
    name: `Panda`,
    imagePath: `${eyesPath}/panda.png`
  },
  {
    name: `Smart`,
    imagePath: `${eyesPath}/smart.png`
  },
  {
    name: `Star`,
    imagePath: `${eyesPath}/star.png`
  },
]);

alpacaOptions.set(Headers.HAIR, [
  {
    name: `Bang`,
    imagePath: `${hairPath}/bang.png`
  },
  {
    name: `Curls`,
    imagePath: `${hairPath}/curls.png`
  },
  {
    name: `Default`,
    imagePath: `${hairPath}/default.png`
  },
  {
    name: `Elegant`,
    imagePath: `${hairPath}/elegant.png`
  },
  {
    name: `Fancy`,
    imagePath: `${hairPath}/fancy.png`
  },
  {
    name: `Quiff`,
    imagePath: `${hairPath}/quiff.png`
  },
  {
    name: `Short`,
    imagePath: `${hairPath}/short.png`
  },
]);

alpacaOptions.set(Headers.LEG, [
  {
    name: `Bubble Tea`,
    imagePath: `${legPath}/bubble-tea.png`
  },
  {
    name: `Cookie`,
    imagePath: `${legPath}/cookie.png`
  },
  {
    name: `Default`,
    imagePath: `${legPath}/default.png`
  },
  {
    name: `Game console`,
    imagePath: `${legPath}/game-console.png`
  },
  {
    name: `Tilt Backward`,
    imagePath: `${legPath}/tilt-backward.png`
  },
  {
    name: `Tilt Forward`,
    imagePath: `${legPath}/tilt-forward.png`
  },
]);

alpacaOptions.set(Headers.MOUTH, [
  {
    name: `Astonished`,
    imagePath: `${mouthPath}/astonished.png`
  },
  {
    name: `Default`,
    imagePath: `${mouthPath}/default.png`
  },
  {
    name: `Eating`,
    imagePath: `${mouthPath}/eating.png`
  },
  {
    name: `Laugh`,
    imagePath: `${mouthPath}/laugh.png`
  },
  {
    name: `Tongue`,
    imagePath: `${mouthPath}/tongue.png`
  },
]);

alpacaOptions.set(Headers.NECK, [
  {
    name: `Bend backward`,
    imagePath: `${neckPath}/bend-backward.png`
  },
  {
    name: `Bend Forward`,
    imagePath: `${neckPath}/bend-forward.png`
  },
  {
    name: `Default`,
    imagePath: `${neckPath}/default.png`
  },
  {
    name: `Thick`,
    imagePath: `${neckPath}/thick.png`
  },
]);

export { alpacaOptions };
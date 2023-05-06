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
    id: 1,
    name: 'Earings',
    imagePath: `${accessoriesPath}/earings.png`
  },
  {
    id: 2,
    name: 'Flower',
    imagePath: `${accessoriesPath}/flower.png`
  },
  {
    id: 3,
    name: 'Glasses',
    imagePath: `${accessoriesPath}/glasses.png`
  },
  {
    id: 4,
    name: 'Headphone',
    imagePath: `${accessoriesPath}/headphone.png`
  },
]);

alpacaOptions.set(Headers.BACKGROUND, [
  {
    id: 1,
    name: `Blue 50`,
    imagePath: `${backgroundsPath}/blue50.png`
  },
  {
    id: 2,
    name: `Blue 60`,
    imagePath: `${backgroundsPath}/blue60.png`
  },
  {
    id: 3,
    name: `Blue 70`,
    imagePath: `${backgroundsPath}/blue70.png`
  },
  {
    id: 4,
    name: `Dark Blue 30`,
    imagePath: `${backgroundsPath}/darkblue30.png`
  },
  {
    id: 5,
    name: `Dark Blue 50`,
    imagePath: `${backgroundsPath}/darkblue50.png`
  },
  {
    id: 6,
    name: `Dark Blue 70`,
    imagePath: `${backgroundsPath}/darkblue70.png`
  },
  {
    id: 7,
    name: `Green 50`,
    imagePath: `${backgroundsPath}/green50.png`
  },
  {
    id: 8,
    name: `Green 60`,
    imagePath: `${backgroundsPath}/green60.png`
  },
  {
    id: 9,
    name: `Green 70`,
    imagePath: `${backgroundsPath}/green70.png`
  },
  {
    id: 10,
    name: `Grey 40`,
    imagePath: `${backgroundsPath}/grey40.png`
  },
  {
    id: 11,
    name: `Grey 70`,
    imagePath: `${backgroundsPath}/grey70.png`
  },
  {
    id: 12,
    name: `Grey 80`,
    imagePath: `${backgroundsPath}/grey80.png`
  },
  {
    id: 13,
    name: `Red 50`,
    imagePath: `${backgroundsPath}/red50.png`
  },
  {
    id: 14,
    name: `Red 60`,
    imagePath: `${backgroundsPath}/red60.png`
  },
  {
    id: 15,
    name: `Red 70`,
    imagePath: `${backgroundsPath}/red70.png`
  },
  {
    id: 16,
    name: `Yellow 50`,
    imagePath: `${backgroundsPath}/yellow50.png`
  },
  {
    id: 17,
    name: `Yellow 60`,
    imagePath: `${backgroundsPath}/yellow60.png`
  },
  {
    id: 18,
    name: `Yellow 70`,
    imagePath: `${backgroundsPath}/yellow70.png`
  },
]);

alpacaOptions.set(Headers.EARS, [
  {
    id: 1,
    name: `Default`,
    imagePath: `${earsPath}/default.png`
  },
  {
    id: 2,
    name: `Tilt backward`,
    imagePath: `${earsPath}/tilt-backward.png`
  },
  {
    id: 3,
    name: `Tilt forward`,
    imagePath: `${earsPath}/tilt-forward.png`
  },
]);

alpacaOptions.set(Headers.EYES, [
  {
    id: 1,
    name: `Angry`,
    imagePath: `${eyesPath}/angry.png`
  },
  {
    id: 2,
    name: `Default`,
    imagePath: `${eyesPath}/default.png`
  },
  {
    id: 3,
    name: `Naughty`,
    imagePath: `${eyesPath}/naughty.png`
  },
  {
    id: 4,
    name: `Panda`,
    imagePath: `${eyesPath}/panda.png`
  },
  {
    id: 5,
    name: `Smart`,
    imagePath: `${eyesPath}/smart.png`
  },
  {
    id: 6,
    name: `Star`,
    imagePath: `${eyesPath}/star.png`
  },
]);

alpacaOptions.set(Headers.HAIR, [
  {
    id: 1,
    name: `Bang`,
    imagePath: `${hairPath}/bang.png`
  },
  {
    id: 2,
    name: `Curls`,
    imagePath: `${hairPath}/curls.png`
  },
  {
    id: 3,
    name: `Default`,
    imagePath: `${hairPath}/default.png`
  },
  {
    id: 4,
    name: `Elegant`,
    imagePath: `${hairPath}/elegant.png`
  },
  {
    id: 5,
    name: `Fancy`,
    imagePath: `${hairPath}/fancy.png`
  },
  {
    id: 6,
    name: `Quiff`,
    imagePath: `${hairPath}/quiff.png`
  },
  {
    id: 7,
    name: `Short`,
    imagePath: `${hairPath}/short.png`
  },
]);

alpacaOptions.set(Headers.LEG, [
  {
    id: 1,
    name: `Bubble Tea`,
    imagePath: `${legPath}/bubble-tea.png`
  },
  {
    id: 2,
    name: `Cookie`,
    imagePath: `${legPath}/cookie.png`
  },
  {
    id: 3,
    name: `Default`,
    imagePath: `${legPath}/default.png`
  },
  {
    id: 4,
    name: `Game console`,
    imagePath: `${legPath}/game-console.png`
  },
  {
    id: 5,
    name: `Tilt Backward`,
    imagePath: `${legPath}/tilt-backward.png`
  },
  {
    id: 6,
    name: `Tilt Forward`,
    imagePath: `${legPath}/tilt-forward.png`
  },
]);

alpacaOptions.set(Headers.MOUTH, [
  {
    id: 1,
    name: `Astonished`,
    imagePath: `${mouthPath}/astonished.png`
  },
  {
    id: 2,
    name: `Default`,
    imagePath: `${mouthPath}/default.png`
  },
  {
    id: 3,
    name: `Eating`,
    imagePath: `${mouthPath}/eating.png`
  },
  {
    id: 4,
    name: `Laugh`,
    imagePath: `${mouthPath}/laugh.png`
  },
  {
    id: 5,
    name: `Tongue`,
    imagePath: `${mouthPath}/tongue.png`
  },
]);

alpacaOptions.set(Headers.NECK, [
  {
    id: 1,
    name: `Bend backward`,
    imagePath: `${neckPath}/bend-backward.png`
  },
  {
    id: 2,
    name: `Bend Forward`,
    imagePath: `${neckPath}/bend-forward.png`
  },
  {
    id: 3,
    name: `Default`,
    imagePath: `${neckPath}/default.png`
  },
  {
    id: 4,
    name: `Thick`,
    imagePath: `${neckPath}/thick.png`
  },
]);

export { alpacaOptions };
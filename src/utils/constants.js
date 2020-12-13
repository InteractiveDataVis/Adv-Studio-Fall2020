export const getRandom = (min = -1, max = 1) =>
  Math.random() * (max - min) + min;

export const keys = {
  name: "name",
  desc: "description",
  github: "github",
  portfolio: "portfolioLink",
  title: "portfolioTitle",
  prevImg1: "img1",
  prevImg2: "img2",
};

export const appConfig = {
  titleDelay: 2500,
  getHash: (str) => str.toLowerCase().split(" ").join("_").split(",").join("_"),
};

appConfig.makeImgPath = (name, key) =>
  `./public/images/${appConfig.getHash(name)}_${key}.png`;

export const animationConfig = {
  getWidth: () => window.innerWidth,
  getHeight: () => window.innerHeight,
  gridCnt: 40,
  cellSize: 30,
};

export const listConfig = {
  delay: 75,
};

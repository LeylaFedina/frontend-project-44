// const getRandomNum = () => Math.floor(Math.random() * rangeValue);
const getRandomNum = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
export default getRandomNum;
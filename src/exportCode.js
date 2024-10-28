const setRangeValue = 101; //Math.random - диапазон от 0 до 1, умножаем на 101, чтобы получить число из дианазона от 0 до 101
const getRandomNum = () => Math.floor(Math.random() * setRangeValue);

export default getRandomNum;

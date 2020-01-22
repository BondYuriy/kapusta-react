const getDate = resultChoiceDay => {
  // getPrice();
  const dayMs = 86400000;
  let resultData = resultChoiceDay * dayMs;

  const time = Date.now();
  const validData = time + resultData;

  const date = new Date(validData);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }

  const setData = `${day}.${month}.${year}`;

  return setData;
};

export default getDate;

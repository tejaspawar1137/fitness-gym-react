export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '35d99de19dmsh88f392fcce20d3ap1f86c2jsnfd99a3369fc7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '35d99de19dmsh88f392fcce20d3ap1f86c2jsnfd99a3369fc7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

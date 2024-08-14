export const wait = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 100) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    }, time);
  });

export const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res;
};

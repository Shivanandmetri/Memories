import { fetchData, wait } from "../TestFiles/Asyncfnc";

test("it should rennder and fetchthe data", async () => {
  await expect(wait(300)).resolves.toBe("Promise Resolved");
});

test("it should render and fetch data (reject case)", async () => {
  await expect(wait(50)).rejects.toBe("Promise Rejected");
});

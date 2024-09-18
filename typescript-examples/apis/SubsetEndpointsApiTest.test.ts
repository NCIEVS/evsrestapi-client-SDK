import { SubsetEndpointsApi, Concept } from "..";
import { createConfiguration } from "..";
import { server1 } from "..";
import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
  baseServer: server1
});

describe("TestSubsetEndpointsApi", () => {
  const terminology: string = "ncit"; // default terminology
  const subsetApi: SubsetEndpointsApi = new SubsetEndpointsApi(configuration);

  test("get_subset", async () => {
    // ARRANGE
    const code: string = "C116978";
    const include: string = "minimal,summary";
    const expectedName: string = "CTRP Agent Terminology";

    // ACT
    const response: Concept = await subsetApi.getSubset(terminology, code, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get subset details for code - ${code}`);
    console.log(`    subset details = ${JSON.stringify(response)}`);
  });

  test("get_subset_members", async () => {
    // ARRANGE
    const code: string = "C157225";
    const fromRecord: string = "0";
    const pageSize: string = "25";
    const include: string = "minimal";
    const expectedCode: string = "C16255";
    const expectedName: string = "Acetylation";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Concept[] = await subsetApi.getSubsetMembers(terminology, code, fromRecord, pageSize, include);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((subset) => {
      expect(subset.name).not.toBeNull();
      expect(subset.code).not.toBeNull();
      if (subset.name === expectedName && subset.code === expectedCode) {
        containsExpectedValues = true;
      }
    });

    expect(containsExpectedValues).toBe(true);

    console.log(`Get subset members for code - ${code}`);
    console.log(`    subset members = ${JSON.stringify(response)}`);
  });

  test("get_subsets", async () => {
    // ARRANGE
    const include: string = "minimal";

    // ACT
    const response: Concept[] = await subsetApi.getSubsets(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();

    console.log(`Get all subsets`);
    console.log(`    subsets = ${JSON.stringify(response)}`);
  });
});

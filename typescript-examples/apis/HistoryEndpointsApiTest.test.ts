import { HistoryEndpointsApi, History } from "..";
import { createConfiguration } from "..";
import { server1 } from "..";
import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
  baseServer: server1
});

describe("TestHistoryEndpointsApi", () => {
  const terminology: string = "ncit"; // default terminology
  const historyApi: HistoryEndpointsApi = new HistoryEndpointsApi(configuration);

  test("test_get_code_replacements", async () => {
    // ARRANGE
    const code: string = "C12658";
    const expectedAction: string = "retire";
    const expectedReplacementCode: string = "C19157";
    let containsExpected: boolean = false;

    // ACT
    const response: History[] = await historyApi.getReplacements(terminology, code);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(replacement => {
      expect(replacement).not.toBeNull();
      if (replacement.replacementCode === expectedReplacementCode && replacement.action === expectedAction) {
        containsExpected = true;
      }
    });
    expect(containsExpected).toBe(true);

    console.log(`Get suggested replacements for code - ${code}`);
    console.log(`    replacements = ${JSON.stringify(response)}`);
  });

  test("test_get_replacements_from_list", async () => {
    // ARRANGE
    const _list: string = "C12658,C13320";
    const expectedReplacementCodes: string[] = ["C19157", "C12756"];
    const expectedReplacementNames: string[] = ["Specimen", "Nose"];
    const expectedActions: string[] = ["retire", "merge"];
    let containsExpectedCodes: boolean = false;
    let containsExpectedNames: boolean = false;
    let containsExpectedActions: boolean = false;

    // ACT
    const response: History[] = await historyApi.getReplacementsFromList(terminology, _list);

    // ASSERT
    expect(response).not.toBeNull();
    let codeCount = 0;
    let nameCount = 0;
    let actionCount = 0;

    response.forEach(replacement => {
      expect(replacement.replacementCode).not.toBeNull();
      expect(replacement.replacementName).not.toBeNull();
      expect(replacement.action).not.toBeNull();

      if (expectedReplacementCodes.includes(replacement.replacementCode)) {
        codeCount += 1;
        if (codeCount === 2) containsExpectedCodes = true;
      }

      if (expectedReplacementNames.includes(replacement.replacementName)) {
        nameCount += 1;
        if (nameCount === 2) containsExpectedNames = true;
      }

      if (expectedActions.includes(replacement.action)) {
        actionCount += 1;
        if (actionCount === 2) containsExpectedActions = true;
      }

      if (containsExpectedCodes && containsExpectedNames && containsExpectedActions) {
        return;
      }
    });

    expect(containsExpectedCodes).toBe(true);
    expect(containsExpectedNames).toBe(true);
    expect(containsExpectedActions).toBe(true);

    console.log(`Get suggested replacements for code - ${_list.split(",")[0]} & ${_list.split(",")[1]}`);
    console.log(`    suggested replacements = ${JSON.stringify(response)}`);
  });
});

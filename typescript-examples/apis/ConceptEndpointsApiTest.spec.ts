import { ConceptEndpointsApi } from "..";
import { createConfiguration } from "..";
import { AssociationEntryResultList } from "../models/AssociationEntryResultList";
import { server1 } from "..";

import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
    baseServer: server1
});

describe("TestConceptEndpointsApi", () => {
  const terminology: string = "ncit"; // default code and terminology
  const code: string = "C3224";
  const conceptApi: ConceptEndpointsApi = new ConceptEndpointsApi(
    configuration
  );

  test("test_get_association_entries", async () => {
    // ARRANGE
  const fromRecord: number = 0;
  const pageSize: number = 100;
  const codeOrLabel: string = "A5";
  const expectedRelatedName: string = "Naluzotan Hydrochloride";
  let containsExpectedName = false;

  // ACT
  const response: AssociationEntryResultList = await conceptApi.getAssociationEntries(
    terminology, // use ncit as the terminology
    codeOrLabel,
    fromRecord,
    pageSize,
    undefined
  );

  // ASSERT
  expect(response).not.toBeNull();
  expect(response.associationEntries).not.toBeNull();
  expect(response.associationEntries).not.toBeUndefined();

  // Check if the expected related name exists in the result
  for (const entry of response.associationEntries) {
    expect(entry.relatedName).not.toBeNull();
    if (entry.relatedName.includes(expectedRelatedName)) {
      containsExpectedName = true;
      break;
    }
  }

  expect(containsExpectedName).toBe(true);

  // Serialize and print the result (optional, for debug purposes)
  const result = JSON.stringify(response);
  console.log(result);
  });
});

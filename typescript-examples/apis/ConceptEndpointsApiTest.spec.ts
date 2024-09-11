import { ConceptEndpointsApi } from "..";
import { createConfiguration } from "../configuration";
import { AssociationEntryResultList } from "../models/AssociationEntryResultList";

import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration();

describe("TestConceptEndpointsApi", () => {
  const terminology: string = "ncit";
  const code: string = "C3224";
  const conceptApi: ConceptEndpointsApi = new ConceptEndpointsApi(
    configuration
  );

  test("test_get_association_entries", async () => {
    const fromRecord: number = 0;
    const pageSize: number = 100;
    const expectedRelatedName: string = "Naluzotan Hydrochloride";
    let containsExpectedText = false;

    const response: AssociationEntryResultList =
      await conceptApi.getAssociationEntries(
        terminology,
        code,
        fromRecord,
        pageSize,
        undefined
      );

    expect(response).not.toBeNull();

    expect(response?.associationEntries).not.toBeNull();
    expect(response?.associationEntries).not.toBeUndefined();
    for (const entry of response?.associationEntries) {
      expect(entry?.relatedName).not.toBeNull();
      if (entry?.relatedName?.includes(expectedRelatedName)) {
        containsExpectedText = true;
        break;
      }
    }
    expect(containsExpectedText).toBe(true);
  });
});

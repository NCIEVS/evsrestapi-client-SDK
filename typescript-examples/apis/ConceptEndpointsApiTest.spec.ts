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
  const terminology: string = "ncit";
  const code: string = "C3224";
  const conceptApi: ConceptEndpointsApi = new ConceptEndpointsApi(
    configuration
  );

  test("test_get_association_entries", async () => {
    const fromRecord: number = 0;
    const pageSize: number = 100;
    const code: string = "A5";
    const expectedAssociation: string = "Has_Salt_Form";
    const expectedName: string = "Fedotozine Tartrate";
    let containsExpectedAssociation = false;
    let containsExpectedName = false;

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
      expect(entry?.association).not.toBeNull();
      if (!containsExpectedAssociation && entry?.association?.includes(expectedAssociation)) {
        containsExpectedAssociation = true;
      }
      if (!containsExpectedName) {
        expect(entry?.relatedName).not.toBeNull();
        console.log(entry?.relatedName);
        if (entry?.relatedName?.includes(expectedName)) {
          containsExpectedName = true;
        }
      }
    }
    expect(containsExpectedAssociation).toBe(true);
    expect(containsExpectedName).toBe(true);
  });
});

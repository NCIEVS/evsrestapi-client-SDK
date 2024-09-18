import { MetadataEndpointsApi } from "..";
import { createConfiguration } from "..";
import { server1 } from "..";
import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
  baseServer: server1
});

describe("TestMetadataEndpointsApi", () => {
  const terminology: string = "ncit"; // default terminology
  const metadataApi: MetadataEndpointsApi = new MetadataEndpointsApi(configuration);

  test("get_association_by_code", async () => {
    // ARRANGE
    const codeOrName: string = "A18";
    const include: string = "minimal";
    const expectedName: string = "Has_Pharmaceutical_Basic_Dose_Form";

    // ACT
    const response = await metadataApi.getAssociation(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get association details for code or name - ${codeOrName}`);
    console.log(`    association details = ${JSON.stringify(response)}`);
  });

  test("get_associations", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "A1";
    const expectedSize: number = 35;
    let containsExpectedCode: boolean = false;

    // ACT
    const response = await metadataApi.getAssociations(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.length).toBeGreaterThanOrEqual(expectedSize);

    response.forEach((concept: any) => {
      expect(concept.code).not.toBeNull();
      if (concept.code.includes(expectedCode)) {
        containsExpectedCode = true;
      }
    });

    expect(containsExpectedCode).toBe(true);

    console.log(`Get associations`);
    console.log(`    associations = ${JSON.stringify(response)}`);
  });

  test("get_concept_statuses", async () => {
    // ARRANGE
    const expectedStatus: string = "Obsolete_Concept";
    const expectedSize: number = 5;
    let containsExpectedStatus: boolean = false;

    // ACT
    const response = await metadataApi.getConceptStatuses(terminology);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.length).toBe(expectedSize);

    response.forEach((status: string) => {
      expect(status).not.toBeNull();
      if (status.includes(expectedStatus)) {
        containsExpectedStatus = true;
      }
    });

    expect(containsExpectedStatus).toBe(true);

    console.log(`Get concept statuses`);
    console.log(`    statuses = ${JSON.stringify(response)}`);
  });

  test("get_definition_sources", async () => {
    // ARRANGE
    const expectedName: string = "American College of Cardiology / American Heart Association";
    const expectedCode: string = "ACC/AHA";
    let containsExpectedValues: boolean = false;

    // ACT
    const response = await metadataApi.getDefinitionSources(terminology);

    // ASSERT
    expect(response).not.toBeNull();

    response.forEach((definitionSource: any) => {
      expect(definitionSource.code).not.toBeNull();
      expect(definitionSource.name).not.toBeNull();
      if (definitionSource.code.includes(expectedCode) && definitionSource.name.includes(expectedName)) {
        containsExpectedValues = true;
      }
    });

    expect(containsExpectedValues).toBe(true);

    console.log(`Get definition sources`);
    console.log(`    definition sources = ${JSON.stringify(response)}`);
  });

  test("get_definition_type_by_code", async () => {
    // ARRANGE
    const codeOrName: string = "P325";
    const include: string = "minimal";
    const expectedName: string = "ALT_DEFINITION";

    // ACT
    const response = await metadataApi.getDefinitionType(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get definition type for code or name - ${codeOrName}`);
    console.log(`    definition type = ${JSON.stringify(response)}`);
  });

  test("get_definition_types", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "P97";
    const expectedName: string = "DEFINITION";
    let containsExpectedValues: boolean = false;

    // ACT
    const response = await metadataApi.getDefinitionTypes(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();

    response.forEach((concept: any) => {
      expect(concept.code).not.toBeNull();
      expect(concept.name).not.toBeNull();
      if (concept.code.includes(expectedCode) && concept.name.includes(expectedName)) {
        containsExpectedValues = true;
      }
    });

    expect(containsExpectedValues).toBe(true);

    console.log(`Get definition types`);
    console.log(`    definition types = ${JSON.stringify(response)}`);
  });

  test("get_properties", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "NHC0";
    const expectedName: string = "code";
    let containsExpectedValues: boolean = false;

    // ACT
    const response = await metadataApi.getProperties(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();

    response.forEach((concept: any) => {
      expect(concept.code).not.toBeNull();
      expect(concept.name).not.toBeNull();
      if (concept.code.includes(expectedCode) && concept.name.includes(expectedName)) {
        containsExpectedValues = true;
      }
    });

    expect(containsExpectedValues).toBe(true);

    console.log(`Get properties`);
    console.log(`    properties = ${JSON.stringify(response)}`);
  });
});

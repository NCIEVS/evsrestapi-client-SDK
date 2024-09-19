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

  test("test_get_association_by_code", async () => {
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

  test("test_get_associations", async () => {
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

  test("test_get_concept_statuses", async () => {
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

  test("test_get_definition_sources", async () => {
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

  test("test_get_definition_type_by_code", async () => {
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

  test("test_get_definition_types", async () => {
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

  test("test_get_properties", async () => {
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

  test("test_get_property", async () => {
    // ARRANGE
    const codeOrName: string = "P216";
    const include: string = "full";
    const expectedName: string = "BioCarta_ID";
    const expectedSynonym: string = "BioCarta ID";

    // ACT
    const response = await metadataApi.getProperty(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);
    expect(response.synonyms[0].name).toBe(expectedSynonym);

    console.log(`Get property details for code or name - ${codeOrName}`);
    console.log(`    property details = ${JSON.stringify(response)}`);
  });

  test("test_get_single_qualifier", async () => {
    // ARRANGE
    const codeOrName: string = "P390";
    const include: string = "summary";
    const expectedName: string = "go-source";

    // ACT
    const response = await metadataApi.getQualifier(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.synonyms).not.toBeNull();
    expect(response.definitions).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get qualifier details for code or name - ${codeOrName}`);
    console.log(`    qualifier details = ${JSON.stringify(response)}`);
  });

  test("test_get_qualifier_values", async () => {
    // ARRANGE
    const codeOrName: string = "P390";
    const expectedValue: string = "CGAP";
    let containsExpectedValue: boolean = false;

    // ACT
    const response = await metadataApi.getQualifierValues(terminology, codeOrName);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((value: string) => {
      if (value.includes(expectedValue)) {
        containsExpectedValue = true;
      }
    });

    expect(containsExpectedValue).toBe(true);

    console.log(`Get qualifier values for code or name - ${codeOrName}`);
    console.log(`    qualifier values = ${JSON.stringify(response)}`);
  });

  test("test_get_qualifiers", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode1: string = "P383";
    const expectedCode2: string = "P384";
    let containsCode1: boolean = false;
    let containsCode2: boolean = false;

    // ACT
    const response = await metadataApi.getQualifiers(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((qualifier: any) => {
      if (qualifier.code.includes(expectedCode1)) {
        containsCode1 = true;
      }
      if (qualifier.code.includes(expectedCode2)) {
        containsCode2 = true;
      }
      if (containsCode1 && containsCode2) {
        return;
      }
    });

    expect(containsCode1).toBe(true);
    expect(containsCode2).toBe(true);

    console.log(`Get qualifiers`);
    console.log(`    qualifiers = ${JSON.stringify(response)}`);
  });

  test("test_get_single_role", async () => {
    // ARRANGE
    const codeOrName: string = "R123";
    const include: string = "full";
    const expectedName: string = "Chemotherapy_Regimen_Has_Component";

    // ACT
    const response = await metadataApi.getRole(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.synonyms).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get role details for code or name - ${codeOrName}`);
    console.log(`    role details = ${JSON.stringify(response)}`);
  });

  test("test_get_roles", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "R123";
    let containsExpectedCode: boolean = false;

    // ACT
    const response = await metadataApi.getRoles(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((role: any) => {
      if (role.code.includes(expectedCode)) {
        containsExpectedCode = true;
      }
    });

    expect(containsExpectedCode).toBe(true);

    console.log(`Get roles`);
    console.log(`    roles = ${JSON.stringify(response)}`);
  });

  test("test_get_subsets", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "C167405";
    let containsExpectedCode: boolean = false;

    // ACT
    const response = await metadataApi.getSubsets1(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((concept: any) => {
      if (concept.code.includes(expectedCode)) {
        containsExpectedCode = true;
      }
    });

    expect(containsExpectedCode).toBe(true);

    console.log(`Get subsets`);
    console.log(`    subsets = ${JSON.stringify(response)}`);
  });

  test("test_get_subset_by_code", async () => {
    // ARRANGE
    const code: string = "C81222";
    const include: string = "summary";
    const expectedName: string = "CDISC ADaM Terminology";

    // ACT
    const response = await metadataApi.getSubset1(terminology, code, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get subset details for code - ${code}`);
    console.log(`    subset details = ${JSON.stringify(response)}`);
  });

  test("test_get_synonym_sources", async () => {
    // ARRANGE
    const expectedCode1: string = "ACC/AHA";
    const expectedCode2: string = "BIOCARTA";
    let containsCode1: boolean = false;
    let containsCode2: boolean = false;

    // ACT
    const response = await metadataApi.getSynonymSources(terminology);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((concept: any) => {
      if (concept.code.includes(expectedCode1)) {
        containsCode1 = true;
      }
      if (concept.code.includes(expectedCode2)) {
        containsCode2 = true;
      }
      if (containsCode1 && containsCode2) {
        return;
      }
    });

    expect(containsCode1).toBe(true);
    expect(containsCode2).toBe(true);

    console.log(`Get synonym sources`);
    console.log(`    synonym sources = ${JSON.stringify(response)}`);
  });

  test("test_get_synonym_type_by_code", async () => {
    // ARRANGE
    const codeOrName: string = "P90";
    const include: string = "minimal";
    const expectedName: string = "FULL_SYN";

    // ACT
    const response = await metadataApi.getSynonymType(terminology, codeOrName, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get synonym type for code or name - ${codeOrName}`);
    console.log(`    synonym type = ${JSON.stringify(response)}`);
  });

  test("test_get_synonym_types", async () => {
    // ARRANGE
    const include: string = "full";
    const expectedCode: string = "P108";
    let containsExpectedCode: boolean = false;

    // ACT
    const response = await metadataApi.getSynonymTypes(terminology, include);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((concept: any) => {
      if (concept.code.includes(expectedCode)) {
        containsExpectedCode = true;
      }
    });

    expect(containsExpectedCode).toBe(true);

    console.log(`Get synonym types`);
    console.log(`    synonym types = ${JSON.stringify(response)}`);
  });

  test("test_get_term_types", async () => {
    // ARRANGE
    const expectedCode1: string = "AB";
    const expectedCode2: string = "AD";
    let containsCode1: boolean = false;
    let containsCode2: boolean = false;

    // ACT
    const response = await metadataApi.getTermTypes(terminology);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach((concept: any) => {
      if (concept.code.includes(expectedCode1)) {
        containsCode1 = true;
      }
      if (concept.code.includes(expectedCode2)) {
        containsCode2 = true;
      }
      if (containsCode1 && containsCode2) {
        return;
      }
    });

    expect(containsCode1).toBe(true);
    expect(containsCode2).toBe(true);

    console.log(`Get term types`);
    console.log(`    term types = ${JSON.stringify(response)}`);
  });

  test("test_get_terminologies", async () => {
    // ARRANGE
    const latest: boolean = true;
    const tag: string = "monthly";

    // ACT
    const response = await metadataApi.getTerminologies(latest, tag);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.length).toBeGreaterThan(0);
    expect(response[0].terminology).not.toBeNull();
    expect(response[0].terminology).toBe(terminology);
    expect(response[0].latest).toBe(true);

    console.log(`Get terminologies`);
    console.log(`    terminologies = ${JSON.stringify(response)}`);
  });
});

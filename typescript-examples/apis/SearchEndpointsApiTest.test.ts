import { ConceptResultList, SearchEndpointApi } from "..";
import { createConfiguration } from "..";
import { server1 } from "..";
import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
  baseServer: server1
});

describe("TestSearchEndpointApi", () => {
  const terminology: string = "ncit"; // default terminology
  const searchApi: SearchEndpointApi = new SearchEndpointApi(configuration);

  test("get_search_basic", async () => {
    // ARRANGE
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedCode: string = "C1000";
    let containsExpectedCode: boolean = false;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, expectedCode, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    
    response.concepts.forEach(concept => {
      expect(concept.code).not.toBeNull();
      if (concept.code === expectedCode) {
        containsExpectedCode = true;
      }
    });

    expect(containsExpectedCode).toBe(true);

    console.log(`Get search results for terminology - ${terminology}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("get_search_filter_by_concept_status", async () => {
    // ARRANGE
    const term: string = "respiratory";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const conceptStatus: string = "Retired_Concept";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 18;
    let containsExpectedStatus: boolean = false;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, conceptStatus);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    response.concepts.forEach(concept => {
      expect(concept.conceptStatus).not.toBeNull();
      if (concept.conceptStatus === conceptStatus) {
        containsExpectedStatus = true;
      }
    });

    expect(containsExpectedStatus).toBe(true);

    console.log(`Search results filtered by concept status for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("get_search_filter_by_definition_source", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const definitionSource: string = "NCI";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 12;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, definitionSource);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by definition source for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("get_search_filter_by_definition_type", async () => {
    // ARRANGE
    const term: string = "melanoma";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const definitionType: string = "DEFINITION";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 1508;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, definitionType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by definition type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("get_search_filter_by_synonym_source_and_term_type", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const synonymSource: string = "NCI";
    const termType: string = "PT";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 13;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, undefined, undefined, synonymSource, undefined, termType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by synonym source and term type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("get_search_filter_by_synonym_type", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const synonymType: string = "FULL_SYN";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 13;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, undefined, undefined, undefined, synonymType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by synonym type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });
});

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

  test("test_get_search_basic", async () => {
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

  test("test_get_search_filter_by_concept_status", async () => {
    // ARRANGE
    const term: string = "respiratory";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const conceptStatus: string = "Retired_Concept";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 19;
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

  test("test_get_search_filter_by_definition_source", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const definitionSource: string = "NCI";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 13;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, definitionSource);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by definition source for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("test_get_search_filter_by_definition_type", async () => {
    // ARRANGE
    const term: string = "melanoma";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const definitionType: string = "DEFINITION";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 1531;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, definitionType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by definition type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("test_get_search_filter_by_synonym_source_and_term_type", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const synonymSource: string = "NCI";
    const termType: string = "PT";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 14;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, undefined, undefined, synonymSource, undefined, termType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by synonym source and term type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  test("test_get_search_filter_by_synonym_type", async () => {
    // ARRANGE
    const term: string = "dsDNA";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const synonymType: string = "FULL_SYN";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 14;

    // ACT
    const response: ConceptResultList = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, undefined, undefined, undefined, synonymType);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(`Search results filtered by synonym type for term - ${term}`);
    console.log(`    search results = ${JSON.stringify(response)}`);
  });

  // Assuming a similar setup to your original test with jest framework

  test("test_get_search_by_code", async () => {
    // ARRANGE
    const term: string = "C3224";
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 1;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_match", async () => {
    // ARRANGE
    const term: string = "enzyme";
    const searchType: string = "match";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 1;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_starts_with", async () => {
    // ARRANGE
    const term: string = "enzyme";
    const searchType: string = "startsWith";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 49;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_phrase", async () => {
    // ARRANGE
    const term: string = "enzyme";
    const searchType: string = "phrase";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 273

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_fuzzy", async () => {
    // ARRANGE
    const term: string = "enzyme";
    const searchType: string = "fuzzy";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_and", async () => {
    // ARRANGE
    const term: string = "malignant melanoma";
    const searchType: string = "AND";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 150;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_by_type_or", async () => {
    // ARRANGE
    const term: string = "malignant melanoma";
    const searchType: string = "OR";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, searchType, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();

    console.log(JSON.stringify(response));
  });

  test("test_get_search_with_highlights", async () => {
    // ARRANGE
    const term: string = "XAV05295I5";
    const ascending: boolean = true;
    const include: string = "highlights";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const expectedTotal: number = 1;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, undefined, undefined, ascending, include, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_concepts_by_property", async () => {
    // ARRANGE
    const term: string = "XAV05295I5";
    const ascending: boolean = true;
    const include: string = "highlights";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const property: string = "FDA_UNII_Code";
    const expectedTotal: number = 1;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, undefined, undefined, ascending, include, fromRecord, pageSize, undefined, property);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_search_concepts_by_subset", async () => {
    // ARRANGE
    const term: string = "immune";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 5;
    const subset: string = "C165258";
    const expectedTotal: number = 35;

    // ACT
    const response = await searchApi.searchSingleTerminology(terminology, undefined, term, undefined, undefined, ascending, include, fromRecord, pageSize, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, subset);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_concepts_by_sparql_code", async () => {
    // ARRANGE
    const searchType: string = "contains";
    const ascending: boolean = true;
    const include: string = "minimal";
    const fromRecord: number = 0;
    const pageSize: number = 25;
    const queryBody: string = `SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . ?x :P108 "Melanoma" } }`;
    const expectedTotal: number = 1;

    // ACT
    const response = await searchApi.searchSingleTerminologySparql(terminology, queryBody, include, undefined, undefined, searchType, undefined, ascending, fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.concepts).not.toBeNull();
    expect(response.concepts[0]).not.toBeNull();
    expect(response.total).toBe(expectedTotal);

    console.log(JSON.stringify(response));
  });

  test("test_get_sparql_bindings", async () => {
    // ARRANGE
    const queryBody: string = `SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }`;
    const expectedTotal: number = 150000;

    // ACT
    const response = await searchApi.getSparqlBindings(terminology, queryBody);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.total).toBeGreaterThanOrEqual(expectedTotal);

    console.log(JSON.stringify(response));
  });

});

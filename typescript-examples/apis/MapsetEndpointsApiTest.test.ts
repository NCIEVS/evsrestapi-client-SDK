import { Concept, ConceptMapResultList, MapsetEndpointsApi, server1 } from "..";
import { createConfiguration } from "..";
import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
  baseServer: server1
});

describe("TestMapsetEndpointsApi", () => {
  const mapsetApi: MapsetEndpointsApi = new MapsetEndpointsApi(configuration);

  test('get_mapset_by_code', async () => {
    // ARRANGE
    const code = 'NCIt_Maps_To_ICDO3';
    const include = 'minimal';
    let response;

    // ACT
    response = await mapsetApi.getMapsetByCode(code, include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.code).toBe(code);

    const result = JSON.stringify(response);
    expect(result).not.toBeNull();
    console.log(`Get mapset by code - ${code}`);
    console.log(`    response = ${result}`);
});

test('get_mapset_mappings_by_code', async () => {
    // ARRANGE
    const code = 'GO_to_NCIt_Mapping';
    const fromRecord = 0;
    const pageSize = 25;
    let response;

    // ACT
    response = await mapsetApi.getMapsetMappingsByCode(code, "", fromRecord, pageSize);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.maps.length).toBe(pageSize);

    response.maps.forEach(map => {
        expect(map.source).toBe('GO');
        expect(map.targetTerminology).toBe('NCI_Thesaurus');
    });

    const result = JSON.stringify(response);
    expect(result).not.toBeNull();
    console.log(`Get mapset mappings by code - ${code}`);
    console.log(`    response = ${result}`);
});

test('get_mapsets', async () => {
    // ARRANGE
    const include = 'minimal';
    let response;

    // ACT
    response = await mapsetApi.getMapsets(include);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.length).toBeGreaterThan(0);

    const result = JSON.stringify(response);
    expect(result).not.toBeNull();
    console.log(`Get mapsets`);
    console.log(`    response = ${result}`);
});
});

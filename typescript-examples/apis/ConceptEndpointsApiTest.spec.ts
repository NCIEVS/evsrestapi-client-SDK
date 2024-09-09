import {AssociationEntryResultList} from '../models/AssociationEntryResultList'
import {Association} from '../models/Association'
import {Concept} from '../models/Concept'
import {DisjointWith} from "../models/DisjointWith";
import {HierarchyNode} from "../models/HierarchyNode";
import {Role} from "../models/Role";
import {ConceptMap} from "../models/ConceptMap";
import { ConceptEndpointsApiRequestFactory, ConceptEndpointsApiResponseProcessor } from '../apis/ConceptEndpointsApi';
import { PromiseConceptEndpointsApi } from '../types/PromiseAPI';

import {Logger} from 'tslog';
import {Configuration } from '..';


const logger: Logger<string> = new Logger();

const configuration = new Configuration()

describe('TestConceptEndpointsApi', () => {
    const terminology: string = "ncit";
    const code: string = "C3224";
    const conceptApi: ConceptEndpointsApi = new ConceptEndpointsApi();

    test('test_get_association_entries', async () => {
        const fromRecord: number = 0;
        const pageSize: number = 100;
        const expectedRelatedName: string = 'Naluzotan Hydrochloride';
        let containsExpectedText = false;

        const response: AssociationEntryResultList = await conceptApi.getAssociationEntries(terminology, code, fromRecord, pageSize, null);
        for (const entry of response.getAssociationEntries()) {
            expect(entry.getRelatedName()).not.toBeNull();
            if (entry.getRelatedName().includes(expectedRelatedName)) {
                containsExpectedText = true;
                break;
            }
        }

        expect(response).not.toBeNull();
        expect(response.getAssociationEntries()).not.toBeNull();
        expect(containsExpectedText).toBe(true);

    });
});
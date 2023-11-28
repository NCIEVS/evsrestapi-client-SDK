/*
 * NCI EVS Rest API
 * Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>
 *
 * The version of the OpenAPI document: 1.7.2.RELEASE
 * Contact: NCIAppSupport@nih.gov
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package gov.nih.nci.evs.api;

import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.RestException;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SubsetEndpointsApi
 */
@Disabled
public class SubsetEndpointsApiTest {

    private final SubsetEndpointsApi api = new SubsetEndpointsApi();

    /**
     * Get the subset for the specified terminology and code.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getSubsetTest() throws ApiException {
        String terminology = null;
        String code = null;
        String include = null;
        Concept response = api.getSubset(terminology, code, include);
        // TODO: test validations
    }

    /**
     * Get subset members for the specified terminology and code. Concept subset endpoints will be deprecated in v2 in favor of top level subset endpoints.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getSubsetMembersTest() throws ApiException {
        String terminology = null;
        String code = null;
        String fromRecord = null;
        String pageSize = null;
        String include = null;
        List<Concept> response = api.getSubsetMembers(terminology, code, fromRecord, pageSize, include);
        // TODO: test validations
    }

    /**
     * Get all subsets (or those specified by list parameter) for the specified terminology
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getSubsetsTest() throws ApiException {
        String terminology = null;
        String include = null;
        String _list = null;
        List<Concept> response = api.getSubsets(terminology, include, _list);
        // TODO: test validations
    }

}
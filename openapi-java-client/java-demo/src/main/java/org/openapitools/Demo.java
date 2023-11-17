package org.openapitools;

// Import classes:
import gov.nih.nci.evs.api.ConceptEndpointsApi;
import gov.nih.nci.evs.api.HistoryEndpointsApi;
import gov.nih.nci.evs.api.MapsetEndpointsApi;
import gov.nih.nci.evs.api.MetadataEndpointsApi;
import gov.nih.nci.evs.api.SearchEndpointApi;
import gov.nih.nci.evs.api.SubsetEndpointsApi;
import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.invoker.ApiException;
import gov.nih.nci.evs.api.invoker.Configuration;
import gov.nih.nci.evs.api.ApplicationVersionEndpointApi;
import gov.nih.nci.evs.api.model.ApplicationVersion;
import gov.nih.nci.evs.api.model.Concept;
import gov.nih.nci.evs.api.model.ConceptResultList;
import gov.nih.nci.evs.api.model.History;
import gov.nih.nci.evs.api.model.MapResultList;
import gov.nih.nci.evs.api.model.Terminology;

import java.util.List;

/** Demo class for how to use the java client api generated from Openapi Code Generator */
public class Demo {

  /** The terminology. */
  private static String ncitTerm = "ncit";

  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-evsrest.nci.nih.gov/");

    // define the client apis to interact with based on default client
    ApplicationVersionEndpointApi apiInstance = new ApplicationVersionEndpointApi(defaultClient);
    ConceptEndpointsApi conceptApi = new ConceptEndpointsApi(defaultClient);
    HistoryEndpointsApi historyApi = new HistoryEndpointsApi(defaultClient);
    MapsetEndpointsApi mapsetApi = new MapsetEndpointsApi(defaultClient);
    MetadataEndpointsApi metadataApi = new MetadataEndpointsApi(defaultClient);
    SearchEndpointApi searchApi = new SearchEndpointApi(defaultClient);
    SubsetEndpointsApi subsetApi = new SubsetEndpointsApi(defaultClient);

    // Make various calls to the api and print their results
    try {
      ApplicationVersion result = apiInstance.getApplicationVersion();
      System.out.println(result);

      // Demo examples for all api calls
      ConceptDemo(conceptApi);
      HistoryDemo(historyApi);
      MapsetDemo(mapsetApi);
      MetadataDemo(metadataApi);
      SearchDemo(searchApi);
      SubsetDemo(subsetApi);

    } catch (ApiException e) {
      System.err.println("Exception when calling api");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }

  /**
   * Demo for various Concept api calls
   *
   * @param api Concept api
   * @throws ApiException exception thrown
   */
  public static void ConceptDemo(ConceptEndpointsApi api) throws ApiException {
    // Get a single concept
    System.out.println("Result for single concept:");
    Concept conceptResult = api.getConcept(ncitTerm, "C3224", null, "minimal");
    System.out.println(conceptResult);

    // Get a list of concepts
    String codes = "C3224,C3910";
    System.out.println("Result for a list of concepts:");
    List<Concept> conceptListResult = api.getConcepts(ncitTerm, codes, "minimal");
    System.out.println(conceptListResult);

    // Get descendents of single concept
    System.out.println("Result for a list of descendents of code C3224:");
    List<Concept> conceptDescendentListResult =
        api.getDescendants(ncitTerm, "C3224", 0, 50000, null);
    System.out.println(conceptListResult);

    // Get history for specified terminology and code
    System.out.println("Result for history of C3224:");
    Concept historyResult = api.getHistory(ncitTerm, "C3224");
    System.out.println(historyResult);
  }

  /**
   * Demo for various History api calls
   *
   * @param api History api
   * @throws ApiException
   */
  public static void HistoryDemo(HistoryEndpointsApi api) throws ApiException {
    // Get the list of suggested replacements for a retired code
    System.out.println("Result for replacement codes for retired code C4743:");
    List<History> replacementsResult = api.getReplacements(ncitTerm, "C4743");
    System.out.println(replacementsResult);

    // Get the list of suggested replacements from a list of retired codes
    String codes = "C4743,C12597";
    System.out.println("Result for replacement codes for a list of retired codes:");
    List<History> replacementsListResult = api.getReplacementsFromList(ncitTerm, codes);
    System.out.println(replacementsResult);
  }

  /**
   * Demo for Mapset api calls
   *
   * @param api Mapset api
   * @throws ApiException exception thrown
   */
  public static void MapsetDemo(MapsetEndpointsApi api) throws ApiException {
    // demo for getting mapsets
    System.out.println("Result for all mapsets:");
    List<Concept> mapsetListResult = api.getMapsets("minimal");
    System.out.println(mapsetListResult);

    // demo for getting mapset by code
    System.out.println("Result for mapset of code 'GO_to_NCIt_Mapping':");
    Concept mapsetResult = api.getMapsetByCode("GO_to_NCIt_Mapping", "minimal");
    System.out.println(mapsetResult);

    // demo for mappings by code
    System.out.println("Result for mapset mappings:");
    MapResultList mapResult =
        api.getMapsetMappingsByCode("GO_to_NCIt_Mapping", 0, 50000, null, true, null);
    System.out.println(mapResult);
  }

  /**
   * Demo for Metadata api calls
   *
   * @param api Metadata api
   * @throws ApiException thrown exception
   */
  public static void MetadataDemo(MetadataEndpointsApi api) throws ApiException {
    // demo for getting all associations for a terminology
    System.out.println("Result for all ncit associations:");
    List<Concept> result = api.getAssociations(ncitTerm, "minimal", null);
    System.out.println(result);

    // demo for get definition type of specified term and code
    System.out.println("Result for definition type of ncit P325:");
    Concept defResult = api.getDefinitionType(ncitTerm, "P325", "minimal");
    System.out.println(defResult);

    // demo for getting all available terminologies
    System.out.println("Result for all NCIT terminologies:");
    List<Terminology> terminologyResult = api.getTerminologies(true, "monthly", ncitTerm);
    System.out.println(terminologyResult);
  }

  /**
   * Demo for Search api calls
   *
   * @param api Search api
   * @throws ApiException thrown exception
   */
  public static void SearchDemo(SearchEndpointApi api) throws ApiException {
    // demo for generic search of a terminology
    System.out.println("Result for concept search:");
    ConceptResultList resultList =
        api.search(
            ncitTerm,
            "cancer",
            "contains",
            null,
            false,
            "associations",
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);
    System.out.println(resultList);
  }

  /**
   * Demo for Subset api calls
   *
   * @param api Subset api
   * @throws ApiException thrown exception
   */
  public static void SubsetDemo(SubsetEndpointsApi api) throws ApiException {
    // demo for getting subset members
    System.out.println("Result for subsets of C157225:");
    List<Concept> subsetMemberResult = api.getSubsetMembers(ncitTerm, "C157225", "0", "10", "summary");
    System.out.println(subsetMemberResult);

    // demo for get subsets for specified terms, where P325 isn't found
    String codes = "P325,C157225";
    System.out.println("Result for subsets of terms P325 & C157225:");
    List<Concept> subsetResult = api.getSubsets(ncitTerm, "minimal", codes);
    System.out.println(subsetResult);
  }

}

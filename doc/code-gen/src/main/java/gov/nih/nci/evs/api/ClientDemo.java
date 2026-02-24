package gov.nih.nci.evs.api;

import gov.nih.nci.evs.api.invoker.ApiClient;
import gov.nih.nci.evs.api.model.Concept;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * A simple demonstration class that uses the generated EVSRESTAPI Java client.
 */
public class ClientDemo {

    private static final Logger log = LoggerFactory.getLogger(ClientDemo.class);

    public static void main(String[] args) {
        try {
            log.info("Starting EVSRESTAPI Client Demo...");

            // Initialize the API client
            ApiClient apiClient = new ApiClient();
            // Default base path is usually set in the generated ApiClient or can be overridden
            log.info("API Base Path: {}", apiClient.getBasePath());

            // Instantiate the ConceptEndpointsApi
            ConceptEndpointsApi api = new ConceptEndpointsApi(apiClient);

            // Fetch a well-known concept (e.g., Melanoma - C3224) from NCIt
            String terminology = "ncit";
            String code = "C3224";
            
            log.info("Fetching concept {} from {}...", code, terminology);
            Concept concept = api.getConcept(terminology, code, null, "summary", null);

            if (concept != null) {
                log.info("Successfully fetched concept!");
                log.info("Code: {}", concept.getCode());
                log.info("Name: {}", concept.getName());
                log.info("Terminology: {}", concept.getTerminology());
            } else {
                log.error("Failed to fetch concept: concept is null");
            }

        } catch (Exception e) {
            log.error("An error occurred during the demo:", e);
            System.exit(1);
        }
    }
}

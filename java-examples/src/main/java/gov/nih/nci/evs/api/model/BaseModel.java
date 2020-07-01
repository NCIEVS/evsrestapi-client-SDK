
package gov.nih.nci.evs.api.model;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Represents the base superclass for other model objects.
 */
public class BaseModel {

  /**
   * Instantiates an empty {@link BaseModel}.
   */
  public BaseModel() {
    // n/a
  }

  /* see superclass */
  @Override
  public String toString() {
    try {
      return new ObjectMapper().setSerializationInclusion(Include.NON_EMPTY)
          .writeValueAsString(this);
    } catch (final Exception e) {
      return e.getMessage();
    }
  }

}


package gov.nih.nci.evs.api.model;

/**
 * Represents a role relationship between two concepts.
 */
public class Role extends Relationship {
  /**
   * Instantiates an empty {@link Role}.
   */
  public Role() {
    // n/a
  }

  /**
   * Instantiates a {@link Role} from the specified parameters.
   *
   * @param other the other
   */
  public Role(final Role other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final Role other) {
    super.populateFrom(other);
  }

}

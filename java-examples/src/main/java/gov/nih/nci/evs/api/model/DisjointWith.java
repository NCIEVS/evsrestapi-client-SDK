
package gov.nih.nci.evs.api.model;

/**
 * Represents an disjointness association between two concepts.
 */
public class DisjointWith extends Relationship {
  /**
   * Instantiates an empty {@link DisjointWith}.
   */
  public DisjointWith() {
    // n/a
  }

  /**
   * Instantiates a {@link DisjointWith} from the specified parameters.
   *
   * @param other the other
   */
  public DisjointWith(final DisjointWith other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final DisjointWith other) {
    super.populateFrom(other);
  }

}

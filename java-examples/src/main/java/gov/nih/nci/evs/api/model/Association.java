
package gov.nih.nci.evs.api.model;

/**
 * Represents an association between two concepts.
 */
public class Association extends Relationship {
	/**
	 * Instantiates an empty {@link Association}.
	 */
	public Association() {
		// n/a
	}

	/**
	 * Instantiates a {@link Association} from the specified parameters.
	 *
	 * @param other the other
	 */
	public Association(final Association other) {
		populateFrom(other);
	}

	/**
	 * Populate from.
	 *
	 * @param other the other
	 */
	public void populateFrom(final Association other) {
		super.populateFrom(other);
	}

}

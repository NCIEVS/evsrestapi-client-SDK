
package gov.nih.nci.evs.api.model;

/**
 * Represents a connection between two concepts.
 */
public class Relationship extends BaseModel {

	/** The type. */
	private String type;

	/** The related code. */
	private String relatedCode;

	/** The related name. */
	private String relatedName;

	/** The highlight. */
	private String highlight;

	/**
	 * Instantiates an empty {@link Relationship}.
	 */
	public Relationship() {
		// n/a
	}

	/**
	 * Instantiates a {@link Relationship} from the specified parameters.
	 *
	 * @param other the other
	 */
	public Relationship(final Relationship other) {
		populateFrom(other);
	}

	/**
	 * Populate from.
	 *
	 * @param other the other
	 */
	public void populateFrom(final Relationship other) {
		type = other.getType();
		relatedCode = other.getRelatedCode();
		relatedName = other.getRelatedName();
		highlight = other.getHighlight();
	}

	/**
	 * Returns the type.
	 *
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * Sets the type.
	 *
	 * @param type the type
	 */
	public void setType(final String type) {
		this.type = type;
	}

	/**
	 * Returns the related code.
	 *
	 * @return the related code
	 */
	public String getRelatedCode() {
		return relatedCode;
	}

	/**
	 * Sets the related code.
	 *
	 * @param relatedCode the related code
	 */
	public void setRelatedCode(final String relatedCode) {
		this.relatedCode = relatedCode;
	}

	/**
	 * Returns the related name.
	 *
	 * @return the related name
	 */
	public String getRelatedName() {
		return relatedName;
	}

	/**
	 * Sets the related name.
	 *
	 * @param relatedName the related name
	 */
	public void setRelatedName(final String relatedName) {
		this.relatedName = relatedName;
	}

	/**
	 * Returns the highlight.
	 *
	 * @return the highlight
	 */
	public String getHighlight() {
		return highlight;
	}

	/**
	 * Sets the highlight.
	 *
	 * @param highlight the highlight
	 */
	public void setHighlight(final String highlight) {
		this.highlight = highlight;
	}

	/* see superclass */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((relatedCode == null) ? 0 : relatedCode.hashCode());
		result = prime * result + ((relatedName == null) ? 0 : relatedName.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	/* see superclass */
	@Override
	public boolean equals(final Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		final Relationship other = (Relationship) obj;
		if (relatedCode == null) {
			if (other.relatedCode != null) {
				return false;
			}
		} else if (!relatedCode.equals(other.relatedCode)) {
			return false;
		}
		if (relatedName == null) {
			if (other.relatedName != null) {
				return false;
			}
		} else if (!relatedName.equals(other.relatedName)) {
			return false;
		}
		if (type == null) {
			if (other.type != null) {
				return false;
			}
		} else if (!type.equals(other.type)) {
			return false;
		}
		return true;
	}

}


package gov.nih.nci.evs.api.model;

/**
 * Represents a synonym of a concept.
 */
public class Synonym extends BaseModel {

	/** The name. */
	private String name;

	/** The highlight. */
	private String highlight;

	/** The term group. */
	private String termGroup;

	/** The type. */
	private String type;

	/** The source. */
	private String source;

	/** The code. */
	private String code;

	/** The sub source. */
	private String subSource;

	/**
	 * Instantiates an empty {@link Synonym}.
	 */
	public Synonym() {
		// n/a
	}

	/**
	 * Instantiates a {@link Synonym} from the specified parameters.
	 *
	 * @param other the other
	 */
	public Synonym(final Synonym other) {
		populateFrom(other);
	}

	/**
	 * Populate from.
	 *
	 * @param other the other
	 */
	public void populateFrom(final Synonym other) {
		name = other.getName();
		highlight = other.getHighlight();
		termGroup = other.getTermGroup();
		type = other.getType();
		source = other.getSource();
		code = other.getCode();
		subSource = other.getSubSource();
	}

	/**
	 * Returns the name.
	 *
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name the name
	 */
	public void setName(final String name) {
		this.name = name;
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

	/**
	 * Returns the term group.
	 *
	 * @return the term group
	 */
	public String getTermGroup() {
		return termGroup;
	}

	/**
	 * Sets the term group.
	 *
	 * @param termGroup the term group
	 */
	public void setTermGroup(final String termGroup) {
		this.termGroup = termGroup;
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
	 * Returns the source.
	 *
	 * @return the source
	 */
	public String getSource() {
		return source;
	}

	/**
	 * Sets the source.
	 *
	 * @param source the source
	 */
	public void setSource(final String source) {
		this.source = source;
	}

	/**
	 * Returns the code.
	 *
	 * @return the code
	 */
	public String getCode() {
		return code;
	}

	/**
	 * Sets the code.
	 *
	 * @param code the code
	 */
	public void setCode(final String code) {
		this.code = code;
	}

	/**
	 * Returns the sub source.
	 *
	 * @return the sub source
	 */
	public String getSubSource() {
		return subSource;
	}

	/**
	 * Sets the sub source.
	 *
	 * @param subSource the sub source
	 */
	public void setSubSource(final String subSource) {
		this.subSource = subSource;
	}

	/* see superclass */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((code == null) ? 0 : code.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((source == null) ? 0 : source.hashCode());
		result = prime * result + ((subSource == null) ? 0 : subSource.hashCode());
		result = prime * result + ((termGroup == null) ? 0 : termGroup.hashCode());
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
		final Synonym other = (Synonym) obj;
		if (code == null) {
			if (other.code != null) {
				return false;
			}
		} else if (!code.equals(other.code)) {
			return false;
		}
		if (name == null) {
			if (other.name != null) {
				return false;
			}
		} else if (!name.equals(other.name)) {
			return false;
		}
		if (source == null) {
			if (other.source != null) {
				return false;
			}
		} else if (!source.equals(other.source)) {
			return false;
		}
		if (subSource == null) {
			if (other.subSource != null) {
				return false;
			}
		} else if (!subSource.equals(other.subSource)) {
			return false;
		}
		if (termGroup == null) {
			if (other.termGroup != null) {
				return false;
			}
		} else if (!termGroup.equals(other.termGroup)) {
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

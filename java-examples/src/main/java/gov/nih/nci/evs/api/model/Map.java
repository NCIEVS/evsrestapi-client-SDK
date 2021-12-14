
package gov.nih.nci.evs.api.model;

/**
 * Represents a map to a concept in another terminology.
 */
public class Map extends BaseModel {

	/** The type. */
	private String type;

	/** The target name. */
	private String targetName;

	/** The target term group. */
	private String targetTermGroup;

	/** The target code. */
	private String targetCode;

	/** The target terminology. */
	private String targetTerminology;

	/** The target terminology version. */
	private String targetTerminologyVersion;

	/**
	 * Instantiates an empty {@link Map}.
	 */
	public Map() {
		// n/a
	}

	/**
	 * Instantiates a {@link Map} from the specified parameters.
	 *
	 * @param other the other
	 */
	public Map(final Map other) {
		populateFrom(other);
	}

	/**
	 * Populate from.
	 *
	 * @param other the other
	 */
	public void populateFrom(final Map other) {
		type = other.getType();
		targetName = other.getTargetName();
		targetTermGroup = other.getTargetTermGroup();
		targetCode = other.getTargetCode();
		targetTerminology = other.getTargetTerminology();
		targetTerminologyVersion = other.getTargetTerminologyVersion();
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
	 * Returns the target name.
	 *
	 * @return the target name
	 */
	public String getTargetName() {
		return targetName;
	}

	/**
	 * Sets the target name.
	 *
	 * @param targetName the target name
	 */
	public void setTargetName(final String targetName) {
		this.targetName = targetName;
	}

	/**
	 * Returns the target term group.
	 *
	 * @return the target term group
	 */
	public String getTargetTermGroup() {
		return targetTermGroup;
	}

	/**
	 * Sets the target term group.
	 *
	 * @param targetTermGroup the target term group
	 */
	public void setTargetTermGroup(final String targetTermGroup) {
		this.targetTermGroup = targetTermGroup;
	}

	/**
	 * Returns the target code.
	 *
	 * @return the target code
	 */
	public String getTargetCode() {
		return targetCode;
	}

	/**
	 * Sets the target code.
	 *
	 * @param targetCode the target code
	 */
	public void setTargetCode(final String targetCode) {
		this.targetCode = targetCode;
	}

	/**
	 * Returns the target terminology.
	 *
	 * @return the target terminology
	 */
	public String getTargetTerminology() {
		return targetTerminology;
	}

	/**
	 * Sets the target terminology.
	 *
	 * @param targetTerminology the target terminology
	 */
	public void setTargetTerminology(final String targetTerminology) {
		this.targetTerminology = targetTerminology;
	}

	/**
	 * Returns the target terminology version.
	 *
	 * @return the target terminology version
	 */
	public String getTargetTerminologyVersion() {
		return targetTerminologyVersion;
	}

	/**
	 * Sets the target terminology version.
	 *
	 * @param targetTerminologyVersion the target terminology version
	 */
	public void setTargetTerminologyVersion(final String targetTerminologyVersion) {
		this.targetTerminologyVersion = targetTerminologyVersion;
	}

	/**
	 * Hash code.
	 *
	 * @return the int
	 */
	/* see superclass */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((targetCode == null) ? 0 : targetCode.hashCode());
		result = prime * result + ((targetName == null) ? 0 : targetName.hashCode());
		result = prime * result + ((targetTermGroup == null) ? 0 : targetTermGroup.hashCode());
		result = prime * result + ((targetTerminology == null) ? 0 : targetTerminology.hashCode());
		result = prime * result + ((targetTerminologyVersion == null) ? 0 : targetTerminologyVersion.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	/**
	 * Equals.
	 *
	 * @param obj the obj
	 * @return true, if successful
	 */
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
		final Map other = (Map) obj;
		if (targetCode == null) {
			if (other.targetCode != null) {
				return false;
			}
		} else if (!targetCode.equals(other.targetCode)) {
			return false;
		}
		if (targetName == null) {
			if (other.targetName != null) {
				return false;
			}
		} else if (!targetName.equals(other.targetName)) {
			return false;
		}
		if (targetTermGroup == null) {
			if (other.targetTermGroup != null) {
				return false;
			}
		} else if (!targetTermGroup.equals(other.targetTermGroup)) {
			return false;
		}
		if (targetTerminology == null) {
			if (other.targetTerminology != null) {
				return false;
			}
		} else if (!targetTerminology.equals(other.targetTerminology)) {
			return false;
		}
		if (targetTerminologyVersion == null) {
			if (other.targetTerminologyVersion != null) {
				return false;
			}
		} else if (!targetTerminologyVersion.equals(other.targetTerminologyVersion)) {
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

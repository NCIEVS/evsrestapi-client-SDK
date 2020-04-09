
package gov.nih.nci.evs.api.model;

/**
 * Represents a concept with a code from a terminology with the smallest amount
 * of information.
 * 
 * <pre>
 * {
 *   "code" : "C3224",
 *   "name" : "Melanoma",
 * }
 * </pre>
 */
public class ConceptMinimal extends BaseModel {

  /** The code. */
  private String code;

  /** The name. */
  private String name;

  /** The terminology. */
  private String terminology;

  /**
   * Instantiates an empty {@link ConceptMinimal}.
   */
  public ConceptMinimal() {
    // n/a
  }

  /**
   * Instantiates a {@link ConceptMinimal} from the specified parameters.
   *
   * @param code the code
   */
  public ConceptMinimal(final String code) {
    this.code = code;
  }

  /**
   * Instantiates a {@link ConceptMinimal} from the specified parameters.
   *
   * @param terminology the terminology
   * @param code the code
   * @param name the name
   */
  public ConceptMinimal(final String terminology, final String code, final String name) {
    this.terminology = terminology;
    this.code = code;
    this.name = name;
  }

  /**
   * Instantiates a {@link ConceptMinimal} from the specified parameters.
   *
   * @param other the other
   */
  public ConceptMinimal(final ConceptMinimal other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final ConceptMinimal other) {
    code = other.getCode();
    name = other.getName();
    terminology = other.getTerminology();
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
   * Returns the terminology.
   *
   * @return the terminology
   */
  public String getTerminology() {
    return terminology;
  }

  /**
   * Sets the terminology.
   *
   * @param terminology the terminology
   */
  public void setTerminology(final String terminology) {
    this.terminology = terminology;
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
    result = prime * result + ((code == null) ? 0 : code.hashCode());
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    result = prime * result + ((terminology == null) ? 0 : terminology.hashCode());
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
    final ConceptMinimal other = (ConceptMinimal) obj;
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
    if (terminology == null) {
      if (other.terminology != null) {
        return false;
      }
    } else if (!terminology.equals(other.terminology)) {
      return false;
    }
    return true;
  }

}

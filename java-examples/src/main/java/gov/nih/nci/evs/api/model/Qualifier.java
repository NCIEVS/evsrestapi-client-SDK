
package gov.nih.nci.evs.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Represents a qualifier on a synonym, definition, property, or role that isn't
 * explicitly modeled as a first-class attribute.
 */
@JsonIgnoreProperties(value = {
    "code"
})
public class Qualifier extends BaseModel {

  /** The code. */
  private String code;

  /** The type. */
  private String type;

  /** The value. */
  private String value;

  /**
   * Instantiates an empty {@link Qualifier}.
   */
  public Qualifier() {
    // n/a
  }

  /**
   * Instantiates a {@link Qualifier} from the specified parameters.
   *
   * @param type the type
   * @param value the value
   */
  public Qualifier(final String type, final String value) {
    this.type = type;
    this.value = value;
  }

  /**
   * Instantiates a {@link Qualifier} from the specified parameters.
   *
   * @param other the other
   */
  public Qualifier(final Qualifier other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final Qualifier other) {
    code = other.getCode();
    type = other.getType();
    value = other.getValue();
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
  public void setCode(String code) {
    this.code = code;
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
   * Returns the value.
   *
   * @return the value
   */
  public String getValue() {
    return value;
  }

  /**
   * Sets the value.
   *
   * @param value the value
   */
  public void setValue(final String value) {
    this.value = value;
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
    result = prime * result + ((type == null) ? 0 : type.hashCode());
    result = prime * result + ((value == null) ? 0 : value.hashCode());
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
    final Qualifier other = (Qualifier) obj;
    if (type == null) {
      if (other.type != null) {
        return false;
      }
    } else if (!type.equals(other.type)) {
      return false;
    }
    if (value == null) {
      if (other.value != null) {
        return false;
      }
    } else if (!value.equals(other.value)) {
      return false;
    }
    return true;
  }

}

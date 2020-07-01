
package gov.nih.nci.evs.api.model;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Search criteria object for /concept/search implementation without a
 * terminology field.
 */
public class SearchCriteriaWithoutTerminology extends BaseModel {

  @SuppressWarnings("unused")
  private static final Logger logger =
      LoggerFactory.getLogger(SearchCriteriaWithoutTerminology.class);

  /** The term. */
  private String term;

  /** The type. */
  private String type = "contains";

  /** The include. */
  private String include = "minimal";

  /** The from record. */
  private Integer fromRecord = 0;

  /** The page size. */
  private Integer pageSize = 10;

  /** The concept status. */
  private List<String> conceptStatus;

  /** The property. */
  private List<String> property;

  /** The contributing source. */
  private List<String> contributingSource;

  /** The synonym source. */
  private List<String> synonymSource;

  /** The definition source. */
  private List<String> definitionSource;

  /** The synonym term group. */
  private String synonymTermGroup;

  /** The inverse. */
  // private Boolean inverse = null;

  /** The association. */
  // private List<String> association;

  /** The role. */
  // private List<String> role;

  /**
   * Instantiates an empty {@link SearchCriteriaWithoutTerminology}.
   */
  public SearchCriteriaWithoutTerminology() {
    // n/a
  }

  /**
   * Instantiates a {@link SearchCriteriaWithoutTerminology} from the specified
   * parameters.
   *
   * @param other the other
   */
  public SearchCriteriaWithoutTerminology(final SearchCriteriaWithoutTerminology other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final SearchCriteriaWithoutTerminology other) {
    // association = new ArrayList<>(other.getAssociation());
    conceptStatus = new ArrayList<>(other.getConceptStatus());
    contributingSource = new ArrayList<>(other.getContributingSource());
    definitionSource = new ArrayList<>(other.getDefinitionSource());
    fromRecord = other.getFromRecord();
    include = other.getInclude();
    // inverse = other.getInverse();
    pageSize = other.getPageSize();
    property = new ArrayList<>(other.getProperty());
    // role = new ArrayList<>(other.getRole());
    synonymSource = new ArrayList<>(other.getSynonymSource());
    synonymTermGroup = other.getSynonymTermGroup();
    term = other.getTerm();
    type = other.getType();
  }

  /**
   * Returns the term.
   *
   * @return the term
   */
  public String getTerm() {
    return term;
  }

  /**
   * Sets the term.
   *
   * @param term the term
   */
  public void setTerm(final String term) {
    this.term = term;
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
   * Returns the include.
   *
   * @return the include
   */
  public String getInclude() {
    return include;
  }

  /**
   * Sets the include.
   *
   * @param include the include
   */
  public void setInclude(final String include) {
    this.include = include;
  }

  /**
   * Returns the from record.
   *
   * @return the from record
   */
  public Integer getFromRecord() {
    return fromRecord;
  }

  /**
   * Sets the from record.
   *
   * @param fromRecord the from record
   */
  public void setFromRecord(final Integer fromRecord) {
    this.fromRecord = fromRecord;
  }

  /**
   * Returns the page size.
   *
   * @return the page size
   */
  public Integer getPageSize() {
    return pageSize;
  }

  /**
   * Sets the page size.
   *
   * @param pageSize the page size
   */
  public void setPageSize(final Integer pageSize) {
    this.pageSize = pageSize;
  }

  /**
   * Returns the concept status.
   *
   * @return the concept status
   */
  public List<String> getConceptStatus() {
    if (conceptStatus == null) {
      conceptStatus = new ArrayList<>();
    }
    return conceptStatus;
  }

  /**
   * Sets the concept status.
   *
   * @param conceptStatus the concept status
   */
  public void setConceptStatus(final List<String> conceptStatus) {
    this.conceptStatus = conceptStatus;
  }

  /**
   * Returns the property.
   *
   * @return the property
   */
  public List<String> getProperty() {
    if (property == null) {
      property = new ArrayList<>();
    }
    return property;
  }

  /**
   * Sets the property.
   *
   * @param property the property
   */
  public void setProperty(final List<String> property) {
    this.property = property;
  }

  /**
   * Returns the contributing source.
   *
   * @return the contributing source
   */
  public List<String> getContributingSource() {
    if (contributingSource == null) {
      contributingSource = new ArrayList<>();
    }
    return contributingSource;
  }

  /**
   * Sets the contributing source.
   *
   * @param contributingSource the contributing source
   */
  public void setContributingSource(final List<String> contributingSource) {
    this.contributingSource = contributingSource;
  }

  /**
   * Returns the synonym source.
   *
   * @return the synonym source
   */
  public List<String> getSynonymSource() {
    if (synonymSource == null) {
      synonymSource = new ArrayList<>();
    }
    return synonymSource;
  }

  /**
   * Sets the synonym source.
   *
   * @param synonymSource the synonym source
   */
  public void setSynonymSource(final List<String> synonymSource) {
    this.synonymSource = synonymSource;
  }

  /**
   * Returns the definition source.
   *
   * @return the definition source
   */
  public List<String> getDefinitionSource() {
    if (definitionSource == null) {
      definitionSource = new ArrayList<>();
    }
    return definitionSource;
  }

  /**
   * Sets the definition source.
   *
   * @param definitionSource the definition source
   */
  public void setDefinitionSource(final List<String> definitionSource) {
    this.definitionSource = definitionSource;
  }

  /**
   * Returns the synonym term group.
   *
   * @return the synonym term group
   */
  public String getSynonymTermGroup() {
    return synonymTermGroup;
  }

  /**
   * Sets the synonym term group.
   *
   * @param synonymTermGroup the synonym term group
   */
  public void setSynonymTermGroup(final String synonymTermGroup) {
    this.synonymTermGroup = synonymTermGroup;
  }

  /**
   * Returns the inverse.
   *
   * @return the inverse
   */
  // public Boolean getInverse() {
  // return inverse;
  // }

  /**
   * Sets the inverse.
   *
   * @param inverse the inverse
   */
  // public void setInverse(final Boolean inverse) {
  // this.inverse = inverse;
  // }

  /**
   * Returns the association.
   *
   * @return the association
   */
  // public List<String> getAssociation() {
  // if (association == null) {
  // association = new ArrayList<>();
  // }
  // return association;
  // }

  /**
   * Sets the association.
   *
   * @param association the association
   */
  // public void setAssociation(final List<String> association) {
  // this.association = association;
  // }

  /**
   * Returns the role.
   *
   * @return the role
   */
  // public List<String> getRole() {
  // if (role == null) {
  // role = new ArrayList<>();
  // }
  // return role;
  // }

  /**
   * Sets the role.
   *
   * @param role the role
   */
  // public void setRole(final List<String> role) {
  // this.role = role;
  // }

  /**
   * Check required fields.
   *
   * @return true, if successful
   */
  public boolean checkRequiredFields() {
    if (term == null) {
      return false;
    }
    return true;
  }

  /**
   * Compute missing required fields.
   *
   * @return the string
   */
  public String computeMissingRequiredFields() {
    return "term";
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
    // result =
    // prime * result + ((association == null) ? 0 :
    // association.hashCode());
    result = prime * result + ((conceptStatus == null) ? 0 : conceptStatus.hashCode());
    result = prime * result + ((contributingSource == null) ? 0 : contributingSource.hashCode());
    result = prime * result + ((definitionSource == null) ? 0 : definitionSource.hashCode());
    result = prime * result + ((fromRecord == null) ? 0 : fromRecord.hashCode());
    result = prime * result + ((include == null) ? 0 : include.hashCode());
    // result = prime * result + ((inverse == null) ? 0 : inverse.hashCode());
    result = prime * result + ((pageSize == null) ? 0 : pageSize.hashCode());
    result = prime * result + ((property == null) ? 0 : property.hashCode());
    // result = prime * result + ((role == null) ? 0 : role.hashCode());
    result = prime * result + ((synonymSource == null) ? 0 : synonymSource.hashCode());
    result = prime * result + ((synonymTermGroup == null) ? 0 : synonymTermGroup.hashCode());
    result = prime * result + ((term == null) ? 0 : term.hashCode());
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
    final SearchCriteriaWithoutTerminology other = (SearchCriteriaWithoutTerminology) obj;
    // if (association == null) {
    // if (other.association != null) {
    // return false;
    // }
    // } else if (!association.equals(other.association)) {
    // return false;
    // }
    if (conceptStatus == null) {
      if (other.conceptStatus != null) {
        return false;
      }
    } else if (!conceptStatus.equals(other.conceptStatus)) {
      return false;
    }
    if (contributingSource == null) {
      if (other.contributingSource != null) {
        return false;
      }
    } else if (!contributingSource.equals(other.contributingSource)) {
      return false;
    }
    if (definitionSource == null) {
      if (other.definitionSource != null) {
        return false;
      }
    } else if (!definitionSource.equals(other.definitionSource)) {
      return false;
    }
    if (fromRecord == null) {
      if (other.fromRecord != null) {
        return false;
      }
    } else if (!fromRecord.equals(other.fromRecord)) {
      return false;
    }
    if (include == null) {
      if (other.include != null) {
        return false;
      }
    } else if (!include.equals(other.include)) {
      return false;
    }
    // if (inverse == null) {
    // if (other.inverse != null) {
    // return false;
    // }
    // } else if (!inverse.equals(other.inverse)) {
    // return false;
    // }
    if (pageSize == null) {
      if (other.pageSize != null) {
        return false;
      }
    } else if (!pageSize.equals(other.pageSize)) {
      return false;
    }
    if (property == null) {
      if (other.property != null) {
        return false;
      }
    } else if (!property.equals(other.property)) {
      return false;
    }
    // if (role == null) {
    // if (other.role != null) {
    // return false;
    // }
    // } else if (!role.equals(other.role)) {
    // return false;
    // }
    if (synonymSource == null) {
      if (other.synonymSource != null) {
        return false;
      }
    } else if (!synonymSource.equals(other.synonymSource)) {
      return false;
    }
    if (synonymTermGroup == null) {
      if (other.synonymTermGroup != null) {
        return false;
      }
    } else if (!synonymTermGroup.equals(other.synonymTermGroup)) {
      return false;
    }
    if (term == null) {
      if (other.term != null) {
        return false;
      }
    } else if (!term.equals(other.term)) {
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

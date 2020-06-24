
package gov.nih.nci.evs.api.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Represents a concept with a code from a terminology.
 * 
 * <pre>
 * {
 *   "code" : "C3224",
 *   "name" : "Melanoma",
 *   "leaf" : false,
 *   "synonyms" :[ {  
 *     "name" : "MELANOMA, MALIGNANT",
 *     "termGroup" : "PT",
 *     "source" : "CDISC",
 *     "type" : "FULL_SYN"
 *   }, ... ],
 *   "definitions": [ ...
 *     {
 *     "definition" : "A form of cancer that begins in melanocytes (cells that make the pigment melanin). It may begin in a mole (skin melanoma), but can also begin in other pigmented tissues, such as in the eye or in the intestines.",
 *     "source" : "NCI-GLOSS",
 *     "type": "ALT_DEFINITION"
 *   } ],
 *   "properties" : [
 *     { "type": "Neoplastic_Status", "value": "Malignant" },
 *     { "type": "UMLS_CUI", "value": "C0025202" }, ...
 *   ]
 * }
 * </pre>
 */
public class Concept extends ConceptMinimal {

  /** The highlight. */
  private String highlight;

  /** The highlights. */
  private java.util.Map<String, String> highlights;

  /** The level. */
  private Integer level;

  /** The leaf. */
  private Boolean leaf;

  /** The synonyms. */
  private List<Synonym> synonyms;

  /** The definitions. */
  private List<Definition> definitions;

  /** The properties. */
  private List<Property> properties;

  /** The children. */
  private List<Concept> children;

  /** The parents. */
  private List<Concept> parents;

  /** The associations. */
  private List<Association> associations;

  /** The inverse associations. */
  private List<Association> inverseAssociations;

  /** The roles. */
  private List<Role> roles;

  /** The disjoint with. */
  private List<DisjointWith> disjointWith;

  /** The inverse roles. */
  private List<Role> inverseRoles;

  /** The maps. */
  private List<Map> maps;

  /**
   * Instantiates an empty {@link Concept}.
   */
  public Concept() {
    // n/a
  }

  /**
   * Instantiates a {@link Concept} from the specified parameters.
   *
   * @param code the code
   */
  public Concept(final String code) {
    super(code);
  }

  /**
   * Instantiates a {@link Concept} from the specified parameters.
   *
   * @param terminology the terminology
   * @param code the code
   * @param name the name
   */
  public Concept(final String terminology, final String code, final String name) {
    super(terminology, code, name);
  }

  /**
   * Instantiates a {@link Concept} from the specified parameters.
   *
   * @param other the other
   */
  public Concept(final Concept other) {
    populateFrom(other);
  }

  /**
   * Instantiates a {@link Concept} from the specified parameters.
   *
   * @param other the other
   */
  public Concept(final ConceptNode other) {
    super(other);
  }

  /**
   * Instantiates a {@link Concept} from the specified parameters.
   *
   * @param other the other
   */
  public Concept(final HierarchyNode other) {
    super(other.getCode());
    setName(other.getLabel());
    level = other.getLevel();
    if (other.getLeaf() != null && other.getLeaf()) {
      leaf = other.getLeaf();
    }
    for (final HierarchyNode child : other.getChildren()) {
      getChildren().add(new Concept(child));
    }
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final Concept other) {
    super.populateFrom(other);
    highlight = other.getHighlight();
    highlights = new HashMap<>(other.getHighlights());
    level = other.getLevel();
    leaf = other.getLeaf();
    synonyms = new ArrayList<>(other.getSynonyms());
    definitions = new ArrayList<>(other.getDefinitions());
    properties = new ArrayList<>(other.getProperties());
    children = new ArrayList<>(other.getChildren());
    parents = new ArrayList<>(other.getParents());
    associations = new ArrayList<>(other.getAssociations());
    inverseAssociations = new ArrayList<>(other.getInverseAssociations());
    roles = new ArrayList<>(other.getRoles());
    inverseRoles = new ArrayList<>(other.getInverseRoles());
    disjointWith = new ArrayList<>(other.getDisjointWith());
    maps = new ArrayList<>(other.getMaps());
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
   * Returns the highlights.
   *
   * @return the highlights
   */
  public java.util.Map<String, String> getHighlights() {
    if (highlights == null) {
      highlights = new HashMap<>();
    }
    return highlights;
  }

  /**
   * Sets the highlights.
   *
   * @param highlights the highlights
   */
  public void setHighlights(final java.util.Map<String, String> highlights) {
    this.highlights = highlights;
  }

  /**
   * Returns the level.
   *
   * @return the level
   */
  public Integer getLevel() {
    return level;
  }

  /**
   * Sets the level.
   *
   * @param level the level
   */
  public void setLevel(final Integer level) {
    this.level = level;
  }

  /**
   * Returns the leaf.
   *
   * @return the leaf
   */
  public Boolean getLeaf() {
    return leaf;
  }

  /**
   * Sets the leaf.
   *
   * @param leaf the leaf
   */
  public void setLeaf(final Boolean leaf) {
    this.leaf = leaf;
  }

  /**
   * Returns the synonyms.
   *
   * @return the synonyms
   */
  public List<Synonym> getSynonyms() {
    if (synonyms == null) {
      synonyms = new ArrayList<>();
    }
    return synonyms;
  }

  /**
   * Sets the synonyms.
   *
   * @param synonyms the synonyms
   */
  public void setSynonyms(final List<Synonym> synonyms) {
    this.synonyms = synonyms;
  }

  /**
   * Returns the definitions.
   *
   * @return the definitions
   */
  public List<Definition> getDefinitions() {
    if (definitions == null) {
      definitions = new ArrayList<>();
    }
    return definitions;
  }

  /**
   * Sets the definitions.
   *
   * @param definitions the definitions
   */
  public void setDefinitions(final List<Definition> definitions) {
    this.definitions = definitions;
  }

  /**
   * Returns the properties.
   *
   * @return the properties
   */
  public List<Property> getProperties() {
    if (properties == null) {
      properties = new ArrayList<>();
    }
    return properties;
  }

  /**
   * Sets the properties.
   *
   * @param properties the properties
   */
  public void setProperties(final List<Property> properties) {
    this.properties = properties;
  }

  /**
   * Returns the children.
   *
   * @return the children
   */
  public List<Concept> getChildren() {
    if (children == null) {
      children = new ArrayList<>();
    }
    return children;
  }

  /**
   * Sets the children.
   *
   * @param children the children
   */
  public void setChildren(final List<Concept> children) {
    this.children = children;
  }

  /**
   * Returns the parents.
   *
   * @return the parents
   */
  public List<Concept> getParents() {
    if (parents == null) {
      parents = new ArrayList<>();
    }
    return parents;
  }

  /**
   * Sets the parents.
   *
   * @param parents the parents
   */
  public void setParents(final List<Concept> parents) {
    this.parents = parents;
  }

  /**
   * Returns the associations.
   *
   * @return the associations
   */
  public List<Association> getAssociations() {
    if (associations == null) {
      associations = new ArrayList<>();
    }
    return associations;
  }

  /**
   * Sets the associations.
   *
   * @param associations the associations
   */
  public void setAssociations(final List<Association> associations) {
    this.associations = associations;
  }

  /**
   * Returns the inverse associations.
   *
   * @return the inverse associations
   */
  public List<Association> getInverseAssociations() {
    if (inverseAssociations == null) {
      inverseAssociations = new ArrayList<>();
    }
    return inverseAssociations;
  }

  /**
   * Sets the inverse associations.
   *
   * @param inverseAssociations the inverse associations
   */
  public void setInverseAssociations(final List<Association> inverseAssociations) {
    this.inverseAssociations = inverseAssociations;
  }

  /**
   * Returns the roles.
   *
   * @return the roles
   */
  public List<Role> getRoles() {
    if (roles == null) {
      roles = new ArrayList<>();
    }
    return roles;
  }

  /**
   * Sets the roles.
   *
   * @param roles the roles
   */
  public void setRoles(final List<Role> roles) {
    this.roles = roles;
  }

  /**
   * Returns the inverse roles.
   *
   * @return the inverse roles
   */
  public List<Role> getInverseRoles() {
    if (inverseRoles == null) {
      inverseRoles = new ArrayList<>();
    }
    return inverseRoles;
  }

  /**
   * Sets the inverse roles.
   *
   * @param inverseRoles the inverse roles
   */
  public void setInverseRoles(final List<Role> inverseRoles) {
    this.inverseRoles = inverseRoles;
  }

  /**
   * Returns the disjoint with.
   *
   * @return the disjoint with
   */
  public List<DisjointWith> getDisjointWith() {
    if (disjointWith == null) {
      disjointWith = new ArrayList<>();
    }
    return disjointWith;
  }

  /**
   * Sets the disjoint with.
   *
   * @param disjointWith the disjoint with
   */
  public void setDisjointWith(final List<DisjointWith> disjointWith) {
    this.disjointWith = disjointWith;
  }

  /**
   * Returns the maps.
   *
   * @return the maps
   */
  public List<Map> getMaps() {
    if (maps == null) {
      maps = new ArrayList<>();
    }
    return maps;
  }

  /**
   * Sets the maps.
   *
   * @param maps the maps
   */
  public void setMaps(final List<Map> maps) {
    this.maps = maps;
  }

}

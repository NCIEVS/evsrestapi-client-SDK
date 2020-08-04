
package gov.nih.nci.evs.api.model;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;


/**
 * Represents a terminology loaded into the EVSAPI.
 * 
 * <pre>
 *   {
 *    "terminology": "ncit",
 *    "version": "2019_11f",
 *    "name": "NCI Thesaurus 2019_11f",
 *    "terminologyVersion": "ncit_2019_11f",
 *    "latest": true,
 *    "tags": { "monthly": "true" }
 *  }
 * </pre>
 */
public class Terminology extends BaseModel {

  /** The terminology. */
  private String terminology;

  /** The version. */
  private String version;

  /** The date. */
  private String date;
  
  /** The name. */
  private String name;

  /** The description. */
  private String description;

  /** The graph. */
  private String graph;
  
  /** The graph source. */
  private String source;

  /** The terminology version. */
  private String terminologyVersion;

  /** The latest. */
  private Boolean latest;

  /** The tags. */
  private Map<String, String> tags;

  /** The index name for concepts. */
  private String indexName;

  /** The index name for generic objects. */
  private String objectIndexName;
  
  /**
   * Instantiates an empty {@link Terminology}.
   */
  public Terminology() {
    // n/a
    this.terminology = "ncit";
  }

  /**
   * Instantiates a {@link Terminology} from the specified parameters.
   *
   * @param other the other
   */
  public Terminology(final Terminology other) {
    populateFrom(other);
  }

  /**
   * Populate from.
   *
   * @param other the other
   */
  public void populateFrom(final Terminology other) {
    terminology = other.getTerminology();
    version = other.getVersion();
    date = other.getDate();
    name = other.getName();
    description = other.getDescription();
    graph = other.getGraph();
    source = other.getSource();
    terminologyVersion = other.getTerminologyVersion();
    latest = other.getLatest();
    tags = new HashMap<>(other.getTags());
    indexName = other.getIndexName();
    objectIndexName = other.getObjectIndexName();
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
   * Returns the version.
   *
   * @return the version
   */
  public String getVersion() {
    return version;
  }

  /**
   * Sets the version.
   *
   * @param version the version
   */
  public void setVersion(final String version) {
    this.version = version;
  }

  /**
   * Returns the date.
   *
   * @return the date
   */
  public String getDate() {
    return date;
  }

  /**
   * Sets the date.
   *
   * @param date the date
   */
  public void setDate(String date) {
    this.date = date;
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
   * Returns the description.
   *
   * @return the description
   */
  public String getDescription() {
    return description;
  }

  /**
   * Sets the description.
   *
   * @param description the description
   */
  public void setDescription(final String description) {
    this.description = description;
  }

  /**
   * Returns the graph.
   *
   * @return the graph
   */
  public String getGraph() {
    return graph;
  }

  /**
   * Sets the graph.
   *
   * @param graph the graph
   */
  public void setGraph(final String graph) {
    this.graph = graph;
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
   * Returns the terminology version.
   *
   * @return the terminology version
   */
  public String getTerminologyVersion() {
    if (StringUtils.isEmpty(terminologyVersion)) {
      terminologyVersion = terminology + "_" + version;
    }
    return terminologyVersion;
  }

  /**
   * Sets the terminology version.
   *
   * @param terminologyVersion the terminology version
   */
  public void setTerminologyVersion(final String terminologyVersion) {
    this.terminologyVersion = terminologyVersion;
  }

  /**
   * Returns the latest.
   *
   * @return the latest
   */
  public Boolean getLatest() {
    return latest;
  }

  /**
   * Sets the latest.
   *
   * @param latest the latest
   */
  public void setLatest(final Boolean latest) {
    this.latest = latest;
  }

  /**
   * Returns the tags.
   *
   * @return the tags
   */
  public Map<String, String> getTags() {
    if (tags == null) {
      tags = new HashMap<>();
    }
    return tags;
  }

  /**
   * Sets the tags.
   *
   * @param tags the tags
   */
  public void setTags(final Map<String, String> tags) {
    this.tags = tags;
  }

  /**
   * Returns the index name for concepts belonging to this terminology.
   * 
   * @return the index name
   */
  public String getIndexName() {
    if (StringUtils.isEmpty(indexName)) {
      indexName = "concept_" + getTerminologyVersion().replaceAll("[^a-zA-Z0-9_]", "");
    }
    return indexName;
  }

  /**
   * Sets the index name for concepts belonging to this terminology.
   * 
   * @param indexName the index name
   */
  public void setIndexName(String indexName) {
    this.indexName = indexName;
  }

 /**
  * Returns the index name for objects.
  * 
  * @return the object index name
  */
 public String getObjectIndexName() {
   if (StringUtils.isEmpty(objectIndexName)) {
     objectIndexName = "evs_object_" + getTerminologyVersion().replaceAll("[^a-zA-Z0-9_]", "");
   }
   return objectIndexName;
 }

 /**
  * Sets the index name for objects.
  * 
  * @param objectIndexName the object index name
  */
 public void setObjectIndexName(String objectIndexName) {
   this.objectIndexName = objectIndexName;
 }
  
  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result =
        prime * result + ((description == null) ? 0 : description.hashCode());
    result = prime * result + ((graph == null) ? 0 : graph.hashCode());
    result = prime * result + ((source == null) ? 0 : source.hashCode());
    result = prime * result + ((latest == null) ? 0 : latest.hashCode());
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    result =
        prime * result + ((terminology == null) ? 0 : terminology.hashCode());
    result = prime * result
        + ((terminologyVersion == null) ? 0 : terminologyVersion.hashCode());
    result = prime * result + ((version == null) ? 0 : version.hashCode());
    result = prime * result + ((date == null) ? 0 : date.hashCode());
    result = prime * result + ((indexName == null) ? 0 : indexName.hashCode());
    result = prime * result + ((objectIndexName == null) ? 0 : objectIndexName.hashCode());
    return result;
  }

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
    final Terminology other = (Terminology) obj;
    if (description == null) {
      if (other.description != null) {
        return false;
      }
    } else if (!description.equals(other.description)) {
      return false;
    }
    if (graph == null) {
      if (other.graph != null) {
        return false;
      }
    } else if (!graph.equals(other.graph)) {
      return false;
    }
    if (source == null) {
      if (other.source != null) {
        return false;
      }
    } else if (!source.equals(other.source)) {
      return false;
    }
    if (latest == null) {
      if (other.latest != null) {
        return false;
      }
    } else if (!latest.equals(other.latest)) {
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
    if (terminologyVersion == null) {
      if (other.terminologyVersion != null) {
        return false;
      }
    } else if (!terminologyVersion.equals(other.terminologyVersion)) {
      return false;
    }
    if (version == null) {
      if (other.version != null) {
        return false;
      }
    } else if (!version.equals(other.version)) {
      return false;
    }
    if (date == null) {
      if (other.date != null) {
        return false;
      }
    } else if (!date.equals(other.date)) {
      return false;
    }
    if (indexName == null) {
      if (other.indexName != null) {
        return false;
      }
    } else if (!indexName.equals(other.indexName)) {
      return false;
    }
    if (objectIndexName == null) {
      if (other.objectIndexName != null) {
        return false;
      }
    } else if (!objectIndexName.equals(other.objectIndexName)) {
      return false;
    }
    return true;
  }
  
}

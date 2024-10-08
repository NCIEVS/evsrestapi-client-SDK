/*
 * NCI EVS Rest API
 * Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>
 *
 * The version of the OpenAPI document: 1.7.2.RELEASE
 * Contact: NCIAppSupport@nih.gov
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package gov.nih.nci.evs.api.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import gov.nih.nci.evs.api.model.TerminologyMetadata;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import gov.nih.nci.evs.api.invoker.JSON;

/**
 * Represents a terminology loaded into the API
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-17T17:06:13.350753-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class Terminology {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_TERMINOLOGY = "terminology";
  @SerializedName(SERIALIZED_NAME_TERMINOLOGY)
  private String terminology;

  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_DATE = "date";
  @SerializedName(SERIALIZED_NAME_DATE)
  private String date;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_GRAPH = "graph";
  @SerializedName(SERIALIZED_NAME_GRAPH)
  private String graph;

  public static final String SERIALIZED_NAME_TERMINOLOGY_VERSION = "terminologyVersion";
  @SerializedName(SERIALIZED_NAME_TERMINOLOGY_VERSION)
  private String terminologyVersion;

  public static final String SERIALIZED_NAME_LATEST = "latest";
  @SerializedName(SERIALIZED_NAME_LATEST)
  private Boolean latest;

  public static final String SERIALIZED_NAME_TAGS = "tags";
  @SerializedName(SERIALIZED_NAME_TAGS)
  private Map<String, String> tags = new HashMap<>();

  public static final String SERIALIZED_NAME_INDEX_NAME = "indexName";
  @SerializedName(SERIALIZED_NAME_INDEX_NAME)
  private String indexName;

  public static final String SERIALIZED_NAME_OBJECT_INDEX_NAME = "objectIndexName";
  @SerializedName(SERIALIZED_NAME_OBJECT_INDEX_NAME)
  private String objectIndexName;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private TerminologyMetadata metadata;

  public static final String SERIALIZED_NAME_SPARQL_FLAG = "sparqlFlag";
  @SerializedName(SERIALIZED_NAME_SPARQL_FLAG)
  private Boolean sparqlFlag;

  public Terminology() {
  }

  public Terminology uri(String uri) {
    this.uri = uri;
    return this;
  }

   /**
   * URI for this element in an rdf-based source file
   * @return uri
  **/
  @javax.annotation.Nullable
  public String getUri() {
    return uri;
  }

  public void setUri(String uri) {
    this.uri = uri;
  }


  public Terminology ct(Integer ct) {
    this.ct = ct;
    return this;
  }

   /**
   * Used to indicate the total amount of data in cases where a limit is being applied
   * @return ct
  **/
  @javax.annotation.Nullable
  public Integer getCt() {
    return ct;
  }

  public void setCt(Integer ct) {
    this.ct = ct;
  }


  public Terminology terminology(String terminology) {
    this.terminology = terminology;
    return this;
  }

   /**
   * Terminology abbreviation, e.g. &#39;ncit&#39;
   * @return terminology
  **/
  @javax.annotation.Nullable
  public String getTerminology() {
    return terminology;
  }

  public void setTerminology(String terminology) {
    this.terminology = terminology;
  }


  public Terminology version(String version) {
    this.version = version;
    return this;
  }

   /**
   * Terminology version, e.g. &#39;23.11d&#39;
   * @return version
  **/
  @javax.annotation.Nullable
  public String getVersion() {
    return version;
  }

  public void setVersion(String version) {
    this.version = version;
  }


  public Terminology date(String date) {
    this.date = date;
    return this;
  }

   /**
   * Terminology publication/release date
   * @return date
  **/
  @javax.annotation.Nullable
  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }


  public Terminology name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Terminology name
   * @return name
  **/
  @javax.annotation.Nullable
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public Terminology description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Terminology description
   * @return description
  **/
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  public Terminology graph(String graph) {
    this.graph = graph;
    return this;
  }

   /**
   * Name of the RDF triplestore graph if this data is backed by a triplestore
   * @return graph
  **/
  @javax.annotation.Nullable
  public String getGraph() {
    return graph;
  }

  public void setGraph(String graph) {
    this.graph = graph;
  }


  public Terminology terminologyVersion(String terminologyVersion) {
    this.terminologyVersion = terminologyVersion;
    return this;
  }

   /**
   * Underscore-separated value for terminology and version used by the API to precisely pinpoint a particular version, e.g. &#39;ncit_23.11d&#39;
   * @return terminologyVersion
  **/
  @javax.annotation.Nullable
  public String getTerminologyVersion() {
    return terminologyVersion;
  }

  public void setTerminologyVersion(String terminologyVersion) {
    this.terminologyVersion = terminologyVersion;
  }


  public Terminology latest(Boolean latest) {
    this.latest = latest;
    return this;
  }

   /**
   * Indicates whether this is the latest version
   * @return latest
  **/
  @javax.annotation.Nullable
  public Boolean getLatest() {
    return latest;
  }

  public void setLatest(Boolean latest) {
    this.latest = latest;
  }


  public Terminology tags(Map<String, String> tags) {
    this.tags = tags;
    return this;
  }

  public Terminology putTagsItem(String key, String tagsItem) {
    if (this.tags == null) {
      this.tags = new HashMap<>();
    }
    this.tags.put(key, tagsItem);
    return this;
  }

   /**
   * Additional terminology tags
   * @return tags
  **/
  @javax.annotation.Nullable
  public Map<String, String> getTags() {
    return tags;
  }

  public void setTags(Map<String, String> tags) {
    this.tags = tags;
  }


  public Terminology indexName(String indexName) {
    this.indexName = indexName;
    return this;
  }

   /**
   * for internal use
   * @return indexName
  **/
  @javax.annotation.Nullable
  public String getIndexName() {
    return indexName;
  }

  public void setIndexName(String indexName) {
    this.indexName = indexName;
  }


  public Terminology objectIndexName(String objectIndexName) {
    this.objectIndexName = objectIndexName;
    return this;
  }

   /**
   * for internal use
   * @return objectIndexName
  **/
  @javax.annotation.Nullable
  public String getObjectIndexName() {
    return objectIndexName;
  }

  public void setObjectIndexName(String objectIndexName) {
    this.objectIndexName = objectIndexName;
  }


  public Terminology metadata(TerminologyMetadata metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  public TerminologyMetadata getMetadata() {
    return metadata;
  }

  public void setMetadata(TerminologyMetadata metadata) {
    this.metadata = metadata;
  }


  public Terminology sparqlFlag(Boolean sparqlFlag) {
    this.sparqlFlag = sparqlFlag;
    return this;
  }

   /**
   * Indicates whether the terminology can be used with SPARQL
   * @return sparqlFlag
  **/
  @javax.annotation.Nullable
  public Boolean getSparqlFlag() {
    return sparqlFlag;
  }

  public void setSparqlFlag(Boolean sparqlFlag) {
    this.sparqlFlag = sparqlFlag;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Terminology terminology = (Terminology) o;
    return Objects.equals(this.uri, terminology.uri) &&
        Objects.equals(this.ct, terminology.ct) &&
        Objects.equals(this.terminology, terminology.terminology) &&
        Objects.equals(this.version, terminology.version) &&
        Objects.equals(this.date, terminology.date) &&
        Objects.equals(this.name, terminology.name) &&
        Objects.equals(this.description, terminology.description) &&
        Objects.equals(this.graph, terminology.graph) &&
        Objects.equals(this.terminologyVersion, terminology.terminologyVersion) &&
        Objects.equals(this.latest, terminology.latest) &&
        Objects.equals(this.tags, terminology.tags) &&
        Objects.equals(this.indexName, terminology.indexName) &&
        Objects.equals(this.objectIndexName, terminology.objectIndexName) &&
        Objects.equals(this.metadata, terminology.metadata) &&
        Objects.equals(this.sparqlFlag, terminology.sparqlFlag);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, terminology, version, date, name, description, graph, terminologyVersion, latest, tags, indexName, objectIndexName, metadata, sparqlFlag);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Terminology {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    terminology: ").append(toIndentedString(terminology)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    graph: ").append(toIndentedString(graph)).append("\n");
    sb.append("    terminologyVersion: ").append(toIndentedString(terminologyVersion)).append("\n");
    sb.append("    latest: ").append(toIndentedString(latest)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    indexName: ").append(toIndentedString(indexName)).append("\n");
    sb.append("    objectIndexName: ").append(toIndentedString(objectIndexName)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    sparqlFlag: ").append(toIndentedString(sparqlFlag)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("uri");
    openapiFields.add("ct");
    openapiFields.add("terminology");
    openapiFields.add("version");
    openapiFields.add("date");
    openapiFields.add("name");
    openapiFields.add("description");
    openapiFields.add("graph");
    openapiFields.add("terminologyVersion");
    openapiFields.add("latest");
    openapiFields.add("tags");
    openapiFields.add("indexName");
    openapiFields.add("objectIndexName");
    openapiFields.add("metadata");
    openapiFields.add("sparqlFlag");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to Terminology
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!Terminology.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Terminology is not found in the empty JSON string", Terminology.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!Terminology.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Terminology` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("terminology") != null && !jsonObj.get("terminology").isJsonNull()) && !jsonObj.get("terminology").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `terminology` to be a primitive type in the JSON string but got `%s`", jsonObj.get("terminology").toString()));
      }
      if ((jsonObj.get("version") != null && !jsonObj.get("version").isJsonNull()) && !jsonObj.get("version").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `version` to be a primitive type in the JSON string but got `%s`", jsonObj.get("version").toString()));
      }
      if ((jsonObj.get("date") != null && !jsonObj.get("date").isJsonNull()) && !jsonObj.get("date").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `date` to be a primitive type in the JSON string but got `%s`", jsonObj.get("date").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if ((jsonObj.get("graph") != null && !jsonObj.get("graph").isJsonNull()) && !jsonObj.get("graph").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `graph` to be a primitive type in the JSON string but got `%s`", jsonObj.get("graph").toString()));
      }
      if ((jsonObj.get("terminologyVersion") != null && !jsonObj.get("terminologyVersion").isJsonNull()) && !jsonObj.get("terminologyVersion").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `terminologyVersion` to be a primitive type in the JSON string but got `%s`", jsonObj.get("terminologyVersion").toString()));
      }
      if ((jsonObj.get("indexName") != null && !jsonObj.get("indexName").isJsonNull()) && !jsonObj.get("indexName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `indexName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("indexName").toString()));
      }
      if ((jsonObj.get("objectIndexName") != null && !jsonObj.get("objectIndexName").isJsonNull()) && !jsonObj.get("objectIndexName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `objectIndexName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("objectIndexName").toString()));
      }
      // validate the optional field `metadata`
      if (jsonObj.get("metadata") != null && !jsonObj.get("metadata").isJsonNull()) {
        TerminologyMetadata.validateJsonElement(jsonObj.get("metadata"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Terminology.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Terminology' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Terminology> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Terminology.class));

       return (TypeAdapter<T>) new TypeAdapter<Terminology>() {
           @Override
           public void write(JsonWriter out, Terminology value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Terminology read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Terminology given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Terminology
  * @throws IOException if the JSON string is invalid with respect to Terminology
  */
  public static Terminology fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Terminology.class);
  }

 /**
  * Convert an instance of Terminology to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


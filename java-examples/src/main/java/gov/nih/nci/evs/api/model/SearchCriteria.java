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
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
import java.util.Map.Entry;
import java.util.Set;

import gov.nih.nci.evs.api.invoker.JSON;

/**
 * SearchCriteria
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-15T16:28:28.893302-08:00[America/Los_Angeles]")
public class SearchCriteria {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_TERM = "term";
  @SerializedName(SERIALIZED_NAME_TERM)
  private String term;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_INCLUDE = "include";
  @SerializedName(SERIALIZED_NAME_INCLUDE)
  private String include;

  public static final String SERIALIZED_NAME_SORT = "sort";
  @SerializedName(SERIALIZED_NAME_SORT)
  private String sort;

  public static final String SERIALIZED_NAME_ASCENDING = "ascending";
  @SerializedName(SERIALIZED_NAME_ASCENDING)
  private Boolean ascending;

  public static final String SERIALIZED_NAME_FROM_RECORD = "fromRecord";
  @SerializedName(SERIALIZED_NAME_FROM_RECORD)
  private Integer fromRecord;

  public static final String SERIALIZED_NAME_PAGE_SIZE = "pageSize";
  @SerializedName(SERIALIZED_NAME_PAGE_SIZE)
  private Integer pageSize;

  public static final String SERIALIZED_NAME_CONCEPT_STATUS = "conceptStatus";
  @SerializedName(SERIALIZED_NAME_CONCEPT_STATUS)
  private List<String> conceptStatus;

  public static final String SERIALIZED_NAME_PROPERTY = "property";
  @SerializedName(SERIALIZED_NAME_PROPERTY)
  private List<String> property;

  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private String value;

  public static final String SERIALIZED_NAME_SYNONYM_SOURCE = "synonymSource";
  @SerializedName(SERIALIZED_NAME_SYNONYM_SOURCE)
  private List<String> synonymSource;

  public static final String SERIALIZED_NAME_SYNONYM_TYPE = "synonymType";
  @SerializedName(SERIALIZED_NAME_SYNONYM_TYPE)
  private List<String> synonymType;

  public static final String SERIALIZED_NAME_DEFINITION_SOURCE = "definitionSource";
  @SerializedName(SERIALIZED_NAME_DEFINITION_SOURCE)
  private List<String> definitionSource;

  public static final String SERIALIZED_NAME_DEFINITION_TYPE = "definitionType";
  @SerializedName(SERIALIZED_NAME_DEFINITION_TYPE)
  private List<String> definitionType;

  public static final String SERIALIZED_NAME_SYNONYM_TERM_TYPE = "synonymTermType";
  @SerializedName(SERIALIZED_NAME_SYNONYM_TERM_TYPE)
  private List<String> synonymTermType;

  public static final String SERIALIZED_NAME_SUBSET = "subset";
  @SerializedName(SERIALIZED_NAME_SUBSET)
  private List<String> subset;

  public static final String SERIALIZED_NAME_TERMINOLOGY = "terminology";
  @SerializedName(SERIALIZED_NAME_TERMINOLOGY)
  private List<String> terminology;

  public SearchCriteria() {
  }

  public SearchCriteria uri(String uri) {
    
    this.uri = uri;
    return this;
  }

   /**
   * Get uri
   * @return uri
  **/
  @javax.annotation.Nullable
  public String getUri() {
    return uri;
  }


  public void setUri(String uri) {
    this.uri = uri;
  }


  public SearchCriteria ct(Integer ct) {
    
    this.ct = ct;
    return this;
  }

   /**
   * Get ct
   * @return ct
  **/
  @javax.annotation.Nullable
  public Integer getCt() {
    return ct;
  }


  public void setCt(Integer ct) {
    this.ct = ct;
  }


  public SearchCriteria term(String term) {
    
    this.term = term;
    return this;
  }

   /**
   * Get term
   * @return term
  **/
  @javax.annotation.Nullable
  public String getTerm() {
    return term;
  }


  public void setTerm(String term) {
    this.term = term;
  }


  public SearchCriteria type(String type) {
    
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable
  public String getType() {
    return type;
  }


  public void setType(String type) {
    this.type = type;
  }


  public SearchCriteria include(String include) {
    
    this.include = include;
    return this;
  }

   /**
   * Get include
   * @return include
  **/
  @javax.annotation.Nullable
  public String getInclude() {
    return include;
  }


  public void setInclude(String include) {
    this.include = include;
  }


  public SearchCriteria sort(String sort) {
    
    this.sort = sort;
    return this;
  }

   /**
   * Get sort
   * @return sort
  **/
  @javax.annotation.Nullable
  public String getSort() {
    return sort;
  }


  public void setSort(String sort) {
    this.sort = sort;
  }


  public SearchCriteria ascending(Boolean ascending) {
    
    this.ascending = ascending;
    return this;
  }

   /**
   * Get ascending
   * @return ascending
  **/
  @javax.annotation.Nullable
  public Boolean getAscending() {
    return ascending;
  }


  public void setAscending(Boolean ascending) {
    this.ascending = ascending;
  }


  public SearchCriteria fromRecord(Integer fromRecord) {
    
    this.fromRecord = fromRecord;
    return this;
  }

   /**
   * Get fromRecord
   * @return fromRecord
  **/
  @javax.annotation.Nullable
  public Integer getFromRecord() {
    return fromRecord;
  }


  public void setFromRecord(Integer fromRecord) {
    this.fromRecord = fromRecord;
  }


  public SearchCriteria pageSize(Integer pageSize) {
    
    this.pageSize = pageSize;
    return this;
  }

   /**
   * Get pageSize
   * @return pageSize
  **/
  @javax.annotation.Nullable
  public Integer getPageSize() {
    return pageSize;
  }


  public void setPageSize(Integer pageSize) {
    this.pageSize = pageSize;
  }


  public SearchCriteria conceptStatus(List<String> conceptStatus) {
    
    this.conceptStatus = conceptStatus;
    return this;
  }

  public SearchCriteria addConceptStatusItem(String conceptStatusItem) {
    if (this.conceptStatus == null) {
      this.conceptStatus = new ArrayList<>();
    }
    this.conceptStatus.add(conceptStatusItem);
    return this;
  }

   /**
   * Get conceptStatus
   * @return conceptStatus
  **/
  @javax.annotation.Nullable
  public List<String> getConceptStatus() {
    return conceptStatus;
  }


  public void setConceptStatus(List<String> conceptStatus) {
    this.conceptStatus = conceptStatus;
  }


  public SearchCriteria property(List<String> property) {
    
    this.property = property;
    return this;
  }

  public SearchCriteria addPropertyItem(String propertyItem) {
    if (this.property == null) {
      this.property = new ArrayList<>();
    }
    this.property.add(propertyItem);
    return this;
  }

   /**
   * Get property
   * @return property
  **/
  @javax.annotation.Nullable
  public List<String> getProperty() {
    return property;
  }


  public void setProperty(List<String> property) {
    this.property = property;
  }


  public SearchCriteria value(String value) {
    
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable
  public String getValue() {
    return value;
  }


  public void setValue(String value) {
    this.value = value;
  }


  public SearchCriteria synonymSource(List<String> synonymSource) {
    
    this.synonymSource = synonymSource;
    return this;
  }

  public SearchCriteria addSynonymSourceItem(String synonymSourceItem) {
    if (this.synonymSource == null) {
      this.synonymSource = new ArrayList<>();
    }
    this.synonymSource.add(synonymSourceItem);
    return this;
  }

   /**
   * Get synonymSource
   * @return synonymSource
  **/
  @javax.annotation.Nullable
  public List<String> getSynonymSource() {
    return synonymSource;
  }


  public void setSynonymSource(List<String> synonymSource) {
    this.synonymSource = synonymSource;
  }


  public SearchCriteria synonymType(List<String> synonymType) {
    
    this.synonymType = synonymType;
    return this;
  }

  public SearchCriteria addSynonymTypeItem(String synonymTypeItem) {
    if (this.synonymType == null) {
      this.synonymType = new ArrayList<>();
    }
    this.synonymType.add(synonymTypeItem);
    return this;
  }

   /**
   * Get synonymType
   * @return synonymType
  **/
  @javax.annotation.Nullable
  public List<String> getSynonymType() {
    return synonymType;
  }


  public void setSynonymType(List<String> synonymType) {
    this.synonymType = synonymType;
  }


  public SearchCriteria definitionSource(List<String> definitionSource) {
    
    this.definitionSource = definitionSource;
    return this;
  }

  public SearchCriteria addDefinitionSourceItem(String definitionSourceItem) {
    if (this.definitionSource == null) {
      this.definitionSource = new ArrayList<>();
    }
    this.definitionSource.add(definitionSourceItem);
    return this;
  }

   /**
   * Get definitionSource
   * @return definitionSource
  **/
  @javax.annotation.Nullable
  public List<String> getDefinitionSource() {
    return definitionSource;
  }


  public void setDefinitionSource(List<String> definitionSource) {
    this.definitionSource = definitionSource;
  }


  public SearchCriteria definitionType(List<String> definitionType) {
    
    this.definitionType = definitionType;
    return this;
  }

  public SearchCriteria addDefinitionTypeItem(String definitionTypeItem) {
    if (this.definitionType == null) {
      this.definitionType = new ArrayList<>();
    }
    this.definitionType.add(definitionTypeItem);
    return this;
  }

   /**
   * Get definitionType
   * @return definitionType
  **/
  @javax.annotation.Nullable
  public List<String> getDefinitionType() {
    return definitionType;
  }


  public void setDefinitionType(List<String> definitionType) {
    this.definitionType = definitionType;
  }


  public SearchCriteria synonymTermType(List<String> synonymTermType) {
    
    this.synonymTermType = synonymTermType;
    return this;
  }

  public SearchCriteria addSynonymTermTypeItem(String synonymTermTypeItem) {
    if (this.synonymTermType == null) {
      this.synonymTermType = new ArrayList<>();
    }
    this.synonymTermType.add(synonymTermTypeItem);
    return this;
  }

   /**
   * Get synonymTermType
   * @return synonymTermType
  **/
  @javax.annotation.Nullable
  public List<String> getSynonymTermType() {
    return synonymTermType;
  }


  public void setSynonymTermType(List<String> synonymTermType) {
    this.synonymTermType = synonymTermType;
  }


  public SearchCriteria subset(List<String> subset) {
    
    this.subset = subset;
    return this;
  }

  public SearchCriteria addSubsetItem(String subsetItem) {
    if (this.subset == null) {
      this.subset = new ArrayList<>();
    }
    this.subset.add(subsetItem);
    return this;
  }

   /**
   * Get subset
   * @return subset
  **/
  @javax.annotation.Nullable
  public List<String> getSubset() {
    return subset;
  }


  public void setSubset(List<String> subset) {
    this.subset = subset;
  }


  public SearchCriteria terminology(List<String> terminology) {
    
    this.terminology = terminology;
    return this;
  }

  public SearchCriteria addTerminologyItem(String terminologyItem) {
    if (this.terminology == null) {
      this.terminology = new ArrayList<>();
    }
    this.terminology.add(terminologyItem);
    return this;
  }

   /**
   * Get terminology
   * @return terminology
  **/
  @javax.annotation.Nullable
  public List<String> getTerminology() {
    return terminology;
  }


  public void setTerminology(List<String> terminology) {
    this.terminology = terminology;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SearchCriteria searchCriteria = (SearchCriteria) o;
    return Objects.equals(this.uri, searchCriteria.uri) &&
        Objects.equals(this.ct, searchCriteria.ct) &&
        Objects.equals(this.term, searchCriteria.term) &&
        Objects.equals(this.type, searchCriteria.type) &&
        Objects.equals(this.include, searchCriteria.include) &&
        Objects.equals(this.sort, searchCriteria.sort) &&
        Objects.equals(this.ascending, searchCriteria.ascending) &&
        Objects.equals(this.fromRecord, searchCriteria.fromRecord) &&
        Objects.equals(this.pageSize, searchCriteria.pageSize) &&
        Objects.equals(this.conceptStatus, searchCriteria.conceptStatus) &&
        Objects.equals(this.property, searchCriteria.property) &&
        Objects.equals(this.value, searchCriteria.value) &&
        Objects.equals(this.synonymSource, searchCriteria.synonymSource) &&
        Objects.equals(this.synonymType, searchCriteria.synonymType) &&
        Objects.equals(this.definitionSource, searchCriteria.definitionSource) &&
        Objects.equals(this.definitionType, searchCriteria.definitionType) &&
        Objects.equals(this.synonymTermType, searchCriteria.synonymTermType) &&
        Objects.equals(this.subset, searchCriteria.subset) &&
        Objects.equals(this.terminology, searchCriteria.terminology);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, term, type, include, sort, ascending, fromRecord, pageSize, conceptStatus, property, value, synonymSource, synonymType, definitionSource, definitionType, synonymTermType, subset, terminology);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SearchCriteria {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    term: ").append(toIndentedString(term)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    include: ").append(toIndentedString(include)).append("\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
    sb.append("    ascending: ").append(toIndentedString(ascending)).append("\n");
    sb.append("    fromRecord: ").append(toIndentedString(fromRecord)).append("\n");
    sb.append("    pageSize: ").append(toIndentedString(pageSize)).append("\n");
    sb.append("    conceptStatus: ").append(toIndentedString(conceptStatus)).append("\n");
    sb.append("    property: ").append(toIndentedString(property)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    synonymSource: ").append(toIndentedString(synonymSource)).append("\n");
    sb.append("    synonymType: ").append(toIndentedString(synonymType)).append("\n");
    sb.append("    definitionSource: ").append(toIndentedString(definitionSource)).append("\n");
    sb.append("    definitionType: ").append(toIndentedString(definitionType)).append("\n");
    sb.append("    synonymTermType: ").append(toIndentedString(synonymTermType)).append("\n");
    sb.append("    subset: ").append(toIndentedString(subset)).append("\n");
    sb.append("    terminology: ").append(toIndentedString(terminology)).append("\n");
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
    openapiFields.add("term");
    openapiFields.add("type");
    openapiFields.add("include");
    openapiFields.add("sort");
    openapiFields.add("ascending");
    openapiFields.add("fromRecord");
    openapiFields.add("pageSize");
    openapiFields.add("conceptStatus");
    openapiFields.add("property");
    openapiFields.add("value");
    openapiFields.add("synonymSource");
    openapiFields.add("synonymType");
    openapiFields.add("definitionSource");
    openapiFields.add("definitionType");
    openapiFields.add("synonymTermType");
    openapiFields.add("subset");
    openapiFields.add("terminology");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to SearchCriteria
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!SearchCriteria.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in SearchCriteria is not found in the empty JSON string", SearchCriteria.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!SearchCriteria.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `SearchCriteria` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("term") != null && !jsonObj.get("term").isJsonNull()) && !jsonObj.get("term").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `term` to be a primitive type in the JSON string but got `%s`", jsonObj.get("term").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("include") != null && !jsonObj.get("include").isJsonNull()) && !jsonObj.get("include").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `include` to be a primitive type in the JSON string but got `%s`", jsonObj.get("include").toString()));
      }
      if ((jsonObj.get("sort") != null && !jsonObj.get("sort").isJsonNull()) && !jsonObj.get("sort").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sort` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sort").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("conceptStatus") != null && !jsonObj.get("conceptStatus").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `conceptStatus` to be an array in the JSON string but got `%s`", jsonObj.get("conceptStatus").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("property") != null && !jsonObj.get("property").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `property` to be an array in the JSON string but got `%s`", jsonObj.get("property").toString()));
      }
      if ((jsonObj.get("value") != null && !jsonObj.get("value").isJsonNull()) && !jsonObj.get("value").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `value` to be a primitive type in the JSON string but got `%s`", jsonObj.get("value").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("synonymSource") != null && !jsonObj.get("synonymSource").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `synonymSource` to be an array in the JSON string but got `%s`", jsonObj.get("synonymSource").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("synonymType") != null && !jsonObj.get("synonymType").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `synonymType` to be an array in the JSON string but got `%s`", jsonObj.get("synonymType").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("definitionSource") != null && !jsonObj.get("definitionSource").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `definitionSource` to be an array in the JSON string but got `%s`", jsonObj.get("definitionSource").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("definitionType") != null && !jsonObj.get("definitionType").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `definitionType` to be an array in the JSON string but got `%s`", jsonObj.get("definitionType").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("synonymTermType") != null && !jsonObj.get("synonymTermType").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `synonymTermType` to be an array in the JSON string but got `%s`", jsonObj.get("synonymTermType").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("subset") != null && !jsonObj.get("subset").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `subset` to be an array in the JSON string but got `%s`", jsonObj.get("subset").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("terminology") != null && !jsonObj.get("terminology").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `terminology` to be an array in the JSON string but got `%s`", jsonObj.get("terminology").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!SearchCriteria.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'SearchCriteria' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<SearchCriteria> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(SearchCriteria.class));

       return (TypeAdapter<T>) new TypeAdapter<SearchCriteria>() {
           @Override
           public void write(JsonWriter out, SearchCriteria value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public SearchCriteria read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of SearchCriteria given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of SearchCriteria
  * @throws IOException if the JSON string is invalid with respect to SearchCriteria
  */
  public static SearchCriteria fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, SearchCriteria.class);
  }

 /**
  * Convert an instance of SearchCriteria to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


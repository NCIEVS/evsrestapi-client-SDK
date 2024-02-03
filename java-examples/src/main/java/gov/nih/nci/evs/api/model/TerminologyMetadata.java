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
import java.util.HashMap;
import java.util.List;
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
import java.util.Map.Entry;
import java.util.Set;

import gov.nih.nci.evs.api.invoker.JSON;

/**
 * Represents additional terminology metadata
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-12-05T10:35:17.750633-08:00[America/Los_Angeles]")
public class TerminologyMetadata {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_UI_LABEL = "uiLabel";
  @SerializedName(SERIALIZED_NAME_UI_LABEL)
  private String uiLabel;

  public static final String SERIALIZED_NAME_MAX_VERSIONS = "maxVersions";
  @SerializedName(SERIALIZED_NAME_MAX_VERSIONS)
  private Integer maxVersions;

  public static final String SERIALIZED_NAME_LOADER = "loader";
  @SerializedName(SERIALIZED_NAME_LOADER)
  private String loader;

  public static final String SERIALIZED_NAME_CONCEPT_STATUSES = "conceptStatuses";
  @SerializedName(SERIALIZED_NAME_CONCEPT_STATUSES)
  private List<String> conceptStatuses;

  public static final String SERIALIZED_NAME_RETIRED_STATUS_VALUE = "retiredStatusValue";
  @SerializedName(SERIALIZED_NAME_RETIRED_STATUS_VALUE)
  private String retiredStatusValue;

  public static final String SERIALIZED_NAME_DETAILS_COLUMNS = "detailsColumns";
  @SerializedName(SERIALIZED_NAME_DETAILS_COLUMNS)
  private Map<String, Boolean> detailsColumns = new HashMap<>();

  public static final String SERIALIZED_NAME_HIERARCHY = "hierarchy";
  @SerializedName(SERIALIZED_NAME_HIERARCHY)
  private Boolean hierarchy;

  public static final String SERIALIZED_NAME_HISTORY = "history";
  @SerializedName(SERIALIZED_NAME_HISTORY)
  private Boolean history;

  public static final String SERIALIZED_NAME_SOURCE_CT = "sourceCt";
  @SerializedName(SERIALIZED_NAME_SOURCE_CT)
  private Integer sourceCt;

  public static final String SERIALIZED_NAME_SUBSET_LINK = "subsetLink";
  @SerializedName(SERIALIZED_NAME_SUBSET_LINK)
  private String subsetLink;

  public static final String SERIALIZED_NAME_LICENSE_TEXT = "licenseText";
  @SerializedName(SERIALIZED_NAME_LICENSE_TEXT)
  private String licenseText;

  public static final String SERIALIZED_NAME_META_CONCEPT_FIELD = "metaConceptField";
  @SerializedName(SERIALIZED_NAME_META_CONCEPT_FIELD)
  private String metaConceptField;

  public static final String SERIALIZED_NAME_CODE_LABEL = "codeLabel";
  @SerializedName(SERIALIZED_NAME_CODE_LABEL)
  private String codeLabel;

  public static final String SERIALIZED_NAME_WELCOME_TEXT = "welcomeText";
  @SerializedName(SERIALIZED_NAME_WELCOME_TEXT)
  private String welcomeText;

  public static final String SERIALIZED_NAME_SYNONYM_TERM_GROUP = "synonymTermGroup";
  @SerializedName(SERIALIZED_NAME_SYNONYM_TERM_GROUP)
  private String synonymTermGroup;

  public static final String SERIALIZED_NAME_TERM_GROUPS = "termGroups";
  @SerializedName(SERIALIZED_NAME_TERM_GROUPS)
  private Map<String, String> termGroups = new HashMap<>();

  public static final String SERIALIZED_NAME_PREFERRED_TERM_GROUPS = "preferredTermGroups";
  @SerializedName(SERIALIZED_NAME_PREFERRED_TERM_GROUPS)
  private List<String> preferredTermGroups;

  public TerminologyMetadata() {
  }

  public TerminologyMetadata uri(String uri) {
    
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


  public TerminologyMetadata ct(Integer ct) {
    
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


  public TerminologyMetadata uiLabel(String uiLabel) {
    
    this.uiLabel = uiLabel;
    return this;
  }

   /**
   * Human-readable name for the terminology to use in a UI label
   * @return uiLabel
  **/
  @javax.annotation.Nullable
  public String getUiLabel() {
    return uiLabel;
  }


  public void setUiLabel(String uiLabel) {
    this.uiLabel = uiLabel;
  }


  public TerminologyMetadata maxVersions(Integer maxVersions) {
    
    this.maxVersions = maxVersions;
    return this;
  }

   /**
   * Max number of versions to keep at the same time
   * @return maxVersions
  **/
  @javax.annotation.Nullable
  public Integer getMaxVersions() {
    return maxVersions;
  }


  public void setMaxVersions(Integer maxVersions) {
    this.maxVersions = maxVersions;
  }


  public TerminologyMetadata loader(String loader) {
    
    this.loader = loader;
    return this;
  }

   /**
   * Label for the loader used to populate this data
   * @return loader
  **/
  @javax.annotation.Nullable
  public String getLoader() {
    return loader;
  }


  public void setLoader(String loader) {
    this.loader = loader;
  }


  public TerminologyMetadata conceptStatuses(List<String> conceptStatuses) {
    
    this.conceptStatuses = conceptStatuses;
    return this;
  }

  public TerminologyMetadata addConceptStatusesItem(String conceptStatusesItem) {
    if (this.conceptStatuses == null) {
      this.conceptStatuses = new ArrayList<>();
    }
    this.conceptStatuses.add(conceptStatusesItem);
    return this;
  }

   /**
   * Concept status values used by the terminology
   * @return conceptStatuses
  **/
  @javax.annotation.Nullable
  public List<String> getConceptStatuses() {
    return conceptStatuses;
  }


  public void setConceptStatuses(List<String> conceptStatuses) {
    this.conceptStatuses = conceptStatuses;
  }


  public TerminologyMetadata retiredStatusValue(String retiredStatusValue) {
    
    this.retiredStatusValue = retiredStatusValue;
    return this;
  }

   /**
   * Concept status value for retired concepts
   * @return retiredStatusValue
  **/
  @javax.annotation.Nullable
  public String getRetiredStatusValue() {
    return retiredStatusValue;
  }


  public void setRetiredStatusValue(String retiredStatusValue) {
    this.retiredStatusValue = retiredStatusValue;
  }


  public TerminologyMetadata detailsColumns(Map<String, Boolean> detailsColumns) {
    
    this.detailsColumns = detailsColumns;
    return this;
  }

  public TerminologyMetadata putDetailsColumnsItem(String key, Boolean detailsColumnsItem) {
    if (this.detailsColumns == null) {
      this.detailsColumns = new HashMap<>();
    }
    this.detailsColumns.put(key, detailsColumnsItem);
    return this;
  }

   /**
   * Metadata for displaying concept
   * @return detailsColumns
  **/
  @javax.annotation.Nullable
  public Map<String, Boolean> getDetailsColumns() {
    return detailsColumns;
  }


  public void setDetailsColumns(Map<String, Boolean> detailsColumns) {
    this.detailsColumns = detailsColumns;
  }


  public TerminologyMetadata hierarchy(Boolean hierarchy) {
    
    this.hierarchy = hierarchy;
    return this;
  }

   /**
   * Indicates whether or not the terminology has a hierarchy
   * @return hierarchy
  **/
  @javax.annotation.Nullable
  public Boolean getHierarchy() {
    return hierarchy;
  }


  public void setHierarchy(Boolean hierarchy) {
    this.hierarchy = hierarchy;
  }


  public TerminologyMetadata history(Boolean history) {
    
    this.history = history;
    return this;
  }

   /**
   * Indicates whether or not the terminology has history records
   * @return history
  **/
  @javax.annotation.Nullable
  public Boolean getHistory() {
    return history;
  }


  public void setHistory(Boolean history) {
    this.history = history;
  }


  public TerminologyMetadata sourceCt(Integer sourceCt) {
    
    this.sourceCt = sourceCt;
    return this;
  }

   /**
   * Count of included sources
   * @return sourceCt
  **/
  @javax.annotation.Nullable
  public Integer getSourceCt() {
    return sourceCt;
  }


  public void setSourceCt(Integer sourceCt) {
    this.sourceCt = sourceCt;
  }


  public TerminologyMetadata subsetLink(String subsetLink) {
    
    this.subsetLink = subsetLink;
    return this;
  }

   /**
   * Metadata for downloading a subset
   * @return subsetLink
  **/
  @javax.annotation.Nullable
  public String getSubsetLink() {
    return subsetLink;
  }


  public void setSubsetLink(String subsetLink) {
    this.subsetLink = subsetLink;
  }


  public TerminologyMetadata licenseText(String licenseText) {
    
    this.licenseText = licenseText;
    return this;
  }

   /**
   * License text for the UI
   * @return licenseText
  **/
  @javax.annotation.Nullable
  public String getLicenseText() {
    return licenseText;
  }


  public void setLicenseText(String licenseText) {
    this.licenseText = licenseText;
  }


  public TerminologyMetadata metaConceptField(String metaConceptField) {
    
    this.metaConceptField = metaConceptField;
    return this;
  }

   /**
   * Metadata for concept display
   * @return metaConceptField
  **/
  @javax.annotation.Nullable
  public String getMetaConceptField() {
    return metaConceptField;
  }


  public void setMetaConceptField(String metaConceptField) {
    this.metaConceptField = metaConceptField;
  }


  public TerminologyMetadata codeLabel(String codeLabel) {
    
    this.codeLabel = codeLabel;
    return this;
  }

   /**
   * Metadata for concept display
   * @return codeLabel
  **/
  @javax.annotation.Nullable
  public String getCodeLabel() {
    return codeLabel;
  }


  public void setCodeLabel(String codeLabel) {
    this.codeLabel = codeLabel;
  }


  public TerminologyMetadata welcomeText(String welcomeText) {
    
    this.welcomeText = welcomeText;
    return this;
  }

   /**
   * Metadata for landing page welcome text
   * @return welcomeText
  **/
  @javax.annotation.Nullable
  public String getWelcomeText() {
    return welcomeText;
  }


  public void setWelcomeText(String welcomeText) {
    this.welcomeText = welcomeText;
  }


  public TerminologyMetadata synonymTermGroup(String synonymTermGroup) {
    
    this.synonymTermGroup = synonymTermGroup;
    return this;
  }

   /**
   * Get synonymTermGroup
   * @return synonymTermGroup
  **/
  @javax.annotation.Nullable
  public String getSynonymTermGroup() {
    return synonymTermGroup;
  }


  public void setSynonymTermGroup(String synonymTermGroup) {
    this.synonymTermGroup = synonymTermGroup;
  }


  public TerminologyMetadata termGroups(Map<String, String> termGroups) {
    
    this.termGroups = termGroups;
    return this;
  }

  public TerminologyMetadata putTermGroupsItem(String key, String termGroupsItem) {
    if (this.termGroups == null) {
      this.termGroups = new HashMap<>();
    }
    this.termGroups.put(key, termGroupsItem);
    return this;
  }

   /**
   * Get termGroups
   * @return termGroups
  **/
  @javax.annotation.Nullable
  public Map<String, String> getTermGroups() {
    return termGroups;
  }


  public void setTermGroups(Map<String, String> termGroups) {
    this.termGroups = termGroups;
  }


  public TerminologyMetadata preferredTermGroups(List<String> preferredTermGroups) {
    
    this.preferredTermGroups = preferredTermGroups;
    return this;
  }

  public TerminologyMetadata addPreferredTermGroupsItem(String preferredTermGroupsItem) {
    if (this.preferredTermGroups == null) {
      this.preferredTermGroups = new ArrayList<>();
    }
    this.preferredTermGroups.add(preferredTermGroupsItem);
    return this;
  }

   /**
   * Get preferredTermGroups
   * @return preferredTermGroups
  **/
  @javax.annotation.Nullable
  public List<String> getPreferredTermGroups() {
    return preferredTermGroups;
  }


  public void setPreferredTermGroups(List<String> preferredTermGroups) {
    this.preferredTermGroups = preferredTermGroups;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TerminologyMetadata terminologyMetadata = (TerminologyMetadata) o;
    return Objects.equals(this.uri, terminologyMetadata.uri) &&
        Objects.equals(this.ct, terminologyMetadata.ct) &&
        Objects.equals(this.uiLabel, terminologyMetadata.uiLabel) &&
        Objects.equals(this.maxVersions, terminologyMetadata.maxVersions) &&
        Objects.equals(this.loader, terminologyMetadata.loader) &&
        Objects.equals(this.conceptStatuses, terminologyMetadata.conceptStatuses) &&
        Objects.equals(this.retiredStatusValue, terminologyMetadata.retiredStatusValue) &&
        Objects.equals(this.detailsColumns, terminologyMetadata.detailsColumns) &&
        Objects.equals(this.hierarchy, terminologyMetadata.hierarchy) &&
        Objects.equals(this.history, terminologyMetadata.history) &&
        Objects.equals(this.sourceCt, terminologyMetadata.sourceCt) &&
        Objects.equals(this.subsetLink, terminologyMetadata.subsetLink) &&
        Objects.equals(this.licenseText, terminologyMetadata.licenseText) &&
        Objects.equals(this.metaConceptField, terminologyMetadata.metaConceptField) &&
        Objects.equals(this.codeLabel, terminologyMetadata.codeLabel) &&
        Objects.equals(this.welcomeText, terminologyMetadata.welcomeText) &&
        Objects.equals(this.synonymTermGroup, terminologyMetadata.synonymTermGroup) &&
        Objects.equals(this.termGroups, terminologyMetadata.termGroups) &&
        Objects.equals(this.preferredTermGroups, terminologyMetadata.preferredTermGroups);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, uiLabel, maxVersions, loader, conceptStatuses, retiredStatusValue, detailsColumns, hierarchy, history, sourceCt, subsetLink, licenseText, metaConceptField, codeLabel, welcomeText, synonymTermGroup, termGroups, preferredTermGroups);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TerminologyMetadata {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    uiLabel: ").append(toIndentedString(uiLabel)).append("\n");
    sb.append("    maxVersions: ").append(toIndentedString(maxVersions)).append("\n");
    sb.append("    loader: ").append(toIndentedString(loader)).append("\n");
    sb.append("    conceptStatuses: ").append(toIndentedString(conceptStatuses)).append("\n");
    sb.append("    retiredStatusValue: ").append(toIndentedString(retiredStatusValue)).append("\n");
    sb.append("    detailsColumns: ").append(toIndentedString(detailsColumns)).append("\n");
    sb.append("    hierarchy: ").append(toIndentedString(hierarchy)).append("\n");
    sb.append("    history: ").append(toIndentedString(history)).append("\n");
    sb.append("    sourceCt: ").append(toIndentedString(sourceCt)).append("\n");
    sb.append("    subsetLink: ").append(toIndentedString(subsetLink)).append("\n");
    sb.append("    licenseText: ").append(toIndentedString(licenseText)).append("\n");
    sb.append("    metaConceptField: ").append(toIndentedString(metaConceptField)).append("\n");
    sb.append("    codeLabel: ").append(toIndentedString(codeLabel)).append("\n");
    sb.append("    welcomeText: ").append(toIndentedString(welcomeText)).append("\n");
    sb.append("    synonymTermGroup: ").append(toIndentedString(synonymTermGroup)).append("\n");
    sb.append("    termGroups: ").append(toIndentedString(termGroups)).append("\n");
    sb.append("    preferredTermGroups: ").append(toIndentedString(preferredTermGroups)).append("\n");
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
    openapiFields.add("uiLabel");
    openapiFields.add("maxVersions");
    openapiFields.add("loader");
    openapiFields.add("conceptStatuses");
    openapiFields.add("retiredStatusValue");
    openapiFields.add("detailsColumns");
    openapiFields.add("hierarchy");
    openapiFields.add("history");
    openapiFields.add("sourceCt");
    openapiFields.add("subsetLink");
    openapiFields.add("licenseText");
    openapiFields.add("metaConceptField");
    openapiFields.add("codeLabel");
    openapiFields.add("welcomeText");
    openapiFields.add("synonymTermGroup");
    openapiFields.add("termGroups");
    openapiFields.add("preferredTermGroups");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TerminologyMetadata
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!TerminologyMetadata.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in TerminologyMetadata is not found in the empty JSON string", TerminologyMetadata.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TerminologyMetadata.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TerminologyMetadata` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("uiLabel") != null && !jsonObj.get("uiLabel").isJsonNull()) && !jsonObj.get("uiLabel").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uiLabel` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uiLabel").toString()));
      }
      if ((jsonObj.get("loader") != null && !jsonObj.get("loader").isJsonNull()) && !jsonObj.get("loader").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `loader` to be a primitive type in the JSON string but got `%s`", jsonObj.get("loader").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("conceptStatuses") != null && !jsonObj.get("conceptStatuses").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `conceptStatuses` to be an array in the JSON string but got `%s`", jsonObj.get("conceptStatuses").toString()));
      }
      if ((jsonObj.get("retiredStatusValue") != null && !jsonObj.get("retiredStatusValue").isJsonNull()) && !jsonObj.get("retiredStatusValue").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `retiredStatusValue` to be a primitive type in the JSON string but got `%s`", jsonObj.get("retiredStatusValue").toString()));
      }
      if ((jsonObj.get("subsetLink") != null && !jsonObj.get("subsetLink").isJsonNull()) && !jsonObj.get("subsetLink").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `subsetLink` to be a primitive type in the JSON string but got `%s`", jsonObj.get("subsetLink").toString()));
      }
      if ((jsonObj.get("licenseText") != null && !jsonObj.get("licenseText").isJsonNull()) && !jsonObj.get("licenseText").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `licenseText` to be a primitive type in the JSON string but got `%s`", jsonObj.get("licenseText").toString()));
      }
      if ((jsonObj.get("metaConceptField") != null && !jsonObj.get("metaConceptField").isJsonNull()) && !jsonObj.get("metaConceptField").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `metaConceptField` to be a primitive type in the JSON string but got `%s`", jsonObj.get("metaConceptField").toString()));
      }
      if ((jsonObj.get("codeLabel") != null && !jsonObj.get("codeLabel").isJsonNull()) && !jsonObj.get("codeLabel").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `codeLabel` to be a primitive type in the JSON string but got `%s`", jsonObj.get("codeLabel").toString()));
      }
      if ((jsonObj.get("welcomeText") != null && !jsonObj.get("welcomeText").isJsonNull()) && !jsonObj.get("welcomeText").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `welcomeText` to be a primitive type in the JSON string but got `%s`", jsonObj.get("welcomeText").toString()));
      }
      if ((jsonObj.get("synonymTermGroup") != null && !jsonObj.get("synonymTermGroup").isJsonNull()) && !jsonObj.get("synonymTermGroup").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `synonymTermGroup` to be a primitive type in the JSON string but got `%s`", jsonObj.get("synonymTermGroup").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("preferredTermGroups") != null && !jsonObj.get("preferredTermGroups").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `preferredTermGroups` to be an array in the JSON string but got `%s`", jsonObj.get("preferredTermGroups").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TerminologyMetadata.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TerminologyMetadata' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TerminologyMetadata> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TerminologyMetadata.class));

       return (TypeAdapter<T>) new TypeAdapter<TerminologyMetadata>() {
           @Override
           public void write(JsonWriter out, TerminologyMetadata value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TerminologyMetadata read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TerminologyMetadata given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TerminologyMetadata
  * @throws IOException if the JSON string is invalid with respect to TerminologyMetadata
  */
  public static TerminologyMetadata fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TerminologyMetadata.class);
  }

 /**
  * Convert an instance of TerminologyMetadata to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


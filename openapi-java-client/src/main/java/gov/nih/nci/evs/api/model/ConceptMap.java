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
 * ConceptMap
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-16T14:31:12.372518-08:00[America/Los_Angeles]")
public class ConceptMap {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private String source;

  public static final String SERIALIZED_NAME_SOURCE_NAME = "sourceName";
  @SerializedName(SERIALIZED_NAME_SOURCE_NAME)
  private String sourceName;

  public static final String SERIALIZED_NAME_SOURCE_TERM_TYPE = "sourceTermType";
  @SerializedName(SERIALIZED_NAME_SOURCE_TERM_TYPE)
  private String sourceTermType;

  public static final String SERIALIZED_NAME_SOURCE_CODE = "sourceCode";
  @SerializedName(SERIALIZED_NAME_SOURCE_CODE)
  private String sourceCode;

  public static final String SERIALIZED_NAME_SOURCE_TERMINOLOGY = "sourceTerminology";
  @SerializedName(SERIALIZED_NAME_SOURCE_TERMINOLOGY)
  private String sourceTerminology;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_RANK = "rank";
  @SerializedName(SERIALIZED_NAME_RANK)
  private String rank;

  public static final String SERIALIZED_NAME_GROUP = "group";
  @SerializedName(SERIALIZED_NAME_GROUP)
  private String group;

  public static final String SERIALIZED_NAME_RULE = "rule";
  @SerializedName(SERIALIZED_NAME_RULE)
  private String rule;

  public static final String SERIALIZED_NAME_TARGET_NAME = "targetName";
  @SerializedName(SERIALIZED_NAME_TARGET_NAME)
  private String targetName;

  public static final String SERIALIZED_NAME_TARGET_TERM_TYPE = "targetTermType";
  @SerializedName(SERIALIZED_NAME_TARGET_TERM_TYPE)
  private String targetTermType;

  public static final String SERIALIZED_NAME_TARGET_CODE = "targetCode";
  @SerializedName(SERIALIZED_NAME_TARGET_CODE)
  private String targetCode;

  public static final String SERIALIZED_NAME_TARGET_TERMINOLOGY = "targetTerminology";
  @SerializedName(SERIALIZED_NAME_TARGET_TERMINOLOGY)
  private String targetTerminology;

  public static final String SERIALIZED_NAME_TARGET_TERMINOLOGY_VERSION = "targetTerminologyVersion";
  @SerializedName(SERIALIZED_NAME_TARGET_TERMINOLOGY_VERSION)
  private String targetTerminologyVersion;

  public static final String SERIALIZED_NAME_TARGET_TERM_GROUP = "targetTermGroup";
  @SerializedName(SERIALIZED_NAME_TARGET_TERM_GROUP)
  private String targetTermGroup;

  public ConceptMap() {
  }

  public ConceptMap uri(String uri) {
    
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


  public ConceptMap ct(Integer ct) {
    
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


  public ConceptMap source(String source) {
    
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @javax.annotation.Nullable
  public String getSource() {
    return source;
  }


  public void setSource(String source) {
    this.source = source;
  }


  public ConceptMap sourceName(String sourceName) {
    
    this.sourceName = sourceName;
    return this;
  }

   /**
   * Get sourceName
   * @return sourceName
  **/
  @javax.annotation.Nullable
  public String getSourceName() {
    return sourceName;
  }


  public void setSourceName(String sourceName) {
    this.sourceName = sourceName;
  }


  public ConceptMap sourceTermType(String sourceTermType) {
    
    this.sourceTermType = sourceTermType;
    return this;
  }

   /**
   * Get sourceTermType
   * @return sourceTermType
  **/
  @javax.annotation.Nullable
  public String getSourceTermType() {
    return sourceTermType;
  }


  public void setSourceTermType(String sourceTermType) {
    this.sourceTermType = sourceTermType;
  }


  public ConceptMap sourceCode(String sourceCode) {
    
    this.sourceCode = sourceCode;
    return this;
  }

   /**
   * Get sourceCode
   * @return sourceCode
  **/
  @javax.annotation.Nullable
  public String getSourceCode() {
    return sourceCode;
  }


  public void setSourceCode(String sourceCode) {
    this.sourceCode = sourceCode;
  }


  public ConceptMap sourceTerminology(String sourceTerminology) {
    
    this.sourceTerminology = sourceTerminology;
    return this;
  }

   /**
   * Get sourceTerminology
   * @return sourceTerminology
  **/
  @javax.annotation.Nullable
  public String getSourceTerminology() {
    return sourceTerminology;
  }


  public void setSourceTerminology(String sourceTerminology) {
    this.sourceTerminology = sourceTerminology;
  }


  public ConceptMap type(String type) {
    
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


  public ConceptMap rank(String rank) {
    
    this.rank = rank;
    return this;
  }

   /**
   * Get rank
   * @return rank
  **/
  @javax.annotation.Nullable
  public String getRank() {
    return rank;
  }


  public void setRank(String rank) {
    this.rank = rank;
  }


  public ConceptMap group(String group) {
    
    this.group = group;
    return this;
  }

   /**
   * Get group
   * @return group
  **/
  @javax.annotation.Nullable
  public String getGroup() {
    return group;
  }


  public void setGroup(String group) {
    this.group = group;
  }


  public ConceptMap rule(String rule) {
    
    this.rule = rule;
    return this;
  }

   /**
   * Get rule
   * @return rule
  **/
  @javax.annotation.Nullable
  public String getRule() {
    return rule;
  }


  public void setRule(String rule) {
    this.rule = rule;
  }


  public ConceptMap targetName(String targetName) {
    
    this.targetName = targetName;
    return this;
  }

   /**
   * Get targetName
   * @return targetName
  **/
  @javax.annotation.Nullable
  public String getTargetName() {
    return targetName;
  }


  public void setTargetName(String targetName) {
    this.targetName = targetName;
  }


  public ConceptMap targetTermType(String targetTermType) {
    
    this.targetTermType = targetTermType;
    return this;
  }

   /**
   * Get targetTermType
   * @return targetTermType
  **/
  @javax.annotation.Nullable
  public String getTargetTermType() {
    return targetTermType;
  }


  public void setTargetTermType(String targetTermType) {
    this.targetTermType = targetTermType;
  }


  public ConceptMap targetCode(String targetCode) {
    
    this.targetCode = targetCode;
    return this;
  }

   /**
   * Get targetCode
   * @return targetCode
  **/
  @javax.annotation.Nullable
  public String getTargetCode() {
    return targetCode;
  }


  public void setTargetCode(String targetCode) {
    this.targetCode = targetCode;
  }


  public ConceptMap targetTerminology(String targetTerminology) {
    
    this.targetTerminology = targetTerminology;
    return this;
  }

   /**
   * Get targetTerminology
   * @return targetTerminology
  **/
  @javax.annotation.Nullable
  public String getTargetTerminology() {
    return targetTerminology;
  }


  public void setTargetTerminology(String targetTerminology) {
    this.targetTerminology = targetTerminology;
  }


  public ConceptMap targetTerminologyVersion(String targetTerminologyVersion) {
    
    this.targetTerminologyVersion = targetTerminologyVersion;
    return this;
  }

   /**
   * Get targetTerminologyVersion
   * @return targetTerminologyVersion
  **/
  @javax.annotation.Nullable
  public String getTargetTerminologyVersion() {
    return targetTerminologyVersion;
  }


  public void setTargetTerminologyVersion(String targetTerminologyVersion) {
    this.targetTerminologyVersion = targetTerminologyVersion;
  }


  public ConceptMap targetTermGroup(String targetTermGroup) {
    
    this.targetTermGroup = targetTermGroup;
    return this;
  }

   /**
   * Get targetTermGroup
   * @return targetTermGroup
  **/
  @javax.annotation.Nullable
  public String getTargetTermGroup() {
    return targetTermGroup;
  }


  public void setTargetTermGroup(String targetTermGroup) {
    this.targetTermGroup = targetTermGroup;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ConceptMap conceptMap = (ConceptMap) o;
    return Objects.equals(this.uri, conceptMap.uri) &&
        Objects.equals(this.ct, conceptMap.ct) &&
        Objects.equals(this.source, conceptMap.source) &&
        Objects.equals(this.sourceName, conceptMap.sourceName) &&
        Objects.equals(this.sourceTermType, conceptMap.sourceTermType) &&
        Objects.equals(this.sourceCode, conceptMap.sourceCode) &&
        Objects.equals(this.sourceTerminology, conceptMap.sourceTerminology) &&
        Objects.equals(this.type, conceptMap.type) &&
        Objects.equals(this.rank, conceptMap.rank) &&
        Objects.equals(this.group, conceptMap.group) &&
        Objects.equals(this.rule, conceptMap.rule) &&
        Objects.equals(this.targetName, conceptMap.targetName) &&
        Objects.equals(this.targetTermType, conceptMap.targetTermType) &&
        Objects.equals(this.targetCode, conceptMap.targetCode) &&
        Objects.equals(this.targetTerminology, conceptMap.targetTerminology) &&
        Objects.equals(this.targetTerminologyVersion, conceptMap.targetTerminologyVersion) &&
        Objects.equals(this.targetTermGroup, conceptMap.targetTermGroup);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, source, sourceName, sourceTermType, sourceCode, sourceTerminology, type, rank, group, rule, targetName, targetTermType, targetCode, targetTerminology, targetTerminologyVersion, targetTermGroup);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ConceptMap {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    sourceName: ").append(toIndentedString(sourceName)).append("\n");
    sb.append("    sourceTermType: ").append(toIndentedString(sourceTermType)).append("\n");
    sb.append("    sourceCode: ").append(toIndentedString(sourceCode)).append("\n");
    sb.append("    sourceTerminology: ").append(toIndentedString(sourceTerminology)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    rank: ").append(toIndentedString(rank)).append("\n");
    sb.append("    group: ").append(toIndentedString(group)).append("\n");
    sb.append("    rule: ").append(toIndentedString(rule)).append("\n");
    sb.append("    targetName: ").append(toIndentedString(targetName)).append("\n");
    sb.append("    targetTermType: ").append(toIndentedString(targetTermType)).append("\n");
    sb.append("    targetCode: ").append(toIndentedString(targetCode)).append("\n");
    sb.append("    targetTerminology: ").append(toIndentedString(targetTerminology)).append("\n");
    sb.append("    targetTerminologyVersion: ").append(toIndentedString(targetTerminologyVersion)).append("\n");
    sb.append("    targetTermGroup: ").append(toIndentedString(targetTermGroup)).append("\n");
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
    openapiFields.add("source");
    openapiFields.add("sourceName");
    openapiFields.add("sourceTermType");
    openapiFields.add("sourceCode");
    openapiFields.add("sourceTerminology");
    openapiFields.add("type");
    openapiFields.add("rank");
    openapiFields.add("group");
    openapiFields.add("rule");
    openapiFields.add("targetName");
    openapiFields.add("targetTermType");
    openapiFields.add("targetCode");
    openapiFields.add("targetTerminology");
    openapiFields.add("targetTerminologyVersion");
    openapiFields.add("targetTermGroup");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to ConceptMap
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!ConceptMap.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ConceptMap is not found in the empty JSON string", ConceptMap.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!ConceptMap.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ConceptMap` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("source") != null && !jsonObj.get("source").isJsonNull()) && !jsonObj.get("source").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `source` to be a primitive type in the JSON string but got `%s`", jsonObj.get("source").toString()));
      }
      if ((jsonObj.get("sourceName") != null && !jsonObj.get("sourceName").isJsonNull()) && !jsonObj.get("sourceName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourceName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourceName").toString()));
      }
      if ((jsonObj.get("sourceTermType") != null && !jsonObj.get("sourceTermType").isJsonNull()) && !jsonObj.get("sourceTermType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourceTermType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourceTermType").toString()));
      }
      if ((jsonObj.get("sourceCode") != null && !jsonObj.get("sourceCode").isJsonNull()) && !jsonObj.get("sourceCode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourceCode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourceCode").toString()));
      }
      if ((jsonObj.get("sourceTerminology") != null && !jsonObj.get("sourceTerminology").isJsonNull()) && !jsonObj.get("sourceTerminology").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `sourceTerminology` to be a primitive type in the JSON string but got `%s`", jsonObj.get("sourceTerminology").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("rank") != null && !jsonObj.get("rank").isJsonNull()) && !jsonObj.get("rank").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rank` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rank").toString()));
      }
      if ((jsonObj.get("group") != null && !jsonObj.get("group").isJsonNull()) && !jsonObj.get("group").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `group` to be a primitive type in the JSON string but got `%s`", jsonObj.get("group").toString()));
      }
      if ((jsonObj.get("rule") != null && !jsonObj.get("rule").isJsonNull()) && !jsonObj.get("rule").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `rule` to be a primitive type in the JSON string but got `%s`", jsonObj.get("rule").toString()));
      }
      if ((jsonObj.get("targetName") != null && !jsonObj.get("targetName").isJsonNull()) && !jsonObj.get("targetName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetName").toString()));
      }
      if ((jsonObj.get("targetTermType") != null && !jsonObj.get("targetTermType").isJsonNull()) && !jsonObj.get("targetTermType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetTermType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetTermType").toString()));
      }
      if ((jsonObj.get("targetCode") != null && !jsonObj.get("targetCode").isJsonNull()) && !jsonObj.get("targetCode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetCode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetCode").toString()));
      }
      if ((jsonObj.get("targetTerminology") != null && !jsonObj.get("targetTerminology").isJsonNull()) && !jsonObj.get("targetTerminology").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetTerminology` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetTerminology").toString()));
      }
      if ((jsonObj.get("targetTerminologyVersion") != null && !jsonObj.get("targetTerminologyVersion").isJsonNull()) && !jsonObj.get("targetTerminologyVersion").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetTerminologyVersion` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetTerminologyVersion").toString()));
      }
      if ((jsonObj.get("targetTermGroup") != null && !jsonObj.get("targetTermGroup").isJsonNull()) && !jsonObj.get("targetTermGroup").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `targetTermGroup` to be a primitive type in the JSON string but got `%s`", jsonObj.get("targetTermGroup").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ConceptMap.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ConceptMap' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ConceptMap> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ConceptMap.class));

       return (TypeAdapter<T>) new TypeAdapter<ConceptMap>() {
           @Override
           public void write(JsonWriter out, ConceptMap value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ConceptMap read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of ConceptMap given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of ConceptMap
  * @throws IOException if the JSON string is invalid with respect to ConceptMap
  */
  public static ConceptMap fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ConceptMap.class);
  }

 /**
  * Convert an instance of ConceptMap to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


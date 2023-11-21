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
import gov.nih.nci.evs.api.model.Qualifier;
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
 * Synonym
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-20T11:26:00.410613-08:00[America/Los_Angeles]")
public class Synonym {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_NORM_NAME = "normName";
  @SerializedName(SERIALIZED_NAME_NORM_NAME)
  private String normName;

  public static final String SERIALIZED_NAME_HIGHLIGHT = "highlight";
  @SerializedName(SERIALIZED_NAME_HIGHLIGHT)
  private String highlight;

  public static final String SERIALIZED_NAME_TERM_TYPE = "termType";
  @SerializedName(SERIALIZED_NAME_TERM_TYPE)
  private String termType;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_TYPE_CODE = "typeCode";
  @SerializedName(SERIALIZED_NAME_TYPE_CODE)
  private String typeCode;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private String source;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_SUB_SOURCE = "subSource";
  @SerializedName(SERIALIZED_NAME_SUB_SOURCE)
  private String subSource;

  public static final String SERIALIZED_NAME_QUALIFIERS = "qualifiers";
  @SerializedName(SERIALIZED_NAME_QUALIFIERS)
  private List<Qualifier> qualifiers;

  public static final String SERIALIZED_NAME_TERM_GROUP = "termGroup";
  @SerializedName(SERIALIZED_NAME_TERM_GROUP)
  private String termGroup;

  public Synonym() {
  }

  
  public Synonym(
     String normName, 
     String typeCode
  ) {
    this();
    this.normName = normName;
    this.typeCode = typeCode;
  }

  public Synonym uri(String uri) {
    
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


  public Synonym ct(Integer ct) {
    
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


  public Synonym name(String name) {
    
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  public String getName() {
    return name;
  }


  public void setName(String name) {
    this.name = name;
  }


   /**
   * Get normName
   * @return normName
  **/
  @javax.annotation.Nullable
  public String getNormName() {
    return normName;
  }




  public Synonym highlight(String highlight) {
    
    this.highlight = highlight;
    return this;
  }

   /**
   * Get highlight
   * @return highlight
  **/
  @javax.annotation.Nullable
  public String getHighlight() {
    return highlight;
  }


  public void setHighlight(String highlight) {
    this.highlight = highlight;
  }


  public Synonym termType(String termType) {
    
    this.termType = termType;
    return this;
  }

   /**
   * Get termType
   * @return termType
  **/
  @javax.annotation.Nullable
  public String getTermType() {
    return termType;
  }


  public void setTermType(String termType) {
    this.termType = termType;
  }


  public Synonym type(String type) {
    
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


   /**
   * Get typeCode
   * @return typeCode
  **/
  @javax.annotation.Nullable
  public String getTypeCode() {
    return typeCode;
  }




  public Synonym source(String source) {
    
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


  public Synonym code(String code) {
    
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @javax.annotation.Nullable
  public String getCode() {
    return code;
  }


  public void setCode(String code) {
    this.code = code;
  }


  public Synonym subSource(String subSource) {
    
    this.subSource = subSource;
    return this;
  }

   /**
   * Get subSource
   * @return subSource
  **/
  @javax.annotation.Nullable
  public String getSubSource() {
    return subSource;
  }


  public void setSubSource(String subSource) {
    this.subSource = subSource;
  }


  public Synonym qualifiers(List<Qualifier> qualifiers) {
    
    this.qualifiers = qualifiers;
    return this;
  }

  public Synonym addQualifiersItem(Qualifier qualifiersItem) {
    if (this.qualifiers == null) {
      this.qualifiers = new ArrayList<>();
    }
    this.qualifiers.add(qualifiersItem);
    return this;
  }

   /**
   * Get qualifiers
   * @return qualifiers
  **/
  @javax.annotation.Nullable
  public List<Qualifier> getQualifiers() {
    return qualifiers;
  }


  public void setQualifiers(List<Qualifier> qualifiers) {
    this.qualifiers = qualifiers;
  }


  public Synonym termGroup(String termGroup) {
    
    this.termGroup = termGroup;
    return this;
  }

   /**
   * Get termGroup
   * @return termGroup
  **/
  @javax.annotation.Nullable
  public String getTermGroup() {
    return termGroup;
  }


  public void setTermGroup(String termGroup) {
    this.termGroup = termGroup;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Synonym synonym = (Synonym) o;
    return Objects.equals(this.uri, synonym.uri) &&
        Objects.equals(this.ct, synonym.ct) &&
        Objects.equals(this.name, synonym.name) &&
        Objects.equals(this.normName, synonym.normName) &&
        Objects.equals(this.highlight, synonym.highlight) &&
        Objects.equals(this.termType, synonym.termType) &&
        Objects.equals(this.type, synonym.type) &&
        Objects.equals(this.typeCode, synonym.typeCode) &&
        Objects.equals(this.source, synonym.source) &&
        Objects.equals(this.code, synonym.code) &&
        Objects.equals(this.subSource, synonym.subSource) &&
        Objects.equals(this.qualifiers, synonym.qualifiers) &&
        Objects.equals(this.termGroup, synonym.termGroup);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, name, normName, highlight, termType, type, typeCode, source, code, subSource, qualifiers, termGroup);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Synonym {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    normName: ").append(toIndentedString(normName)).append("\n");
    sb.append("    highlight: ").append(toIndentedString(highlight)).append("\n");
    sb.append("    termType: ").append(toIndentedString(termType)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    typeCode: ").append(toIndentedString(typeCode)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    subSource: ").append(toIndentedString(subSource)).append("\n");
    sb.append("    qualifiers: ").append(toIndentedString(qualifiers)).append("\n");
    sb.append("    termGroup: ").append(toIndentedString(termGroup)).append("\n");
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
    openapiFields.add("name");
    openapiFields.add("normName");
    openapiFields.add("highlight");
    openapiFields.add("termType");
    openapiFields.add("type");
    openapiFields.add("typeCode");
    openapiFields.add("source");
    openapiFields.add("code");
    openapiFields.add("subSource");
    openapiFields.add("qualifiers");
    openapiFields.add("termGroup");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to Synonym
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!Synonym.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Synonym is not found in the empty JSON string", Synonym.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!Synonym.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Synonym` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("normName") != null && !jsonObj.get("normName").isJsonNull()) && !jsonObj.get("normName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `normName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("normName").toString()));
      }
      if ((jsonObj.get("highlight") != null && !jsonObj.get("highlight").isJsonNull()) && !jsonObj.get("highlight").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `highlight` to be a primitive type in the JSON string but got `%s`", jsonObj.get("highlight").toString()));
      }
      if ((jsonObj.get("termType") != null && !jsonObj.get("termType").isJsonNull()) && !jsonObj.get("termType").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `termType` to be a primitive type in the JSON string but got `%s`", jsonObj.get("termType").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("typeCode") != null && !jsonObj.get("typeCode").isJsonNull()) && !jsonObj.get("typeCode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `typeCode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("typeCode").toString()));
      }
      if ((jsonObj.get("source") != null && !jsonObj.get("source").isJsonNull()) && !jsonObj.get("source").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `source` to be a primitive type in the JSON string but got `%s`", jsonObj.get("source").toString()));
      }
      if ((jsonObj.get("code") != null && !jsonObj.get("code").isJsonNull()) && !jsonObj.get("code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("code").toString()));
      }
      if ((jsonObj.get("subSource") != null && !jsonObj.get("subSource").isJsonNull()) && !jsonObj.get("subSource").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `subSource` to be a primitive type in the JSON string but got `%s`", jsonObj.get("subSource").toString()));
      }
      if (jsonObj.get("qualifiers") != null && !jsonObj.get("qualifiers").isJsonNull()) {
        JsonArray jsonArrayqualifiers = jsonObj.getAsJsonArray("qualifiers");
        if (jsonArrayqualifiers != null) {
          // ensure the json data is an array
          if (!jsonObj.get("qualifiers").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `qualifiers` to be an array in the JSON string but got `%s`", jsonObj.get("qualifiers").toString()));
          }

          // validate the optional field `qualifiers` (array)
          for (int i = 0; i < jsonArrayqualifiers.size(); i++) {
            Qualifier.validateJsonObject(jsonArrayqualifiers.get(i).getAsJsonObject());
          };
        }
      }
      if ((jsonObj.get("termGroup") != null && !jsonObj.get("termGroup").isJsonNull()) && !jsonObj.get("termGroup").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `termGroup` to be a primitive type in the JSON string but got `%s`", jsonObj.get("termGroup").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Synonym.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Synonym' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Synonym> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Synonym.class));

       return (TypeAdapter<T>) new TypeAdapter<Synonym>() {
           @Override
           public void write(JsonWriter out, Synonym value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Synonym read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Synonym given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Synonym
  * @throws IOException if the JSON string is invalid with respect to Synonym
  */
  public static Synonym fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Synonym.class);
  }

 /**
  * Convert an instance of Synonym to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


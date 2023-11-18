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
 * DisjointWith
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-17T16:14:51.063238-08:00[America/Los_Angeles]")
public class DisjointWith {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_RELATED_CODE = "relatedCode";
  @SerializedName(SERIALIZED_NAME_RELATED_CODE)
  private String relatedCode;

  public static final String SERIALIZED_NAME_RELATED_NAME = "relatedName";
  @SerializedName(SERIALIZED_NAME_RELATED_NAME)
  private String relatedName;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private String source;

  public static final String SERIALIZED_NAME_HIGHLIGHT = "highlight";
  @SerializedName(SERIALIZED_NAME_HIGHLIGHT)
  private String highlight;

  public static final String SERIALIZED_NAME_QUALIFIERS = "qualifiers";
  @SerializedName(SERIALIZED_NAME_QUALIFIERS)
  private List<Qualifier> qualifiers;

  public DisjointWith() {
  }

  
  public DisjointWith(
     String code
  ) {
    this();
    this.code = code;
  }

  public DisjointWith uri(String uri) {
    
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


  public DisjointWith ct(Integer ct) {
    
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


   /**
   * Get code
   * @return code
  **/
  @javax.annotation.Nullable
  public String getCode() {
    return code;
  }




  public DisjointWith type(String type) {
    
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


  public DisjointWith relatedCode(String relatedCode) {
    
    this.relatedCode = relatedCode;
    return this;
  }

   /**
   * Get relatedCode
   * @return relatedCode
  **/
  @javax.annotation.Nullable
  public String getRelatedCode() {
    return relatedCode;
  }


  public void setRelatedCode(String relatedCode) {
    this.relatedCode = relatedCode;
  }


  public DisjointWith relatedName(String relatedName) {
    
    this.relatedName = relatedName;
    return this;
  }

   /**
   * Get relatedName
   * @return relatedName
  **/
  @javax.annotation.Nullable
  public String getRelatedName() {
    return relatedName;
  }


  public void setRelatedName(String relatedName) {
    this.relatedName = relatedName;
  }


  public DisjointWith source(String source) {
    
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


  public DisjointWith highlight(String highlight) {
    
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


  public DisjointWith qualifiers(List<Qualifier> qualifiers) {
    
    this.qualifiers = qualifiers;
    return this;
  }

  public DisjointWith addQualifiersItem(Qualifier qualifiersItem) {
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



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DisjointWith disjointWith = (DisjointWith) o;
    return Objects.equals(this.uri, disjointWith.uri) &&
        Objects.equals(this.ct, disjointWith.ct) &&
        Objects.equals(this.code, disjointWith.code) &&
        Objects.equals(this.type, disjointWith.type) &&
        Objects.equals(this.relatedCode, disjointWith.relatedCode) &&
        Objects.equals(this.relatedName, disjointWith.relatedName) &&
        Objects.equals(this.source, disjointWith.source) &&
        Objects.equals(this.highlight, disjointWith.highlight) &&
        Objects.equals(this.qualifiers, disjointWith.qualifiers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, code, type, relatedCode, relatedName, source, highlight, qualifiers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DisjointWith {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    relatedCode: ").append(toIndentedString(relatedCode)).append("\n");
    sb.append("    relatedName: ").append(toIndentedString(relatedName)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    highlight: ").append(toIndentedString(highlight)).append("\n");
    sb.append("    qualifiers: ").append(toIndentedString(qualifiers)).append("\n");
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
    openapiFields.add("code");
    openapiFields.add("type");
    openapiFields.add("relatedCode");
    openapiFields.add("relatedName");
    openapiFields.add("source");
    openapiFields.add("highlight");
    openapiFields.add("qualifiers");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to DisjointWith
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!DisjointWith.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in DisjointWith is not found in the empty JSON string", DisjointWith.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!DisjointWith.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `DisjointWith` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("code") != null && !jsonObj.get("code").isJsonNull()) && !jsonObj.get("code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("code").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("relatedCode") != null && !jsonObj.get("relatedCode").isJsonNull()) && !jsonObj.get("relatedCode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `relatedCode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("relatedCode").toString()));
      }
      if ((jsonObj.get("relatedName") != null && !jsonObj.get("relatedName").isJsonNull()) && !jsonObj.get("relatedName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `relatedName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("relatedName").toString()));
      }
      if ((jsonObj.get("source") != null && !jsonObj.get("source").isJsonNull()) && !jsonObj.get("source").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `source` to be a primitive type in the JSON string but got `%s`", jsonObj.get("source").toString()));
      }
      if ((jsonObj.get("highlight") != null && !jsonObj.get("highlight").isJsonNull()) && !jsonObj.get("highlight").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `highlight` to be a primitive type in the JSON string but got `%s`", jsonObj.get("highlight").toString()));
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
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!DisjointWith.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'DisjointWith' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<DisjointWith> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(DisjointWith.class));

       return (TypeAdapter<T>) new TypeAdapter<DisjointWith>() {
           @Override
           public void write(JsonWriter out, DisjointWith value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public DisjointWith read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of DisjointWith given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of DisjointWith
  * @throws IOException if the JSON string is invalid with respect to DisjointWith
  */
  public static DisjointWith fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, DisjointWith.class);
  }

 /**
  * Convert an instance of DisjointWith to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


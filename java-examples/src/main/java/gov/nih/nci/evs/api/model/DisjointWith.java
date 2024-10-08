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
import gov.nih.nci.evs.api.model.Qualifier;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
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
import java.util.Set;

import gov.nih.nci.evs.api.invoker.JSON;

/**
 * Represents an assertion of disjointness between two concepts
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-17T17:06:13.350753-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class DisjointWith {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

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
  private List<Qualifier> qualifiers = new ArrayList<>();

  public DisjointWith() {
  }

  public DisjointWith uri(String uri) {
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


  public DisjointWith ct(Integer ct) {
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


  public DisjointWith type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Relationship type
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
   * Related code (the code on the other side of the relationship)
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
   * Preferred name of the related code
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
   * Relationship source
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
   * Used by search calls to provide information for highlighting a view of results
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
   * Type/value qualifiers on the relationship
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
        Objects.equals(this.type, disjointWith.type) &&
        Objects.equals(this.relatedCode, disjointWith.relatedCode) &&
        Objects.equals(this.relatedName, disjointWith.relatedName) &&
        Objects.equals(this.source, disjointWith.source) &&
        Objects.equals(this.highlight, disjointWith.highlight) &&
        Objects.equals(this.qualifiers, disjointWith.qualifiers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, type, relatedCode, relatedName, source, highlight, qualifiers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DisjointWith {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
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
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to DisjointWith
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!DisjointWith.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in DisjointWith is not found in the empty JSON string", DisjointWith.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!DisjointWith.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `DisjointWith` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
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
            Qualifier.validateJsonElement(jsonArrayqualifiers.get(i));
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
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
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


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
 * Represents a text definition for a concept
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-17T17:06:13.350753-07:00[America/Los_Angeles]", comments = "Generator version: 7.5.0")
public class Definition {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_DEFINITION = "definition";
  @SerializedName(SERIALIZED_NAME_DEFINITION)
  private String definition;

  public static final String SERIALIZED_NAME_HIGHLIGHT = "highlight";
  @SerializedName(SERIALIZED_NAME_HIGHLIGHT)
  private String highlight;

  public static final String SERIALIZED_NAME_TYPE = "type";
  @SerializedName(SERIALIZED_NAME_TYPE)
  private String type;

  public static final String SERIALIZED_NAME_SOURCE = "source";
  @SerializedName(SERIALIZED_NAME_SOURCE)
  private String source;

  public static final String SERIALIZED_NAME_QUALIFIERS = "qualifiers";
  @SerializedName(SERIALIZED_NAME_QUALIFIERS)
  private List<Qualifier> qualifiers = new ArrayList<>();

  public Definition() {
  }

  public Definition uri(String uri) {
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


  public Definition ct(Integer ct) {
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


  public Definition definition(String definition) {
    this.definition = definition;
    return this;
  }

   /**
   * Text definition value
   * @return definition
  **/
  @javax.annotation.Nullable
  public String getDefinition() {
    return definition;
  }

  public void setDefinition(String definition) {
    this.definition = definition;
  }


  public Definition highlight(String highlight) {
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


  public Definition type(String type) {
    this.type = type;
    return this;
  }

   /**
   * Definition type
   * @return type
  **/
  @javax.annotation.Nullable
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  public Definition source(String source) {
    this.source = source;
    return this;
  }

   /**
   * Definition source
   * @return source
  **/
  @javax.annotation.Nullable
  public String getSource() {
    return source;
  }

  public void setSource(String source) {
    this.source = source;
  }


  public Definition qualifiers(List<Qualifier> qualifiers) {
    this.qualifiers = qualifiers;
    return this;
  }

  public Definition addQualifiersItem(Qualifier qualifiersItem) {
    if (this.qualifiers == null) {
      this.qualifiers = new ArrayList<>();
    }
    this.qualifiers.add(qualifiersItem);
    return this;
  }

   /**
   * Type/value qualifiers on the definition
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
    Definition definition = (Definition) o;
    return Objects.equals(this.uri, definition.uri) &&
        Objects.equals(this.ct, definition.ct) &&
        Objects.equals(this.definition, definition.definition) &&
        Objects.equals(this.highlight, definition.highlight) &&
        Objects.equals(this.type, definition.type) &&
        Objects.equals(this.source, definition.source) &&
        Objects.equals(this.qualifiers, definition.qualifiers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, definition, highlight, type, source, qualifiers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Definition {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    definition: ").append(toIndentedString(definition)).append("\n");
    sb.append("    highlight: ").append(toIndentedString(highlight)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
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
    openapiFields.add("definition");
    openapiFields.add("highlight");
    openapiFields.add("type");
    openapiFields.add("source");
    openapiFields.add("qualifiers");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to Definition
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!Definition.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Definition is not found in the empty JSON string", Definition.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!Definition.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Definition` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("definition") != null && !jsonObj.get("definition").isJsonNull()) && !jsonObj.get("definition").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `definition` to be a primitive type in the JSON string but got `%s`", jsonObj.get("definition").toString()));
      }
      if ((jsonObj.get("highlight") != null && !jsonObj.get("highlight").isJsonNull()) && !jsonObj.get("highlight").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `highlight` to be a primitive type in the JSON string but got `%s`", jsonObj.get("highlight").toString()));
      }
      if ((jsonObj.get("type") != null && !jsonObj.get("type").isJsonNull()) && !jsonObj.get("type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("type").toString()));
      }
      if ((jsonObj.get("source") != null && !jsonObj.get("source").isJsonNull()) && !jsonObj.get("source").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `source` to be a primitive type in the JSON string but got `%s`", jsonObj.get("source").toString()));
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
       if (!Definition.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Definition' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Definition> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Definition.class));

       return (TypeAdapter<T>) new TypeAdapter<Definition>() {
           @Override
           public void write(JsonWriter out, Definition value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Definition read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Definition given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Definition
  * @throws IOException if the JSON string is invalid with respect to Definition
  */
  public static Definition fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Definition.class);
  }

 /**
  * Convert an instance of Definition to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


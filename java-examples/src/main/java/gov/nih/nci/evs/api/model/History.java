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
 * History
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-15T16:28:28.893302-08:00[America/Los_Angeles]")
public class History {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_ACTION = "action";
  @SerializedName(SERIALIZED_NAME_ACTION)
  private String action;

  public static final String SERIALIZED_NAME_DATE = "date";
  @SerializedName(SERIALIZED_NAME_DATE)
  private String date;

  public static final String SERIALIZED_NAME_REPLACEMENT_CODE = "replacementCode";
  @SerializedName(SERIALIZED_NAME_REPLACEMENT_CODE)
  private String replacementCode;

  public static final String SERIALIZED_NAME_REPLACEMENT_NAME = "replacementName";
  @SerializedName(SERIALIZED_NAME_REPLACEMENT_NAME)
  private String replacementName;

  public History() {
  }

  public History uri(String uri) {
    
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


  public History ct(Integer ct) {
    
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


  public History code(String code) {
    
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


  public History name(String name) {
    
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


  public History action(String action) {
    
    this.action = action;
    return this;
  }

   /**
   * Get action
   * @return action
  **/
  @javax.annotation.Nullable
  public String getAction() {
    return action;
  }


  public void setAction(String action) {
    this.action = action;
  }


  public History date(String date) {
    
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @javax.annotation.Nullable
  public String getDate() {
    return date;
  }


  public void setDate(String date) {
    this.date = date;
  }


  public History replacementCode(String replacementCode) {
    
    this.replacementCode = replacementCode;
    return this;
  }

   /**
   * Get replacementCode
   * @return replacementCode
  **/
  @javax.annotation.Nullable
  public String getReplacementCode() {
    return replacementCode;
  }


  public void setReplacementCode(String replacementCode) {
    this.replacementCode = replacementCode;
  }


  public History replacementName(String replacementName) {
    
    this.replacementName = replacementName;
    return this;
  }

   /**
   * Get replacementName
   * @return replacementName
  **/
  @javax.annotation.Nullable
  public String getReplacementName() {
    return replacementName;
  }


  public void setReplacementName(String replacementName) {
    this.replacementName = replacementName;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    History history = (History) o;
    return Objects.equals(this.uri, history.uri) &&
        Objects.equals(this.ct, history.ct) &&
        Objects.equals(this.code, history.code) &&
        Objects.equals(this.name, history.name) &&
        Objects.equals(this.action, history.action) &&
        Objects.equals(this.date, history.date) &&
        Objects.equals(this.replacementCode, history.replacementCode) &&
        Objects.equals(this.replacementName, history.replacementName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, code, name, action, date, replacementCode, replacementName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class History {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    action: ").append(toIndentedString(action)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    replacementCode: ").append(toIndentedString(replacementCode)).append("\n");
    sb.append("    replacementName: ").append(toIndentedString(replacementName)).append("\n");
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
    openapiFields.add("name");
    openapiFields.add("action");
    openapiFields.add("date");
    openapiFields.add("replacementCode");
    openapiFields.add("replacementName");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to History
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!History.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in History is not found in the empty JSON string", History.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!History.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `History` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("code") != null && !jsonObj.get("code").isJsonNull()) && !jsonObj.get("code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("code").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("action") != null && !jsonObj.get("action").isJsonNull()) && !jsonObj.get("action").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `action` to be a primitive type in the JSON string but got `%s`", jsonObj.get("action").toString()));
      }
      if ((jsonObj.get("date") != null && !jsonObj.get("date").isJsonNull()) && !jsonObj.get("date").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `date` to be a primitive type in the JSON string but got `%s`", jsonObj.get("date").toString()));
      }
      if ((jsonObj.get("replacementCode") != null && !jsonObj.get("replacementCode").isJsonNull()) && !jsonObj.get("replacementCode").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `replacementCode` to be a primitive type in the JSON string but got `%s`", jsonObj.get("replacementCode").toString()));
      }
      if ((jsonObj.get("replacementName") != null && !jsonObj.get("replacementName").isJsonNull()) && !jsonObj.get("replacementName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `replacementName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("replacementName").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!History.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'History' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<History> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(History.class));

       return (TypeAdapter<T>) new TypeAdapter<History>() {
           @Override
           public void write(JsonWriter out, History value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public History read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of History given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of History
  * @throws IOException if the JSON string is invalid with respect to History
  */
  public static History fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, History.class);
  }

 /**
  * Convert an instance of History to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


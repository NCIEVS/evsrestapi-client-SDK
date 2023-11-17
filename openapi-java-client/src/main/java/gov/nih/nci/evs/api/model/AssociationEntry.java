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
 * AssociationEntry
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-16T14:31:12.372518-08:00[America/Los_Angeles]")
public class AssociationEntry {
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

  public static final String SERIALIZED_NAME_TERMINOLOGY = "terminology";
  @SerializedName(SERIALIZED_NAME_TERMINOLOGY)
  private String terminology;

  public static final String SERIALIZED_NAME_VERSION = "version";
  @SerializedName(SERIALIZED_NAME_VERSION)
  private String version;

  public static final String SERIALIZED_NAME_ASSOCIATION = "association";
  @SerializedName(SERIALIZED_NAME_ASSOCIATION)
  private String association;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public AssociationEntry() {
  }

  public AssociationEntry uri(String uri) {
    
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


  public AssociationEntry ct(Integer ct) {
    
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


  public AssociationEntry code(String code) {
    
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


  public AssociationEntry type(String type) {
    
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


  public AssociationEntry relatedCode(String relatedCode) {
    
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


  public AssociationEntry relatedName(String relatedName) {
    
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


  public AssociationEntry source(String source) {
    
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


  public AssociationEntry highlight(String highlight) {
    
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


  public AssociationEntry qualifiers(List<Qualifier> qualifiers) {
    
    this.qualifiers = qualifiers;
    return this;
  }

  public AssociationEntry addQualifiersItem(Qualifier qualifiersItem) {
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


  public AssociationEntry terminology(String terminology) {
    
    this.terminology = terminology;
    return this;
  }

   /**
   * Get terminology
   * @return terminology
  **/
  @javax.annotation.Nullable
  public String getTerminology() {
    return terminology;
  }


  public void setTerminology(String terminology) {
    this.terminology = terminology;
  }


  public AssociationEntry version(String version) {
    
    this.version = version;
    return this;
  }

   /**
   * Get version
   * @return version
  **/
  @javax.annotation.Nullable
  public String getVersion() {
    return version;
  }


  public void setVersion(String version) {
    this.version = version;
  }


  public AssociationEntry association(String association) {
    
    this.association = association;
    return this;
  }

   /**
   * Get association
   * @return association
  **/
  @javax.annotation.Nullable
  public String getAssociation() {
    return association;
  }


  public void setAssociation(String association) {
    this.association = association;
  }


  public AssociationEntry name(String name) {
    
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



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AssociationEntry associationEntry = (AssociationEntry) o;
    return Objects.equals(this.uri, associationEntry.uri) &&
        Objects.equals(this.ct, associationEntry.ct) &&
        Objects.equals(this.code, associationEntry.code) &&
        Objects.equals(this.type, associationEntry.type) &&
        Objects.equals(this.relatedCode, associationEntry.relatedCode) &&
        Objects.equals(this.relatedName, associationEntry.relatedName) &&
        Objects.equals(this.source, associationEntry.source) &&
        Objects.equals(this.highlight, associationEntry.highlight) &&
        Objects.equals(this.qualifiers, associationEntry.qualifiers) &&
        Objects.equals(this.terminology, associationEntry.terminology) &&
        Objects.equals(this.version, associationEntry.version) &&
        Objects.equals(this.association, associationEntry.association) &&
        Objects.equals(this.name, associationEntry.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, code, type, relatedCode, relatedName, source, highlight, qualifiers, terminology, version, association, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AssociationEntry {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    relatedCode: ").append(toIndentedString(relatedCode)).append("\n");
    sb.append("    relatedName: ").append(toIndentedString(relatedName)).append("\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    highlight: ").append(toIndentedString(highlight)).append("\n");
    sb.append("    qualifiers: ").append(toIndentedString(qualifiers)).append("\n");
    sb.append("    terminology: ").append(toIndentedString(terminology)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    association: ").append(toIndentedString(association)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
    openapiFields.add("terminology");
    openapiFields.add("version");
    openapiFields.add("association");
    openapiFields.add("name");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to AssociationEntry
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!AssociationEntry.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AssociationEntry is not found in the empty JSON string", AssociationEntry.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!AssociationEntry.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AssociationEntry` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
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
      if ((jsonObj.get("terminology") != null && !jsonObj.get("terminology").isJsonNull()) && !jsonObj.get("terminology").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `terminology` to be a primitive type in the JSON string but got `%s`", jsonObj.get("terminology").toString()));
      }
      if ((jsonObj.get("version") != null && !jsonObj.get("version").isJsonNull()) && !jsonObj.get("version").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `version` to be a primitive type in the JSON string but got `%s`", jsonObj.get("version").toString()));
      }
      if ((jsonObj.get("association") != null && !jsonObj.get("association").isJsonNull()) && !jsonObj.get("association").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `association` to be a primitive type in the JSON string but got `%s`", jsonObj.get("association").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AssociationEntry.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AssociationEntry' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AssociationEntry> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AssociationEntry.class));

       return (TypeAdapter<T>) new TypeAdapter<AssociationEntry>() {
           @Override
           public void write(JsonWriter out, AssociationEntry value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AssociationEntry read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of AssociationEntry given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of AssociationEntry
  * @throws IOException if the JSON string is invalid with respect to AssociationEntry
  */
  public static AssociationEntry fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AssociationEntry.class);
  }

 /**
  * Convert an instance of AssociationEntry to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


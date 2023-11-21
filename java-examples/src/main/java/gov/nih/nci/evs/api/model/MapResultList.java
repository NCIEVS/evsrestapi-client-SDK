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
import gov.nih.nci.evs.api.model.ConceptMap;
import gov.nih.nci.evs.api.model.SearchCriteria;
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
 * MapResultList
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-20T11:26:00.410613-08:00[America/Los_Angeles]")
public class MapResultList {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_TOTAL = "total";
  @SerializedName(SERIALIZED_NAME_TOTAL)
  private Integer total;

  public static final String SERIALIZED_NAME_TIME_TAKEN = "timeTaken";
  @SerializedName(SERIALIZED_NAME_TIME_TAKEN)
  private Long timeTaken;

  public static final String SERIALIZED_NAME_PARAMETERS = "parameters";
  @SerializedName(SERIALIZED_NAME_PARAMETERS)
  private SearchCriteria parameters;

  public static final String SERIALIZED_NAME_MAPS = "maps";
  @SerializedName(SERIALIZED_NAME_MAPS)
  private List<ConceptMap> maps;

  public MapResultList() {
  }

  public MapResultList uri(String uri) {
    
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


  public MapResultList ct(Integer ct) {
    
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


  public MapResultList total(Integer total) {
    
    this.total = total;
    return this;
  }

   /**
   * Get total
   * @return total
  **/
  @javax.annotation.Nullable
  public Integer getTotal() {
    return total;
  }


  public void setTotal(Integer total) {
    this.total = total;
  }


  public MapResultList timeTaken(Long timeTaken) {
    
    this.timeTaken = timeTaken;
    return this;
  }

   /**
   * Get timeTaken
   * @return timeTaken
  **/
  @javax.annotation.Nullable
  public Long getTimeTaken() {
    return timeTaken;
  }


  public void setTimeTaken(Long timeTaken) {
    this.timeTaken = timeTaken;
  }


  public MapResultList parameters(SearchCriteria parameters) {
    
    this.parameters = parameters;
    return this;
  }

   /**
   * Get parameters
   * @return parameters
  **/
  @javax.annotation.Nullable
  public SearchCriteria getParameters() {
    return parameters;
  }


  public void setParameters(SearchCriteria parameters) {
    this.parameters = parameters;
  }


  public MapResultList maps(List<ConceptMap> maps) {
    
    this.maps = maps;
    return this;
  }

  public MapResultList addMapsItem(ConceptMap mapsItem) {
    if (this.maps == null) {
      this.maps = new ArrayList<>();
    }
    this.maps.add(mapsItem);
    return this;
  }

   /**
   * Get maps
   * @return maps
  **/
  @javax.annotation.Nullable
  public List<ConceptMap> getMaps() {
    return maps;
  }


  public void setMaps(List<ConceptMap> maps) {
    this.maps = maps;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MapResultList mapResultList = (MapResultList) o;
    return Objects.equals(this.uri, mapResultList.uri) &&
        Objects.equals(this.ct, mapResultList.ct) &&
        Objects.equals(this.total, mapResultList.total) &&
        Objects.equals(this.timeTaken, mapResultList.timeTaken) &&
        Objects.equals(this.parameters, mapResultList.parameters) &&
        Objects.equals(this.maps, mapResultList.maps);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, total, timeTaken, parameters, maps);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MapResultList {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    timeTaken: ").append(toIndentedString(timeTaken)).append("\n");
    sb.append("    parameters: ").append(toIndentedString(parameters)).append("\n");
    sb.append("    maps: ").append(toIndentedString(maps)).append("\n");
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
    openapiFields.add("total");
    openapiFields.add("timeTaken");
    openapiFields.add("parameters");
    openapiFields.add("maps");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to MapResultList
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!MapResultList.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in MapResultList is not found in the empty JSON string", MapResultList.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!MapResultList.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `MapResultList` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      // validate the optional field `parameters`
      if (jsonObj.get("parameters") != null && !jsonObj.get("parameters").isJsonNull()) {
        SearchCriteria.validateJsonObject(jsonObj.getAsJsonObject("parameters"));
      }
      if (jsonObj.get("maps") != null && !jsonObj.get("maps").isJsonNull()) {
        JsonArray jsonArraymaps = jsonObj.getAsJsonArray("maps");
        if (jsonArraymaps != null) {
          // ensure the json data is an array
          if (!jsonObj.get("maps").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `maps` to be an array in the JSON string but got `%s`", jsonObj.get("maps").toString()));
          }

          // validate the optional field `maps` (array)
          for (int i = 0; i < jsonArraymaps.size(); i++) {
            ConceptMap.validateJsonObject(jsonArraymaps.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!MapResultList.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'MapResultList' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<MapResultList> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(MapResultList.class));

       return (TypeAdapter<T>) new TypeAdapter<MapResultList>() {
           @Override
           public void write(JsonWriter out, MapResultList value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public MapResultList read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of MapResultList given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of MapResultList
  * @throws IOException if the JSON string is invalid with respect to MapResultList
  */
  public static MapResultList fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, MapResultList.class);
  }

 /**
  * Convert an instance of MapResultList to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


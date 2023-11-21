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
 * HierarchyNode
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-11-21T14:42:35.933348-08:00[America/Los_Angeles]")
public class HierarchyNode {
  public static final String SERIALIZED_NAME_URI = "uri";
  @SerializedName(SERIALIZED_NAME_URI)
  private String uri;

  public static final String SERIALIZED_NAME_CT = "ct";
  @SerializedName(SERIALIZED_NAME_CT)
  private Integer ct;

  public static final String SERIALIZED_NAME_CODE = "code";
  @SerializedName(SERIALIZED_NAME_CODE)
  private String code;

  public static final String SERIALIZED_NAME_LABEL = "label";
  @SerializedName(SERIALIZED_NAME_LABEL)
  private String label;

  public static final String SERIALIZED_NAME_LEVEL = "level";
  @SerializedName(SERIALIZED_NAME_LEVEL)
  private Integer level;

  public static final String SERIALIZED_NAME_LEAF = "leaf";
  @SerializedName(SERIALIZED_NAME_LEAF)
  private Boolean leaf;

  public static final String SERIALIZED_NAME_EXPANDED = "expanded";
  @SerializedName(SERIALIZED_NAME_EXPANDED)
  private Boolean expanded;

  public static final String SERIALIZED_NAME_HIGHLIGHT = "highlight";
  @SerializedName(SERIALIZED_NAME_HIGHLIGHT)
  private Boolean highlight;

  public static final String SERIALIZED_NAME_CHILDREN = "children";
  @SerializedName(SERIALIZED_NAME_CHILDREN)
  private List<HierarchyNode> children;

  public HierarchyNode() {
  }

  public HierarchyNode uri(String uri) {
    
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


  public HierarchyNode ct(Integer ct) {
    
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


  public HierarchyNode code(String code) {
    
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


  public HierarchyNode label(String label) {
    
    this.label = label;
    return this;
  }

   /**
   * Get label
   * @return label
  **/
  @javax.annotation.Nullable
  public String getLabel() {
    return label;
  }


  public void setLabel(String label) {
    this.label = label;
  }


  public HierarchyNode level(Integer level) {
    
    this.level = level;
    return this;
  }

   /**
   * Get level
   * @return level
  **/
  @javax.annotation.Nullable
  public Integer getLevel() {
    return level;
  }


  public void setLevel(Integer level) {
    this.level = level;
  }


  public HierarchyNode leaf(Boolean leaf) {
    
    this.leaf = leaf;
    return this;
  }

   /**
   * Get leaf
   * @return leaf
  **/
  @javax.annotation.Nullable
  public Boolean getLeaf() {
    return leaf;
  }


  public void setLeaf(Boolean leaf) {
    this.leaf = leaf;
  }


  public HierarchyNode expanded(Boolean expanded) {
    
    this.expanded = expanded;
    return this;
  }

   /**
   * Get expanded
   * @return expanded
  **/
  @javax.annotation.Nullable
  public Boolean getExpanded() {
    return expanded;
  }


  public void setExpanded(Boolean expanded) {
    this.expanded = expanded;
  }


  public HierarchyNode highlight(Boolean highlight) {
    
    this.highlight = highlight;
    return this;
  }

   /**
   * Get highlight
   * @return highlight
  **/
  @javax.annotation.Nullable
  public Boolean getHighlight() {
    return highlight;
  }


  public void setHighlight(Boolean highlight) {
    this.highlight = highlight;
  }


  public HierarchyNode children(List<HierarchyNode> children) {
    
    this.children = children;
    return this;
  }

  public HierarchyNode addChildrenItem(HierarchyNode childrenItem) {
    if (this.children == null) {
      this.children = new ArrayList<>();
    }
    this.children.add(childrenItem);
    return this;
  }

   /**
   * Get children
   * @return children
  **/
  @javax.annotation.Nullable
  public List<HierarchyNode> getChildren() {
    return children;
  }


  public void setChildren(List<HierarchyNode> children) {
    this.children = children;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HierarchyNode hierarchyNode = (HierarchyNode) o;
    return Objects.equals(this.uri, hierarchyNode.uri) &&
        Objects.equals(this.ct, hierarchyNode.ct) &&
        Objects.equals(this.code, hierarchyNode.code) &&
        Objects.equals(this.label, hierarchyNode.label) &&
        Objects.equals(this.level, hierarchyNode.level) &&
        Objects.equals(this.leaf, hierarchyNode.leaf) &&
        Objects.equals(this.expanded, hierarchyNode.expanded) &&
        Objects.equals(this.highlight, hierarchyNode.highlight) &&
        Objects.equals(this.children, hierarchyNode.children);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uri, ct, code, label, level, leaf, expanded, highlight, children);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class HierarchyNode {\n");
    sb.append("    uri: ").append(toIndentedString(uri)).append("\n");
    sb.append("    ct: ").append(toIndentedString(ct)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
    sb.append("    level: ").append(toIndentedString(level)).append("\n");
    sb.append("    leaf: ").append(toIndentedString(leaf)).append("\n");
    sb.append("    expanded: ").append(toIndentedString(expanded)).append("\n");
    sb.append("    highlight: ").append(toIndentedString(highlight)).append("\n");
    sb.append("    children: ").append(toIndentedString(children)).append("\n");
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
    openapiFields.add("label");
    openapiFields.add("level");
    openapiFields.add("leaf");
    openapiFields.add("expanded");
    openapiFields.add("highlight");
    openapiFields.add("children");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to HierarchyNode
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!HierarchyNode.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in HierarchyNode is not found in the empty JSON string", HierarchyNode.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!HierarchyNode.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `HierarchyNode` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if ((jsonObj.get("uri") != null && !jsonObj.get("uri").isJsonNull()) && !jsonObj.get("uri").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `uri` to be a primitive type in the JSON string but got `%s`", jsonObj.get("uri").toString()));
      }
      if ((jsonObj.get("code") != null && !jsonObj.get("code").isJsonNull()) && !jsonObj.get("code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("code").toString()));
      }
      if ((jsonObj.get("label") != null && !jsonObj.get("label").isJsonNull()) && !jsonObj.get("label").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `label` to be a primitive type in the JSON string but got `%s`", jsonObj.get("label").toString()));
      }
      if (jsonObj.get("children") != null && !jsonObj.get("children").isJsonNull()) {
        JsonArray jsonArraychildren = jsonObj.getAsJsonArray("children");
        if (jsonArraychildren != null) {
          // ensure the json data is an array
          if (!jsonObj.get("children").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `children` to be an array in the JSON string but got `%s`", jsonObj.get("children").toString()));
          }

          // validate the optional field `children` (array)
          for (int i = 0; i < jsonArraychildren.size(); i++) {
            HierarchyNode.validateJsonObject(jsonArraychildren.get(i).getAsJsonObject());
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!HierarchyNode.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'HierarchyNode' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<HierarchyNode> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(HierarchyNode.class));

       return (TypeAdapter<T>) new TypeAdapter<HierarchyNode>() {
           @Override
           public void write(JsonWriter out, HierarchyNode value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public HierarchyNode read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of HierarchyNode given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of HierarchyNode
  * @throws IOException if the JSON string is invalid with respect to HierarchyNode
  */
  public static HierarchyNode fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, HierarchyNode.class);
  }

 /**
  * Convert an instance of HierarchyNode to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


# coding: utf-8

"""
    NCI EVS Rest API

    Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>

    The version of the OpenAPI document: 1.7.2.RELEASE
    Contact: NCIAppSupport@nih.gov
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class TerminologyMetadata(BaseModel):
    """
    Represents additional terminology metadata
    """ # noqa: E501
    uri: Optional[StrictStr] = Field(default=None, description="URI for this element in an rdf-based source file")
    ct: Optional[StrictInt] = Field(default=None, description="Used to indicate the total amount of data in cases where a limit is being applied")
    ui_label: Optional[StrictStr] = Field(default=None, description="Human-readable name for the terminology to use in a UI label", alias="uiLabel")
    max_versions: Optional[StrictInt] = Field(default=None, description="Max number of versions to keep at the same time", alias="maxVersions")
    loader: Optional[StrictStr] = Field(default=None, description="Label for the loader used to populate this data")
    concept_statuses: Optional[List[StrictStr]] = Field(default=None, description="Concept status values used by the terminology", alias="conceptStatuses")
    excluded_properties: Optional[List[StrictStr]] = Field(default=None, alias="excludedProperties")
    retired_status_value: Optional[StrictStr] = Field(default=None, description="Concept status value for retired concepts", alias="retiredStatusValue")
    details_columns: Optional[Dict[str, StrictBool]] = Field(default=None, description="Metadata for displaying concept", alias="detailsColumns")
    hierarchy: Optional[StrictBool] = Field(default=None, description="Indicates whether or not the terminology has a hierarchy")
    hierarchy_roles: Optional[List[StrictStr]] = Field(default=None, description="Indicates role codes that are reinterpreted as parent/child", alias="hierarchyRoles")
    history: Optional[StrictBool] = Field(default=None, description="Indicates whether or not the terminology has history records")
    source_ct: Optional[StrictInt] = Field(default=None, description="Count of included sources", alias="sourceCt")
    subset_link: Optional[StrictStr] = Field(default=None, description="Metadata for downloading a subset", alias="subsetLink")
    license_text: Optional[StrictStr] = Field(default=None, description="License text for the UI", alias="licenseText")
    meta_concept_field: Optional[StrictStr] = Field(default=None, description="Metadata for concept display", alias="metaConceptField")
    code_label: Optional[StrictStr] = Field(default=None, description="Metadata for concept display", alias="codeLabel")
    welcome_text: Optional[StrictStr] = Field(default=None, description="Metadata for landing page welcome text", alias="welcomeText")
    synonym_term_group: Optional[StrictStr] = Field(default=None, alias="synonymTermGroup")
    term_groups: Optional[Dict[str, StrictStr]] = Field(default=None, alias="termGroups")
    preferred_term_groups: Optional[List[StrictStr]] = Field(default=None, alias="preferredTermGroups")
    __properties: ClassVar[List[str]] = ["uri", "ct", "uiLabel", "maxVersions", "loader", "conceptStatuses", "excludedProperties", "retiredStatusValue", "detailsColumns", "hierarchy", "hierarchyRoles", "history", "sourceCt", "subsetLink", "licenseText", "metaConceptField", "codeLabel", "welcomeText", "synonymTermGroup", "termGroups", "preferredTermGroups"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of TerminologyMetadata from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TerminologyMetadata from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "uri": obj.get("uri"),
            "ct": obj.get("ct"),
            "uiLabel": obj.get("uiLabel"),
            "maxVersions": obj.get("maxVersions"),
            "loader": obj.get("loader"),
            "conceptStatuses": obj.get("conceptStatuses"),
            "excludedProperties": obj.get("excludedProperties"),
            "retiredStatusValue": obj.get("retiredStatusValue"),
            "detailsColumns": obj.get("detailsColumns"),
            "hierarchy": obj.get("hierarchy"),
            "hierarchyRoles": obj.get("hierarchyRoles"),
            "history": obj.get("history"),
            "sourceCt": obj.get("sourceCt"),
            "subsetLink": obj.get("subsetLink"),
            "licenseText": obj.get("licenseText"),
            "metaConceptField": obj.get("metaConceptField"),
            "codeLabel": obj.get("codeLabel"),
            "welcomeText": obj.get("welcomeText"),
            "synonymTermGroup": obj.get("synonymTermGroup"),
            "termGroups": obj.get("termGroups"),
            "preferredTermGroups": obj.get("preferredTermGroups")
        })
        return _obj



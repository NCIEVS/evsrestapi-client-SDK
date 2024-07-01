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


class ConceptMap(BaseModel):
    """
    Represents a map from a concept to concepts in other terminologies
    """  # noqa: E501
    uri: Optional[StrictStr] = Field(default=None, description="URI for this element in an rdf-based source file")
    ct: Optional[StrictInt] = Field(default=None,
                                    description="Used to indicate the total amount of data in cases where a limit is being applied")
    source: Optional[StrictStr] = Field(default=None, description="Source terminology of the map")
    source_name: Optional[StrictStr] = Field(default=None, description="Preferred name of the source code",
                                             alias="sourceName")
    source_term_type: Optional[StrictStr] = Field(default=None, description="Term type of the source code",
                                                  alias="sourceTermType")
    source_code: Optional[StrictStr] = Field(default=None,
                                             description="Source code of the map (the thing being mapped 'from')",
                                             alias="sourceCode")
    source_terminology: Optional[StrictStr] = Field(default=None, description="Terminology of the source code",
                                                    alias="sourceTerminology")
    source_terminology_version: Optional[StrictStr] = Field(default=None,
                                                            description="Terminology version of the source code",
                                                            alias="sourceTerminologyVersion")
    source_loaded: Optional[StrictBool] = Field(default=None,
                                                description="Indicates whether the source code terminology/version is currently loaded",
                                                alias="sourceLoaded")
    type: Optional[StrictStr] = None
    rank: Optional[StrictStr] = None
    group: Optional[StrictStr] = None
    rule: Optional[StrictStr] = None
    target_name: Optional[StrictStr] = Field(default=None, alias="targetName")
    target_term_type: Optional[StrictStr] = Field(default=None, alias="targetTermType")
    target_code: Optional[StrictStr] = Field(default=None,
                                             description="Target code of the map (the thing being mapped 'to')",
                                             alias="targetCode")
    target_terminology: Optional[StrictStr] = Field(default=None, description="Terminology of the target code",
                                                    alias="targetTerminology")
    target_terminology_version: Optional[StrictStr] = Field(default=None,
                                                            description="Terminology version of the target code",
                                                            alias="targetTerminologyVersion")
    target_loaded: Optional[StrictBool] = Field(default=None,
                                                description="Indicates whether the target terminology/version is currently loaded",
                                                alias="targetLoaded")
    target_term_group: Optional[StrictStr] = Field(default=None, alias="targetTermGroup")
    __properties: ClassVar[List[str]] = ["uri", "ct", "source", "sourceName", "sourceTermType", "sourceCode",
                                         "sourceTerminology", "sourceTerminologyVersion", "sourceLoaded", "type",
                                         "rank", "group", "rule", "targetName", "targetTermType", "targetCode",
                                         "targetTerminology", "targetTerminologyVersion", "targetLoaded",
                                         "targetTermGroup"]

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
        """Create an instance of ConceptMap from a JSON string"""
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
        """Create an instance of ConceptMap from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "uri": obj.get("uri"),
            "ct": obj.get("ct"),
            "source": obj.get("source"),
            "sourceName": obj.get("sourceName"),
            "sourceTermType": obj.get("sourceTermType"),
            "sourceCode": obj.get("sourceCode"),
            "sourceTerminology": obj.get("sourceTerminology"),
            "sourceTerminologyVersion": obj.get("sourceTerminologyVersion"),
            "sourceLoaded": obj.get("sourceLoaded"),
            "type": obj.get("type"),
            "rank": obj.get("rank"),
            "group": obj.get("group"),
            "rule": obj.get("rule"),
            "targetName": obj.get("targetName"),
            "targetTermType": obj.get("targetTermType"),
            "targetCode": obj.get("targetCode"),
            "targetTerminology": obj.get("targetTerminology"),
            "targetTerminologyVersion": obj.get("targetTerminologyVersion"),
            "targetLoaded": obj.get("targetLoaded"),
            "targetTermGroup": obj.get("targetTermGroup")
        })
        return _obj

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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from .association_entry import AssociationEntry
from .search_criteria import SearchCriteria
from typing import Optional, Set
from typing_extensions import Self

class AssociationEntryResultList(BaseModel):
    """
    AssociationEntryResultList
    """ # noqa: E501
    uri: Optional[StrictStr] = Field(default=None, description="URI for this element in an rdf-based source file")
    ct: Optional[StrictInt] = Field(default=None, description="Used to indicate the total amount of data in cases where a limit is being applied")
    total: Optional[StrictInt] = Field(default=None, description="Total nubmer of results (if paging is not considered)")
    time_taken: Optional[StrictInt] = Field(default=None, description="Total time taken to compute the result", alias="timeTaken")
    parameters: Optional[SearchCriteria] = None
    association_entries: Optional[List[AssociationEntry]] = Field(default=None, alias="associationEntries")
    __properties: ClassVar[List[str]] = ["uri", "ct", "total", "timeTaken", "parameters", "associationEntries"]

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
        """Create an instance of AssociationEntryResultList from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of parameters
        if self.parameters:
            _dict['parameters'] = self.parameters.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in association_entries (list)
        _items = []
        if self.association_entries:
            for _item in self.association_entries:
                if _item:
                    _items.append(_item.to_dict())
            _dict['associationEntries'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AssociationEntryResultList from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "uri": obj.get("uri"),
            "ct": obj.get("ct"),
            "total": obj.get("total"),
            "timeTaken": obj.get("timeTaken"),
            "parameters": SearchCriteria.from_dict(obj["parameters"]) if obj.get("parameters") is not None else None,
            "associationEntries": [AssociationEntry.from_dict(_item) for _item in obj["associationEntries"]] if obj.get("associationEntries") is not None else None
        })
        return _obj



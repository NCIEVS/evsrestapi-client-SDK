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
from terminology_metadata import TerminologyMetadata
from typing import Optional, Set
from typing_extensions import Self

class Terminology(BaseModel):
    """
    Represents a terminology loaded into the API
    """ # noqa: E501
    uri: Optional[StrictStr] = Field(default=None, description="URI for this element in an rdf-based source file")
    ct: Optional[StrictInt] = Field(default=None, description="Used to indicate the total amount of data in cases where a limit is being applied")
    terminology: Optional[StrictStr] = Field(default=None, description="Terminology abbreviation, e.g. 'ncit'")
    version: Optional[StrictStr] = Field(default=None, description="Terminology version, e.g. '23.11d'")
    var_date: Optional[StrictStr] = Field(default=None, description="Terminology publication/release date", alias="date")
    name: Optional[StrictStr] = Field(default=None, description="Terminology name")
    description: Optional[StrictStr] = Field(default=None, description="Terminology description")
    graph: Optional[StrictStr] = Field(default=None, description="Name of the RDF triplestore graph if this data is backed by a triplestore")
    terminology_version: Optional[StrictStr] = Field(default=None, description="Underscore-separated value for terminology and version used by the API to precisely pinpoint a particular version, e.g. 'ncit_23.11d'", alias="terminologyVersion")
    latest: Optional[StrictBool] = Field(default=None, description="Indicates whether this is the latest version")
    tags: Optional[Dict[str, StrictStr]] = Field(default=None, description="Additional terminology tags")
    index_name: Optional[StrictStr] = Field(default=None, description="for internal use", alias="indexName")
    object_index_name: Optional[StrictStr] = Field(default=None, description="for internal use", alias="objectIndexName")
    metadata: Optional[TerminologyMetadata] = None
    sparql_flag: Optional[StrictBool] = Field(default=None, description="Indicates whether the terminology can be used with SPARQL", alias="sparqlFlag")
    __properties: ClassVar[List[str]] = ["uri", "ct", "terminology", "version", "date", "name", "description", "graph", "terminologyVersion", "latest", "tags", "indexName", "objectIndexName", "metadata", "sparqlFlag"]

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
        """Create an instance of Terminology from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of metadata
        if self.metadata:
            _dict['metadata'] = self.metadata.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Terminology from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "uri": obj.get("uri"),
            "ct": obj.get("ct"),
            "terminology": obj.get("terminology"),
            "version": obj.get("version"),
            "date": obj.get("date"),
            "name": obj.get("name"),
            "description": obj.get("description"),
            "graph": obj.get("graph"),
            "terminologyVersion": obj.get("terminologyVersion"),
            "latest": obj.get("latest"),
            "tags": obj.get("tags"),
            "indexName": obj.get("indexName"),
            "objectIndexName": obj.get("objectIndexName"),
            "metadata": TerminologyMetadata.from_dict(obj["metadata"]) if obj.get("metadata") is not None else None,
            "sparqlFlag": obj.get("sparqlFlag")
        })
        return _obj



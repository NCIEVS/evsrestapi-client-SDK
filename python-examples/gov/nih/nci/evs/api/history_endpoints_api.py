# coding: utf-8

"""
    NCI EVS Rest API

    Endpoints to support searching, metadata, and content retrieval for EVS terminologies. To learn more about how to interact with this api, see the <a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK\">Github evsrestapi-client-SDK project.</a>

    The version of the OpenAPI document: 1.7.2.RELEASE
    Contact: NCIAppSupport@nih.gov
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictStr
from typing import List
from typing_extensions import Annotated
from models.history import History

from api_client import ApiClient, RequestSerialized
from api_response import ApiResponse
from rest import RESTResponseType


class HistoryEndpointsApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def get_replacements(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        code: Annotated[StrictStr, Field(description="Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> List[History]:
        """Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param code: Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>. (required)
        :type code: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_serialize(
            terminology=terminology,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_replacements_with_http_info(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        code: Annotated[StrictStr, Field(description="Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[List[History]]:
        """Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param code: Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>. (required)
        :type code: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_serialize(
            terminology=terminology,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_replacements_without_preload_content(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        code: Annotated[StrictStr, Field(description="Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Gets suggested replacements for a specified terminology and retired code. Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param code: Code in the specified terminology, e.g. <ul><li>'C4654' for <i>ncit</i></li><li>'C0000733' for <i>ncim</i></li></ul>. (required)
        :type code: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_serialize(
            terminology=terminology,
            code=code,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_replacements_serialize(
        self,
        terminology,
        code,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[str, Union[str, bytes]] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if terminology is not None:
            _path_params['terminology'] = terminology
        if code is not None:
            _path_params['code'] = code
        # process the query parameters
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        _header_params['Accept'] = self.api_client.select_header_accept(
            [
                'application/json'
            ]
        )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/api/v1/history/{terminology}/{code}/replacements',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )




    @validate_call
    def get_replacements_from_list(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        list: Annotated[StrictStr, Field(description="Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> List[History]:
        """Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param list: Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>. (required)
        :type list: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_from_list_serialize(
            terminology=terminology,
            list=list,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_replacements_from_list_with_http_info(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        list: Annotated[StrictStr, Field(description="Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[List[History]]:
        """Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param list: Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>. (required)
        :type list: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_from_list_serialize(
            terminology=terminology,
            list=list,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_replacements_from_list_without_preload_content(
        self,
        terminology: Annotated[StrictStr, Field(description="Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>)")],
        list: Annotated[StrictStr, Field(description="Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>.")],
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Gets suggested replacements for a specified terminology and a comma-separated list of retired codes.  Active codes will return entries as well with an action of \"active\".


        :param terminology: Terminology, e.g. 'ncit' or 'ncim' (<a href=\"https://github.com/NCIEVS/evsrestapi-client-SDK/blob/master/doc/TERMINOLOGIES.md\">See here for complete list</a>) (required)
        :type terminology: str
        :param list: Comma-separated list of codes, e.g. <ul><li>'C4654,C40117' for <i>ncit</i></li><li>'C0000733,C3551741' for <i>ncim</i></li></ul>. (required)
        :type list: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_replacements_from_list_serialize(
            terminology=terminology,
            list=list,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '417': "RestException",
            '400': "RestException",
            '200': "List[History]",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_replacements_from_list_serialize(
        self,
        terminology,
        list,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[str, Union[str, bytes]] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        if terminology is not None:
            _path_params['terminology'] = terminology
        # process the query parameters
        if list is not None:
            
            _query_params.append(('list', list))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        _header_params['Accept'] = self.api_client.select_header_accept(
            [
                'application/json'
            ]
        )


        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/api/v1/history/{terminology}/replacements',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )



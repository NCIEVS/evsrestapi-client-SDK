/*
NCI EVS Rest API

Testing MapsetEndpointsAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package evs

import (
	"context"
	"encoding/json"
	"fmt"
	"testing"

	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestMapsetEndpointsAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("GetMapsetByCode", func(t *testing.T) {

		var code string = "NCIt_Maps_To_ICDO3"
		var include string = "minimal"

		resp, httpRes, err := apiClient.MapsetEndpointsAPI.GetMapsetByCode(context.Background(), code).Include(include).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, resp.GetCode(), code)

		result, err := json.Marshal(resp)
		require.Nil(t, err)
		require.NotNil(t, result)
		fmt.Printf("%s", result)
	})

	t.Run("GetMapsetMappingsByCode", func(t *testing.T) {

		var code string = "GO_to_NCIt_Mapping"
		var fromRecord int32 = 0
		var pageSize int32 = 25

		resp, httpRes, err := apiClient.MapsetEndpointsAPI.GetMapsetMappingsByCode(context.Background(), code).FromRecord(fromRecord).PageSize(pageSize).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, len(resp.GetMaps()), int(pageSize))
		maps := resp.GetMaps()

		for _, m := range maps {
			assert.Equal(t, m.GetSource(), "GO")
			assert.Equal(t, m.GetTargetTerminology(), "NCI_Thesaurus")
		}

		result, err := json.Marshal(resp)
		require.Nil(t, err)
		require.NotNil(t, result)
		fmt.Printf("%s", result)
	})

	t.Run("GetMapsets", func(t *testing.T) {

		var include string = "minimal"

		resp, httpRes, err := apiClient.MapsetEndpointsAPI.GetMapsets(context.Background()).Include(include).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotEqual(t, len(resp), 0)

	})

}

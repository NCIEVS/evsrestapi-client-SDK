/*
NCI EVS Rest API

Testing SubsetEndpointsAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package evs

import (
	"context"
	"encoding/json"
	"testing"

	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestSubsetEndpointsAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	terminology := "ncit"

	t.Run("GetSubset", func(t *testing.T) {

		// ARRANGE
		code := "C116978"
		include := "minimal,summary"
		expectedName := "CTRP Agent Terminology"

		// ACT
		resp, httpRes, err := apiClient.SubsetEndpointsAPI.GetSubset(context.Background(), terminology, code).
			Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedName, resp.GetName(), "FAIL: expected name doesn't match actual")
	
		result, err := json.Marshal(resp)
		require.Nil(t, err)
		require.NotNil(t, result)
		fmt.Printf("%s", result)
	})

	t.Run("GetSubsetMembers", func(t *testing.T) {

		// ARRANGE
		code := "C157225"
		fromRecord := "0"
		pageSize := "25"
		include := "minimal"
		expectedCode := "C16255"
		expectedName := "Acetylation"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.SubsetEndpointsAPI.GetSubsetMembers(context.Background(), terminology, code).
			FromRecord(fromRecord).PageSize(pageSize).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		for _, subset := range resp {
			assert.NotNil(t, subset.GetName())
			assert.NotNil(t, subset.GetCode())
			if subset.GetName() == expectedName && subset.GetCode() == expectedCode {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: expected subset name and code not found")
	
		result, err := json.Marshal(resp)
		require.Nil(t, err)
		require.NotNil(t, result)
		fmt.Printf("%s", result)
	})

	t.Run("GetSubsets", func(t *testing.T) {

		// ARRANGE
		include := "minimal"

		// ACT
		resp, httpRes, err := apiClient.SubsetEndpointsAPI.GetSubsets(context.Background(), terminology).
			Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
	})

}

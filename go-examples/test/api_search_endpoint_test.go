/*
NCI EVS Rest API

Testing SearchEndpointAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package evs

import (
	"context"
	"testing"

	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_evs_SearchEndpointAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	terminology := "ncit"

	t.Run("Test SearchEndpointsAPIService Search", func(t *testing.T) {

		// ARRANGE
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		expectedCode := "C1000"
		containsExpectedCode := false

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Ascending(ascending).Include(include).FromRecord(fromRecord).PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.Concepts)

		for _, concept := range resp.Concepts {
			assert.NotNil(t, concept.GetCode())
			if concept.GetCode() == expectedCode {
				containsExpectedCode = true
				break
			}
		}

		assert.True(t, containsExpectedCode, "FAIL: expected code not found in search results")
	})

	t.Run("Test SearchEndpointsAPIService SearchFilterByConceptStatus", func(t *testing.T) {

		// ARRANGE
		term := "respiratory"
		ascending := true
		include := "minimal"
		conceptStatus := "Retired_Concept"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 18
		containsExpectedStatus := false

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).ConceptStatus(conceptStatus).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)

		for _, concept := range resp.Concepts {
			assert.NotNil(t, concept.GetConceptStatus())
			if concept.GetConceptStatus() == conceptStatus {
				containsExpectedStatus = true
				break
			}
		}

		assert.True(t, containsExpectedStatus, "FAIL: expected concept status not found")
	})

	t.Run("Test SearchEndpointsAPIService SearchFilterByDefinitionSource", func(t *testing.T) {

		// ARRANGE
		term := "dsDNA"
		searchType := "contains"
		ascending := true
		include := "minimal"
		definitionSource := "NCI"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 12

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).DefinitionSource(definitionSource).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchFilterByDefinitionType", func(t *testing.T) {

		// ARRANGE
		term := "melanoma"
		searchType := "contains"
		ascending := true
		include := "minimal"
		definitionType := "DEFINITION"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 1438

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).DefinitionType(definitionType).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchFilterBySynonymSourceAndTermType", func(t *testing.T) {

		// ARRANGE
		term := "dsDNA"
		searchType := "contains"
		ascending := true
		include := "minimal"
		synonymSource := "NCI"
		termType := "PT"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 13

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).SynonymSource(synonymSource).SynonymTermType(termType).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchFilterBySynonymType", func(t *testing.T) {

		// ARRANGE
		term := "dsDNA"
		searchType := "contains"
		ascending := true
		include := "minimal"
		synonymType := "FULL_SYN"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 13

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).SynonymType(synonymType).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointsAPIService SearchByCode", func(t *testing.T) {

		// ARRANGE
		term := "C3224"
		searchType := "contains"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 1

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypeMatch", func(t *testing.T) {

		// ARRANGE
		term := "enzyme"
		searchType := "match"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 1

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypeStartsWith", func(t *testing.T) {

		// ARRANGE
		term := "enzyme"
		searchType := "startsWith"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 48

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypePhrase", func(t *testing.T) {

		// ARRANGE
		term := "enzyme"
		searchType := "phrase"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 269

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypeFuzzy", func(t *testing.T) {

		// ARRANGE
		term := "enzyme"
		searchType := "fuzzy"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypeAnd", func(t *testing.T) {

		// ARRANGE
		term := "malignant melanoma"
		searchType := "AND"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 148

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchByTypeOr", func(t *testing.T) {

		// ARRANGE
		term := "malignant melanoma"
		searchType := "OR"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Type_(searchType).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchWithHighlights", func(t *testing.T) {

		// ARRANGE
		term := "XAV05295I5"
		ascending := true
		include := "highlights"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		var expectedTotal int64 = 1

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchConceptsByProperty", func(t *testing.T) {

		// ARRANGE
		term := "XAV05295I5"
		ascending := true
		include := "highlights"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		property := "FDA_UNII_Code"
		var expectedTotal int64 = 1

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Property(property).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI SearchConceptsBySubset", func(t *testing.T) {

		// ARRANGE
		term := "immune"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 5
		subset := "C165258"
		var expectedTotal int64 = 35

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminology(context.Background(), terminology).
			Term(term).Ascending(ascending).Include(include).FromRecord(fromRecord).
			PageSize(pageSize).Subset(subset).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI FindConceptsBySPARQLCode", func(t *testing.T) {

		// ARRANGE
		searchType := "contains"
		ascending := true
		include := "minimal"
		var fromRecord int32 = 0
		var pageSize int32 = 25
		queryBody := `SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . ?x :P108 "Melanoma" } }`
		var expectedTotal int64 = 1

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.SearchSingleTerminologySparql(context.Background(), terminology).
			Body(queryBody).Include(include).Type_(searchType).Ascending(ascending).FromRecord(fromRecord).
			PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedTotal, resp.GetTotal(), "FAIL: expected total doesn't match actual")
		assert.NotNil(t, resp.Concepts)
		assert.NotNil(t, resp.Concepts[0])
	})

	t.Run("Test SearchEndpointAPI GetSPARQLBindings", func(t *testing.T) {

		// ARRANGE
		queryBody := `SELECT ?code { GRAPH <http://NCI_T_monthly> { ?x a owl:Class . ?x :NHC0 ?code . } }`
		var expectedTotal int64 = 150000

		// ACT
		resp, httpRes, err := apiClient.SearchEndpointAPI.GetSparqlBindings(context.Background(), terminology).
			Body(queryBody).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp)
		assert.GreaterOrEqual(t, resp.GetTotal(), expectedTotal)
	})

}
/*
NCI EVS Rest API

Testing ConceptEndpointsAPIService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package evs

import (
	"context"
	"strings"
	"testing"

	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_evs_ConceptEndpointsAPIService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	terminology := "ncit"
	code := "C3224"

	t.Run("Test ConceptEndpointsAPIService GetAssociationEntries", func(t *testing.T) {

		// ARRANGE
		codeOrLabel := "A5"
		var fromRecord int32 = 0
		var pageSize int32 = 100
		expectedRelatedName := "Naluzotan Hydrochloride"
		containsExpectedName := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetAssociationEntries(context.Background(), terminology, codeOrLabel).FromRecord(fromRecord).PageSize(pageSize).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Check if the expected related name exists in the result
		for _, entry := range resp.AssociationEntries {
			if strings.Contains(entry.GetRelatedName(), expectedRelatedName) {
				containsExpectedName = true
				break
			}
		}

		assert.True(t, containsExpectedName, "FAIL: Response doesn't contain the expected related name")
	})

	t.Run("Test ConceptEndpointsAPIService GetAssociations1", func(t *testing.T) {

		expected_related_name := "CDISC SEND Terminology"
		expected_type := "Concept_In_Subset"

		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetAssociations1(context.Background(), terminology, code).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		var assoc = resp[0]
		assert.NotNil(t, assoc)
		assert.Equal(t, expected_related_name, assoc.GetRelatedName())
		assert.Equal(t, expected_type, assoc.GetType())

	})

	t.Run("Test ConceptEndpointsAPIService GetChildren", func(t *testing.T) {

		expected_name := "Melanoma"

		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetChildren(context.Background(), terminology, code).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		for _, entry := range resp {
			assert.True(t, strings.Contains(entry.GetName(), expected_name))
		}

	})

	t.Run("Test ConceptEndpointsAPIService GetConcept", func(t *testing.T) {

		expected_name := "Melanoma"

		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetConcept(context.Background(), terminology, code).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		assert.Equal(t, resp.GetName(), expected_name)

	})

	t.Run("Test ConceptEndpointsAPIService GetConceptSummary", func(t *testing.T) {

		// ARRANGE
		include := "summary"
		expectedName := "Melanoma"

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetConcept(context.Background(), terminology, code).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.GetName())
		assert.Equal(t, expectedName, resp.GetName(), "FAIL: Actual name doesn't match expected")

		t.Logf("Get a summary concept for code - %s", code)
	})

	t.Run("Test ConceptEndpointsAPIService GetConceptFull", func(t *testing.T) {

		// ARRANGE
		include := "full"
		expectedName := "Melanoma"

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetConcept(context.Background(), terminology, code).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.GetName())
		assert.Equal(t, expectedName, resp.GetName(), "FAIL: Actual name doesn't match expected")

		t.Logf("Get a full concept for code - %s", code)
	})

	t.Run("Test ConceptEndpointsAPIService GetConceptCustomInclude", func(t *testing.T) {

		// ARRANGE
		include := "synonyms,children,maps,inverseAssociations"
		expectedName := "Melanoma"

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetConcept(context.Background(), terminology, code).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.GetName())
		assert.Equal(t, expectedName, resp.GetName(), "FAIL: Actual name doesn't match expected")

		t.Logf("Get a custom include concept for code - %s", code)
	})

	t.Run("Test ConceptEndpointsAPIService GetConcepts", func(t *testing.T) {

		// ARRANGE
		codeList := "C3224,C3910"
		include := "minimal"
		expectedName1 := "Melanoma"
		expectedName2 := "Molecular Abnormality"

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetConcepts(context.Background(), terminology).List(codeList).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.Equal(t, expectedName1, resp[0].GetName(), "FAIL: Expected name %s not found", expectedName1)
		assert.Equal(t, expectedName2, resp[1].GetName(), "FAIL: Expected name %s not found", expectedName2)

		t.Logf("Get list of concepts for codes - %s", codeList)
	})

	t.Run("Test ConceptEndpointsAPIService GetDescendants", func(t *testing.T) {

		// ARRANGE
		var fromRecord int32 = 0
		var pageSize int32 = 100
		var maxLevel int32 = 4
		expectedName := "Adult Meningeal Melanoma"
		containsExpectedName := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetDescendants(context.Background(), terminology, code).
			FromRecord(fromRecord).PageSize(pageSize).MaxLevel(maxLevel).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Check if the expected name exists in the result
		for _, concept := range resp {
			assert.NotNil(t, concept.GetName())
			if strings.Contains(concept.GetName(), expectedName) {
				containsExpectedName = true
				break
			}
		}

		assert.True(t, containsExpectedName, "FAIL: Response doesn't contain the expected name")
		assert.Equal(t, int(pageSize), len(resp))

		t.Logf("Get list of descendants for code - %s", code)
	})

	t.Run("Test ConceptEndpointsAPIService GetDisjointWith", func(t *testing.T) {

		// ARRANGE
		code := "C3910"
		expectedRelatedCode := "C12913"
		expectedRelatedName := "Abnormal Cell"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetDisjointWith(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the response
		for _, disjoint := range resp {
			assert.NotNil(t, disjoint.GetRelatedCode())
			assert.NotNil(t, disjoint.GetRelatedName())
			if strings.Contains(disjoint.GetRelatedCode(), expectedRelatedCode) &&
				strings.Contains(disjoint.GetRelatedName(), expectedRelatedName) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected related code or name not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetHistory", func(t *testing.T) {

		// ARRANGE
		expectedName := "Melanoma"

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetHistory(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
		assert.NotNil(t, resp.GetHistory())
		assert.Equal(t, expectedName, resp.GetName(), "FAIL: Expected name doesn't match actual")
	})

	t.Run("Test ConceptEndpointsAPIService GetInverseAssociations", func(t *testing.T) {

		// ARRANGE
		expectedType := "Has_GDC_Value"
		expectedRelatedCode := "C178243"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetInverseAssociations(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Verify the response contains our expected type and related code
		for _, assoc := range resp {
			assert.NotNil(t, assoc.GetType())
			assert.NotNil(t, assoc.GetRelatedCode())
			if strings.Contains(assoc.GetType(), expectedType) &&
				strings.Contains(assoc.GetRelatedCode(), expectedRelatedCode) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected type or related code not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetInverseRoles", func(t *testing.T) {

		// ARRANGE
		expectedRelatedCode := "C21390"
		expectedRelatedName := "Beta/Gamma Crystallin Domain-Containing Protein 1"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetInverseRoles(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected related code and name
		for _, role := range resp {
			assert.NotNil(t, role.GetRelatedCode())
			assert.NotNil(t, role.GetRelatedName())
			if strings.Contains(role.GetRelatedCode(), expectedRelatedCode) &&
				strings.Contains(role.GetRelatedName(), expectedRelatedName) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected related code or name not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetMaps", func(t *testing.T) {

		// ARRANGE
		expectedTargetCode := "morphology"
		expectedTargetName := "Malignant melanoma, NOS"
		containsExpectedCode := false
		containsExpectedName := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetMaps(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the maps
		for _, conceptMap := range resp {
			assert.NotNil(t, conceptMap.GetTargetCode())
			assert.NotNil(t, conceptMap.GetTargetName())
			if strings.Contains(conceptMap.GetTargetCode(), expectedTargetCode) {
				containsExpectedCode = true
			}
			if strings.Contains(conceptMap.GetTargetName(), expectedTargetName) {
				containsExpectedName = true
			}
			if containsExpectedCode && containsExpectedName {
				break
			}
		}

		assert.True(t, containsExpectedCode, "FAIL: Expected target code not found")
		assert.True(t, containsExpectedName, "FAIL: Expected target name not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetParents", func(t *testing.T) {

		// ARRANGE
		expectedCode := "C9305"
		expectedName := "Malignant Neoplasm"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetParents(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the list of parents
		for _, concept := range resp {
			assert.NotNil(t, concept.GetName())
			assert.NotNil(t, concept.GetCode())
			if strings.Contains(concept.GetName(), expectedName) && strings.Contains(concept.GetCode(), expectedCode) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected parent code or name not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetPathsFromRoot", func(t *testing.T) {

		// ARRANGE
		expectedCode := "C7057"
		expectedName := "Disease, Disorder or Finding"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetPathsFromRoot(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the hierarchy map
		for _, conceptPath := range resp {
			for _, mapConcept := range conceptPath {
				assert.NotNil(t, mapConcept.GetCode())
				assert.NotNil(t, mapConcept.GetName())
				if strings.Contains(mapConcept.GetCode(), expectedCode) && strings.Contains(mapConcept.GetName(), expectedName) {
					containsExpectedValues = true
					break
				}
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected code or name not found in path from root")
	})

	t.Run("Test ConceptEndpointsAPIService GetPathsToRoot", func(t *testing.T) {

		// ARRANGE
		include := "minimal"
		var fromRecord int32 = 0
		expectedCode1 := "C3224"
		expectedName1 := "Melanoma"
		expectedCode2 := "C7058"
		expectedName2 := "Melanocytic Neoplasm"
		containsExpectedFirstPathValues := false
		containsExpectedSecondPathValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetPathsToRoot(context.Background(), terminology, code).
			Include(include).FromRecord(fromRecord).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the hierarchy map
		for _, conceptPath := range resp {
			for _, mapConcept := range conceptPath {
				assert.NotNil(t, mapConcept.GetCode())
				assert.NotNil(t, mapConcept.GetName())
				if strings.Contains(mapConcept.GetCode(), expectedCode1) && strings.Contains(mapConcept.GetName(), expectedName1) {
					containsExpectedFirstPathValues = true
				}
				if strings.Contains(mapConcept.GetCode(), expectedCode2) && strings.Contains(mapConcept.GetName(), expectedName2) {
					containsExpectedSecondPathValues = true
				}
				if containsExpectedFirstPathValues && containsExpectedSecondPathValues {
					break
				}
			}
		}

		assert.True(t, containsExpectedFirstPathValues, "FAIL: Expected first path values not found")
		assert.True(t, containsExpectedSecondPathValues, "FAIL: Expected second path values not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetPathsToAncestor", func(t *testing.T) {

		// ARRANGE
		ancestorCode := "C2991"
		include := "minimal"
		var fromRecord int32 = 0
		expectedAncestorName1 := "Melanoma"
		expectedAncestorName2 := "Melanocytic Neoplasm"
		expectedAncestorCode1 := "C3224"
		expectedAncestorCode2 := "C7058"
		containsExpectedFirstAncestor := false
		containsExpectedSecondAncestor := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetPathsToAncestor(context.Background(), terminology, code, ancestorCode).
			Include(include).FromRecord(fromRecord).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find the expected values in the ancestor map
		for _, conceptPath := range resp {
			for _, ancestor := range conceptPath {
				assert.NotNil(t, ancestor.GetName())
				assert.NotNil(t, ancestor.GetCode())
				if strings.Contains(ancestor.GetName(), expectedAncestorName1) && strings.Contains(ancestor.GetCode(), expectedAncestorCode1) {
					containsExpectedFirstAncestor = true
				}
				if strings.Contains(ancestor.GetName(), expectedAncestorName2) && strings.Contains(ancestor.GetCode(), expectedAncestorCode2) {
					containsExpectedSecondAncestor = true
				}
				if containsExpectedFirstAncestor && containsExpectedSecondAncestor {
					break
				}
			}
		}

		assert.True(t, containsExpectedFirstAncestor, "FAIL: Expected first ancestor not found")
		assert.True(t, containsExpectedSecondAncestor, "FAIL: Expected second ancestor not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetRoles1", func(t *testing.T) {

		// ARRANGE
		expectedRoleName := "Benign Cellular Infiltrate"
		expectedRoleCode := "C36122"
		expectedRoleType := "Disease_Excludes_Finding"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetRoles1(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the list of roles
		for _, role := range resp {
			assert.NotNil(t, role.GetType())
			assert.NotNil(t, role.GetRelatedCode())
			if strings.Contains(role.GetType(), expectedRoleType) && strings.Contains(role.GetRelatedCode(), expectedRoleCode) && strings.Contains(role.GetRelatedName(), expectedRoleName) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected role type or related code not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetRoots", func(t *testing.T) {

		// ARRANGE
		include := "minimal"
		expectedCode := "C12913"
		expectedName := "Abnormal Cell"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetRoots(context.Background(), terminology).Include(include).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the list of roots
		for _, root := range resp {
			assert.NotNil(t, root.GetName())
			assert.NotNil(t, root.GetCode())
			if strings.Contains(root.GetName(), expectedName) && strings.Contains(root.GetCode(), expectedCode) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected root code or name not found")
	})

	t.Run("Test ConceptEndpointsAPIService GetSubsetMembers1", func(t *testing.T) {

		// ARRANGE
		expectedCode := "C178243"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetSubsetMembers1(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the response
		for _, concept := range resp {
			assert.NotNil(t, concept.GetCode())
			assert.NotNil(t, concept.GetLeaf())
			if strings.Contains(concept.GetCode(), expectedCode) && concept.GetLeaf() {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected subset member code not found or not a leaf")
	})

	t.Run("Test ConceptEndpointsAPIService GetSubtree", func(t *testing.T) {

		// ARRANGE
		var limit int32 = 50
		expectedCode1 := "C12913"
		expectedCode2 := "C43431"
		containsExpectedCode1 := false
		containsExpectedCode2 := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetSubtree(context.Background(), terminology, code).Limit(limit).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find our expected values in the response
		for _, node := range resp {
			assert.NotNil(t, node.GetCode())
			if strings.Contains(node.GetCode(), expectedCode1) {
				containsExpectedCode1 = true
			}
			if strings.Contains(node.GetCode(), expectedCode2) {
				containsExpectedCode2 = true
			}
			if containsExpectedCode1 && containsExpectedCode2 {
				break
			}
		}

		assert.True(t, containsExpectedCode1, "FAIL: Expected code1 not found in the subtree")
		assert.True(t, containsExpectedCode2, "FAIL: Expected code2 not found in the subtree")
	})

	t.Run("Test ConceptEndpointsAPIService GetSubtreeChildren", func(t *testing.T) {

		// ARRANGE
		expectedCode := "C3802"
		expectedLabel := "Amelanotic Melanoma"
		containsExpectedValues := false

		// ACT
		resp, httpRes, err := apiClient.ConceptEndpointsAPI.GetSubtreeChildren(context.Background(), terminology, code).Execute()

		// ASSERT
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

		// Find the expected values in the children of the subtree
		for _, child := range resp {
			assert.NotNil(t, child.GetLabel())
			assert.NotNil(t, child.GetCode())
			if strings.Contains(child.GetLabel(), expectedLabel) && strings.Contains(child.GetCode(), expectedCode) {
				containsExpectedValues = true
				break
			}
		}

		assert.True(t, containsExpectedValues, "FAIL: Expected subtree child name or code not found")
	})

}
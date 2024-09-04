from typing import List

import pytest
import logging

from evs import Association, AssociationEntryResultList, Concept, ConceptEndpointsApi, ConceptMap, DisjointWith, \
    HierarchyNode, Role


@pytest.fixture
def concept_api():
    """
    Instantiate the ConceptEndpointsApi
    """
    return ConceptEndpointsApi()


class TestConceptEndpointsApi:
    """
    API tests for ConceptEndpointsApi. These tests will demonstrate how to call the APIs and log the
     information that is returned. The asserts are used to ensure that the data we are pulling align
     with what is expected based on how we are modeling the information.

    <p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
      to align with the data we expect may be needed.
    """
    # Test Terminology
    terminology: str = "ncit"
    # Most commonly used ncit code
    code: str = "C3224"
    
    # Create logger from pytest.ini settings
    logger = logging.getLogger(__name__)
    
    def test_get_association_entries(self, concept_api):
        """
        Get the association entries for the specified terminology and code. Associations used to define
        subset membership are not resolved by this call
        """
        # ARRANGE - using global variables unless otherwise listed below
        code_or_label: str = "A5"
        from_record: int = 0
        page_size: int = 100
        expected_related_name: str = "Naluzotan Hydrochloride"
        contains_expected_name: bool = False
        
        # ACT
        response: AssociationEntryResultList = concept_api.get_association_entries(self.terminology, code_or_label,
                                                                                   from_record, page_size, None)
        
        # ASSERT
        assert response is not None
        # check our expected related name exists in the result
        for entry in response.association_entries:
            if entry.related_name.__contains__(expected_related_name):
                contains_expected_name = True
                break
        
        assert contains_expected_name is True, "FAIL: Response doesn't contain the expected related name"
        
        self.logger.info(f"Get association entries for code/label - {code_or_label}")
        self.logger.info(f"   association entries = {str(response)}")
    
    def test_get_associations1(self, concept_api):
        """
        Get the associations for a specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_related_name: str = "CDISC SEND Terminology"
        expected_type: str = "Concept_In_Subset"
        
        # ACT
        response: [Association] = concept_api.get_associations1(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        assoc: Association = response[0]
        assert assoc is not None
        assert expected_related_name == assoc.related_name, "FAIL: Actual related name doesn't match expected"
        
        assert expected_type == assoc.type, "FAIL: Actual type doesn't match expected"
        
        self.logger.info(f"Get associations for code - {self.code}")
        self.logger.info(f"   associations = {str(response)}")
    
    def test_get_children(self, concept_api):
        """
        Get child concepts for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_name: str = "Melanoma"
        
        # ACT
        response: List[Concept] = concept_api.get_children(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        assert response[0].name is not None
        assert response[0].name.__contains__(expected_name), "FAIL: Response doesn't contain the expected name"
        
        self.logger.info(f"Get children for code - {self.code}")
        self.logger.info(f"   children = {str(response)}")
        
        def test_get_concept(self, concept_api):
            """
            Get the concept for the specified terminology and code
            """
        
        # ARRANGE - using global variables unless otherwise listed below
        include: str = "minimal"
        expected_name: str = "Melanoma"
        
        # ACT
        response: Concept = concept_api.get_concept(self.terminology, self.code, None, include, None)
        
        # ASSERT
        assert response is not None
        assert expected_name == response.name, (
            f"Actual name doesn't match expected: {response.name} != {expected_name}")
        
        self.logger.info(f"Get a single concept for code - {self.code}")
        self.logger.info(f"   concept = {str(response)}")
    
    def test_get_concept_summary(self, concept_api):
        """
        Get the summary concept for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        include: str = "summary"
        expected_name: str = "Melanoma"
        
        # ACT
        response: Concept = concept_api.get_concept(self.terminology, self.code, None, include, None)
        
        # ASSERT
        assert response is not None
        assert response.name is not None
        assert expected_name == response.name, "FAIL: Actual name doesn't match expected"
        
        self.logger.info(f"Get a summary concept for code - {self.code}")
        self.logger.info(f"   concept = {str(response)}")
    
    def test_get_concept_full(self, concept_api):
        """
        Get the full concept for the specified terminology and code
        """
        # ARRANGE - using global variable unless otherwise listed below
        include: str = "full"
        expected_name: str = "Melanoma"
        
        # ACT
        response: Concept = concept_api.get_concept(self.terminology, self.code, None, include, None)
        
        # ASSERT
        assert response is not None
        assert response.name is not None
        assert expected_name == response.name, (f"Actual name doesn't match expected: {response.name} !="
                                                f" {expected_name}")
        
        self.logger.info(f"Get a full concept for code - {self.code}")
        self.logger.info(f"   concept = {str(response)}")
    
    def test_get_concept_custom_include(self, concept_api):
        """
        Get the custom include concept for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        include: str = "synonyms,children,maps,inverseAssociations"
        expected_name: str = "Melanoma"
        
        # ACT
        response: Concept = concept_api.get_concept(self.terminology, self.code, None, include, None)
        
        # ASSERT
        assert response is not None
        assert response.name is not None
        assert expected_name == response.name, "FAIL: Actual name doesn't match expected"
        
        self.logger.info(f"Get a custom include concept for code - {self.code}")
        self.logger.info(f"   concept = {str(response)}")
    
    def test_get_concepts(self, concept_api):
        """
        Get concepts specified by list parameter
        """
        # ARRANGE - using global variables unless otherwise listed below
        code_list: str = "C3224,C3910"
        include: str = "minimal"
        expected_name1: str = "Molecular Abnormality"
        expected_name2: str = "Melanoma"
        
        # ACT
        response: [Concept] = concept_api.get_concepts(self.terminology, code_list, include, None)
        
        # ASSERT
        assert response is not None
        assert expected_name1 == response[0].name, f"FAIL: Expected name {expected_name1} not found"
        assert expected_name2 == response[1].name, f"FAIL: Expected name {expected_name2} not found"
        
        self.logger.info(f"Get list of concepts for codes - {code_list[0]} & {code_list[1]}")
        self.logger.info(f"   concepts = {str(response)}")
    
    def test_get_descendants(self, concept_api):
        """
        Get descendant concepts for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        from_record: int = 0
        page_size: int = 100
        max_level: int = 4
        expected_name: str = "Adult Meningeal Melanoma"
        contains_expected_name: bool = False
        
        # ACT
        response: List[Concept] = concept_api.get_descendants(self.terminology, self.code, from_record, page_size,
                                                              max_level, None)
        
        # ASSERT
        assert response is not None
        # check our expected name exists in the result
        for concept in response:
            assert concept.name is not None
            if concept.name.__contains__(expected_name):
                contains_expected_name = True
                break
        
        assert contains_expected_name is True
        assert page_size == len(response)
        
        self.logger.info(f"Get list of descendants for code - {self.code}")
        self.logger.info(f"   descendants = {str(response)}")
    
    def test_get_disjoint_with(self, concept_api):
        """
        Get disjoint with info for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        code: str = "C3910"
        expected_related_code: str = "C12913"
        expected_related_name: str = "Abnormal Cell"
        contains_expected_values: bool = False
        
        # ACT
        response: List[DisjointWith] = concept_api.get_disjoint_with(self.terminology, code, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for disjoint in response:
            assert disjoint.related_code is not None
            assert disjoint.related_name is not None
            if disjoint.related_code.__contains__(expected_related_code) and disjoint.related_name.__contains__(
                    expected_related_name):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get list of disjoint with for code - {code}")
        self.logger.info(f"   disjoint with = {str(response)}")
    
    def test_get_history(self, concept_api):
        """
        Get history for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_name: str = "Melanoma"
        
        # ACT
        response: Concept = concept_api.get_history(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        assert response.history is not None
        assert expected_name == response.name, "FAIL: Expected name doesn't match actual"
        
        self.logger.info(f"Get history for code - {self.code}")
        self.logger.info(f"   history = {str(response)}")
    
    def test_get_inverse_associations(self, concept_api):
        # ARRANGE - using global variables unless otherwise listed below
        expected_type: str = "Has_GDC_Value"
        expected_related_code: str = "C178243"
        contains_expected_values: bool = False
        
        # ACT
        response: [Association] = concept_api.get_inverse_associations(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        # Verify the response contains our expected type and related code
        for assoc in response:
            assert assoc.type is not None
            assert assoc.related_code is not None
            if assoc.type.__contains__(expected_type) and assoc.related_code.__contains__(expected_related_code):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get inverse associations for code - {self.code}")
        self.logger.info(f"   inverse associations = {str(response)}")
    
    def test_get_inverse_roles(self, concept_api):
        """
        Get inverse roles for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_related_code: str = "C21390"
        expected_related_name: str = "Beta/Gamma Crystallin Domain-Containing Protein 1"
        contains_expected_values: bool = False
        
        # ACT
        response: [Role] = concept_api.get_inverse_roles(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        
        for role in response:
            assert role.related_code is not None
            assert role.related_name is not None
            if role.related_code.__contains__(expected_related_code) and role.related_name.__contains__(
                    expected_related_name):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get inverse roles for code - {self.code}")
        self.logger.info(f"   inverse roles = {str(response)}")
    
    def test_get_maps(self, concept_api):
        """
        Get maps for the specified terminology and code
        """
        
        # ARRANGE - using global variables unless otherwise listed below
        expected_target_code: str = "morphology"
        expected_target_name: str = "Malignant melanoma, NOS"
        contains_expected_code: bool = False
        contains_expected_name: bool = False
        
        # ACT
        response: [ConceptMap] = concept_api.get_maps(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the maps
        for conceptMap in response:
            assert conceptMap.target_code is not None
            assert conceptMap.target_name is not None
            if conceptMap.target_code.__contains__(expected_target_code):
                contains_expected_code = True
            if conceptMap.target_name.__contains__(expected_target_name):
                contains_expected_name = True
            if contains_expected_name is True and contains_expected_code is True:
                break
        
        assert contains_expected_name is True
        assert contains_expected_code is True
        
        self.logger.info(f"Get maps for code - {self.code}")
        self.logger.info(f"   maps = {str(response)}")
    
    def test_get_parents(self, concept_api):
        
        """
        Get parent concepts for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_code: str = "C9305"
        expected_name: str = "Malignant Neoplasm"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = concept_api.get_parents(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the list of parents
        for concept in response:
            assert concept.name is not None
            assert concept.code is not None
            if concept.name.__contains__(expected_name) and concept.code.__contains__(expected_code):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get parents for code - {self.code}")
        self.logger.info(f"   parents = {str(response)}")
    
    def test_get_paths_from_root(self, concept_api):
        
        """
        Get paths from root for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_code: str = "C7057"
        expected_name: str = "Disease, Disorder or Finding"
        contains_expected_values = False
        
        # ACT
        response: [[Concept]] = concept_api.get_paths_from_root(self.terminology, self.code, None, None, None, None)
        
        assert response is not None
        # Find our expected values in the hierarchy map
        for concept in response:
            for mapConcept in concept:
                assert mapConcept.code is not None
                assert mapConcept.name is not None
                if mapConcept.code.__contains__(expected_code) and mapConcept.name.__contains__(expected_name):
                    contains_expected_values = True
                    break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get paths from hierarchy root for code - {self.code}")
        self.logger.info(f"   paths from root = {str(response)}")
    
    def test_get_paths_to_root(self, concept_api):
        
        """
        Get paths to root for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        include: str = "minimal"
        from_record: int = 0
        expected_code1: str = "C3224"
        expected_name1: str = "Melanoma"
        contains_expected_first_path_values = False
        expected_code2: str = "C7058"
        expected_name2: str = "Melanocytic Neoplasm"
        contains_expected_second_path_values = False
        
        # ACT
        response: [[Concept]] = concept_api.get_paths_to_root(self.terminology, self.code, include, from_record, None,
                                                              None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the hierarchy map
        for concept in response:
            for mapConcept in concept:
                assert mapConcept.code is not None
                assert mapConcept.name is not None
                if mapConcept.code.__contains__(expected_code1) and mapConcept.name.__contains__(expected_name1):
                    contains_expected_first_path_values = True
                if mapConcept.code.__contains__(expected_code2) and mapConcept.name.__contains__(expected_name2):
                    contains_expected_second_path_values = True
                if contains_expected_first_path_values is True and contains_expected_second_path_values is True:
                    break
        
        assert contains_expected_first_path_values is True
        assert contains_expected_second_path_values is True
        
        self.logger.info(f"Get paths to hierarchy root for code - {self.code}")
        self.logger.info(f"   paths to root = {str(response)}")
    
    def test_get_paths_to_ancestor(self, concept_api):
        """
        Get paths to ancestor for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        ancestor_code: str = "C2991"
        include: str = "minimal"
        from_record: int = 0
        expected_ancestor_name1: str = "Melanoma"
        expected_ancestor_name2: str = "Melanocytic Neoplasm"
        expected_ancestor_code1: str = "C3224"
        expected_ancestor_code2: str = "C7058"
        contains_expected_first_ancestor: bool = False
        contains_expected_second_ancestor: bool = False
        
        # ACT
        response: [[Concept]] = concept_api.get_paths_to_ancestor(self.terminology, self.code, ancestor_code, include,
                                                                  from_record, None, None)
        
        # ASSERT
        assert response is not None
        # Find the expected values in the ancestory map
        for concept in response:
            for ancestor in concept:
                assert ancestor.name is not None
                assert ancestor.code is not None
                if ancestor.name.__contains__(expected_ancestor_name1) and ancestor.code.__contains__(
                        expected_ancestor_code1):
                    contains_expected_first_ancestor = True
                if ancestor.name.__contains__(expected_ancestor_name2) and ancestor.code.__contains__(
                        expected_ancestor_code2):
                    contains_expected_second_ancestor = True
                if contains_expected_first_ancestor is True and contains_expected_second_ancestor is True:
                    break
        
        assert contains_expected_first_ancestor is True
        assert contains_expected_second_ancestor is True
        
        self.logger.info(f"Get paths from code to ancestor code - {self.code} to {ancestor_code}")
        self.logger.info(f"   paths to ancestor code = {str(response)}")
        
    def test_get_roles1(self, concept_api):
        """
        Get roles for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_related_code: str = "C36122"
        expected_related_name: str = "Benign Cellular Infiltrate"
        contains_expected_values: bool = False
        
        # ACT
        response: [Role] = concept_api.get_roles1(self.terminology, self.code, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the list of Roles
        for role in response:
            assert role.related_code is not None
            assert role.related_name is not None
            if role.related_code.__contains__(expected_related_code) and role.related_name.__contains__(
                    expected_related_name):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get roles for code - {self.code}")
        self.logger.info(f"   roles = {str(response)}")
        
    def test_get_roots(self, concept_api):
        
        """
        Get root concepts for the specified terminology
        """
        # ARRANGE - using global variables unless otherwise listed below
        include: str = "minimal"
        expected_code: str = "C12913"
        expected_name: str = "Abnormal Cell"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = concept_api.get_roots(self.terminology, include, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the list of roots
        for root in response:
            assert root.name is not None
            assert root.code is not None
            if root.name.__contains__(expected_name) and root.code.__contains__(expected_code):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get root concepts for terminology - {self.terminology}")
        self.logger.info(f"   root concepts = {str(response)}")
        
    def test_get_subset_members1(self, concept_api):
        
        """
        Get subset members for the specified terminology and code
        """
        # ARRANGE - using global variables unless otherwise listed below
        expected_code: str = "C178243"
        contains_expected_values: bool = False
        
        # ACT
        response: [Concept] = concept_api.get_subset_members1(self.terminology, self.code, None, None, None, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for concept in response:
            assert concept.code is not None
            assert concept.leaf is not None
            if concept.code.__contains__(expected_code) and concept.leaf is True:
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get subset members for code - {self.code}")
        self.logger.info(f"   subset members = {str(response)}")
        
    def test_get_subtree(self, concept_api):
        """
        Get the entire subtree from the root node to the specified code
        """
        # ARRANGE - using global variables unless otherwise listed below
        limit: int = 50
        expected_code1: str = "C12913"
        expected_code2: str = "C43431"
        contains_expected_code1: bool = False
        contains_expected_code2: bool = False
        
        # ACT
        response: [HierarchyNode] = concept_api.get_subtree(self.terminology, self.code, limit, None)
        
        # ASSERT
        assert response is not None
        # Find our expected values in the response
        for node in response:
            assert node.code is not None
            if node.code.__contains__(expected_code1):
                contains_expected_code1 = True
            if node.code.__contains__(expected_code2):
                contains_expected_code2 = True
            if contains_expected_code1 is True and contains_expected_code2 is True:
                break
        
        assert contains_expected_code1 is True
        assert contains_expected_code2 is True
        
        self.logger.info(f"Get the entire subtree from root to node for code - {self.code}")
        self.logger.info(f"   subtree = {str(response)}")
    
    def test_get_subtree_children(self, concept_api):
        """
        Get the entire subtree children from the root node to the specified code
        """
        # ARRANGE - using global variables unless otherwise listed below
        limit: int = 100
        expected_code: str = "C3802"
        expected_label: str = "Amelanotic Melanoma"
        contains_expected_values: bool = False
        
        # ACT
        response: [HierarchyNode] = concept_api.get_subtree_children(self.terminology, self.code, limit, None)
        
        # ASSERT
        assert response is not None
        for child in response:
            assert child.code is not None
            assert child.label is not None
            if child.code.__contains__(expected_code) and child.label.__contains__(expected_label):
                contains_expected_values = True
                break
        
        assert contains_expected_values is True
        
        self.logger.info(f"Get all subtree children for code - {self.code}")
        self.logger.info(f"   subtree children = {str(response)}")

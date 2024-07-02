import string
import unittest
import logging
from gov.nih.nci.evs.api import ConceptEndpointsApi
from gov.nih.nci.evs.api.models import Association, AssociationEntryResultList, Concept, ConceptMap, DisjointWith, \
	HierarchyNode, Role


class TestConceptEndpointsApi(unittest.TestCase):
	"""
	API tests for ConceptEndpointsApi. These tests will demonstrate how to call the APIs and log the
 	information that is returned. The asserts are used to ensure that the data we are pulling align
 	with what is expected based on how we are modeling the information.

	<p>NOTE: the asserts may be subject to change as the data evolves over time. Updating the tests
 	 to align with the data we expect may be needed.
	"""
	# Test Terminology
	terminology = "ncit"
	# Most commonly used ncit code
	code = "C3224"
	
	# Create logger from pytest.ini settings
	logger = logging.getLogger(__name__)
	
	@classmethod
	def setUpClass(cls):
		"""
		Instantiate the ConceptEndpointsApi
		"""
		cls.api = ConceptEndpointsApi()
	
	def test_get_association_entries(self):
		"""
		Get the association entries for the specified terminology and code. Associations used to define
		subset membership are not resolved by this call
		"""
		# ARRANGE - using global variables unless otherwise listed below
		code_or_label: string = "A5"
		from_record: int = 0
		page_size: int = 100
		expected_related_name: string = "Naluzotan Hydrochloride"
		contains_expected_name: bool = False
		
		# ACT
		response: AssociationEntryResultList = self.api.get_association_entries(self.terminology, code_or_label,
																				from_record, page_size, None)
		
		# ASSERT
		assert response is not None
		# check our expected related name exists in the result
		for entry in response.association_entries:
			if entry.related_name.__contains__(expected_related_name):
				contains_expected_name = True
				break
		
		self.assertTrue(contains_expected_name,
						f"Response doesn't contain the expected related name: {expected_related_name}")
		
		self.logger.info(f"Get association entries for code/label - {code_or_label}")
		self.logger.info(f"   association entries = {str(response)}")
	
	def test_get_associations1(self):
		"""
		Get the associations for a specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_related_name: string = "CDISC SEND Terminology"
		expected_type: string = "Concept_In_Subset"
		
		# ACT
		response: [Association] = self.api.get_associations1(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		assoc: Association = response[0]
		self.assertIsNotNone(assoc)
		self.assertEqual(expected_related_name, assoc.related_name,
						 f"Actual related name doesn't match expected: {assoc.related_name} != {expected_related_name}")
		self.assertEqual(expected_type, assoc.type,
						 f"Actual type doesn't match expected: {assoc.type} != {expected_type}")
		
		self.logger.info(f"Get associations for code - {self.code}")
		self.logger.info(f"   associations = {str(response)}")
	
	def test_get_children(self):
		"""
		Get child concepts for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_name: string = "Melanoma"
		
		# ACT
		response: [Concept] = self.api.get_children(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertIsNotNone(response[0].name)
		self.assertTrue(response[0].name.__contains__(expected_name),
						f"Response doesn't contain the expected name: {expected_name}")
		
		self.logger.info(f"Get children for code - {self.code}")
		self.logger.info(f"   children = {str(response)}")
	
	def test_get_concept(self):
		"""
		Get the concept for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		include: string = "minimal"
		expected_name: string = "Melanoma"
		
		# ACT
		response: Concept = self.api.get_concept(self.terminology, self.code, None, include, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertEqual(expected_name, response.name,
						 f"Actual name doesn't match expected: {response.name} != {expected_name}")
		
		self.logger.info(f"Get a single concept for code - {self.code}")
		self.logger.info(f"   concept = {str(response)}")
	
	def test_get_concept_summary(self):
		"""
		Get the summary concept for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		include: string = "summary"
		expected_name: string = "Melanoma"
		
		# ACT
		response: Concept = self.api.get_concept(self.terminology, self.code, None, include, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertIsNotNone(response.name)
		self.assertEqual(expected_name, response.name,
						 f"Actual name doesn't match expected: {response.name} != {expected_name}")
		
		self.logger.info(f"Get a summary concept for code - {self.code}")
		self.logger.info(f"   concept = {str(response)}")
	
	def test_get_concept_full(self):
		"""
		Get the full concept for the specified terminology and code
		"""
		# ARRANGE - using global variable unless otherwise listed below
		include: string = "full"
		expected_name: string = "Melanoma"
		
		# ACT
		response: Concept = self.api.get_concept(self.terminology, self.code, None, include, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertIsNotNone(response.name)
		self.assertEqual(expected_name, response.name,
						 f"Actual name doesn't match expected: {response.name} != {expected_name}")
		
		self.logger.info(f"Get a full concept for code - {self.code}")
		self.logger.info(f"   concept = {str(response)}")
	
	def test_concept_custom_include(self):
		"""
		Get the custom include concept for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		include: string = "synonyms,children,maps,inverseAssociations"
		expected_name: string = "Melanoma"
		
		# ACT
		response: Concept = self.api.get_concept(self.terminology, self.code, None, include, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertIsNotNone(response.name)
		self.assertEqual(expected_name, response.name,
						 f"Actual name doesn't match expected: {response.name} != {expected_name}")
		
		self.logger.info(f"Get a custom include concept for code - {self.code}")
		self.logger.info(f"   concept = {str(response)}")
	
	def test_get_concepts(self):
		"""
		Get concepts specified by list parameter
		"""
		# ARRANGE - using global variables unless otherwise listed below
		code_list: string = "C3224,C3910"
		include: string = "minimal"
		expected_name1: string = "Molecular Abnormality"
		expected_name2: string = "Melanoma"
		
		# ACT
		response: [Concept] = self.api.get_concepts(self.terminology, code_list, include, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertEqual(expected_name1, response[0].name)
		self.assertEqual(expected_name2, response[1].name)
		
		self.logger.info(f"Get list of concepts for codes - {code_list[0]} & {code_list[1]}")
		self.logger.info(f"   concepts = {str(response)}")
	
	def test_get_descendants(self):
		"""
		Get descendant concepts for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		from_record: int = 0
		page_size: int = 100
		max_level: int = 4
		expected_name: string = "Adult Meningeal Melanoma"
		contains_expected_name: bool = False
		
		# ACT
		response: [Concept] = self.api.get_descendants(self.terminology, self.code, from_record, page_size,
													   max_level, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# check our expected name exists in the result
		for concept in response:
			self.assertIsNotNone(concept.name)
			if concept.name.__contains__(expected_name):
				contains_expected_name = True
				break
		
		self.assertTrue(contains_expected_name)
		self.assertEqual(page_size, len(response))
		
		self.logger.info(f"Get list of descendants for code - {self.code}")
		self.logger.info(f"   descendants = {str(response)}")
	
	def test_get_disjoint_with(self):
		"""
		Get disjoint with info for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		code: string = "C3910"
		expected_related_code: string = "C12913"
		expected_related_name: string = "Abnormal Cell"
		contains_expected_values: bool = False
		
		# ACT
		response: [DisjointWith] = self.api.get_disjoint_with(self.terminology, code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the response
		for disjoint in response:
			self.assertIsNotNone(disjoint.related_code)
			self.assertIsNotNone(disjoint.related_name)
			if disjoint.related_code.__contains__(expected_related_code) and disjoint.related_name.__contains__(
					expected_related_name):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get list of disjoint with for code - {code}")
		self.logger.info(f"   disjoint with = {str(response)}")
	
	def test_get_history(self):
		"""
		Get history for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_name: string = "Melanoma"
		
		# ACT
		response: Concept = self.api.get_history(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		self.assertIsNotNone(response.history)
		self.assertEqual(expected_name, response.name)
		
		self.logger.info(f"Get history for code - {self.code}")
		self.logger.info(f"   history = {str(response)}")
	
	def test_get_inverse_associations(self):
		# ARRANGE - using global variables unless otherwise listed below
		expected_type: string = "Has_GDC_Value"
		expected_related_code: string = "C178243"
		contains_expected_values: bool = False
		
		# ACT
		response: [Association] = self.api.get_inverse_associations(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Verify the response contains our expected type and related code
		for assoc in response:
			self.assertIsNotNone(assoc.type)
			self.assertIsNotNone(assoc.related_code)
			if assoc.type.__contains__(expected_type) and assoc.related_code.__contains__(expected_related_code):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get inverse associations for code - {self.code}")
		self.logger.info(f"   inverse associations = {str(response)}")
	
	def test_get_inverse_roles(self):
		"""
		Get inverse roles for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_related_code: string = "C21390"
		expected_related_name: string = "Beta/Gamma Crystallin Domain-Containing Protein 1"
		contains_expected_values: bool = False
		
		# ACT
		response: [Role] = self.api.get_inverse_roles(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		
		for role in response:
			self.assertIsNotNone(role.related_code)
			self.assertIsNotNone(role.related_name)
			if role.related_code.__contains__(expected_related_code) and role.related_name.__contains__(
					expected_related_name):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get inverse roles for code - {self.code}")
		self.logger.info(f"   inverse roles = {str(response)}")
	
	def test_get_maps(self):
		"""
		Get maps for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_target_code: string = "morphology"
		expected_target_name: string = "Malignant melanoma, NOS"
		contains_expected_code: bool = False
		contains_expected_name: bool = False
		
		# ACT
		response: [ConceptMap] = self.api.get_maps(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the maps
		for conceptMap in response:
			self.assertIsNotNone(conceptMap.target_code)
			self.assertIsNotNone(conceptMap.target_name)
			if conceptMap.target_code.__contains__(expected_target_code):
				contains_expected_code = True
			if conceptMap.target_name.__contains__(expected_target_name):
				contains_expected_name = True
			if contains_expected_name is True and contains_expected_code is True:
				break
		
		self.assertTrue(contains_expected_name)
		self.assertTrue(contains_expected_code)
		
		self.logger.info(f"Get maps for code - {self.code}")
		self.logger.info(f"   maps = {str(response)}")
	
	def test_get_parents(self):
		"""
		Get parent concepts for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_code: string = "C9305"
		expected_name: string = "Malignant Neoplasm"
		contains_expected_values: bool = False
		
		# ACT
		response: [Concept] = self.api.get_parents(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the list of parents
		for concept in response:
			self.assertIsNotNone(concept.name)
			self.assertIsNotNone(concept.code)
			if concept.name.__contains__(expected_name) and concept.code.__contains__(expected_code):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get parents for code - {self.code}")
		self.logger.info(f"   parents = {str(response)}")
	
	def test_get_paths_from_root(self):
		"""
		Get paths from root for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_code: string = "C7057"
		expected_name: string = "Disease, Disorder or Finding"
		contains_expected_values = False
		
		# ACT
		response: [[Concept]] = self.api.get_paths_from_root(self.terminology, self.code, None, None, None, None)
		
		self.assertIsNotNone(response)
		# Find our expected values in the hierarchy map
		for concept in response:
			for mapConcept in concept:
				self.assertIsNotNone(mapConcept.code)
				self.assertIsNotNone(mapConcept.name)
				if mapConcept.code.__contains__(expected_code) and mapConcept.name.__contains__(expected_name):
					contains_expected_values = True
					break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get paths from hierarchy root for code - {self.code}")
		self.logger.info(f"   paths from root = {str(response)}")
	
	def test_get_paths_to_root(self):
		"""
		Get paths to root for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		include: string = "minimal"
		from_record: int = 0
		expected_code1: string = "C3224"
		expected_name1: string = "Melanoma"
		contains_expected_first_path_values = False
		expected_code2: string = "C7058"
		expected_name2: string = "Melanocytic Neoplasm"
		contains_expected_second_path_values = False
		
		# ACT
		response: [[Concept]] = self.api.get_paths_to_root(self.terminology, self.code, include, from_record, None,
														   None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the hierarchy map
		for concept in response:
			for mapConcept in concept:
				self.assertIsNotNone(mapConcept.code)
				self.assertIsNotNone(mapConcept.name)
				if mapConcept.code.__contains__(expected_code1) and mapConcept.name.__contains__(expected_name1):
					contains_expected_first_path_values = True
				if mapConcept.code.__contains__(expected_code2) and mapConcept.name.__contains__(expected_name2):
					contains_expected_second_path_values = True
				if contains_expected_first_path_values is True and contains_expected_second_path_values is True:
					break
		
		self.assertTrue(contains_expected_first_path_values)
		self.assertTrue(contains_expected_second_path_values)
		
		self.logger.info(f"Get paths to hierarchy root for code - {self.code}")
		self.logger.info(f"   paths to root = {str(response)}")
	
	def test_get_paths_to_ancestor(self):
		"""
		Get paths to ancestor for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		ancestor_code: string = "C2991"
		include: string = "minimal"
		from_record: int = 0
		expected_ancestor_name1: string = "Melanoma"
		expected_ancestor_name2: string = "Melanocytic Neoplasm"
		expected_ancestor_code1: string = "C3224"
		expected_ancestor_code2: string = "C7058"
		contains_expected_first_ancestor: bool = False
		contains_expected_second_ancestor: bool = False
		
		# ACT
		response: [[Concept]] = self.api.get_paths_to_ancestor(self.terminology, self.code, ancestor_code, include,
															   from_record, None, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find the expected values in the ancestory map
		for concept in response:
			for ancestor in concept:
				self.assertIsNotNone(ancestor.name)
				self.assertIsNotNone(ancestor.code)
				if ancestor.name.__contains__(expected_ancestor_name1) and ancestor.code.__contains__(
						expected_ancestor_code1):
					contains_expected_first_ancestor = True
				if ancestor.name.__contains__(expected_ancestor_name2) and ancestor.code.__contains__(
						expected_ancestor_code2):
					contains_expected_second_ancestor = True
				if contains_expected_first_ancestor is True and contains_expected_second_ancestor is True:
					break
		
		self.assertTrue(contains_expected_first_ancestor)
		self.assertTrue(contains_expected_second_ancestor)
		
		self.logger.info(f"Get paths from code to ancestor code - {self.code} to {ancestor_code}")
		self.logger.info(f"   paths to ancestor code = {str(response)}")
	
	def test_get_roles1(self):
		"""
		Get roles for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_related_code: string = "C36122"
		expected_related_name: string = "Benign Cellular Infiltrate"
		contains_expected_values: bool = False
		
		# ACT
		response: [Role] = self.api.get_roles1(self.terminology, self.code, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the list of Roles
		for role in response:
			self.assertIsNotNone(role.related_code)
			self.assertIsNotNone(role.related_name)
			if role.related_code.__contains__(expected_related_code) and role.related_name.__contains__(
					expected_related_name):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get roles for code - {self.code}")
		self.logger.info(f"   roles = {str(response)}")
	
	def test_get_roots(self):
		"""
		Get root concepts for the specified terminology
		"""
		# ARRANGE - using global variables unless otherwise listed below
		include: string = "minimal"
		expected_code: string = "C12913"
		expected_name: string = "Abnormal Cell"
		contains_expected_values: bool = False
		
		# ACT
		response: [Concept] = self.api.get_roots(self.terminology, include, None)
		
		# ASSERT
		self.assertTrue(response)
		# Find our expected values in the list of roots
		for root in response:
			self.assertIsNotNone(root.name)
			self.assertIsNotNone(root.code)
			if root.name.__contains__(expected_name) and root.code.__contains__(expected_code):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get root concepts for terminology - {self.terminology}")
		self.logger.info(f"   root concepts = {str(response)}")
	
	def test_get_subset_members1(self):
		"""
		Get subset members for the specified terminology and code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		expected_code: string = "C178243"
		contains_expected_values: bool = False
		
		# ACT
		response: [Concept] = self.api.get_subset_members1(self.terminology, self.code, None, None, None, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the response
		for concept in response:
			self.assertIsNotNone(concept.code)
			self.assertIsNotNone(concept.leaf)
			if concept.code.__contains__(expected_code) and concept.leaf is True:
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get subset members for code - {self.code}")
		self.logger.info(f"   subset members = {str(response)}")
	
	def test_get_subtree(self):
		"""
		Get the entire subtree from the root node to the specified code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		limit: int = 50
		expected_code1: string = "C12913"
		expected_code2: string = "C43431"
		contains_expected_code1: bool = False
		contains_expected_code2: bool = False
		
		# ACT 
		response: [HierarchyNode] = self.api.get_subtree(self.terminology, self.code, limit, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		# Find our expected values in the response
		for node in response:
			self.assertIsNotNone(node.code)
			if node.code.__contains__(expected_code1):
				contains_expected_code1 = True
			if node.code.__contains__(expected_code2):
				contains_expected_code2 = True
			if contains_expected_code1 is True and contains_expected_code2 is True:
				break
		
		self.assertTrue(contains_expected_code1)
		self.assertTrue(contains_expected_code2)
		
		self.logger.info(f"Get the entire subtree from root to node for code - {self.code}")
		self.logger.info(f"   subtree = {str(response)}")
	
	def test_get_subtree_children(self):
		"""
		Get the entire subtree children from the root node to the specified code
		"""
		# ARRANGE - using global variables unless otherwise listed below
		limit: int = 100
		expected_code: string = "C3802"
		expected_label: string = "Amelanotic Melanoma"
		contains_expected_values: bool = False
		
		# ACT
		response: [HierarchyNode] = self.api.get_subtree_children(self.terminology, self.code, limit, None)
		
		# ASSERT
		self.assertIsNotNone(response)
		for child in response:
			self.assertIsNotNone(child.code)
			self.assertIsNotNone(child.label)
			if child.code.__contains__(expected_code) and child.label.__contains__(expected_label):
				contains_expected_values = True
				break
		
		self.assertTrue(contains_expected_values)
		
		self.logger.info(f"Get all subtree children for code - {self.code}")
		self.logger.info(f"   subtree children = {str(response)}")


if __name__ == '__main__':
	unittest.main()

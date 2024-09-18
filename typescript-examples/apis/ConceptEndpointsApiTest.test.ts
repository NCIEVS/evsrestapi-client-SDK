import { Association, Concept, ConceptEndpointsApi, ConceptMap, DisjointWith, HierarchyNode, Role } from "..";
import { createConfiguration } from "..";
import { AssociationEntryResultList } from "../models/AssociationEntryResultList";
import { server1 } from "..";

import { Logger } from "tslog";

const logger: Logger<string> = new Logger();

const configuration = createConfiguration({
    baseServer: server1
});

describe("TestConceptEndpointsApi", () => {
  const terminology: string = "ncit"; // default code and terminology
  const code: string = "C3224";
  const conceptApi: ConceptEndpointsApi = new ConceptEndpointsApi(
    configuration
  );

  test("test_get_association_entries", async () => {
    // ARRANGE
  const fromRecord: number = 0;
  const pageSize: number = 100;
  const codeOrLabel: string = "A5";
  const expectedRelatedName: string = "Naluzotan Hydrochloride";
  let containsExpectedName = false;

  // ACT
  const response: AssociationEntryResultList = await conceptApi.getAssociationEntries(
    terminology, // use ncit as the terminology
    codeOrLabel,
    fromRecord,
    pageSize,
    undefined
  );

  // ASSERT
  expect(response).not.toBeNull();
  expect(response.associationEntries).not.toBeNull();
  expect(response.associationEntries).not.toBeUndefined();

  // Check if the expected related name exists in the result
  for (const entry of response.associationEntries) {
    expect(entry.relatedName).not.toBeNull();
    if (entry.relatedName.includes(expectedRelatedName)) {
      containsExpectedName = true;
      break;
    }
  }

  expect(containsExpectedName).toBe(true);

  // Serialize and print the result (optional, for debug purposes)
  const result = JSON.stringify(response);
  console.log(result);
  });

  test("test_get_associations1", async () => {
  // ARRANGE
  const expectedRelatedName: string = "CDISC SEND Terminology";
  const expectedType: string = "Concept_In_Subset";

  // ACT
  const response: Association[] = await conceptApi.getAssociations1(terminology, code, undefined);

  // ASSERT
  expect(response).not.toBeNull();
  const assoc: Association = response[0];
  expect(assoc).not.toBeNull();
  expect(assoc.relatedName).toBe(expectedRelatedName);
  expect(assoc.type).toBe(expectedType);

  console.log(`Get associations for code - ${code}`);
  console.log(`   associations = ${JSON.stringify(response)}`);
});

  test("test_get_children", async () => {
    // ARRANGE
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept[] = await conceptApi.getChildren(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response[0].name).not.toBeNull();
    expect(response[0].name.includes(expectedName)).toBe(true);

    console.log(`Get children for code - ${code}`);
    console.log(`   children = ${JSON.stringify(response)}`);
  });

  test("test_get_concept_minimal", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept = await conceptApi.getConcept(terminology, code, undefined, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get a single concept for code - ${code}`);
    console.log(`   concept = ${JSON.stringify(response)}`);
  });

  test("test_get_concept_summary", async () => {
    // ARRANGE
    const include: string = "summary";
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept = await conceptApi.getConcept(terminology, code, undefined, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get a summary concept for code - ${code}`);
    console.log(`   concept = ${JSON.stringify(response)}`);
  });

  test("test_get_concept_full", async () => {
    // ARRANGE
    const include: string = "full";
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept = await conceptApi.getConcept(terminology, code, undefined, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get a full concept for code - ${code}`);
    console.log(`   concept = ${JSON.stringify(response)}`);
  });

  test("test_get_concept_custom_include", async () => {
    // ARRANGE
    const include: string = "synonyms,children,maps,inverseAssociations";
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept = await conceptApi.getConcept(terminology, code, undefined, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get a custom include concept for code - ${code}`);
    console.log(`   concept = ${JSON.stringify(response)}`);
    });


  test("test_get_concepts", async () => {
    // ARRANGE
    const codeList: string = "C3224,C3910";
    const include: string = "minimal";
    const expectedName1: string = "Melanoma";
    const expectedName2: string = "Molecular Abnormality";

    // ACT
    const response: Concept[] = await conceptApi.getConcepts(terminology, codeList, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response[0].name).toBe(expectedName1);
    expect(response[1].name).toBe(expectedName2);

    console.log(`Get list of concepts for codes - ${codeList}`);
    console.log(`   concepts = ${JSON.stringify(response)}`);
  });

  test("test_get_descendants", async () => {
    // ARRANGE
    const fromRecord: number = 0;
    const pageSize: number = 100;
    const maxLevel: number = 4;
    const expectedName: string = "Adult Meningeal Melanoma";
    let containsExpectedName: boolean = false;

    // ACT
    const response: Concept[] = await conceptApi.getDescendants(terminology, code, fromRecord, pageSize, maxLevel, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(concept => {
      expect(concept.name).not.toBeNull();
      if (concept.name.includes(expectedName)) {
        containsExpectedName = true;
      }
    });
    expect(containsExpectedName).toBe(true);
    expect(response.length).toBe(pageSize);

    console.log(`Get list of descendants for code - ${code}`);
    console.log(`   descendants = ${JSON.stringify(response)}`);
  });

  test("test_get_disjoint_with", async () => {
    // ARRANGE
    const code: string = "C3910";
    const expectedRelatedCode: string = "C12913";
    const expectedRelatedName: string = "Abnormal Cell";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: DisjointWith[] = await conceptApi.getDisjointWith(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(disjoint => {
      expect(disjoint.relatedCode).not.toBeNull();
      expect(disjoint.relatedName).not.toBeNull();
      if (disjoint.relatedCode.includes(expectedRelatedCode) && disjoint.relatedName.includes(expectedRelatedName)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get list of disjoint with for code - ${code}`);
    console.log(`   disjoint with = ${JSON.stringify(response)}`);
  });

  test("test_get_history", async () => {
    // ARRANGE
    const expectedName: string = "Melanoma";

    // ACT
    const response: Concept = await conceptApi.getHistory(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    expect(response.history).not.toBeNull();
    expect(response.name).toBe(expectedName);

    console.log(`Get history for code - ${code}`);
    console.log(`   history = ${JSON.stringify(response)}`);
  });

  test("test_get_inverse_associations", async () => {
    // ARRANGE
    const expectedType: string = "Has_GDC_Value";
    const expectedRelatedCode: string = "C178243";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Association[] = await conceptApi.getInverseAssociations(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(assoc => {
      expect(assoc.type).not.toBeNull();
      expect(assoc.relatedCode).not.toBeNull();
      if (assoc.type.includes(expectedType) && assoc.relatedCode.includes(expectedRelatedCode)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get inverse associations for code - ${code}`);
    console.log(`   inverse associations = ${JSON.stringify(response)}`);
  });

  test("test_get_inverse_roles", async () => {
    // ARRANGE
    const expectedRelatedCode: string = "C21390";
    const expectedRelatedName: string = "Beta/Gamma Crystallin Domain-Containing Protein 1";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Role[] = await conceptApi.getInverseRoles(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(role => {
      expect(role.relatedCode).not.toBeNull();
      expect(role.relatedName).not.toBeNull();
      if (role.relatedCode.includes(expectedRelatedCode) && role.relatedName.includes(expectedRelatedName)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get inverse roles for code - ${code}`);
    console.log(`   inverse roles = ${JSON.stringify(response)}`);
  });

  test("test_get_maps", async () => {
    // ARRANGE
    const expectedTargetCode: string = "morphology";
    const expectedTargetName: string = "Malignant melanoma, NOS";
    let containsExpectedCode: boolean = false;
    let containsExpectedName: boolean = false;

    // ACT
    const response: ConceptMap[] = await conceptApi.getMaps(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(conceptMap => {
      expect(conceptMap.targetCode).not.toBeNull();
      expect(conceptMap.targetName).not.toBeNull();
      if (conceptMap.targetCode.includes(expectedTargetCode)) {
        containsExpectedCode = true;
      }
      if (conceptMap.targetName.includes(expectedTargetName)) {
        containsExpectedName = true;
      }
      if (containsExpectedCode && containsExpectedName) {
        return;
      }
    });
    expect(containsExpectedCode).toBe(true);
    expect(containsExpectedName).toBe(true);

    console.log(`Get maps for code - ${code}`);
    console.log(`   maps = ${JSON.stringify(response)}`);
  });

  test("test_get_parents", async () => {
    // ARRANGE
    const expectedCode: string = "C9305";
    const expectedName: string = "Malignant Neoplasm";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Concept[] = await conceptApi.getParents(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(concept => {
      expect(concept.name).not.toBeNull();
      expect(concept.code).not.toBeNull();
      if (concept.name.includes(expectedName) && concept.code.includes(expectedCode)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get parents for code - ${code}`);
    console.log(`   parents = ${JSON.stringify(response)}`);
  });

  test("test_get_paths_from_root", async () => {
  // ARRANGE
  const expectedCode: string = "C7057";
  const expectedName: string = "Disease, Disorder or Finding";
  let containsExpectedValues: boolean = false;

  // ACT
  const response: Concept[][] = await conceptApi.getPathsFromRoot(terminology, code, undefined, undefined, undefined, undefined);

  // ASSERT
  expect(response).not.toBeNull();
  response.forEach(path => {
    path.forEach(mapConcept => {
      expect(mapConcept.code).not.toBeNull();
      expect(mapConcept.name).not.toBeNull();
      if (mapConcept.code.includes(expectedCode) && mapConcept.name.includes(expectedName)) {
        containsExpectedValues = true;
      }
    });
  });
  expect(containsExpectedValues).toBe(true);

  console.log(`Get paths from hierarchy root for code - ${code}`);
  console.log(`   paths from root = ${JSON.stringify(response)}`);
  });

  test("test_get_paths_to_root", async () => {
    // ARRANGE
    const include: string = "minimal";
    const fromRecord: number = 0;
    const expectedCode1: string = "C3224";
    const expectedName1: string = "Melanoma";
    let containsExpectedFirstPathValues: boolean = false;
    const expectedCode2: string = "C7058";
    const expectedName2: string = "Melanocytic Neoplasm";
    let containsExpectedSecondPathValues: boolean = false;

    // ACT
    const response: Concept[][] = await conceptApi.getPathsToRoot(terminology, code, include, fromRecord, undefined, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(path => {
      path.forEach(mapConcept => {
        expect(mapConcept.code).not.toBeNull();
        expect(mapConcept.name).not.toBeNull();
        if (mapConcept.code.includes(expectedCode1) && mapConcept.name.includes(expectedName1)) {
          containsExpectedFirstPathValues = true;
        }
        if (mapConcept.code.includes(expectedCode2) && mapConcept.name.includes(expectedName2)) {
          containsExpectedSecondPathValues = true;
        }
      });
    });
    expect(containsExpectedFirstPathValues).toBe(true);
    expect(containsExpectedSecondPathValues).toBe(true);

    console.log(`Get paths to hierarchy root for code - ${code}`);
    console.log(`   paths to root = ${JSON.stringify(response)}`);
  });

  test("test_get_paths_to_ancestor", async () => {
    // ARRANGE
    const ancestorCode: string = "C2991";
    const include: string = "minimal";
    const fromRecord: number = 0;
    const expectedAncestorName1: string = "Melanoma";
    const expectedAncestorCode1: string = "C3224";
    let containsExpectedFirstAncestor: boolean = false;
    const expectedAncestorName2: string = "Melanocytic Neoplasm";
    const expectedAncestorCode2: string = "C7058";
    let containsExpectedSecondAncestor: boolean = false;

    // ACT
    const response: Concept[][] = await conceptApi.getPathsToAncestor(terminology, code, ancestorCode, include, fromRecord, undefined, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(path => {
      path.forEach(ancestor => {
        expect(ancestor.name).not.toBeNull();
        expect(ancestor.code).not.toBeNull();
        if (ancestor.name.includes(expectedAncestorName1) && ancestor.code.includes(expectedAncestorCode1)) {
          containsExpectedFirstAncestor = true;
        }
        if (ancestor.name.includes(expectedAncestorName2) && ancestor.code.includes(expectedAncestorCode2)) {
          containsExpectedSecondAncestor = true;
        }
      });
    });
    expect(containsExpectedFirstAncestor).toBe(true);
    expect(containsExpectedSecondAncestor).toBe(true);

    console.log(`Get paths from code to ancestor code - ${code} to ${ancestorCode}`);
    console.log(`   paths to ancestor code = ${JSON.stringify(response)}`);
  });

  test("test_get_roles1", async () => {
    // ARRANGE
    const expectedRelatedCode: string = "C36122";
    const expectedRelatedName: string = "Benign Cellular Infiltrate";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Role[] = await conceptApi.getRoles1(terminology, code, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(role => {
      expect(role.relatedCode).not.toBeNull();
      expect(role.relatedName).not.toBeNull();
      if (role.relatedCode.includes(expectedRelatedCode) && role.relatedName.includes(expectedRelatedName)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get roles for code - ${code}`);
    console.log(`   roles = ${JSON.stringify(response)}`);
  });

  test("test_get_roots", async () => {
    // ARRANGE
    const include: string = "minimal";
    const expectedCode: string = "C12913";
    const expectedName: string = "Abnormal Cell";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Concept[] = await conceptApi.getRoots(terminology, include, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(root => {
      expect(root.name).not.toBeNull();
      expect(root.code).not.toBeNull();
      if (root.name.includes(expectedName) && root.code.includes(expectedCode)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get root concepts for terminology - ${terminology}`);
    console.log(`   root concepts = ${JSON.stringify(response)}`);
  });

  test("test_get_subset_members1", async () => {
    // ARRANGE
    const expectedCode: string = "C178243";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: Concept[] = await conceptApi.getSubsetMembers1(terminology, code, undefined, undefined, undefined, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(concept => {
      expect(concept.code).not.toBeNull();
      expect(concept.leaf).not.toBeNull();
      if (concept.code.includes(expectedCode) && concept.leaf) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get subset members for code - ${code}`);
    console.log(`   subset members = ${JSON.stringify(response)}`);
  });

  test("test_get_full_subtree", async () => {
    // ARRANGE
    const limit: number = 50;
    const expectedCode1: string = "C12913";
    const expectedCode2: string = "C43431";
    let containsExpectedCode1: boolean = false;
    let containsExpectedCode2: boolean = false;

    // ACT
    const response: HierarchyNode[] = await conceptApi.getSubtree(terminology, code, limit, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(node => {
      expect(node.code).not.toBeNull();
      if (node.code.includes(expectedCode1)) {
        containsExpectedCode1 = true;
      }
      if (node.code.includes(expectedCode2)) {
        containsExpectedCode2 = true;
      }
    });
    expect(containsExpectedCode1).toBe(true);
    expect(containsExpectedCode2).toBe(true);

    console.log(`Get the entire subtree from root to node for code - ${code}`);
    console.log(`   subtree = ${JSON.stringify(response)}`);
  });

  test("test_get_subtree_children", async () => {
    // ARRANGE
    const limit: number = 100;
    const expectedCode: string = "C3802";
    const expectedLabel: string = "Amelanotic Melanoma";
    let containsExpectedValues: boolean = false;

    // ACT
    const response: HierarchyNode[] = await conceptApi.getSubtreeChildren(terminology, code, limit, undefined);

    // ASSERT
    expect(response).not.toBeNull();
    response.forEach(child => {
      expect(child.code).not.toBeNull();
      expect(child.label).not.toBeNull();
      if (child.code.includes(expectedCode) && child.label.includes(expectedLabel)) {
        containsExpectedValues = true;
      }
    });
    expect(containsExpectedValues).toBe(true);

    console.log(`Get all subtree children for code - ${code}`);
    console.log(`   subtree children = ${JSON.stringify(response)}`);
  });

});

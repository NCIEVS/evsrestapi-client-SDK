# EVSRESTAPI CT in 5 minutes: bash Tutorial

This tutorial shows how to use bash scripts to access NCI Thesaurus content from the EVSRESTAPI.

## Prerequisites

- bash must be installed
- curl must be installled ([Download cURL](https://curl.haxx.se/dlwiz/))
- jq must be installed ([Download jq](https://stedolan.github.io/jq/download/))

The various scripts make use of the local `url.env` file to define the EVSRESTAPI endpoint that scripts will connect to.

## Test Scripts

- [get-terminologies.sh](#get-terminologiessh)
- [get-concept.sh](#get-conceptsh)
- [get-concept-part.sh](#get-concept-partsh)
- [find-concepts.sh](#find-conceptssh)
- [get-descendants.sh](#get-descendantssh)
- [get-subtree.sh](#get-subtreesh)
- [get-paths.sh](#get-pathssh)
- [get-association.sh](#get-associationsh)
- [get-role.sh](#get-rolesh)
- [get-property.sh](#get-propertysh)
- [get-qualifier.sh](#get-qualifiersh)
- [get-term-types.sh](#get-term-typessh)
- [get-synonym-sources.sh](#get-synonym-sourcessh)
- [get-synonym-types.sh](#get-synonym-typessh)
- [get-definition-types.sh](#get-definition-typessh)
- [get-subsets.sh](#get-subsetssh)
- [get-mapsets.sh](#get-mapsetsssh)
- [get-inactive-replacements.sh](#get-inactive-replacementsssh)

The following examples can be typed into the command line of any terminal that has bash, cURL and jq installed. Run each script with no parameters for examples of how to call each one.

### get-terminologies.sh

Return terminologies currently hosted by the API. This script takes parameters to
filter the results by terminology, by latest flag, and by tags associated with
the terminology (primarily for ncit "monthly" and "weekly"). This example returns
the latest monthly version of NCI Thesaurus.

```bash
$ ./get-terminologies.sh  --terminology ncit --latest true --tag monthly
```

See sample payload data from this call in [`samples/get-terminologies.txt`](samples/get-terminologies.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-concept.sh

Return concept information for a specified terminology and code. The "include" parameter
can be used to specify the amount of information you want back. Try with "minimal",
"summary", and "full".


```bash
$ ./get-concept.sh ncit C3224 --include minimal
```

See sample payload data from this call in [`samples/get-concept.txt`](samples/get-concept.txt)

---

This script can also retrieve concept information for a list of concept codes.  
The "include" parameter can be used to specify the amount of information you
want back. Try with "minimal", "summary", and "full".

```bash
$ ./get-concept.sh ncit C3224,C3910 --include minimal
```

See sample payload data from this call in [`samples/get-concept-list.txt`](samples/get-concept-list.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-concept-part.sh

Used to call the APIs for the sub-parts of concepts. The supported list includes:
children, parents, roles, associations, inverseRoles, inverseAssociations, maps,
and disjointWith. The following examples shows the "children", but this parameter
could be easily replaced by any of the options listed above.

```bash
$ ./get-concept-part.sh ncit C3224 children
```

See sample payload data from this call in [`samples/get-concept-part.txt`](samples/get-concept-part.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### find-concepts.sh

Used to perform text searches to find matching concepts. In its simplest form the
script will perform a simple "contains" text search for concepts within the specified
terminology. Use the --include parameter to control how much information to get back,
use the --type to change the nature of the search, and use --fromRecord and --pageSize
to control which records to return.

```bash
$ ./find-concepts.sh ncit "malignant melanoma" --pageSize 5
```

See sample payload data from this call in [`samples/find-concepts.txt`](samples/find-concepts.txt)

---

This script can also be used with a file containing a sparql query to perform
that query and combine with the other results.

```bash
$ ./find-concepts.sh ncit melanoma --sparql ../curl-examples/sparql-queries/code-query.txt
```

See sample payload data from this call in [`samples/sparql-code-query.txt`](samples/sparql-code-query.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-descendants.sh

Used to get descendant graph for a specified terminology and code.  
The --fromRecord and --pageSize parameters allow the descendant list to
be paged for very large results. This example shows just five descendants.

```bash
$ ./get-descendants.sh ncit C3224 --pageSize 5
```

See sample payload data from this call in [`samples/get-descendants.txt`](samples/get-descendants.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-subtree.sh

Used to get the entire subtree from the root node to the specified code, for a specified terminology. The result includes the sibling nodes at each level as well.

```bash
$ ./get-subtree.sh ncit C3224
```

See sample payload data from this call in [`samples/get-subtree.txt`](samples/get-subtree.txt)

---

Can also be used to get the children subtree nodes for the specified code. For example:

```bash
$ ./get-subtree.sh ncit C3224 --children
```

See sample payload data from this call in [`samples/get-subtree-children.txt`](samples/get-subtree-children.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-paths.sh

Return information about root codes, paths to root codes, or paths from
a code to an ancestor code. In its simplest form, the script will return
a list of root concepts.

```bash
$ ./get-paths.sh ncit
```

See sample payload data from this call in [`samples/get-paths.txt`](samples/get-paths.txt)

---

By specifying a code, the script will produce a list of paths from that
code to the corresponding root concept. There may be more than one path through
the tree.

```bash
$ ./get-paths.sh ncit C3224
```

See sample payload data from this call in [`samples/get-paths-to-code.txt`](samples/get-paths-to-code.txt)

---

By specifying a code and an optional ancestor code, the script will produce a list of
paths from that code to the corresponding ancestor code. There may be more than one
path through the tree.

```bash
$ ./get-paths.sh ncit C3224 --anc C2991
```

See sample payload data from this call in [`samples/get-paths-to-code-from-ancestor.txt`](samples/get-paths-to-code-from-ancestor.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-association.sh

Return information about associations for a specified terminology. In its simplest form,
this script will return basic information about all associations for a terminology.

```bash
$ ./get-association.sh ncit
```

See sample payload data from this call in [`samples/get-associations.txt`](samples/get-associations.txt)

---

The script can also return information about a single association (by code or label),
or a list of associations.

```bash
$ ./get-association.sh ncit A16
```

See sample payload data from this call in [`samples/get-association-from-code.txt`](samples/get-association-from-code.txt)

---

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```bash
$ ./get-association.sh ncit Role_Has_Domain --include synonyms
```

See sample payload data from this call in [`samples/get-association-with-label.txt`](samples/get-association-with-label.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-role.sh

Return information about roles for a specified terminology. In its simplest form,
this script will return basic information about all roles for a terminology.

```bash
$ ./get-role.sh ncit
```

See sample payload data from this call in [`samples/get-roles.txt`](samples/get-roles.txt)

---

The script can also return information about a single role (by code or label),
or a list of role.

```bash
$ ./get-role.sh ncit R156
```

See sample payload data from this call in [`samples/get-role-by-code.txt`](samples/get-role-by-code.txt)

---

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```bash
$ ./get-role.sh ncit Allele_Has_Abnormality --include synonyms
```

See sample payload data from this call in [`samples/get-role-by-label.txt`](samples/get-role-by-label.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-property.sh

Return information about properties for a specified terminology. In its simplest form,
this script will return basic information about all properties for a terminology.

```bash
$ ./get-property.sh ncit
```

See sample payload data from this call in [`samples/get-properties.txt`](samples/get-properties.txt)

---

The script can also return information about a single property (by code or label),
or a list of property.

```bash
$ ./get-property.sh ncit P302
```

See sample payload data from this call in [`samples/get-property-by-code.txt`](samples/get-property-by-code.txt)

---

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```bash
$ ./get-property.sh ncit Accepted_Therapeutic_Use_For --include synonyms
```

See sample payload data from this call in [`samples/get-property-by-label.txt`](samples/get-property-by-label.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-qualifier.sh

Return information about qualifiers for a specified terminology. In its simplest form,
this script will return basic information about all qualifiers for a terminology.

```bash
$ ./get-qualifier.sh ncit
```

See sample payload data from this call in [`samples/get-qualifier.txt`](samples/get-qualifier.txt)

---

The script can also return information about a single qualifier (by code or label),
or a list of qualifier.

```bash
$ ./get-qualifier.sh ncit P389
```

See sample payload data from this call in [`samples/get-qualifier-by-code.txt`](samples/get-qualifier-by-code.txt)

---

Another example using a label instead of a code and the "include" flag to get only additional synonyms.

```bash
$ ./get-qualifier.sh ncit go-evi --include synonyms
```

See sample payload data from this call in [`samples/get-qualifier-by-label.txt`](samples/get-qualifier-by-label.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-term-types.sh

Return information about term types for a specified terminology.

```bash
$ ./get-term-types.sh ncit
```

See sample payload data from this call in [`samples/get-term-types.txt`](samples/get-term-types.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-synonym-sources.sh

Return information about synonym sources for a specified terminology.

```bash
$ ./get-synonym-sources.sh ncit
```

See sample payload data from this call in [`samples/get-synonym-sources.txt`](samples/get-synonym-sources.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-synonym-types.sh

Return information about all synonym types for a specified terminology.

```bash
$ ./get-synonym-types.sh ncit
```

See sample payload data from this call in [`samples/get-synonym-types.txt`](samples/get-synonym-types.txt)

---

Return information about a specific synonym type for a specified terminology.

```bash
$ ./get-synonym-types.sh ncit P90 --include summary
```

See sample payload data from this call in [`samples/get-synonym-type-by-code.txt`](samples/get-synonym-type-by-code.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-definition-types.sh

Return information about all definition types for a specified terminology.

```bash
$ ./get-definition-types.sh ncit
```
See sample payload data from this call in [`samples/get-definition-types.txt`](samples/get-definition-types.txt)

---

Return information about a specific definition type for a specified terminology.

```bash
$ ./get-definition-types.sh ncit P325 --include summary
```
See sample payload data from this call in [`samples/get-definition-type-by-code.txt`](samples/get-definition-type-by-code.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-subsets.sh

Return information about all subsets for the specified terminology. The result
includes the hierarchical structure of the subsets where they have parent/child
relationships.

```bash
$ ./get-subsets.sh ncit
```
See sample payload data from this call in [`samples/get-subsets.txt`](samples/get-subsets.txt)

---

Return information about a single subset for a specified terminology and code.

```bash
$ ./get-subsets.sh ncit C81222
```
See sample payload data from this call in [`samples/get-subset-by-code.txt`](samples/get-subset-by-code.txt)

---

Return subset members for a specified terminology and code.

```bash
$ ./get-subsets.sh ncit C81222 --members --fromRecord 0 --pageSize 10
```
See sample payload data from this call in [`samples/get-subset-members.txt`](samples/get-subset-members.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-mapsets.sh

Return information about all mapsets. The include parameter allows customizing
how much data to return.

```bash
$ ./get-mapsets.sh --include minimal
```

See sample payload data from this call in [`samples/get-mapsets.txt`](samples/get-mapsets.txt)

---

Return information about a single mapset for a specified code. The include
parameter allows customizing how much data to return.

```bash
$ ./get-mapsets.sh GO_to_NCIt_Mapping --include properties
```

See sample payload data from this call in [`samples/get-mapset-by-code-with-properties.txt`](samples/get-mapset-by-code-with-properties.txt)

---

Get the maps for a specified mapset code.

```bash
$ ./get-mapsets.sh GO_to_NCIt_Mapping --maps --fromRecord 0 --pageSize 5
```
See sample payload data from this call in [`samples/get-mapset-maps.txt`](samples/get-mapset-maps.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

### get-inactive-replacements.sh

Return replacement concepts for a specified inactive concept code.

```bash
$ ./get-inactive-replacements.sh ncit C12658
```

See sample payload data from this call in [`samples/get-replacements-for-inactive-code.txt`](samples/get-replacements-for-inactive-code.txt)

---

Return replacement concepts for a specified list of inactive concept codes.

```bash
$ ./get-inactive-replacements.sh ncit C12658,C13320
```
See sample payload data from this call in [`samples/get-inactive-replacements-for-code-list.txt`](samples/get-inactive-replacements-for-code-list.txt)

[Back to Top](#evsrestapi-ct-in-5-minutes-bash-tutorial)

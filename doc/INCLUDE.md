<a name="top" />

# Using the "include" parameter

Many of the API endpoints make use of an "include" parameter that controls
how much data the given call should return. The include parameter values of
"minimal", "summary", and "full" have special meaning, whereas the others simply
refer to features of the concept body that can be individually activated when needed.

### Special Include Values

The following special "include" values are for convenience

- **minimal**: indicates just "code", "name", and "terminology" fields should be included.
- **summary**: indicates minimal information plus "synonyms", "definitions" and "properties" should be included. Equivalent to using "synonyms,definitions,properties" as the "include" value.
- **full**: never used as a default, indicates to return all available concept parts listed below except for descendants and paths.

For most API calls, the default "include" value is "minimal" if not specified. The main exceptions are the "get concept", "get association", "get role", and "get property" calls, which by default provide "summary" information. For example:

- `$API_URL/metadata/{terminology}/associations` -> uses "minimal" by default
- `$API_URL/metadata/{terminology}/association/{codeOrLabel}` -> uses "summary" by default
- `$API_URL/concept/{terminology}/{code}` -> uses "summary" by default
- `$API_URL/metadata/{terminology}/properties` -> uses "minimal" by default
- `$API_URL/metadata/{terminology}/property/{codeOrLabel}` -> uses "summary" by default
- `$API_URL/metadata/{terminology}/roles` -> uses "minimal" by default
- `$API_URL/metadata/{terminology}/role/{codeOrLabel}` -> uses "summary" by default
- `$API_URL/concept/{terminology}/search` -> uses "minimal" by default

### Concept Part Include Values

The remaining supported "include" values represent individual parts of the concept:

- **associations**: indicates associations should be included.
- **children**: indicates children should be included.
- **definitions**: indicates definitions should be included.
- **descendants**: indicates concept descendants should be included (be careful may be a large amount of data).
- **disjointWith**: indicates "disjoint with" associations should be included.
- **history**: indicates history should be included.
- **inverseAssociations**: indicates inverse associations should be included.
- **inverseRoles**: indicates inverse roles should be included.
- **maps**: indicates maps should be included.
- **parents**: indicates parents should be included.
- **paths**: indicates all paths to root concept should be included (be careful may be a large amount of data).
- **properties**: indicates properties should be included.
- **roles**: indicates roles should be included.
- **synonyms**: indicates synonyms should be included.

### Combining Special/Concept Include Values

It is possible to use multiple include values together (as a comma-separated list). In that case, if any of the values indicate that concept features should be included in the response, then it will be included. The information returned by "minimal" is **always** included, no matter how the parameter is specified.

The typical (and most useful) scenarios for the "include" parameter are as follows.

0. Default behavior (do not specify "include" value)
1. Use "minimal", "summary", or "full"
2. Use specifically needed features, like "synonyms", "maps"
3. Combine "summary" with one or more of the relationship type features.

- e.g. "summary,roles"

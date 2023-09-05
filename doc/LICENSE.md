<a name="top" />

EVSRESTAPI License Restrictions
===============================

Some terminologies hosted in the deployed versions of evsrestapi contain license
restricted content.  The user interface (evs explore) requires acceptance of
a licence agreement statement in order to view and interact with content of
this nature. 

The API requires license key information to be passed via a X-EVSRESTAPI-License
header parameter to those REST endpoints that take a "terminology" parameter. 
If a license key is required and not passed, it will result in a 403 response from
the API with a message pointing to this page.

### Terminologies Requiring a License

The following sections document terminologies that require a license with more information.

#### MedDRA - terminology=mdr

MedDRA is maintained by its Maintenance and Support Services Organization (MSSO)
 - [https://www.meddra.org/about-meddra/organisation/msso](https://www.meddra.org/about-meddra/organisation/msso)

Just as an id and api key is needed to programmatically access its APIs ([https://www.meddra.org/meddra-apis](https://www.meddra.org/meddra-apis)), 
the same information is needed here to access MedDRA data directly through the EVS REST API.

 - For more information visit the [MedDRA Self Service Application](https://www.meddra.org/meddra-self-service-application).
 - An API can be requested with your MedDRA ID and password at [https://midt.meddra.org/account/register](https://midt.meddra.org/account/register)

*Instructions for NIH Users - <link to NIH users instructions>



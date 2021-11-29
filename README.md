# SDK for ORDS REST
<br>
This document explains the quick use of this SDK for the use of a REST API with ORDS.
It contains the use of the GET, PUT, POST and DELETE methods.
<br>
<br>
## Getting Started
<br>
The functions to carry out the different types of requests are declared in the ORDSResources.js file.
While in the index.js file there is a template of an ORDS API REST.
To start we need to declare our variable lResource with the url of our API.
```javascript
let lResource = new Resource( 'https://example/ords/api/task');
```
# SDK for ORDS REST
<br>
This SDK is intended to serve as a template for creating web applications with the use of ORDS.
<br>
<br>
The ORDSResources.js document contains the methods used for the various requests.
<br>
<br>
From the index.js document, the connection is made with the methods that call the ORDS API, after having entered the link of your API, these are the commands that can be used:
<br>
  - loadLinks () - Returns the links to access the first record, last, previous and next page.
<br>
- lodAll () - Returns all records in the database.
<br>
- loadOne (id) - You send the id as a parameter and return the record.
<br>
- delete (id) - You send the id as a parameter and delete the record.
<br>
- modify (id, data) - You send the id and the data in JSON format and exchange the values in the registry for the ones you sent in the data variable.
<br>
- postData (data) - You send the data in JSON format and add it to the next position in the database.

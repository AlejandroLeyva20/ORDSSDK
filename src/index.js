// /src/index.js
import Resource from './ORDSResources.js';

//Put the link of your ORDS api
let lResource = new Resource( 'https://gd6c1a14fa23298-db202108261312.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/task'); 

//From this document the connection is made with the methods that call the ORDS API, 
// after having entered the link of your API, these are the commands that can be used:
//- loadLinks () - Returns the links to access the first record, last, previous and next page.
//- lodAll () - Returns all records in the database.
//- loadOne (id) - You send the id as a parameter and return the record.
//- delete (id) - You send the id as a parameter and delete the record.
//- modify (id, data) - You send the id and the data in JSON format and exchange the values in the registry for the ones you sent in the data variable.
//- postData (data) - You send the data in JSON format and add it to the next position in the database.


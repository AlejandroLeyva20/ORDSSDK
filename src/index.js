// /src/index.js
import Resource from './ORDSResources.js';

let lResource = new Resource( 'https://gd6c1a14fa23298-db202108261312.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/task'); //Put the link of your ORDS api
const data = {
    name: 'Nombre',
    done: 'Y'
};
await lResource.postData(data);
console.log(await lResource.loadAll());
console.log(await lResource.loadOne(277));
console.log(await lResource.loadLinks());
console.log(await lResource.modify(298, data));
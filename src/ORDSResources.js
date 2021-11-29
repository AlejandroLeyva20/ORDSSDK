// /src/ORDSResources.js
import fetch from "node-fetch";

export default class ORDSResource {
    constructor( pUrl ){
      this.url = pUrl;
    }

    async loadLinks(){
        return await fetch( this.url, {
          method: 'GET'
        } )
          .then( pResponse => pResponse.json())
          .then(data => data.links);
      }

    async loadAll(){
      return await fetch( this.url, {
        method: 'GET'
      } )
        .then( pResponse => pResponse.json())
        .then(data => data.items);
    }

    async loadOne(id){
        return await fetch( this.url + '/' + id, {
            method: 'GET'
          } )
            .then( pResponse => pResponse.json())
            .then(data => data.items);
    }

    async delete(id){
        fetch(this.url + '/' + id, {
            method: 'DELETE',
            })
        .then(pResponse => pResponse.text())
        .then(pResponse => console.log(pResponse));
    }

    async modify(id, data){
      fetch(this.url + '/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(pResponse => pResponse.text());
    }

    async postData(data){
        console.log(data);
        return await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              }
        })
            .then(function(pResponse) {
                if(pResponse.ok) {
                    return pResponse.text()
                } else {
                    throw "Error in posting";
                }
            })
            .then(function(texto) {
                console.log(texto);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}
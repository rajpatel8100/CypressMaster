describe('API test', () => {

    it('Post Request', function() {
    
      cy.request(
          {
            method: 'POST',
            url: 'http://httpbin.org/post',
            
            body :{
                'name' : 'Lalo',
                'age'  : 29
            },
            
            headers: {
                'content-type': 'application/json'
            }
            

            }).then (function(response){

             expect(response.body).to.have.property('json');
             expect(response.body.json).to.deep.equal({
                 "name":"Lalo",
                 "age" : 29
                
            })

         });
    });

});
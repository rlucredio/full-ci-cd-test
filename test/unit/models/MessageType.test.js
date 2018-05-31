const expect = require('chai').expect;

describe( 'MessageType (model)', () => {
  it('shouldn\'t allow an empty object to be created', (done) => {
    MessageType.create({})
      .tolerate('E_INVALID_NEW_RECORD')
      .fetch()
      .then((x) => {
        expect(x).to.be.undefined;
        done();
      })
      .catch(done);
  });

  it('shouldn\'t allow two types with the same name', (done) => {
    MessageType.create({name:'type1'})
      .then(() => {
        MessageType.create({name:'type1'})
          .tolerate('E_UNIQUE')
          .then(() => {
            MessageType.find({name:'type1'})
              .then((categories) => {
                expect(categories).to.have.lengthOf(1)
                done();
              })
              .catch(done);
            })
      })
  });  
}); 

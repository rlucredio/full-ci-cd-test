const expect = require('chai').expect;

describe( 'Category (model)', () => {
  it('shouldn\'t allow an empty object to be created', (done) => {
    Category.create({})
      .tolerate('E_INVALID_NEW_RECORD')
      .fetch()
      .then((x) => {
        expect(x).to.be.undefined;
        done();
      })
      .catch(done);
  });

  it('shouldn\'t allow two categories with the same name', (done) => {
    Category.create({name:'cat1'})
      .then(() => {
        Category.create({name:'cat1'})
          .tolerate('E_UNIQUE')
          .then(() => {
            Category.find({name:'cat1'})
              .then((categories) => {
                expect(categories).to.have.lengthOf(1)
                done();
              })
              .catch(done);
            })
      })
  });  
}); 

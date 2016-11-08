const chai = require('chai');
const request = require('supertest');
const fs = require('fs')
const app = require('../app');


chai.should();

describe('Sending a GET to /', () => {
  describe('should succeed', () => {
    it('in retreiving the index.html file', (done) => {
      const indexFile = fs.readFileSync('public/index.html', 'utf8')
      request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if(err) return done(err);

          res.text.should.be.equal(indexFile)

          done();
        })
    })
  })
})

const request = require('supertest');
const app = require('../src/app');

describe('/numbers', () => {
  describe('GET /add/{number}/and/{number}', () => {
    it('adds 2 and 1', done => {
      request(app)
        .get('/numbers/add/2/and/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    it('adds 12 and 0', done => {
      request(app)
        .get('/numbers/add/12/and/0')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 12 });
          done();
        });
    });

    it('adds 10 and -5', done => {
      request(app)
        .get('/numbers/add/10/and/-5')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 5 });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .get('/numbers/add/fish/and/chips')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('GET /subtract/{number}/from/{number}', () => {
    it('subtracts 2 from 1', done => {
      request(app)
        .get('/numbers/subtract/2/from/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -1 });
          done();
        });
    });

    it('subtracts -2 from 1', done => {
      request(app)
        .get('/numbers/subtract/-2/from/1')
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    it('errors if the parameters are not numbers', done => {
      request(app)
        .get('/numbers/subtract/fish/from/chips')
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /multiply', () => {
    it('multiplies two numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 10, b: 3 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 30 });
          done();
        });
    });

    it('multiplies stringified numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: '-4', b: '-9' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 36 });
          done();
        });
    });

    it('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/multiply')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /divide', () => {
    xit('divides two numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 162, b: 3 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 54 });
          done();
        });
    });

    xit('divides stringified numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: '-4', b: '8' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -0.5 });
          done();
        });
    });

    xit('divides 0 by a number', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 0, b: 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 0 });
          done();
        });
    });

    xit('errors if dividing by 0', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 10, b: 0 })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    xit('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/divide')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" must be valid numbers.' });
          done();
        });
    });
  });

  describe('POST /remainder', () => {
    xit('gives the remainder of dividing 18 by 5', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 18, b: 5 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 3 });
          done();
        });
    });

    xit('gives the remainder of dividing -4 by 8', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: '-4', b: '8' })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: -4 });
          done();
        });
    });

    xit('gives the remainder of dividing 0 by a number', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 0, b: 10 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 0 });
          done();
        });
    });

    xit('errors if dividing by 0', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 10, b: 0 })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Unable to divide by 0.' });
          done();
        });
    });

    xit('errors if a parameter is missing', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 'fish' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters "a" and "b" are required.' });
          done();
        });
    });

    xit('errors if the parameters are not numbers', done => {
      request(app)
        .post('/numbers/remainder')
        .send({ a: 'fish', b: 'chips' })
        .then(res => {
          expect(res.status).toEqual(400);
          expect(res.body).toEqual({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });
});

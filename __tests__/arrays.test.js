const request = require('supertest');
const app = require('../src/app');

describe('/arrays', () => {
  describe('POST /element-at-index/{index}', () => {
    it('returns the element at the given index', done => {
      request(app)
        .post('/arrays/element-at-index/2')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'elephant' });
          done();
        });
    });
  });

  describe('POST /to-string', () => {
    it('returns the stringified array', done => {
      request(app)
        .post('/arrays/to-string')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: 'cat,dog,elephant,fox' });
          done();
        });
    });
  });

  describe('POST /append', () => {
    it('returns an array with the value appended', done => {
      request(app)
        .post('/arrays/append')
        .send({
          array: ['cat', 'dog', 'elephant', 'fox'],
          value: 'gorilla',
        })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['cat', 'dog', 'elephant', 'fox', 'gorilla'] });
          done();
        });
    });
  });

  describe('POST /starts-with-vowel', () => {
    it('returns a filtered array of elements starting with a vowel', done => {
      request(app)
        .post('/arrays/starts-with-vowel')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['elephant'] });
          done();
        });
    });
  });

  describe('POST /remove-element?index={index}', () => {
    it('returns an array with the first element removed', done => {
      request(app)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['dog', 'elephant', 'fox'] });
          done();
        });
    });

    it('returns an array with the element at the given index removed', done => {
      request(app)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .query({ index: 2 })
        .then(res => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual({ result: ['cat', 'dog', 'fox'] });
          done();
        });
    });
  });
});

const request = require('supertest');
const app = require('../app');


describe('POST /sum ',  () => {
    it('respond with 200',  (done) => {
        request(app)
            .post('/sum')
            .send({
                "factors": [1,2,-3.5]
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});


describe('POST /sum ',  () => {
    it('respond with 400',  (done) => {
        request(app)
            .post('/sum')
            .send({
                "factors": [1,'A',-3.5]
            })
            .set('Accept', 'application/json')
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    }, 45000);
});

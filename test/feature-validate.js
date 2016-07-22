'use strict';

const index = require('../index.js');
const expect = require('chai').expect;

// Missing required field [leg, customer]
const dummyInvalidBooking = {
  customer: {
    title: 'mr',
    firstName: 'John',
    lastName: 'Doe',
    phone: 123456,
    email: 'john.doe@test.fi',
  },
};

const dummyValidBooking = {
  leg: {
    mode: 'WALK',
    startTime: Date.now(),
    endTime: Date.now(),
  },
  terms: {
    price: {
      amount: 0,
      currency: 'EUR',
    },
  },
  customer: {
    title: 'mr',
    firstName: 'John',
    lastName: 'Doe',
    phone: 123456,
    email: 'john.doe@test.fi',
  },
};

module.exports = function () {
  describe('Schema validation', () => {
    describe('validate valid booking-create request', () => {

      let response;

      before(done => {
        index.validate('./maas-backend/bookings-create/request.json', dummyValidBooking)
          .then(_response => {
            console.log(response);
            response = _response;
            done();
          });
      });

      it('should succeed without error', () => {
        expect(response).to.be.null;
      });
    });

    describe('validate invalid booking-create request', () => {

      let response;

      before(done => {
        index.validate('./maas-backend/bookings-create/request.json', dummyInvalidBooking)
          .then(_response => {
            response = _response;
            done();
          });
      });

      it('should have validation error', () => {
        expect(response).to.not.be.null;
      });
    });
  });

};

'use strict';

const toOpenApi = require('json-schema-to-openapi-schema');

const schema = {
  $id: 'http://maasglobal.com/maas-backend/bookings/bookings-create/response.json',
  description: 'Response schema for bookings-create',
  type: 'object',
  properties: {
    booking: {
      $ref: 'http://maasglobal.com/core/booking.json',
    },
    debug: {
      type: 'object',
      additionalProperties: true,
    },
  },
  required: ['booking'],
  additionalProperties: false,
};

const convertedSchema = toOpenApi(schema);

console.log(convertedSchema);

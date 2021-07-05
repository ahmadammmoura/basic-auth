'use strict';

const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);

describe('SERVER TEST', () => {
  it('Can make a POST request to /signup to create a new user', async () => {
    const response = await mockRequest
      .post('/signup')
      .send({ username: 'khaled', password: '12345' });
    expect(response.status).toBe(200);
  });

  it('Middleware function sends a basic header on legitimate credentials', async () => {
    const response = await mockRequest.post('/signin').auth('khaled', '12345');
    expect(response.status).toBe(200);
  });

  it('Middleware function does not send a basic header on invalid credentials', async () => {
    const response = await mockRequest
      .post('/signin')
      .auth('khaled', '12345666');
    expect(response.status).toBe(403);
  });

  it('Can signup then signin', async () => {
    const request = await mockRequest
      .post('/signup')
      .send({ username: 'mahmmoud', password: '12345' });
    const response = await mockRequest
      .post('/signin')
      .auth(request.body.username, '12345');
    expect(response.status).toBe(200);
  });
});

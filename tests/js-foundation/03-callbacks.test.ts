import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('03-callback.ts', () => {
  test('getUserById should return an error if user does not exists', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done()
    });
  });

  test('getUserById should return an user do exists', () => {
    const id = 2;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id,
        name: 'Jane Doe',
      });
    });
  });
});

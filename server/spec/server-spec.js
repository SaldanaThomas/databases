/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql2');
const axios = require('axios');

const API_URL = 'http://127.0.0.1:8080/classes';

describe('Persistent Node Chat Server', () => {
  const dbConnection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'chat',
  });

  // beforeAll((done) => {
  //   dbConnection.connect();

  //   const tablename = 'messages';

  //   /* Empty the db table before all tests so that multiple tests
  //    * (or repeated runs of the tests)  will not fail when they should be passing
  //    * or vice versa */
  //   dbConnection.query(`truncate ${tablename}`, done);
  // }, 6500);

  // afterAll(() => {
  //   dbConnection.end();
  // });

  const user = 'Valjean';
  const msg = 'In mercy\'s name, three days is all I need.';
  const room = 'Hello';

  it('Should insert posted messages to the DB', (done) => {
    // Create a user on the chat server database.
    axios.post(`${API_URL}/users`, {user})
      .then(() => {
        // Post a message to the node chat server:
        return axios.post(`${API_URL}/messages`, {user, msg, room});
      })
      .then(() => {
        // Now if we look in the database, we should find the posted message there.

        /* TODO: You might have to change this test to get all the data from
         * your message table, since this is schema-dependent. */
        const queryString = 'SELECT * FROM messages';
        const queryArgs = [];

        dbConnection.query(queryString, queryArgs, (err, results) => {
          if (err) {
            throw err;
          }
          // Should have one result:
          expect(results.length).toEqual(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].text).toEqual(text);
          done();
        });
      })
      .catch((err) => {
        throw err;
      });
  });

  it('Should output all messages from the DB', (done) => {
    // Let's insert a message into the db
    const queryString = 'SELECT * FROM messages';

    dbConnection.query(queryString, (err) => {
      if (err) {
        throw err;
      }

      // Now query the Node chat server and see if it returns the message we just inserted:
      axios.get(`${API_URL}/messages`)
        .then((response) => {
          const messageLog = response.data;
          expect(messageLog[0].msg).toEqual(msg);
          expect(messageLog[0].room).toEqual(room);
          done();
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});

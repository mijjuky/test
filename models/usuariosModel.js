var pool = require("./bd");

async function getUserByUsername(user) {
  try {
        var query = "select * from usuarios where usuario = ? limit 1";
        var rows = await pool.query(query, [user]);
        return rows[0];
  } catch (error) {
        console.log(error);
  }
}

module.exports = { getUserByUsername };

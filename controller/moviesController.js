const connection = require("../data/movieConnection");

const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    console.log(results);

    if (err) return res.status(500).json({ error: "error executing query" });

    res.json({
      data: results,
      status: 200,
    });
  });
};

const show = (req, res) => {
  const postId = parseInt(req.params.id);

  const sqlPost = `SELECT * FROM posts WHERE id=?`;

  connection.query(sqlPost, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "error executing query" });
    if (results.length === 0)
      return res.status(404).json({ error: "post not found" });
    res.json({ status: 200, data: post });
  });
  const post = result[0];
};

module.exports = { index, show };

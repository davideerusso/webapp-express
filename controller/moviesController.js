const connection = require("../data/movieConnection");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

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
  const movieId = parseInt(req.params.id);

  const sqlMovie = `SELECT * FROM movies WHERE id=?`;

  connection.query(sqlMovie, [movieId], (err, results) => {
    if (err) return res.status(500).json({ error: "error executing query" });
    if (results.length === 0)
      return res.status(404).json({ error: "movie not found" });
    const movie = results[0];

    res.json({ status: 200, data: movie });
  });
};

module.exports = { index, show };

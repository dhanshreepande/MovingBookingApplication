const { artists } = require("../models");
const db = require("../models");
// use the Schema for the Courses
//const Movies = db.movies;
const Artists = db.artists;

  exports.findAllArtists = (req, res) => {
    Artists.find()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Genres."
          });
        });
     };
const Order = require("../model/Order");

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  if (!req.body.number || !req.body.companyName) {
    res.status(400).send({ message: "number and companyName is required!" });
    return;
  }

  // Create a Order
  const order = new Order({
    number: req.body.number,
    date: req.body.date,
    companyName: req.body.companyName,
    fullName: req.body.fullName,
    phone: req.body.phone,
    comment: req.body.comment,
    ati: req.body.ati
  });

  // Save Order in the database
  order
    .save(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order."
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders."
      });
    });
};

// Find a single Order with an _id
exports.findOne = (req, res) => {
  const _id = req.params._id;

  Order.findById(_id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Order with _id " + _id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Order with _id=" + _id });
    });
};

// Update a Order by the _id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  console.log("req.body", req.body);
  const _id = req.params._id;
  Order.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Order with _id=${_id}. Maybe Order was not found!`
        });
      } else res.send({ message: "Order was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Order with _id=" + _id
      });
    });
};

// Delete a Order with the specified _id in the request
exports.delete = (req, res) => {
  const _id = req.params._id;

  Order.findByIdAndRemove(_id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Order with _id=${_id}. Maybe Order was not found!`
        });
      } else {
        res.send({
          message: "Order was deleted successfully!"
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Order with _id=" + _id
      });
    });
};

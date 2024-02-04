const User = require("./model");

//get all users
const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};


const getUserById = (req, res, next) => {
  const id = req.params.id;
  User.findById({ _id:id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

//Save user
const addUser = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    phone: req.body.phone,
    email: req.body.email,
  });
  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

//Update user
const updateUser = (req, res) => {
  // const id = req.body.id;
  // const name= req.body.name;
  // const address= req.body.address;
  // const age = req.body.age;
  // const phone = req.body.phone;
  // const email = req.body.email;
  const id = req.params.id
  const {name, address, age, phone, email } = req.body;
  User.findByIdAndUpdate(
    {_id: id },
    {
        name: name,
        address: address,
        age: age,
        phone: phone,
        email: email,
      }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};



const deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndDelete({_id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;

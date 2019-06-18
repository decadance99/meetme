var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const faker = require('faker');
// const _ = require('lodash');
// const FAKE_TOKEN = 'dsfklajsgklaj';
// const users = [];
// let uId = 0;

// function fakeUser() {
//   return {
//     id: uId++,
//     name: faker.name.findName(),
//     email: faker.internet.email,
//     avatar: faker.image.avatar(),
//     age: faker.random.number({ min: 20, max: 70 }),
//   };
// }


// function generateFakeData() {
//   /* 가짜로 데이터를 생성하자. */
//   for (let i = 0; i < 30; i++) {
//     const user = fakeUser();
//     users.push(user);
//   }
// }
// generateFakeData();

// function paginate(data, page, res) {
//   page = page || 1;
//   const perPage = 20;
//   const start = (page - 1) * perPage;
//   res.header('x-total-page', Math.ceil(data.length / perPage));
//   res.header('x-page', page);
//   res.json(data.slice(start, start + perPage));
// }


// router.use(function (req, res, next) {
//   if (req.headers.authorization) {
//     const parts = req.headers.authorization.split(' ');
//     if (parts.length === 2 && parts[0] === 'Bearer' && parts[1] === FAKE_TOKEN) {
//       return next();
//     }
//   }
//   res.status(401).send('Unauthorized');
// });




// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// router.get('/api/users', function(req, res) {
//   res.json(users);
// });


// router.post('/api/signin', function(req, res) {
//   res.json({token: FAKE_TOKEN});
// });


// router.get('/api/users/:id', function(req, res) {
//   let id = parseInt(req.params.id, 10);
//   res.json(users.find(e => e.id == id));
// });




// // router.post('/', catchErrors(async (req, res, next) => {
// //   var err = validateForm(req.body, {needPassword: true});
// //   if (err) {
// //     req.flash('danger', err);
// //     return res.redirect('back');
// //   }
// //   var user = await User.findOne({email: req.body.email});
// //   console.log('USER???', user);
// //   if (user) {
// //     req.flash('danger', 'Email address already exists.');
// //     return res.redirect('back');
// //   }
// //   user = new User({
// //     name: req.body.name,
// //     email: req.body.email
// //   });
// //   user.password = await user.generateHash(req.body.password);
// //   await user.save();
// //   req.flash('success', 'Registered successfully. Please sign in.');
// //   res.redirect('/');
// // }));



// module.exports = router;

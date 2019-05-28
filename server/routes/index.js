const express = require('express');
const student = require('./student.js');
const router = express.Router();

//middleware that is spec to this router
router.use(function timelog (req, res, next) {
  console.log('Time:', Date.now())
  next();
})

// router.post('/middlewares', body.body)


router.get('/students', student.get);
router.post('/students', student.post);
router.get("/students/:id", student.getById)
router.delete("/students/:id", student.deleteById)
router.put("/students/:id", student.put)
router.patch("/students/:id", student.patch)

module.exports = router;
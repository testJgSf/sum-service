let express = require('express');
let router = express.Router();
let { main } = require('../../business/sumController');
let { sumRequestValidations, checkValidations } = require('../../business/utils/sumRequestValidations');

router.post('/sum', [sumRequestValidations(), checkValidations],(req, res) =>{
  const response = main(req.body.factors);
  res.status(response.code).json(response.body);
});

module.exports = router;

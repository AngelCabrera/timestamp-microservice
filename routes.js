const router = require('express').Router();


router.get('/api/timestamp', (req, res) => {
  const date = new Date();
  const unix = date.getTime();
  const utc = date.toUTCString();
  res.json({"unix": unix, "utc": utc});
});

router.get('/api/timestamp/:date_string', (req, res) => {
  let date_string = req.params.date_string;
  if( !isNaN(date_string)){
    date_string = Number(date_string)
  }
  const date = new Date(date_string);
  console.log(date);
  if(date == 'Invalid Date'){
    res.json({"error": "Invalid Date"});
  }
  else {
    const unix = date.getTime();
    const utc = date.toUTCString();
    res.json({"unix": unix, "utc": utc});
  }
});

module.exports = router;
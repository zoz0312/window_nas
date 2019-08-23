const express = require('express');
const router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const dir = './file_upload';
  const files = fs.readdirSync(dir); // 디렉토리를 읽어온다

  console.log('files',files);

  res.render('index', { 
    title: 'Express',
    files
  });
});

router.get('/upload', (req, res,) => {
  res.redirect(301, '/');
});
router.post('/upload', (req, res,) => {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let sampleFile = req.files.sampleFile;

  if( Array.isArray(sampleFile) ){
    for( let i=0; i<sampleFile.length; i++ ){
      sampleFile[i].mv('./file_upload/'+sampleFile[i].name), err => {
        if (err)
          console.log(res.status(500).send(err));
      }
    }
  } else {
    sampleFile.mv('./file_upload/'+sampleFile.name), err => {
      if (err)
      console.log(res.status(500).send(err));
    }
  }
  res.redirect(301, '/');
});

module.exports = router;

var checksum = require('./checksum');
var config = require('./config');

module.exports = function(app) {

  app.get('/testtxn', function(req, res) {
    console.log('in restaurant');
    console.log('--------testtxnjs----');
    res.render("testtxn.ejs", { 'config': config });
  });

  app.post('/testtxn', function(req, res) {
    console.log('POST Order start');
    var paramlist = req.body;
    var paramarray = new Array();
    console.log(paramlist);
    for (name in paramlist) {
      if (name == 'PAYTM_MERCHANT_KEY') {
        var PAYTM_MERCHANT_KEY = paramlist[name];
      } else {
        paramarray[name] = paramlist[name];
      }
    }
    console.log(paramarray);
    //paramarray['CALLBACK_URL'] = 'http://localhost:3000/response';
    paramarray['CALLBACK_URL'] = 'http://payapp5.herokuapp.com/response';

    console.log("Merchant key: " + PAYTM_MERCHANT_KEY);
    checksum.genchecksum(paramarray, PAYTM_MERCHANT_KEY, function(err, result) {
      console.log(
        '---------------------------------RESULT---------------------------------',
      );
      console.log(result);
      console.log(
        '---------------------------------RESULT---------------------------------',
      );
      res.render('pgredirect.ejs', { 'restdata': result });
    });

    console.log('POST Order end');
  });
  //vidisha
};

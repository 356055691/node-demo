
exports.index = (req, res, next) => {
    let result = {
        title: 'hahha00000111',
        model: 'vue'
    };

    var mysql = require('mysql');

	var connection = mysql.createConnection({
	 host   : 'localhost',
	 user   : 'root',
	 password : '123456',
	 database : 'test'
	});
	 
	connection.connect();
	 
	// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	//  if (err) throw err;
	 
	//  console.log('The solution is: ', rows[0]);
	// });


	connection.query(
		`INSERT INTO lijing (name, age, sex) VALUES ('lmx', 1, 29999)`
	);
	 
	connection.end();

    res.render('index', result);
};
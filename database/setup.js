
connectToDb = () => {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : process.env.MYSQL_DATABASE_HOST,
        user     : process.env.MYSQL_DATABASE_USER,
        password : process.env.MYSQL_DATABASE_PASSWORD,
        database :  process.env.MYSQL_DATABASE_NAME
    });
    
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        
        console.log('Successfully Connected.');
    });

}

module.exports.connectToDb = connectToDb
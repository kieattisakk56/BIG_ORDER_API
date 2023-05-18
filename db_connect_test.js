const sql = require('mssql');

const config = {
    user: 'sa',
    password: '.',
    server: 'DESKTOP-47I8R3R',
    database: 'bezkoder_db',
    options: {
        encrypt: false // If you're connecting to Azure SQL Database, you will need this option set to true
    }
};

sql.connect(config)
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err));
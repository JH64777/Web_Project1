const { sequelize } = require('../models');
const model = require("../models");

/*sequelize.sync({ force : false }) // these are function for connecting DB
.then(() => {
	console.log('DB Connected!');
})
.catch((err) => {
	console.error(err);
});
*/ // I checked connecting DB is not be required

function create() {
	let table = 'user';
	model[table].create({ // use model name to handle table || create is inserting data command
		id : "Hifff!",
		password : "Hello world!",
		nickname : "dDeandddg",
		Key : "234edkgawh",
		mail : "Hello@D3"
	})
	.then(() => console.log("Data was inserted!"))
	.catch((err) => console.log(err));
}

create();
const { sequelize } = require('../models');
const model = require("../models/index");

/*sequelize.sync({ force : false }) // these are function for connecting DB
.then(() => {
	console.log('DB Connected!');
})
.catch((err) => {
	console.error(err);
});
*/

function create() {
	model.user.create({ // use model name to handle table || create is inserting data command
		user_id : "Hello",
		user_password : "Hello world!",
		user_nickname : "DeangDeang",
		salt_key : "234edkgawh",
		Email : "Hello@Dog"
	})
	.then(() => console.log("Data was inserted!"))
	.catch((err) => console.log(err));
}

create();
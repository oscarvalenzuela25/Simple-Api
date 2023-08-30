require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//const db = require('./config/dbConfigConnect');

// App config
const app = express();
const port = process.env.PORT || 3001;

// express Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api', routes);

app.listen(port, () => console.log(`Aplicacion hosteada en el puerto ${port}`));

// Forzar a la BD a actualizarce

// db.sync()
// 	.then(() => {
// 		console.log('Sincronizado');
// 	})
// 	.catch(error => {
// 		console.log('Error de Sincronizado');
// 	});

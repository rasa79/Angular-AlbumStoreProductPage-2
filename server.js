const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + '/dist'));
app.use(__dirname + '/dist*', express.static(path.join(process.cwd(), environment)));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
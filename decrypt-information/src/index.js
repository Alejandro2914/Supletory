const express = require ('express');
const morgan = require ('morgan');
const app = express();
var cors = require('cors');
app.set('port', process.env.PORT || 4017);

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/apidecrypt', require('./Decrypt/apidecrypt'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
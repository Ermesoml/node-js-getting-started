const express = require('express')
const app = express();

app.use(express.static('public', { dotfiles: 'allow' }));
app.listen(8080);

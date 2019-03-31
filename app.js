const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 8008);

app.use(express.static(path.join(process.cwd() + '/public')));

app.get('/', (request, response) => {
    response.header({'Content-Type': 'text/html'});
    response.sendFile(path.join(process.cwd() + '/public/html/index.html'));
});

app.listen(port, () => {
    console.log('Server running on', port);
});

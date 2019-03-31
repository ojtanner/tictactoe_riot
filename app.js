const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 8000);

app.use(express.static(path.join(process.cwd() + '/public/dist')));

app.get('/', (request, response) => {
    response.header({'Content-Type': 'text/html'});
    response.sendFile(path.join(process.cwd() + '/public/dist/index.html'));
});

app.listen(port, () => {
    console.log('Server running on', port);
});

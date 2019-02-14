const app = require('express')();
const path = require('path');
const port = (process.env.PORT || 8000);

app.get('/', (request, response) => {
    response.header({'Content-Type': 'text/html'});
    response.sendFile(path.join(__dirname, '/public/html/index.html'));
});

app.listen(port, () => {
    console.log('Server running on', port);
});

import express from 'express';
const app = express();

// do not use this in production dangerous code . exposes all files in the directory
app.use(express.static('./'));

app.listen(3000, () => { console.log('Server is running...') });
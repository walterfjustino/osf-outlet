const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.log('Server running on the port: 3000'))
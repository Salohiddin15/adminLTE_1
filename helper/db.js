const mongoose = require('mongoose');
const URI = 'mongodb+srv://Salohiddin:DUSEdIZ2I9swiUEn@cluster0.fdrpz.mongodb.net/my'


module.exports = async () => {
    try {
        await mongoose.connect(URI);

        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'Console error'))
        db.once('open', function () {
            console.log('MongoDB success connected');
        })

    } catch (error) {
        console.log(error);
    }
}

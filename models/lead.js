const mongoose = require('mongoose')

const Lead = mongoose.model('lead', {
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    country: {
        type: String,
    }
})

module.exports = Lead
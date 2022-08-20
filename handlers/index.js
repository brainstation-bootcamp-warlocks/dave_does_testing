const { getMessage } = require('../utils');

const handlers = {
    root: (req, res) => {
        return res.json({ message: 'hello world!' });
    },
    message: (req, res) => {
        return res.json({
            message: getMessage(req.params.message)
        });
    },
};

module.exports = handlers;

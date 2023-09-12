const getUser = require('../controller/getUser');

const getUserHandler = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await getUser({ mail, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = getUserHandler;
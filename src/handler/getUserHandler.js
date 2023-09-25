const getUser = require('../controller/getUser');

const getUserHandler = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await getUser({ mail, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({ error: error });
    };
};

module.exports = getUserHandler;
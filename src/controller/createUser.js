const { User } = require('../db');
const hashFunction = require('../utils/hashFunction');

const createUser = async (data) => {
    const { name, last_name, mail, password } = data;
    const hashedPassword = hashFunction(password, name);
    
    const [user, boolean] = await User.findOrCreate({
        where: { mail },
        defaults: { name, last_name, password: hashedPassword }
    });

    if (!boolean) throw Error(`Ya existe un usuario registrado con este ${mail}`);
    return user;
};

module.exports = createUser;
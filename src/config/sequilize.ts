{
    const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize(process.env.postgeSQLdbName, process.env.postgeSQLuser, process.env.postgeSQLpassword, {
        host: 'localhost',
        dialect: 'postgres'
    });


    (async () => {
        try {
            await sequelize.authenticate();
            console.log('DB Connection has been established successfully.');
            // await sequelize.sync({ force: true });
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })()

    module.exports = {
        sequelize,
    };
}
module.exports = (sequelize, Sequelize) => {
    const url = sequelize.define("url", {
      hashed: {
        type: Sequelize.STRING
      },
      full_Url: {
        type: Sequelize.STRING
      }
    });
  
    return url;
  };
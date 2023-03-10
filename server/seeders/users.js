module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Genders', [{
        id: '9c23bab0-5ecf-4568-a235-373c96632b67',
        username:"boey6172",
        password:"$2b$10$lv.iTbK8xNi5TqE5RiDRg.Z2qt35f1kPxJSiJLwPpma8g9BFrgqHq",
        email:"boey6172@gmail.com",
        contactNumber:"09270748777",
        employee:1,
        role:"d0eff7f7-2740-44ca-850f-836eb28093e6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genders', null, {});
    }
  };
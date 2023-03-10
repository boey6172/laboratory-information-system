module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Genders', [{
        id: '9c23bab0-5ecf-4568-a235-373c96632b67',
        description: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd58b5a0d-f8c9-4a32-861a-d84547812ac9',
        description: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    },
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Genders', [{
          id: '9c23bab0-5ecf-4568-a235-373c96632b67',
          description: 'Male',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'd58b5a0d-f8c9-4a32-861a-d84547812ac9',
          description: 'Female',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genders', null, {});
    }
  };
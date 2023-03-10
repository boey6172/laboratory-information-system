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
        return queryInterface.bulkInsert('Roles', [{
          id: 'd0eff7f7-2740-44ca-850f-836eb28093e6',
          description: 'User',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'c9cb1a54-3c62-4976-977f-5a1b5a8e494c',
          description: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
    }
  };
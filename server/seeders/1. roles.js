module.exports = {
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
        },
        {
          id: 'b6962235-1933-4eae-bda7-d4e92d84fe91',
          description: 'Doctor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '4feb7d30-c245-4f21-8f03-11fd11d72c8a',
          description: 'Examiner',
          createdAt: new Date(),
          updatedAt: new Date()
        },        
        {
          id: '593fa9fa-68be-4da4-afc6-3eec60960ced',
          description: 'Encoder',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
    }
  };
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Laboratories', [{
        id: 'd4916306-c800-416d-94f9-67b04cb5adc4',
        description: 'Hematology',
        signatory:"d2bb24e1-2d9e-426f-b056-f5a49d060dff",
        signature:null,
        deleted_at:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ff2d2069-c09c-4e95-a6b9-f8a70cf5200e',
        description: 'Clinical Chemistry',
        signatory:"d2bb24e1-2d9e-426f-b056-f5a49d060dff",
        signature:null,
        deleted_at:null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Laboratories', null, {});
    }
};
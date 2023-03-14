module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        id: '9c23bab0-5ecf-4568-a235-373c96632b67',
        username:"boey6172",
        password:"$2b$10$lv.iTbK8xNi5TqE5RiDRg.Z2qt35f1kPxJSiJLwPpma8g9BFrgqHq",
        email:"boey6172@gmail.com",
        contact_no:"09270748777",
        employee:"1",
        role:"c9cb1a54-3c62-4976-977f-5a1b5a8e494c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'faf26718-48b3-4828-9d40-23ac55bc40de',
        username:"encoder1",
        password:"$2b$10$lv.iTbK8xNi5TqE5RiDRg.Z2qt35f1kPxJSiJLwPpma8g9BFrgqHq",
        email:"boey6172@gmail.com",
        contact_no:"09270748777",
        employee:"1",
        role:"593fa9fa-68be-4da4-afc6-3eec60960ced",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd2bb24e1-2d9e-426f-b056-f5a49d060dff',
        username:"examiner1",
        password:"$2b$10$lv.iTbK8xNi5TqE5RiDRg.Z2qt35f1kPxJSiJLwPpma8g9BFrgqHq",
        email:"boey6172@gmail.com",
        contact_no:"09270748777",
        employee:"1",
        role:"4feb7d30-c245-4f21-8f03-11fd11d72c8a",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '7ce19d17-3836-42c2-89f7-d31095a789ca',
        username:"doctor1",
        password:"$2b$10$lv.iTbK8xNi5TqE5RiDRg.Z2qt35f1kPxJSiJLwPpma8g9BFrgqHq",
        email:"boey6172@gmail.com",
        contact_no:"09270748777",
        employee:"1",
        role:"b6962235-1933-4eae-bda7-d4e92d84fe91",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };
module.exports = (sequelize, DataTypes) => {

    const Patients = sequelize.define("Patients", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        firstname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        middlename:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        suffix:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        birthday:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gender:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        contactNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },

    })
    // Employees.associate = (models) => {
    //     Employees.hasOne(models.Gender,{
    //         foreignKey: {
    //             name: 'gender'
    //         },
    //     })
    // }
    Patients.associate = (models)=> {
        Patients.belongsTo(models.Gender, {
            foreignKey: 'gender',
            onDelete:'NO ACTION'
        })
    };
      
    return Patients
} 
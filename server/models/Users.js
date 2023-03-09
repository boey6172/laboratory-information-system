module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        employee:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        contact_no:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    })
    Users.associate = (models) => {
        Users.belongsTo(models.Role, {
            foreignKey: 'role',
            onDelete:'NO ACTION'
        })
        // Users.belongsTo(models.Employees, {
        //     foreignKey: 'employee',
        //     onDelete:'NO ACTION'
        // })
    }
    return Users
} 
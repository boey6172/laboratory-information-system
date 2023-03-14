module.exports = (sequelize, DataTypes) => {

    const Laboratories = sequelize.define("Laboratory", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        signatory:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        signature:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    Laboratories.associate = (models) => {
        Laboratories.hasMany(models.Users,{
            foreignKey: 'signature',
            onDelete:'NO ACTION'
        })
    }
    return Laboratories
} 
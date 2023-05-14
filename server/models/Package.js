module.exports = (sequelize, DataTypes) => {

    const Package = sequelize.define("Package", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        package_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    Package.associate = (models) => {
        Package.hasMany(models.PackageExam,{
            foreignKey: 'package_id',
            onDelete:'NO ACTION'
        })
    }
    return Package
} 
module.exports = (sequelize, DataTypes) => {

    const PackageExam = sequelize.define("PackageExam", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        package_id:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        exam_id:{
            type:DataTypes.UUID,
            allowNull: false,
        },
    })
    PackageExam.associate = (models) => {
        PackageExam.hasMany(models.Exam,{
            foreignKey: 'exam_id',
            onDelete:'NO ACTION'
        })
        // PackageExam.hasMany(models.Package,{
        //     foreignKey: 'id',
        //     onDelete:'NO ACTION'
        // })
    }
    return PackageExam
} 
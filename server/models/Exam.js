module.exports = (sequelize, DataTypes) => {

    const Exams = sequelize.define("Exam", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        exam:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        examiner:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        laboratory_id:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        created_by:{
            type:DataTypes.UUID,
            allowNull: true,
        },
        updated_by:{
            type:DataTypes.UUID,
            allowNull: true,
        },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    Exams.associate = (models) => {
        Exams.hasMany(models.Users,{
            foreignKey: 'examiner',
            onDelete:'NO ACTION'
        })
        Exams.hasMany(models.Laboratory,{
            foreignKey: 'laboratory_id',
            onDelete:'NO ACTION'
        })
    }
    return Exams
} 
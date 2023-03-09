module.exports = (sequelize, DataTypes) => {

    const Attachments = sequelize.define("Attachments", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        employee:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        documentType:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        file:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    })
    Attachments.associate = (models)=> {
        Attachments.belongsTo(models.DocumentTypes, {
            foreignKey: 'documentType',
            onDelete:'NO ACTION'
        })
    };
    return Attachments
} 
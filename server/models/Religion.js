module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Religions", {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            // allowNull: false,
            primaryKey:true,
        },
        religion:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        deleted_at:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    })
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments,{
    //         ondelete: "cascade",
    //     })
    // }
    return Posts
} 
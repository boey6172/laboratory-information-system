module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Gender", {
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
    })
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments,{
    //         ondelete: "cascade",
    //     })
    // }
    return Posts
} 
module.exports = (sequelize, DataTypes) => {

    const Primary = sequelize.define("Primary", {
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
        school_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        year_completed:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        year_graduated:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    })
    // Posts.associate = (models) => {
    //     Posts.hasMany(models.Comments,{
    //         ondelete: "cascade",
    //     })
    // }
    return Primary
} 
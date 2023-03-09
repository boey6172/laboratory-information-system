module.exports = (sequelize, DataTypes) => {

    const Employees = sequelize.define("Employees", {
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
        rank:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        regionAssignment:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        religion:{
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
        empDate:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        philNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        pagIbigNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        gsisNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        nhmcNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        tinNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        taxstat:{
            type:DataTypes.UUID,
            allowNull: false,
        },
        salaryGrade:{
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
    Employees.associate = (models)=> {
        Employees.belongsTo(models.Gender, {
            foreignKey: 'gender',
            onDelete:'NO ACTION'
        })
        Employees.belongsTo(models.Ranks, {
            foreignKey: 'rank',
            onDelete:'NO ACTION'
        })
        Employees.belongsTo(models.RegionAssignments, {
            foreignKey: 'regionAssignment',
            onDelete:'NO ACTION'
        })
        Employees.belongsTo(models.Religions, {
            foreignKey: 'religion',
            onDelete:'NO ACTION'
        })
        Employees.belongsTo(models.TaxStatuses, {
            foreignKey: 'taxstat',
            onDelete:'NO ACTION'
        })
    };
      
    return Employees
} 
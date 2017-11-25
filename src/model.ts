
export default function (sequelize, DataTypes) {
    return sequelize.define('Test', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
            underscored: true,
            freezeTableName: true,
            tableName: 'tests',
        })
}

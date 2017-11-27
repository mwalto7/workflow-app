export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Channel.associate = (models) => {
    // 1:M because a Channel can belong to one Team
    Channel.belongsTo(models.Team, {
      foreignKey: { // foreignKey shares the value of teamId from Team
        name: 'teamId',
        field: 'team_id', // field changes the title of teamId to team_id in the table
      },
    });
    // N:M because a Channel can belong to many Users
    Channel.belongsToMany(models.User, {
      through: 'channel_member', // through the channel_member table
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
    });
  };

  return Channel;
};

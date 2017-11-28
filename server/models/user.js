import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'Username can only contain letters and numbers.'
          },
          len: {
            args: [7, 25],
            msg: 'Username must be between 7 and 25 characters long.'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Not a valid email address.'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [8, 25],
            msg: 'Password must be between 8 and 25 characters long.'
          }
        }
      },
      manager: DataTypes.STRING,
      subscriptionType: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: async user => {
          const hashedPassword = await bcrypt.hash(user.password, 12);
          user.password = hashedPassword;
        }
      }
    }
  );
  User.associate = models => {
    User.belongsToMany(models.Team, {
      through: models.Member,
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    });
    // N:M
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: {
        name: 'userId',
        field: 'user_id'
      }
    });
  };

  return User;
};

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "dh_digital_travels",
    "host": "127.0.0.1",
    "dialect": "mysql",
    define: {
      underscored: true // para poder usar guion bajo
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

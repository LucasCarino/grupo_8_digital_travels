module.exports = {
  "development": {
    "username": "uvahhxkputkjrbvt",
    "password": "IMGUrvyAMRDKqTox9fOs",
    "database": "b4taui6tvoerdbvusmsh",
    "host": "b4taui6tvoerdbvusmsh-mysql.services.clever-cloud.com",
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

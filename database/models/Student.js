/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
    
email: {
    type: Sequelize.STRING,
    allowNull: false
},
      
  imageUrl: {
      type: Sequelize.STRING,
      defaultValue: "https://www.onlinelabels.com/API/Clipart/DownloadClipart?ClipArtID=127640&FileExtension=png"
    },
    
gpa: {
    type: Sequelize.DECIMAL,
    validate: {
        min: 0,
        max: 4
    }
}
});

// Export the student model
module.exports = Student;

const fs = require("fs");

function deleteFile(filePath) {

    try {

        if (filePath && fs.existsSync(filePath)) {

            fs.unlinkSync(filePath);

        }

    } catch (err) {

        console.log("Cleanup Error:", err.message);

    }

}

module.exports = {

    deleteFile

};
const multer = require('multer');

module.exports = function uploadImage(folder) {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, folder);
            // cb(null, '../public/uploads/posts/');
        },
    
        filename: function(req, file, cb) {
            cb(null, new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-') + '-' + file.originalname);
        }
    });
    
    const fileFilter = (req, file, cb) => {
        // reject a file
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    };
    
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    });
}

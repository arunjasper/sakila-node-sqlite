var fs = require('fs');
var imgGen = require('js-image-generator');
const controllerCommon = require('./common/controllerCommon');

class ImageController {
    constructor() {
        this.common = new controllerCommon();
    }

    getImage(req, res) {
        this.generateImage()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    // Generate one image
    generateImage() {
        return new Promise(function (resolve, reject) {
            try {
                const img = imgGen.generateImage(800, 600, 80, function (err, image) {
                    return image.data;
                });
                resolve(img);
            }
            catch (er) {
                reject(er)
            }

        });
    }

}


module.exports = ImageController;
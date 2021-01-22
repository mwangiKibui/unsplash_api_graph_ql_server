
require('dotenv').config();
require('es6-promise').polyfill();
require('isomorphic-fetch');
const unsplash = require('unsplash-js');


class ImageResolver {

    constructor(){
        this.api = unsplash.createApi({
            accessKey:process.env.ACCESS_KEY
        });
    };

    //structuring image.

    structureImage (result) {
        
    };

    //structuring user.

    structureUser (result){
        
    };

    //getting the photos.

    async listPhotos(page,perPage){        

    };

    //searching for photos.
    async searchPhotos(key,page,perPage,orientation){        
        
    };

    //getting an image.
    async getImage(photoId){

    }
};

module.exports = ImageResolver;
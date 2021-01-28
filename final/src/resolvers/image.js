
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

    //restructuring image.

    async structureImage (result) {
        return {
            ...result,
            link:result['links']['download'],
            url:result['urls']['full']
        }
    };

    //restructuring user.

    async structureUser (result){
        return {
            ...result,
            profile_image:result['profile_image'] ? result['profile_image']['medium']: null
        }
    };

    //getting the photos.

    async listPhotos(page,perPage){

        let result = await this.api.photos.list({
            page,
            perPage
        }).catch(console.log);
    
        //error checking
        if(result.errors) throw new Error(result.errors[0]);
    
        return result.response['results'].map((photo) => {
    
            let image = this.structureImage.bind(this,photo);
    
            let user = this.structureUser.bind(this,photo['user']);
    
            return {
                image,
                user
            };
    
        });
    
    };
    //searching for photos.
    async searchPhotos(key,page,perPage,orientation){


        let result = await this.api.search.getPhotos({
            query: key,
            page,
            perPage,
            orientation,
        })
        .catch(console.log);

        //error checking
        if(result.errors) throw new Error(result.errors[0]);

        return result['response']['results'].map((photo) => {


            let image = this.structureImage.bind(this,photo);

            let user = this.structureUser.bind(this,photo['user']);

            return {
                image,
                user
            }

        });
        
    };

    //getting an image.
    async getImage(photoId){

        let result = await this.api.photos.get({photoId})
        .catch(console.log);

        //error checking
        if(result.errors) throw new Error(result.errors[0]);

        let image = this.structureImage.bind(this,result['response']);

        let user = this.structureUser.bind(this,result['response']['user']);

        return {
            image,
            user
        };

    }

};

module.exports = ImageResolver;
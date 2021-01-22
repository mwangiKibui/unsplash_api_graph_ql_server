require('dotenv').config();
require('es6-promise').polyfill();
require('isomorphic-fetch');
const unsplash = require('unsplash-js');

class UserResolver {

    constructor(){
        this.api = unsplash.createApi({
            accessKey:process.env.ACCESS_KEY
        });

    };

    //restructuring user
    structureUser (result){
        return {
            ...result,
            profile_image:result['profile_image'] ? result['profile_image']['medium']: null
        }
    };

    //restructuring images
    structureImage (result) {
        return {
            ...result,
            link:result['links']['download'],
            url:result['urls']['full']
        }
    };

    //fetching user details
    async getUserDetails(username){

        let result = await this.api.users.get({username})
        .catch(console.log);

        //error checking
        if(result.errors) throw new Error(result.errors[0]);

        let user = this.structureUser(result.response);
        
        return user;

    };

    //fetching user photos.
    async getUserPhotos(username,page,perPage,orientation){

        let result = await this.api.users.getPhotos({
            username,
            page,
            perPage,
            orderBy:'latest',
            orientation
        })
        .catch(console.log);

        //error checking
        if(result.errors) throw new Error(result.errors[0]);

        return result.response.results.map((photo) => {

            let image = this.structureImage.bind(this,photo);
            let user = this.structureUser.bind(this,photo['user']);

            return {
                image,
                user
            };

        });

    }

};

module.exports = UserResolver;
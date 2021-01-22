require('dotenv').config();
require('es6-promise').polyfill();
require('isomorphic-fetch');
const unsplash = require('unsplash-js');
const {structureImage,structureUser} = require('../utils/structure');

class UserResolver {

    constructor(){
        this.api = unsplash.createApi({
            accessKey:process.env.ACCESS_KEY
        })
    };

    //fetching user details
    async getUserDetails(username){

    };

    //fetching user photos.
    async getUserPhotos(username,page,perPage,orientation){
        
    }

};

module.exports = UserResolver;
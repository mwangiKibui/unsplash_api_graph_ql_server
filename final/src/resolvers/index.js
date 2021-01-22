

//controllers
const Image = require('./image');
const User = require('./user');

let resolvers = {

    Query:{
        getPhotos:(_,{page,perPage}) => new Image().listPhotos(page,perPage),
        searchPhotos:(_,{key,page,perPage,orientation}) => new Image().searchPhotos(key,page,perPage,orientation),
        fetchImage:(_,{photoId}) => new Image().getImage(photoId),
        getUserDetails:(_,{username}) => new User().getUserDetails(username),
        getUserPhotos:(_,{username}) => new User().getUserPhotos(username)
    }

};

module.exports = resolvers;
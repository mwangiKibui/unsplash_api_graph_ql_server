const {gql} = require('apollo-server');

//components
const {Image,ImageResponse} = require('./image');
const User = require('./user');

let Query = gql`
    type Query {
        getPhotos(page:Int!,perPage:Int!):[ImageResponse!]!
        searchPhotos(key:String!,page:Int!,perPage:Int!,orientation:String!):[ImageResponse]!
        fetchImage(photoId:String):ImageResponse
        getUserDetails(username:String): User
        getUserPhotos(username: String): User
    }
`;

module.exports = [
    Query,
    Image,
    User,
    ImageResponse    
]
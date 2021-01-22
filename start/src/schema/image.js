const {gql} = require('apollo-server');


const Image = gql`
    type Image {
        id:ID!
        created_at:String!
        description:String
        alt_description:String
        url:String
        link:String
    }    
`;

const ImageResponse = gql`
    type ImageResponse {
        image:Image,
        user:User
    }
`;

module.exports = {
    Image,ImageResponse
};
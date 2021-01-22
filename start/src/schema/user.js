const {gql} = require('apollo-server');

const User = gql`

    #type Link
    type Link {
        self:String!
        photos:String!
        portfolio:String!
        following:String!
        followers:String!
    }

    type User {
        id:ID!
        username:String!
        name:String!
        profile_image:String
        bio:String
        location:String
        links:Link,
        total_photos:Int!
    }

`;

module.exports = User;
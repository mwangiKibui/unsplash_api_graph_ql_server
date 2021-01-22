const structureImage = (result) => {
    return {
        ...result,
        link:result['links']['download'],
        url:result['urls']['full']
    }
};

const structureUser = result => {
    return {
        ...result,
        profile_image:result['profile_image'] ? result['profile_image']['medium']: null
    }
};

module.exports = {
    structureImage,
    structureUser
};
//@ts-nocheck

export const initializeNewLike = (publicID, postID) => {
    let newLike = {
        publicID, //public
        postID,//array of post ids
        creationTimeStamp: Date.now()
    }
    return newLike;
}
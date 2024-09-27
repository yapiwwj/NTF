import request from "./request";
export default {
  //购买并上链
  consume(collectionId, userId, userHash) {
    const requestData = JSON.stringify({
      collectionId: collectionId,
      userId: userId,
      userHash: userHash,
    });
    return request.post("api",requestData);
  },
};

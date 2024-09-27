import request from "./request";
export default {
  // 查询哈希值
  hashInquire(hash) {
    collectionHash = JSON.stringify(hash);
    return request.get("api", collectionHash);
  },
};

import request from "./request";
export default {
  // 创造商品并上链
  createCollection(img, createId, num) {
    const requestData = JSON.stringify({
      img: img,
      createId: createId,
      num: num,
    });
    return request.post("api", requestData);
  },
};

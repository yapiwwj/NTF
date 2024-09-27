import request from "./request";
export default {
  login(userInfo) {
    console.log(userInfo);
    return request.post("/user/register", userInfo,true);
  },
};

const request = {
  baseUrl: "http://192.168.3.127:8080",
  request(config) {
    //config:请求配置对象，具体值参考uniapp文档
    config = beforeRequest(config);
    config.url = this.baseUrl + config.url;
    //创建一个Promise对象，在里面发送请求
    return new Promise((resolve, reject) => {
      uni
        .request(config)
        .then((res) => {
          // let [error, resp] = res;
          const { error, data } = res;
          const response = beforeResponse(data);
          resolve(response);
        })
        .catch((err) => {
          errorHandle();
          reject(err);
        });
    });
  },
  get(url, data, auth) {
    return this.request({
      url: url,
      data: data,
      auth: auth,
      // header: {'Content-Type': 'application/json'},
      method: "GET",
    });
  },
  post(url, data, auth) {
    return this.request({
      url: url, 
      data: data,
      auth: auth,
      method: "POST",
      header: { "Content-Type": "application/json" },
    });
  },
  delete(url, auth) {
    return this.request({
      url: url,
      auth: auth,
      method: "DELETE",
    });
  },
  put(url, data, auth) {
    return this.request({
      url: url,
      data: data,
      auth: auth,
      method: "PUT",
    });
  },
};

//请求拦截器
const beforeRequest = (config) => {
  console.log("请求拦截器", config); 
  //请求之前的操作

  // config.header = {
  //   ...config.header,
  //   "Content-Type": "application/json", // 设置默认的 Content-Type
  // };
  return config;
};

//响应拦截器
const beforeResponse = (response) => {
  console.log("响应拦截器", response);
  return response;
};

//异常处理器
const errorHandle = (err) => {
  console.log("网络异常，请求失败！", err);
};

export default request;

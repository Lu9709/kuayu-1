// const request = new XMLHttpRequest();
// request.open("GET", "http://qq.com:8888/friend.json");
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   }
// };
// request.send();

function JSONP(url) {
  return new Promise((resolve, reject) => {
    const random = "2021/2/25" + Math.random(); //随机数
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    // 添加个查询参数
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

JSONP("http://qq.com:8888/friend.js").then((data) => {
  console.log(data);
});






 
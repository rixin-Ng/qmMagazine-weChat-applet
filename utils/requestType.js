// obj={
//     url
//     success
//     fail
// }

function request(obj){
    wx.request({
        url: obj.url,
        success: function(res){
            if(res.data.code == 0){
                obj.success(res);   
            }else{
                requestError();
            }
        },
        fail: function(){
            requestError();
        }
      })
}
function requestError(){
    wx.showToast({
        title: "请求出错",
        icon: none
    })
}

module.exports = request;


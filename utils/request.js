class Request {
    baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";
    getData({ url, data = {}, method = "GET" }) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseUrl + url,
                data: data,
                method: method,
                success: res => {
                    if (res.data.code == 0) {
                        resolve(res.data.data);
                    } else {
                        this._requestError();
                    }
                },
                fail: err => {
                    reject(err);
                    this._requestError();
                }
            })
        })
    };
    _requestError() {
        wx.showToast({
            title: "请求出错",
            icon: "none"
        })
    }
}

export { Request }


class likeModel {
    getLikeList() {
        return wx.getStorageSync('likeList') || [];
    }
    setLikeList(value) {
        wx.setStorageSync('likeList', value);
    }
    addLikeList(articleListDetail) {
        const likeList = this.getLikeList();
        likeList.unshift(articleListDetail);
        this.setLikeList(likeList);
    }
    removeLikeList(artId) {
        const likeList = this.getLikeList();
        let nowIndex = 0;
        likeList.forEach((index, item) => {
            if (artId = item.artId) {
                nowIndex = index;
                return
            }
        })
        likeList.splice(nowIndex, 1);
        this.setLikeList(likeList);
    }
    getLikeStatus(artId) {
        const likeList = this.getLikeList();
        let likeStatus = false;
        likeList.forEach((item, index) => {
            if (item.artId == artId) {
                likeStatus = true;
            }
        })
        // console.log(likeStatus)
        return likeStatus;
    }
}

export { likeModel }
class SubscribeModel {
    getMyTagList() {
        return wx.getStorageSync('myTagList') || []
    }
    setMyTagList(value) {
        wx.setStorageSync('myTagList', value)
    }
    removeMyTagList(tagId){
        let nowIndex = 0;
        let myTagList = this.getMyTagList();
        myTagList.forEach((item,index)=>{
            if(item.tagId == tagId){
                nowIndex = index
            }else{
                return
            }
            myTagList.splice(nowIndex,1);
            this.setMyTagList(myTagList);
        })
    }
}

export { SubscribeModel }
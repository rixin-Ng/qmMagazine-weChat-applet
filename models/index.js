import {Request} from '../utils/request.js'

class requestModels extends Request{
    getRecommendInfo(magazineId=0){
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`
        })
    };
    getMarkTypeList(magazineId=0){
        return this.getData({
            url:`/getMarkTypeList/${magazineId}`
        })
    };
    getIndexArticleList(magazineId=0,start=0){
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
}

export {requestModels}
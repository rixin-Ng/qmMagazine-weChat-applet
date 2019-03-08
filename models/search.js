import {Request} from '../utils/request.js'

class SearchModel extends Request{
    getSearchArticleRecommend(searchWord){
        return this.getData({
            url:`/searchArticleRecommend/${searchWord}`
        })
    };
    getSearchArticleList(searchWord,start=0){
        return this.getData({
            url:`/searchArticleList/${searchWord}/${start}`
        })
    }
}

export {SearchModel}
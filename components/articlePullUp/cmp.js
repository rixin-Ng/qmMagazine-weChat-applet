// components/articlePullDown/cmp.js
import { requestModels } from '../../models/index.js';
import { SearchModel } from '../../models/search.js';
const request = new requestModels();
const searchModel = new SearchModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike: Boolean,
    articleList: {
      type: Array,
      value: [],
      observer() {
      }
    },
    more: {
      type: String,
      value: "",
      observer: 'loadMore'

    },
    magazineId: {
      type: Number,
      value: 0,
      observer: "hasMoreData"
    },
    pageType: String,
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false
  },
  attached() {
    const pages = getCurrentPages();
    const index = pages.length - 1;
    let pageType = '';
    if (pages[index].route == "pages/search/search") {
      pageType = 'search'
    } else {
      pageType = 'index'
    }
    this.setData({
      pageType
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if (this._isLoading() || this.data.noMoreData) {
        console.log(this._isLoading(), this.data.noMoreData)
        return;
      }
      this._loadLock();
      this.getData()

    },
    getData() {
      const start = this.data.articleList.length;
      let model = null;
      if (this.data.pageType == 'search') {
        const word = this.data.word;
        if (this.data.loading) {
          model = searchModel.getSearchArticleList(word, start)
        }
      } else {
        const magazineId = this.data.magazineId;
        if (this.data.loading) {
          model = request.getIndexArticleList(magazineId, start)
        }
      }
      model.then(res => {
        this._getMoreData(res);
        this._loadOpen();
      })
    },
    hasMoreData() {
      this.setData({
        noMoreData: false
      })
    },
    _getMoreData(list) {
      let combineList = this.data.articleList.concat(list);
      console.log(combineList)
      if (combineList.length == this.data.articleList.length) {
        this.setData({
          noMoreData: true,
        })
        return
      }
      this.setData({
        articleList: combineList,
      });
    },
    _isLoading() {
      return this.data.loading
    },
    _loadLock() {
      this.setData({
        loading: true
      })
    },
    _loadOpen() {
      this.setData({
        loading: false
      })
    }
  }
})

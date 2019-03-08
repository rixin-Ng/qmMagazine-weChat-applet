
# qm杂志-微信小程序（测试版）
该项目是基于微信web开发者工具的一个微信小程序项目。整个项目利用了微信开发者工具中的框架、自定义组件及API实现。
 
### 项目模块
项目中需要多次复用的功能抽离出来利用小程序自定义组件做成组件
1. 标签导航条模块：绑定点击事件和控制当前兴趣标签类的展示
2. 请求数据模块：调用封装好的数据请求方法，获取mock数据，根据响应回来的数据渲染页面
3. 授权管理模块：马克页面上登录按钮获取用户是否登录授权情况，授权成功后得到用户头像、昵称等用户信息、获取和渲染该用户的已收藏的文章列表以及杂志标签订阅管理列表
4. 文章管理模块：每篇文章对应的功能按钮模块，绑定点击事件用来控制展开更多选项、文章转发和管理该文章是否被马克
5. 文章列表加载模块：上拉页面绑定下拉触底事件，动态获取和更新渲染当前文章列表，展示更多
6.杂志标签订阅管理模块：给标签绑定点击事件，动态改变已订阅的标签列表
7.关键字搜索模块：输入关键字跳转页面，请求数据渲染页面
ps：测试版目前只支持搜索关键字"读书"
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/1.png)
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/2.png)
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/3.png)
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/4.png)
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/5.png)
![](https://github.com/rixin-Ng/qmMagazine-weChat-applet/raw/master/showImg/6.png)  

### 项目运行
1. $ git clone https://rixin-ng.github.io/qmMagazine-weChat-applet/
2. 下载`微信web开发者工具`并导入项目即可看到效果

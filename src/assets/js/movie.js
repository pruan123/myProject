var app = getApp();//引用
var util = require('../../../utils/utils.js')//引用数据请求的公共函数
Page({
  //初始化数据
  data:{
    movie:{}
  },//es6方式 module,class,promise,=>
  onLoad:function(options){
    var movieId = options.id;
    var url = app.globalData.doubanBase+ "/v2/movie/subject/"+movieId;
    util.http(url,this.processDoubanData,"GET","json");
  },
  //数据处理函数
  processDoubanData:function(data){
    //对数据源判空
    if(!data){
      return;
    }
    //定义一个空的js对象（导演director）为什么单独处理director，因为数据这个地方总是为空，其他数据有地方为空时，也要做相应处理
    var director = {
      avatar:"",
      name:"",
      id:""
    }
    //数据容错
    if(data.directors[0] !=null){
      if(data.directors[0].avatars !=null){
        director.avatar = data.directors[0].avatars.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }
    var movie = {
      movieImg :data.images ? data.images.large:"",
      country:data.countries[0],
      title:data.title,
      originalTitle:data.original_title,
      wishCount:data.wish_count,
      commentCount:data.comments_count,
      year:data.year,
      generes:data.genres.join("、"),
      stars:util.convertToStarsArray(data.rating.stars),
      score:data.rating.average,
      director:director,
      casts:util.convertToCastString(data.casts),
      castsInfo:util.convertToCastInfos(data.casts),
      summary:data.summary
    }
    //数据绑定
    this.setData({
      movie:movie
    })
  },
  // 查看图片
  viewMoviePostImg:function(event){
    var src =event.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [src],
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})

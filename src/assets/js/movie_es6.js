import {Movie} from 'class/Movie.js'    //引入类
var app = getApp();//引用
Page({
  //初始化数据
  data:{
    movie:{}
  },//es6方式 module,class,promise,=>
  onLoad:function(options){
    var movieId = options.id;
    var url = app.globalData.doubanBase+ "/v2/movie/subject/"+movieId;
    var movie = new Movie(url);
    //class类Movie的方法getMovieData，接收一个回调函数，因为回调里面有http请求是异步的，所以要用这种方法
    //假如回调是同步的，可以使用下面的方法直接取值
    // var movieData= movie.getMovieData();
    //function(movie)中的movie是getMovieData方法内处理过返回的movie
    var that =this;
    movie.getMovieData(function(movie){
      that.setData({
        movie:movie
      })
    })
  },
  // 查看图片
  viewMoviePostImg:function(event){
    var src =event.currentTarget.dataset.src;
    wx.previewImage({
      current: src, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [src],
    })
  }
})

var util = require('../../../../utils/utils.js');
// 创建Movie对象
class Movie {
  //构造函数
  constructor(url) {
    this.url = url;
  }
  //定义两个成员变量getMovieData,processDoubanData
  getMovieData(cb) {
    this.cb = cb;
    util.http(this.url, this.processDouban.bind(this));
  }
  processDoubanData(data) {
    if (!data) {
      return;
    }
    var director = {
      avatar: "",
      name: "",
      id: ""
    }
    //数据容错
    if (data.directors[0] != null) {
      if (data.directors[0].avatars != null) {
        director.avatar = data.directors[0].avatars.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }

    var movie = {
      movieImg: data.images ? data.images.large : "",
      country: data.countries[0],
      title: data.title,
      originalTitle: data.original_title,
      wishCount: data.wish_count,
      commentCount: data.comments_count,
      year: data.year,
      generes: data.genres.join("、"),
      stars: util.convertToStarsArray(data.rating.stars),
      score: data.rating.average,
      director: director,
      casts: util.convertToCastString(data.casts),
      castsInfo: util.convertToCastInfos(data.casts),
      summary: data.summary
    }
    this.cb(movie);
  }
}
//class对象是个模块，使用export把对象输出出去
export{Movie}

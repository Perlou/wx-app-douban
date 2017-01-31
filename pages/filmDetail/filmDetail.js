/**
 * 电影详情页
 * @author Perlou(perloukevin@gmail.com)
 */

import fetch from '../../common/js/fetch'

const url = 'https://api.douban.com/v2/movie/subject/'
const searchByTagUrl = 'https://api.douban.com/v2/movie/search?tag='

Page({
    data: {
        filmDetail: {},
        showLoading: true,
        showContent: false
    },

    onLoad (options) {
        console.log(options)
        let filmId = options.id
        this.setData({
            id: filmId
        })
        fetch.getFilmDetail.call(this, url, filmId)
    }
})
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
        let filmId = options.id
        this.setData({
            id: filmId
        })
        fetch.getFilmDetail.call(this, url, filmId)
    },

    onPullDownRefresh () {
        this.onLoad({
            id: this.data.id
        })
    },

    // 跳转至人物详情页
    toPersonDetail (event) {
        let personId = event.currentTarget.dataset.id
        wx.redirectTo({
            url: `../personDetail/personDetail?id=${personId}`
        })
    }
})
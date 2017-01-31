/**
 * 排行页
 * @author Perlou(perloukevin@gmail.com)
 */

import fetch from '../../common/js/fetch'

const url = 'https://api.douban.com/v2/movie/top250'
const searchByTagUrl = 'https://api.douban.com/v2/movie/search?tag='

Page({
    data: {
        showLoading: true,
        hasMore: true,
        start: 0,
        films: [],
        windowHeight: 0
    },

    onLoad () {
        fetch.getFilms.call(this, url)
    },

    onShow () {
        const _this = this

        wx.getSystemInfo({
            success (res) {
                _this.setData({
                    windowHeight: res.windowHeight * 2
                })
            }
        })     
    },

    // 下拉刷新
    onPullDownRefresh () {
        this.setData({
            showLoading: true,
            hasMore: true,
            start: 0,
            films: []
        })
        fetch.getFilms.call(this, url)
    },

    // 页面滚动到底部，加载更多
    scrolltolowerEventHandle () {
        fetch.getFilms.call(this, url)
    },

    // 跳转至电影详情
    toFilmDetail (event) {
        // 获取电影 id
        let id = event.currentTarget.dataset.id
        wx.navigateTo({
            url: `../filmDetail/filmDetail?id=${id}`
        })
    }
})
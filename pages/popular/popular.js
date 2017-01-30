/**
 * 热映页
 * @author Perlou(perloukevin@gmail.com)
 */

import fetch from '../../common/js/fetch'

const url = 'https://api.douban.com/v2/movie/in_theaters'
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

    // 页面滚动到底部
    scrolltolowerEventHandle () {
        console.log('111')
    }
})

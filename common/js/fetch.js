/**
 * 负责与豆瓣 api 通信
 * @author Perlou(perloukevin@gmail.com)
 */

import config from './config'

export default {
    // 获取电影列表
    getFilms (url, cb) {
        const _this = this
        let {
            hasMore,
            start,
            showLoading,
            films
        } = this.data

        if (hasMore) {
            wx.showToast({
                title: '加载中...',
                icon: 'loading',
                duration: 10000
            })
            // 发起请求
            wx.request({
                url,
                data: {
                    city: config.city,
                    start: start,
                    count: config.count
                },
                method: 'GET',
                header: {
                    'Content-Type': 'application/json,application/json'
                },
                success (res) {
                    if (res.data.subjects.length === 0) {
                        _this.setData({
                            hasMore: false
                        })
                    } else {
                        _this.setData({
                            films: films.concat(res.data.subjects),
                            start: start + res.data.subjects.length,
                            showLoading: false
                        })
                    }
                    wx.stopPullDownRefresh()
                    typeof cb == 'function' && cb(res.data)
                },
                fail () {
                    _this.setData({
                        showLoading: false
                    })
                },
                complete () {
                    wx.hideToast()
                }
            })
        }
    },

    // 获取电影详情
    getFilmDetail (url, id, cb) {
        const _this = this
        wx.showToast({
            title: '加载中...',
            icon: 'loading',
            duration: 10000
        })

        wx.request({
            url: url + id,
            method: 'GET',
            header: {
                'Content-Type': 'application/json,application/json'
            },
            success (res) {
                // console.log(res)
                _this.setData({
                    filmDetail: res.data,
                    showLoading: false,
                    showContent: true
                })

                wx.setNavigationBarTitle({
                    title: res.data.title
                })
                wx.stopPullDownRefresh()
                typeof cb == 'function' && cb(res.data)
            },
            fail () {
                _this.setData({
                    showLoading: false
                })
            },
            complete () {
                wx.hideToast()
            }
        })
    }
}
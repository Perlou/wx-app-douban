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
            // wx.showTo
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
                    "Content-Type": "application/json,application/json"
                },
                success (res) {
                    if (res.data.subjects.length === 0) {
                        _this.setData({
                            hasMore: false
                        })
                    }
                }
            })
        }
    }
}
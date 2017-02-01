/**
 * 人物详情页
 * @author Perlou(perloukevin@gmail.com)
 */

import fetch from '../../common/js/fetch'

const url = 'https://api.douban.com/v2/movie/celebrity/'

Page({
    data: {
        person: {},
        showLoading: true,
        showContent: false
    }
})
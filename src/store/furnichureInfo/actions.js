// '服务'模块 - 家具详情 部分 - actions.js
import Vue from 'vue'
import axios from 'axios'
import * as types from './mutations'

export const getFurnichureInfo = ({commit}) => {
    axios.post('./static/furnichureInfo_1.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data.resultData
        console.log( "获取到数据" + get_data )
        // commit('addFurnichureInfo',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

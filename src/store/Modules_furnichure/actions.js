// '服务'模块 - 家具详情 部分 - actions.js
import Vue from 'vue'
import axios from 'axios'
import * as types from './mutations'

export const getFurnichureNO = ({commit}) => {
    axios.post('./static/furnichure.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data
        commit('addFurnichureInfo',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

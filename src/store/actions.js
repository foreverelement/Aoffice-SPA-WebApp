import Vue from 'vue'
import axios from 'axios'
import * as types from './mutations'

export const addState = ({commit}) => {
    axios.post('./static/data.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data
        commit('addState',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

// 后期将modules 分出
export const getFurnichureInfo = ({commit}) => {
    axios.post('./static/furnichureInfo_1.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data.resultData
        console.log( "获取到数据" + get_data )
        commit('addFurnichureInfo',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

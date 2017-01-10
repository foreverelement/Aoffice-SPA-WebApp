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
export const getFurnitureInfo = ({commit}) => {
    axios.post('./static/furnitureInfo_1.json', {
        // code: ''
    })
    .then(function (response) {
        let get_data = response.data.resultData
        commit('addFurnitureInfo',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

//获得 "外出详情" - 数据
export const getResearchInfo =({ commit }) => {
    axios.post( './static/researchInfo_1.json', {            //静态json测试
    // axios.post( 'http://192.168.1.250:8082/api/es/getInvestigate', {
        // code: ''
    })
    .then(function (response) {
        let get_ResearchInfoData = response.data.resultData
        console.log('response' + response)
        // console.log('data' + response.data)
        // console.log('response.data.resultData' + response.data.resultData)
        // console.log('INFO' + response.data.resultData.investigate)
    })
}


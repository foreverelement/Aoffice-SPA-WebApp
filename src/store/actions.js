import Vue from 'vue'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
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
    // axios.post('http://192.168.1.30:8282/aoffice_app/api/es/getInvestigate?icode=ig0001' , {
        // icode: 'ig0001'
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
export const getResearchInfo = ({commit}) => {
     // 静态json
    axios.post( './static/researchInfo_1.json', {
        // code: 'ig0001'
    })
    .then(function (response) {
        let get_ResearchInfoData = response.data.resultData
        // console.log(response)
        commit('addResearchInfo',get_ResearchInfoData)
    })
    .catch(function (error) {
        console.log(error);
    })

    // axios跨域解决方案( 测试成功 )
    // var params = new URLSearchParams();
    // params.append('code', 'ig0003');
    // axios.post('http://192.168.1.30:8282/aoffice_app/api/es/getInvestigate', params)
    // .then(function (response) {
    //     let get_ResearchInfoData = response.data.resultData
    //     console.log(response)
    //     commit('addResearchInfo',get_ResearchInfoData)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
}

//获得 "联合办公" - 数据
export const setCoWorkingInfo = ({commit}) => {
     // 静态json
    axios.post( './static/buildingDetails_CoWorking_1.json', {
        // code: 'ig0001'
    })
    .then(function (response) {
        let set_CoWorkingInfo = response.data.resultData
        commit('addCoWorkingInfo',set_CoWorkingInfo)
    })
    .catch(function (error) {
        console.log(error);
    })
}
//获得 "办公楼详情" - 数据
export const setOfficeBuildingInfo = ({commit}) => {
     // 静态json
    axios.post( './static/buildingDetails_OfficeBuilding_1.json', {
        // code: 'ig0001'
    })
    .then(function (response) {
        let set_OfficeBuildingInfo = response.data.resultData
        commit('addOfficeBuildingInfo',set_OfficeBuildingInfo)
    })
    .catch(function (error) {
        console.log(error);
    })
}

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

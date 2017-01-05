export const addState = (state,res) => {
    state.bannerImg_Arr.push(res.bannerImg)                     // 推 商品细节
    state.hotBuildingList_Arr.push(res.hotBuildingList)         // 推 热门房源

    // 判断楼盘类型
    for (var i = 0; i < res.hotBuildingList.length; i++) {
        if(res.hotBuildingList[i].type=='A'){
            state.hotBuildingList_Arr[0][i]['badge']        = '写字楼'
            state.hotBuildingList_Arr[0][i]['judgeShow']    = true
        }else{
            state.hotBuildingList_Arr[0][i]['badge']        = '联合办公'
            state.hotBuildingList_Arr[0][i]['judgeShow']    = false
        }
    }
}

// 后期将modules 分出
export const addFurnichureInfo = (state,res) => {
    // 推 家具 - 详情图片数组
    for(let i=0; i<res.furnitureSList.length;i++) {
        function FurnichureInfoImg(imgUrl) {
            this.imgUrl = res.picUrl + imgUrl
        }
        const furnichureInfoImgObj = new FurnichureInfoImg( res.furnitureSList[i].supply )
        state.furnichureInfo_Img_Arr.push(furnichureInfoImgObj)             // 将构造函数的对象推入 store的数组中
    }
}

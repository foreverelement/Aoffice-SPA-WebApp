export const addState = (state,res) => {
    state.bannerImg_Arr.push(res.bannerImg)                                                         // 推 商品细节
    state.hotBuildingList_Arr.push(res.hotBuildingList)                                             // 推 热门房源

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
        state.furnichureInfo_Img_Arr.push(furnichureInfoImgObj)                                     // 将构造函数的对象推入 store的数组中
    }
    // 家具 - 标题信息放入state.furnichureInfo对象中 ( code / 名称 / 描述 / 类型 / 价格 / 图片 )
    for ( let i in res.furniture ) {
        if ( i.toString() === "appPic") {
            let appPicUrl = res.picUrl + res.furniture.appPic                                       // 拼接Url: 图片服务头部url + 图片相对路径
            state.furnichureInfo['appPicUrl'] = appPicUrl
        } else {
            state.furnichureInfo[i] = res.furniture[i]                                              // 设置state的furnichureInfo对象内容属性( 不包括图片地址 )
        }
    }
    // 家居 - '家居尺寸' 两个列表数组 ( 家具名称 + 价格 )
    let furnichureSizeList_Arr = []                                                                 // 创建一个空数组，再循环中填入对象(拼接属性)
    function furnichureSizeObj(name,price){                                                         // 构造函数 - 创建 => 家具尺寸列表单个对象
        this.name   = name
        this.price  = price
    }
    for ( let a = 0; a < res.p1List.length; a++ ) {
        let furnichureSize_Obj = new furnichureSizeObj( res.p1List[a], res.p2List[a] )              // 家具尺寸列表内对象创建
        furnichureSizeList_Arr.push(furnichureSize_Obj)                                             // 将生成的对象 放入furnichureSizeList_Arr数组中
    }
    state.furnichureInfo['furnichureSizeList'] = furnichureSizeList_Arr                             // 最后将生成的list数组推入 state.furnichureInfo 对象中
}

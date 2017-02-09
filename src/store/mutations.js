export const addState = (state,res) => {
    let appTopImgUrl_Arr    = []
    let hotBuildingImg_Arr  = []

    // 拼接顶部轮播图 图片地址
    for (let i = 0; i < res.appTopImg.length; i++){                                                                 // 推 家具 - 详情图片数组
        function AppTopImg(imgUrl) {
            this.imgUrl = "http://images.aplusoffice.cn/" + imgUrl
        }
        const appTopImg_Obj = new AppTopImg( res.appTopImg[i] )
        appTopImgUrl_Arr.push(appTopImg_Obj)                                                                        // 将构造函数的对象推入 store的数组中
    }
    state.bannerImg_Arr = appTopImgUrl_Arr
    // 拼接顶部轮播图 图片地址
    for (var i = 0; i < res.building.length; i++) {
        function BuildingImg(imgUrl) {
            this.imgUrl = "http://images.aplusoffice.cn/" + imgUrl
        }
        const building_Obj = new BuildingImg( res.building[i].appListUrl )
        res.building[i].appListUrl = building_Obj                                                                       // 将构造函数的对象推入 store的数组中
    }

    state.hotBuildingList_Arr.push(res.building)                                                                    // 推 热门房源
    // 判断楼盘类型
    for (var i = 0; i < res.building.length; i++) {
        if(res.building[i].type=='A'){
            state.hotBuildingList_Arr[0][i]['badge']        = '写字楼'
            state.hotBuildingList_Arr[0][i]['judgeShow']    = true
        }else{
            state.hotBuildingList_Arr[0][i]['badge']        = '联合办公'
            state.hotBuildingList_Arr[0][i]['judgeShow']    = false
        }
    }
    setTimeout(function() {
        state.loadingState['judgeShow'] = false            // 当有数据时,设置加载动画状态为false
    },4500)
}

// 保存设备必要信息
export const addDeviceInfo =( state,res ) => {
    state.deviceInfo[ res.attrName ] = res.saveValue                                                                                // 将数组直接赋给state
}

// 后期将modules 分出
export const addFurnitureInfo = (state,res) => {
    // 首先清空state对象( 保持唯一性;然后重新定义默认加载动画属性 )
    state.furnitureInfo = {
        judgeShow: true
    }
    let furnitureImgUrl_Arr = []                                                                                    // 创建一个空数组，再循环中填入对象(拼接属性)
    let furnitureSizeList_Arr = []                                                                                  // 创建一个空数组，再循环中填入对象(拼接属性)
    for(let i=0; i<res.furnitureSList.length;i++) {                                                                 // 推 家具 - 详情图片数组
        function FurnitureInfoImg(imgUrl) {
            this.imgUrl = res.picUrl + imgUrl
        }
        const furnitureImg_Obj = new FurnitureInfoImg( res.furnitureSList[i].supply )
        furnitureImgUrl_Arr.push(furnitureImg_Obj)                                                                  // 将构造函数的对象推入 store的数组中
    }
    state.furnitureInfo['imgUrl'] = furnitureImgUrl_Arr                                                             // 最后将生成的轮播图数组推入 state.furnitureInfo 对象中
    // 家具 - 标题信息放入state.furnitureInfo对象中 ( code / 名称 / 描述 / 类型 / 价格 / 图片 )
    for ( let i in res.furniture ) {
        if ( i.toString() === "appPic") {
            let appPicUrl = res.picUrl + res.furniture.appPic                                                       // 拼接Url: 图片服务头部url + 图片相对路径
            state.furnitureInfo['appPicUrl'] = appPicUrl
        } else {
            state.furnitureInfo[i] = res.furniture[i]                                                               // 设置state的furnitureInfo对象内容属性( 不包括图片地址 )
        }
    }
    // 家居 - '家居尺寸' 两个列表数组 ( 家具名称 + 价格 )
    function FurnitureSizeObj(name,price){                                                                          // 构造函数 - 创建 => 家具尺寸列表单个对象
        this.name   = name
        this.price  = price
    }
    for ( let a = 0; a < res.p1List.length; a++ ) {
        let furnitureSize_Obj = new FurnitureSizeObj( res.p1List[a], res.p2List[a] )                                // 家具尺寸列表内对象创建
        furnitureSizeList_Arr.push(furnitureSize_Obj)                                                               // 将生成的对象 放入furnitureSizeList_Arr数组中
    }
    state.furnitureInfo['furnitureSizeList'] = furnitureSizeList_Arr                                                // 最后将生成的list数组推入 state.furnitureInfo 对象中

    setTimeout(function() {
        state.furnitureInfo['judgeShow'] = false            // 当有数据时,设置加载动画状态为false
        // console.log('计时器成功！')
    },4000)
}

// 外出详情页
export const addResearchInfo =( state,res ) => {
    // 首先清空state对象( 保持唯一性;然后重新定义默认加载动画属性 )
    state.researchInfo = {
        judgeShow: true
    }
    // state.researchInfo = res
    state.researchInfo.appPic = res.picUrl + res.investigate.appPic                                                         // 拼接图片地址
    state.researchInfo['name'] = res.investigate.name
    state.researchInfo['address'] = res.investigate.city + res.investigate.region + res.investigate.road + '号'             // 拼接具体地址
    state.researchInfo['description'] = res.investigate.description                                                         // 详细描述
    // let IPList = []
    // IPList = res.IPList
    state.researchInfo['IPList'] = res.IPList
    setTimeout(function() {
        state.researchInfo['judgeShow'] = false                                                                             // 当有数据时,设置加载动画状态为false
    },4000)
}

// 联合办公 - 数据
export const addCoWorkingInfo =( state,res ) => {
    // 首先清空state对象( 保持唯一性; 重定义默认 1.加载动画属性, 2.隐藏buildingRelationList_judgeShow数组属性 )
    state.coWorking = {
        judgeShow: true,
        buildingRelationList_judgeShow: true
    }
    // 不能将整个res参数 赋值 到 state上 ( 会破坏judgeShow属性 )
    state.coWorking.buildingDetails = res.buildingDetails                                                                   // 详情数据( 办公楼 + 联合办公 )
    state.coWorking.buildingPicList = res.buildingPicList                                                                   // 图片列表( 数组 )
    state.coWorking.typeASearch     = res.typeASearch                                                                       // 独立空间List
    state.coWorking.typeBSearch     = res.typeBSearch                                                                       // 独立工位List
    let coWorkingImgUrl_Arr = []                                                                                            // 创建一个空数组，在循环中填入对象(拼接属性)
    for( let i=0; i<res.buildingPicList.length; i++ ) {                                                                     // 推 家具 - 详情图片数组
        function CoWorkingImgUrl(imgUrl) {
            this.imgUrl = res.picUrl + imgUrl
        }
        const coWorkingImgUrl_Obj = new CoWorkingImgUrl( res.buildingPicList[i].realAppUrl )
        coWorkingImgUrl_Arr.push( coWorkingImgUrl_Obj )                                                                     // 将构造函数的对象推入 store的数组中
    }
    state.coWorking['imgUrl_Arr'] = coWorkingImgUrl_Arr                                                                     // 最后将生成的轮播图数组推入 state.furnitureInfo 对象中
    // 修改'独立空间'数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.typeASearch.length; i++ ) {
        // 图片地址 是否为空 进行判断 ( 如果为空: 设置默认空图片地址链接; 如果不为空: 拼接图片链接 )
        if ( res.typeASearch[i].appPic == "" ) {
            // console.log('空值')                                                                                            // 成功
            res.typeASearch[i].imgUrl = "http://images.aplusoffice.cn/images/resource2/default_list.jpg"                     // 替换为 空图片链接
        } else {
            res.typeASearch[i].imgUrl = res.picUrl + res.typeASearch[i].appPic                                              // 拼接'独立空间'小图片 图片地址
        }
    }
    // 修改'工位'数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.typeBSearch.length; i++ ) {
        // 图片地址 是否为空 进行判断 ( 如果为空: 设置默认空图片地址链接; 如果不为空: 拼接图片链接 )
        if ( res.typeBSearch[i].appPic == "" ) {
            res.typeBSearch[i].imgUrl = "http://images.aplusoffice.cn/images/resource2/default_list.jpg"                    // 替换为 空图片链接
        } else {
            res.typeBSearch[i].imgUrl = res.picUrl + res.typeBSearch[i].appPic                                              // 拼接'工位'小图片 图片地址
        }
    }

    // 修改'所属大厦'( list-intro ) 数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.buildingRelationList.length; i++ ) {
        res.buildingRelationList[i].imgUrl = res.picUrl + res.buildingRelationList[i].appListUrl
    }

    // '所属大厦' - Intro 右上角类型标题 ———— 判断楼盘类型
    for (var i = 0; i < res.buildingRelationList.length; i++) {
        res.buildingRelationList[i].badge = '写字楼'
    }

    // 做判断 ( 如果为空,将DIV设置隐藏状态 - 对 'buildingRelationList'数组的length指数做判断: 如果为0,设置状态为隐藏 )
    let buildingRelationList_length = res.buildingRelationList.length
    // console.log('buildingRelationList数组的length值' + buildingRelationList_length)                                      // ( 测试取值 - 成功 )
    if ( buildingRelationList_length < 1 ) {
        console.log( 'buildingRelationList是空数组' )
    } else {
        state.coWorking.buildingRelationList_judgeShow  = false                                                             // 更改状态
        state.coWorking.buildingRelationList            = res.buildingRelationList                                          // 将 buildingRelationList 数组赋值
    }
    // 设置加载动画状态为false
    setTimeout(function() {
        state.coWorking['judgeShow'] = false                                                                                // 当有数据时,设置加载动画状态为false
    },2000)
}

// 办公楼详情 - 数据
export const addOfficeBuildingInfo =( state,res ) => {
    // 首先清空state对象( 保持唯一性; 重定义默认 1.加载动画属性, 2.隐藏buildingRelationList_judgeShow数组属性 )
    state.officeBuilding = {
        judgeShow: true,
        buildingRelationList_judgeShow: true
    }
    // 不能将整个res参数 赋值 到 state上 ( 会破坏judgeShow属性 )
    state.officeBuilding.buildingDetails    = res.buildingDetails                                                           // 详情数据( 办公楼 + 联合办公 )
    state.officeBuilding.buildingPicList    = res.buildingPicList                                                           // 图片列表( 数组 )
    state.officeBuilding.status12Search     = res.status12Search                                                            // 待租List
    state.officeBuilding.status3Search      = res.status3Search                                                             // 待售List

    // 修改'待租房源'数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.status12Search.length; i++ ) {
        res.status12Search[i].imgUrl = res.picUrl + res.status12Search[i].appPic                                      // 拼接'待租房源'小图片 图片地址
    }
    // 修改'待售房源'数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.status3Search.length; i++ ) {
        res.status3Search[i].imgUrl = res.picUrl + res.status3Search[i].appPic                                        // 拼接'待售房源'小图片 图片地址
    }

    // 修改'所属大厦'( list-intro ) 数组内 图片对象的地址( 全拼 )
    for( let i=0; i<res.buildingRelationList.length; i++ ) {
        res.buildingRelationList[i].imgUrl = res.picUrl + res.buildingRelationList[i].appListUrl
    }
    // '所属大厦' - Intro 右上角类型标题 ———— 判断楼盘类型
    for (var i = 0; i < res.buildingRelationList.length; i++) {
        res.buildingRelationList[i].badge = '联合办公'
    }

    // 做判断 ( 如果为空,将DIV设置隐藏状态 - 对 'buildingRelationList'数组的length指数做判断: 如果为0,设置状态为隐藏 )
    let buildingRelationList_length = res.buildingRelationList.length
    if ( buildingRelationList_length < 1 ) {
        console.log( 'buildingRelationList是空数组' )
    } else {
        state.officeBuilding.buildingRelationList_judgeShow  = false                                                        // 更改状态
        state.officeBuilding.buildingRelationList            = res.buildingRelationList                                     // 将 buildingRelationList 数组赋值
    }
    let officeBuildingImgUrl_Arr = []                                                                                       // 创建一个空数组，在循环中填入对象(拼接属性)
    for(let i=0; i<res.buildingPicList.length;i++) {                                                                        // 推 家具 - 详情图片数组
        function OfficeBuildingImgUrl(imgUrl) {
            this.imgUrl = res.picUrl + imgUrl
        }
        const officeBuildingImgUrl_Obj = new OfficeBuildingImgUrl( res.buildingPicList[i].realAppUrl )
        officeBuildingImgUrl_Arr.push( officeBuildingImgUrl_Obj )                                                           // 将构造函数的对象推入 store的数组中
    }
    state.officeBuilding['imgUrl_Arr'] = officeBuildingImgUrl_Arr                                                           // 最后将生成的轮播图数组推入 state.furnitureInfo 对象中
    // 设置加载动画状态为false
    setTimeout(function() {
        state.officeBuilding['judgeShow'] = false                                                                           // 当有数据时,设置加载动画状态为false
    },2000)
}

// 地图初始数据( 获取行政区数据 )
export const addRegionPointList =( state,res ) => {
    state.regionPointList = res                                                                                             // 将数组直接赋给state
}
// 获取商圈数据
export const addBCPointList =( state,res ) => {
    state.BCPointList = res                                                                                                 // 将数组直接赋给state
}
// 获取办公楼数据
export const addBuildingPointList =( state,res ) => {
    state.buildingPointList = res                                                                                           // 将数组直接赋给state
    // 拼接图片地址, 放入数组对象中完整地址
    for(let i=0; i < res.length; i++) {
        res[i]['imgUrl'] = 'http://images.aplusoffice.cn/' + res[i].appMapPic                                               // 循环 向对象添加属性
    }
}

// 获取行政区数据 ( 已经过类型判断的数据 )
export const addTypeRegionPointList =( state,res ) => {
    state.mapView.typeRegionPointList = res                                                                                // 将数组直接赋给state
}

// 改变搜素地图值 —— 统一处理 地图检索值 修改事件
export const addSearchMapValue =( state,res ) => {
    for (let i = 0; i < res.length; i++ ) {
        state.searchValue[ res[i].attrName ] = res[i].setValue
    }
    let null_Obj = {}                                                                                                       // 创建一个空对象
    state.searchMapRequest_Arr.push(null_Obj)                                                                               // 将空对象推入 '记录地图检索请求' 的数组中
}

export const addFirstLoadingMap =( state,res ) => {
    state.searchValue.administrative_Arr = res                                                                              // 将数组直接赋给state
    // 初始页面需要添加一次状态
    let null_Obj = {}                                                                                                       // 创建一个空对象
    state.searchMapRequest_Arr.push(null_Obj)                                                                               // 将空对象推入 '记录地图检索请求' 的数组中
}

// Getters 接收 store 的 state 作为第一个参数
export const Loading                    =   state   => state.loadingState
export const bannerImg_Arr              =   state   => state.bannerImg_Arr
export const hotBuildingList_Arr        =   state   => state.hotBuildingList_Arr
// 后期将modules 分出
export const furnitureInfo              =   state   => state.furnitureInfo              // 家具 详情页 信息内容
export const researchInfo               =   state   => state.researchInfo               // 外出 详情页 信息内容
export const getCoWorkingInfo           =   state   => state.coWorking                  // 联合办公
export const getOfficeBuildingInfo      =   state   => state.officeBuilding             // 联合办公
export const getRegionPointList         =   state   => state.regionPointList            // 地图初始数据( 获取行政区数据 )
export const getBCPointList             =   state   => state.BCPointList                // 获取商圈数据
export const getBuildingPointList       =   state   => state.buildingPointList          // 获取写字楼数据


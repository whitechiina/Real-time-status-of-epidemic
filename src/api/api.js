import axios from 'axios';

// 创建axios实例
axios.defaults.baseURL = process.env.API_ROOT;
// webpack配置了不同的开发环境接口地址，axios调用

export default {
    //按时间线获取事件
    getTimelineService(){
        return axios.get('/api/data/getTimelineService');
    },
    //获取整体统计信息
    getStatisticsService(){
        return axios.get('/api//data/getStatisticsService');
    },
    //获取指定省份信息 例如：/data/getAreaStat/山东
    getStatisticsService(){
        return axios.get('/api//data/getStatisticsService');
    },
    //获取最新事件
    getNewest(){
        return axios.get('/api//data/getNewest/1');
        // return axios.get('/data/getNewest/:lastid');
    },
    // 辟谣资讯
    getIndexRumorList(){
        return axios.get('/api//data/getIndexRumorList')
    },
    //防护资讯
    getIndexRecommendList(){
        return axios.get('/api//data/getIndexRecommendList')
    },
    // 疾病知识
    getWikiList(){
        return axios.get('/api//data/getWikiList')
    },
    //获取所有信息
    all(){
        return axios.get('/api//data/all');
    },


}


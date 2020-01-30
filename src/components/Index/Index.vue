<template>
  <div>
    <div class="banner">
      <img src="https://assets.dxycdn.com/gitrepo/bbs-mobile/dist/static/kv.5d3a3a1d.png">
    </div>
    <h1 class="title">武汉2019-nCoV疫情实时情报</h1>
    <div class="desc">武汉加油! 中国加油！</div>
    <Nav/>
    <div class="statistical">
      截至 {{time}} 全国数据统计 :
    </div>
    <div class="item-list">
        <div class="item">
            <div class="num" style="color: rgb(247, 76, 49)"><strong>{{confirmedCount}}</strong></div>
            <div class="txt">确诊病例</div>
          </div>
          <div class="item">
            <div class="num" style="color: rgb(247, 130, 7)"><strong>{{suspectedCount}}</strong></div>
            <div class="txt">疑似病例</div>
          </div>
          <div class="item">
            <div class="num" style="color: rgb(93, 112, 146)"><strong>{{curedCount}}</strong></div>
            <div class="txt">死亡人数</div>
          </div>
          <div class="item">
            <div class="num" style="color: rgb(40, 183, 163)"><strong>{{deadCount}}</strong></div>
            <div class="txt">治愈人数</div>
          </div>
    </div>
    <div class="descList">
      <p>传染源: {{infectSource}}</p>
      <p>病毒: {{virus}}</p>
      <p>传播途径: {{passWay}}</p>
      <p>{{remark1}}</p>
      <p>{{remark2}}</p>
    </div>
    <Map id="1" :imgUrl='imgUrl' :dailyPic='dailyPic'/>
    <Message id="2"/>
    <Fence id="3"/>
    <Knowledge id="4"/>
    <Share/>
  </div>
</template>

<script>
  import api from '@/api/api.js';
  import axios from 'axios';

  import Nav from '../Nav/Nav.vue';
  import Map from '../Map/Map.vue';
  import Message from '../Message/Message.vue';
  import Fence from '../Fence/Fence.vue';
  import Knowledge from '../Knowledge/Knowledge.vue';
  import Share from '../Share/Share.vue';

  export default {
    name: 'Title',
    components:{
      Nav,
      Map,
      Message,
      Fence,
      Knowledge,
      Share
    },
    data() {
      return {
        time: '',
        confirmedCount: '',
        suspectedCount: '',
        curedCount: '',
        deadCount: '',
        infectSource: '',
        virus: '',
        passWay: '',
        remark1: '',
        remark2: '',
        imgUrl: '',
        dailyPic: ''
      }
    },
    created() {
      this.getStatisticsService();
    },
    methods: {
      //年月日格式封装
      formatDate(value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      },
      getStatisticsService() {
        api.getStatisticsService().then(res => {
          this.time = this.formatDate(res.data.modifyTime)
          this.confirmedCount = res.data.confirmedCount
          this.suspectedCount = res.data.suspectedCount
          this.curedCount = res.data.curedCount
          this.deadCount = res.data.deadCount
          this.infectSource = res.data.infectSource
          this.virus = res.data.virus
          this.passWay = res.data.passWay
          this.remark1 = res.data.remark1
          this.remark2 = res.data.remark2
          this.imgUrl = res.data.imgUrl
          this.dailyPic = res.data.dailyPic
        })
      },

    },
    

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import './Index.styl';
</style>

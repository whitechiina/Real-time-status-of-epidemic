<template>
  <div>
    <div class="title">
      <span>
          防护知识合辑
      </span>
    </div>
    <div class="item" v-for="(item,index) in list" @click=See(item.linkUrl)>
        <div class="left">
            <div class="item-title">
                <span>抗击疫情</span>{{item.title}}
            </div>
            <div class="item-time">{{formatDate(item.modifyTime)}}</div>
        </div>
        <div class="right">
            <img :src="item.imgUrl">
        </div>
    </div>
     <a class="more" href="https://3g.dxy.cn/newh5/view/pneumonia_recommends?from=dxy;">查看更多 ></a>
     <div class="line"></div>
  </div>
</template>

<script>
import api from '../../api/api.js';
  export default {
    name: 'Help',
    data() {
        return {
            list: Array
        }
    },
    created () {
        this.getIndexRecommendList()
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
            return y + '-' + MM + '-' + d ;
        },
        getIndexRecommendList(){
            api.getIndexRecommendList().then(res =>{
                console.log(res)
                this.list = res.data
            })
        },
        See(e){
            window.location.href = e
        }
    },

  }

</script>

<style lang="stylus" scoped>
@import './Help.styl';
</style>

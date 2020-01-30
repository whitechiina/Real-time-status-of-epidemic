<template>
  <div>
    <div class="title">
      <i></i>
      <h3>疾病知识</h3>
    </div>
    <div class="list-wrap">
        <div class="item-wrap">
            <div class="item">
                <h1>什么是新型冠状病毒肺炎？</h1>
                <p>此次流行的冠状病毒 WHO 命名为 2019-nCoV。哪些人容易感染新型冠状病毒？传播途径是什么的？什么情况下属于可疑暴露？什么情况属于密切接触？</p>
                <p class="info">查看详情</p>
            </div>
        </div>

        <div class="list" v-for="(item,index) in list" :key="index" @click=See(item.linkUrl)>
            <img :src="item.imgUrl" alt="">
            <div class="right">
                <h2>{{item.title}}</h2>
                <p>{{item.description}}</p>
                <p class="info">查看详情</p>
            </div>
        </div>
    </div>

   
  </div>
</template>

<script>
  import api from '../../api/api.js'
  export default {
    name: 'Knowledge',
    data() {
      return {
        list: Array
      }
    },
    created() {
      this.getWikiList()
    },
    methods: {
      getWikiList() {
        api.getWikiList().then(res => {
          this.list = res.data.result.splice(1,7)
          console.log(this.list)
        })
      },
      See(e){
          window.location.href = e
      }
    },
  }

</script>

<style lang="stylus" scoped>
@import './Knowledge.styl';
</style>

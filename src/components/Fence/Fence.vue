<template>
  <div>
    <div class="title">
      <i></i>
      <h3>辟谣与防护</h3>
    </div>
    <div class="rumor">
        <div class="list" v-for="(item, index) in list">
            <div class="question">
                <span class="num">{{index+1}}</span>{{item.title}}
            </div>
            <div class="page">
                <h1>{{item.mainSummary}}</h1>
                <p>{{item.body}}</p>
            </div>
        </div>
        <a class="go" href="https://3g.dxy.cn/newh5/view/pneumonia_rumors?from=dxy;">查看谣言排行榜</a>
    </div>

    <Help/>
  </div>
</template>

<script>
  import api from '../../api/api.js';

  import Help from '../Fence/Help.vue';

  export default {
    name: 'Fence',
    data() {
        return {
            list: Object,
        }
    },
    created () {
        this.getIndexRumorList()
    },
    methods: {
        getIndexRumorList(){
            api.getIndexRumorList().then(res =>{
                this.list = res.data
            })
        }  
    },
    components:{
        Help
    }
  }

</script>

<style lang="stylus" scoped>
  @import '../Fence/Fence.styl';

</style>

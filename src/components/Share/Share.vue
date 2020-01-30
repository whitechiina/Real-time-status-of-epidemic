<template>
  <div>
    <div class="mosk" v-show="san" @click="share">
        <div class="arrow"></div>
        <div class="hint">
            点击右上角更多
            <br>
            分享给好友或到朋友圈
        </div>
    </div>
    <div class="share-wrap">
      <div class="share" @click="share">
        分享
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Share',
    data() {
        return {
            san: false
        }
    },
    methods: {
        share(){
            this.san = !this.san
        }
    }
  }

</script>

<style lang="stylus" scoped>
  @import './Share.styl';
</style>

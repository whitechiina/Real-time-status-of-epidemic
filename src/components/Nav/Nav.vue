<template>
  <div>
    <div class="wrap" id="orderFullScreen" :class="searchBarFixed == true ? 'isFixed' : ''">
      <div class="item" @click="jump(index)">
          <a href="#1" :class="color == true ? 'fff' : ''"><span>疫情地图</span></a>
      </div>
      <div class="item">
        <a href="#2" :class="color == true ? 'fff' : ''"><span>实时播报</span></a>
      </div>
      <div class="item">
        <a href="#3" :class="color == true ? 'fff' : ''"><span>辟谣与防护</span></a>
      </div>
      <div class="item">
        <a href="#4" :class="color == true ? 'fff' : ''"><span>疾病知识</span></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Nav',
    data() {
      return {
        searchBarFixed: false,
        color: false,
      }
    },

    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#orderFullScreen').offsetTop
        scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
        scrollTop > offsetTop ? this.color = true : this.color = false
      },
    },
  }

</script>

<style lang="stylus" scoped>
  @import './Nav.styl';

</style>

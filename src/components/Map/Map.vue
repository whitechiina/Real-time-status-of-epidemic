<template>
  <div>
    <div class="map">
      <h3>疫情地图</h3>
      <div class="img">
        <img :src="imgUrl">
        <img :src="dailyPic">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Map',
    props:{
        imgUrl: String,
        dailyPic: String
    }
  }

</script>

<style lang="styl" scoped>
@import './Map.styl';
</style>

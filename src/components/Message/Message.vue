<template>
    <div>
        <div class="title">
            <i></i>
            <h3>实时播报</h3>
        </div>
        <div class="list">
            <div class="item" v-for="(item,index) in list" :key="index" @click="See(item.sourceUrl)">
                <div class="item-left">
                    <span class="time">{{item.pubDateStr}}
                        <br>
                        <span class="data">{{getLocalTime(item.pubDate)}}</span>
                    </span>
                    <span class="yuan"></span>
                    <span class="solid"></span>
                </div>
                <div class="item-right">
                    <p class="title">{{item.title}}</p>
                    <p class="content">{{item.summary}}</p>
                    <p class="from">信息来源：{{item.infoSource}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../api/api.js';
export default {
    name: 'Message',
    data() {
        return {
            list: Array,
        }
    },
    created () {
        this.getNewest()
    },
    methods: {
        //年月日格式封装
        getLocalTime(nS) { 
        },
        getNewest(){
            api.getNewest().then(res =>{
                this.list = res.data.slice(0, 4)
            })
        },
        See(e){
            window.location.href = e
        }
    },
    
}
</script>

<style lang="stylus" scoped>
    @import './Message.styl';
</style>
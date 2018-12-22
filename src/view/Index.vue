<template>
    <div>
      <div class="index_nav">
        <div class="index_navbox">
          <input type="text" class="index_search" placeholder="输入关键词模糊搜索"/>
          <button class="index_btn1">平台应用</button>
          <button>登录</button>
        </div>
        <div class="index_navword">
          <ul>
            <li>景区概况</li>
            <router-link to="/index/news">
              <li>景区新闻</li>
            </router-link>
            <li>藏品欣赏</li>
            <router-link to="/index/letter">
              <li>渭华起义介绍</li>
            </router-link>
            <li>先烈事迹</li>
            <li>习老精神</li>
            <li>文化教育</li>
            <li>渭华讲堂</li>
            <li>知识问答</li>
            <li>红色旅游</li>
            <li>服务指南</li>
            <li>参观留言</li>
          </ul>
        </div>
      </div>
      <router-view>

      </router-view>
    </div>
</template>

<script>
  import SpotNews from './News/SpotNews.vue'
  import RefeRral from './Duce/RefeRral.vue'

  export default {
        name: "Index",
        components:{
          SpotNews,
          RefeRral
        },
        mothods:{
          // gonew(){
          //   this.$router.push('//news')
          // }
        }
    }
</script>

<style scoped>

</style>

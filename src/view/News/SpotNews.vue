<template>
    <div>
      <img src="../../../static/img/yyyyyyyy.png" alt="" class="overview_banner">
      <div class="content">
        <!--<div class="content_core">-->
          <!--<div class="coreleft">-->
            <p class="scenic">景区新闻</p>
            <ul>
              <router-link to="/index/news/News">
                <li class="scenic_one">新闻中心</li>
              </router-link>
              <router-link to="/index/news/InForm">
                <li class="scenic_two">通知公告</li>
              </router-link>
            </ul>
          </div>

            <router-view>

            </router-view>

        </div>
      <!--</div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: "SpotNews",
        components:{
        }
        // mounted() {
        //   $(".coreleft li").click(function(){
        //     $(this).css({"color":"#e23f3f","borderLeft":"4px solid #e23f3f","width":"211px"});
        //     $(this).siblings().css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"})
        //   })
        //   $(".scenic_one").click(function(){
        //     $(".core_right_01").css({"display":"block"});
        //     $(".core_right_02").css({"display":"none"});
        //     $(".core_right_03").css({"display":"none"});
        //   })
        //   $(".scenic_two").click(function(){
        //     $(".core_right_01").css({"display":"none"});
        //     $(".core_right_02").css({"display":"block"});
        //     $(".core_right_03").css({"display":"none"});
        //   })
        // }
    }
</script>

<style scoped>
  @import '../../assets/css/news.css';
</style>

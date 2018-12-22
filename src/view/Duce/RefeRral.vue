<template>
    <div>
      <div class="Banner"></div>
      <div class="content">
        <div class="content_core">
          <div class="coreleft">
            <p class="scenic">渭华起义介绍</p>
            <ul>
              <router-link to="/index/letter/intro">
                <li class="scenic_one">起义简介</li>
              </router-link>
              <router-link to="/index/letter/pass">
                <li class="scenic_two">起义经过</li>
              </router-link>
              <li class="scenic_one">图片档案</li>
              <li class="scenic_two">回忆纪念</li>
              <li class="scenic_one">历史资料</li>
              <li class="scenic_two">研究论著</li>
              <li class="scenic_one">音影作品</li>
            </ul>
          </div>

          <router-view>

          </router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RefeRral",
        mounted() {
          // $(".coreleft li").click(function(){
          //   $(this).css({"color":"#e23f3f","borderLeft":"4px solid #e23f3f","width":"211px"});
          //   $(this).siblings().css({"color":"black","borderLeft":"1px solid #F3F8FA","width":"214px"})
          // })
          // $(".scenic_one").click(function(){
          //   $(".core_right_01").css({"display":"block"});
          //   $(".core_right_02").css({"display":"none"});
          //   $(".core_right_03").css({"display":"none"});
          // })
          // $(".scenic_two").click(function(){
          //   $(".core_right_01").css({"display":"none"});
          //   $(".core_right_02").css({"display":"block"});
          //   $(".core_right_03").css({"display":"none"});
          // })
        }
    }
</script>

<style scoped>
/*@import '../../assets/css/letter.css';*/
/*@import '../../assets/css/OverviewIndex.css';*/


</style>

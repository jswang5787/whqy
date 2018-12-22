<template>
    <div>
      <!-- 起义简介 -->
      <div class="core_right core_right_01">
        <h1>起义简介</h1>
        <img src="../../static/img/rock.png" alt="">
        <p class="tie">
          渭华起义是土地革命战争时期，中国共产党在陕西省渭南县、华县地区发动国民党军西北军一部和农民举行的武装起义。
        </p>
        <p>
          大革命失败后，中共陕西省委号召共产党员到农村去，到军队中去，准备力量，武装反抗国民党的反动统治。1928年3月，省委决定在党的力量强大、群众基础较好的渭华地区发动起义，以西安东部为暴动区，成立中共陕东特委，省委常委刘继曾兼任书记。省委书记潘自力到渭华地区布置检查，准备在5月初组织农民起义。渭华起义是中国西北地区发生最早、规模最大、影响最深的一次暴动,也是在全国有重大影响的重要起义之一。
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "InTro"
    }
</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
  }
  .core_right{
    text-align: left;
    min-height: 921px;
    margin-bottom: 47px;
  }
  .core_right h1{
    text-align: center;
    font-size: 20px;
    color: #555962;
    margin: 60px 0 36px;
  }
  .core_right img{
    width: 873px;
    height: 304px;
    margin: 0;
  }
  .core_right_02 img{
    width: 873px;
    height: 304px;
    margin: 0;
  }
  .tie{
    margin-top: 29px;
    margin-bottom: 40px;
  }
</style>

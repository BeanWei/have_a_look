<template>
  <div class="news-item">
    <a :href="news.link" class="news-item">
      <img :src="news.image" class="news-img" alt="">
      <div class="news-text">
        <div class="news-title">
          {{news.title}}
        </div>
        <div class="news-info">
          <text>{{news.postdate}}</text>
          <div>
            <img src="/static/assets/quan_comment.png" alt="">
            <text v-if="news.commentcount">{{news.commentcount}}</text>
            <img src="/static/assets/zan.png" alt="">
            <text v-if="news.praise_count">{{news.praise_count}}</text>
          </div>         
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
  .news-item{
    position: relative;
    width: 100%;
    height: 180px;
    img{
      width: 100%;
      height: 100%;
    }
    .news-text{
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, .3);
      width: 97%;
      padding: 2px 7px;
      text-align: left;
      font-size: 14px;
      color: aliceblue;
      .news-info{
        width: 100%;
        display: flex;
        font-size: 10px;
        justify-content: space-between;
        img{
          height: 15px;
          width: 15px;
        }
      }
    }
  }
</style>

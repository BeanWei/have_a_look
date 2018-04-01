<template>
  <div class="list-box">
    <swiper
      class="slider-wrap"
      :autoplay="true"
      :indicator-dots="true"
      :circular="true"
      indicator-color="rgba(255, 255, 255, .3)"
      indicator-active-color="rgba(210, 34, 34, .7)">
      <swiper-item v-for="slide of slides" :key="slide.link">
        <a :href="slide.link" class="slider-item">
          <span class="slider-title">{{slide.title}}</span>
          <img :src="slide.image" mode="aspectFill" alt="">
        </a>
      </swiper-item>
    </swiper>
    <div class="news-wrap">
      <news-item v-for="item of news" :news="item" :key="item.id"></news-item>
    </div>
    <div class="nomore">
      已经到了底部
    </div>
  </div>
</template>

<script>
import newsItem from './../../../components/news-item'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    newsItem
  },
  data: {
  },
  computed: {
    ...mapState([
      'slides',
      'news'
    ])
  },
  mounted () {
    this.refresh()
  },
  onPullDownRefresh () {
    this.refresh()
  },
  methods: {
    ...mapActions([
      'getSlides',
      'getNewsList'
    ]),
    async refresh () {
      await Promise.all([
        this.getNewsList(true),
        this.getSlides()
      ])
    }
  }
}
</script>

<style lang="less" scoped>
  .list-box{
    .slider-wrap{
      width: 100%;
      height: 200px;
      .slider-item{
        position: relative;
        width: 100%;
        height: 100%;
        .slider-title{
          position: absolute;
          top: 10px;
          right: 0;
          width: 90vw;
          background-color: rgba(0, 0, 0, .3);
          color: #fff;
          padding: 2px 6px;
          font-size: 18px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .nomore{
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      color: #ddd;
    }
  }
</style>

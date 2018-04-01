<template>
  <div class="container">
    <div class="img-cell" v-for="item of meizi" :meizi='item' :key="item.index">
        <img :src="item.url"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'meizi'
    ])
  },
  methods: {
    ...mapActions([
      'getMeiziList'
    ]),
    async refresh () {
      await Promise.all([
        this.getMeiziList(true)
      ])
    }
    // loadMore() {
    //   try {
    //       for (let i = 0; i < 6; i++) {
    //           this.items.push(window.__INITIAL_STATE__[~~(Math.random() * this.count)]);
    //       }
    //   } catch (e) {
    //   }
    // },
  },
  created () {
    this.refresh()
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #f6f6f6;
    margin: 0 auto;
  }
  .img-cell {
    box-sizing: border-box;
    flex: 0 0 50%;
    min-height: 200rpx;
    
  }
  .img-cell img {
    width: 100%;
  }
</style>

<template>
  <div class="singer" ref="singer">
  </div>
</template>

<script>
  // import ListView from 'base/listview/listview'
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  // import Singer from 'common/js/singer'
  // import {mapMutations} from 'vuex'
  // import {playlistMixin} from 'common/js/mixin'
  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then(res => {
          if (res.code === ERR_OK) {
            this.singer = res.data.list
            console.log(this.singer)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>

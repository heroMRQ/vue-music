<template>
  <transition name="move">
    <div class="singer-detail">656565656</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  // import MusicList from 'components/music-list/music-list'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
        }
        getSingerDetail(this.singer.id).then(res => {
          if (res.code === ERR_OK) {
            this.songs = this._normalLizeSongs(res.data.list)
            console.log(this.songs)
          }
        })
      },
      _normalLizeSongs(list) {
        let ret = []
        list.forEach(item => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .move-enter-active, .move-leave-active {
    transition: all .3s linear
  }

  .move-enter, .move-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>

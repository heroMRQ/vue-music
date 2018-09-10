<template>
  <transition name="move">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import { getSingerDetail } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong } from 'common/js/song'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      title () {
        return this.singer.name
      },
      bgImage () {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    data () {
      return {
        songs: []
      }
    },
    created () {
      this.getDetail()
    },
    methods: {
      getDetail () {
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
      _normalLizeSongs (list) {
        let ret = []
        list.forEach(item => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .move-enter-active, .move-leave-active {
    transition: all .3s linear
  }

  .move-enter, .move-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>

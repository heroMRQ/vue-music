<template>
  <div class="singer" ref="singer">
    <list-view @select="selectSinger" :data="singers" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
  // import ListView from 'base/listview/listview'
  // import {getSingerList} from 'api/singer'
  // import {ERR_OK} from 'api/config'
  // import Singer from 'common/js/singer'
  // import {mapMutations} from 'vuex'
  // import {playlistMixin} from 'common/js/mixin'

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>

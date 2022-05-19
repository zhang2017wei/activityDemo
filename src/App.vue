<template>
  <div id="container" class="activePageContainer">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <loadingModule></loadingModule>
    <errMsgModule />
    <BigImage />
  </div>
</template>

<style type="text/css" scoped>
#container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #00734e;
  /*background: linear-gradient(180deg, #FAD5DB 0%, #FAD5DB 2%, #FD8AA8 100%);*/
}
#container::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  display: none;
}
</style>
<script>
import './app.less'
import loadingModule from './components/common/loadingModule.vue'
import errMsgModule from './components/common/errmsgModule.vue'
import BigImage from './components/common/showBigPicture.vue'

export default {
  name: 'app',
  data: () => ({}),
  components: {
    loadingModule,
    errMsgModule,
    BigImage
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>

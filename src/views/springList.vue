<style lang="less" scoped>
.springList_container {
  width: 100%;
  height: auto;
  border-top: 1px solid transparent;
  .container {
    height: auto;
    margin: 10px auto 0;
  }
}
</style>

<template>
  <div class="springList_container">
    <div class="container">
      <HostList />
    </div>
  </div>
</template>
<script>
import System from '@/system'
import Native from '../services/native'
import HostList from './sweetList/hosterList'

export default {
  data() {
    return {}
  },
  filters: {},
  components: {
    HostList
  },
  computed: {},

  mounted() {},
  methods: {}
}
</script>

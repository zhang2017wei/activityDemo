<style lang="less" scoped>
.home_container {
  height: auto;
  width: 100%;
}
</style>
<template>
  <div class="home_container">
    <div v-if="showPage">
      <BannerModule />
      <SharePop v-if="isShowSharePop" />
      <div class="home_content">
        <ForestBox v-if="bannerActiveIndex === 0" />
        <LimitRing v-if="bannerActiveIndex === 1" />
        <SweetWeal v-if="bannerActiveIndex === 2" />
        <SpringList v-if="bannerActiveIndex === 3" />
      </div>
    </div>

    <ProbabilityPop v-if="isShowProbabilityPop" />
    <!--我的春日宝箱战绩-->
    <RecordPop v-if="isShowRecordPop" />

    <OutAppPop />
  </div>
</template>
<script>
import SharePop from '../components/sharePop'
import BannerModule from '../components/bannerModule'
import SweetWeal from './SweetWeal/sweetWeal'
import ForestBox from './forestBox'
import LimitRing from './limitRing'
import SpringList from './springList'
import ProbabilityPop from '../components/common/probabilityPop'
import OutAppPop from '../components/common/outAppPop'
import RecordPop from '../components/recordPop'
import { mapGetters } from 'vuex'
import System from '@/system'
export default {
  data() {
    return {
      showPage: false,
      baseUrl: 'https://xs-image.yinjietd.com/',
      isShowRecordPop: false
    }
  },
  filters: {},
  components: {
    SharePop,
    BannerModule,
    ForestBox,
    ProbabilityPop,
    LimitRing,
    SpringList,
    SweetWeal,
    OutAppPop,
    RecordPop
  },
  computed: {
    ...mapGetters({
      isShowSharePop: 'isShowSharePop',
      bannerActiveIndex: 'bannerActiveIndex',
      isShowProbabilityPop: 'isShowProbabilityPop'
    })
  },
  beforeDestroy() {},

  async mounted() {
    System.ta('murderer_h5_homePageLoad')

    let _num = 1
    let _timer = setInterval(() => {
      let _type = localStorage.getItem('initProgress')
      _num++
      if (_type === 'finish' || _num > 20) {
        this.showPage = true
        clearInterval(_timer)
        this.getBaseInfoFun()
      }
    }, 100)
  },
  methods: {
    getBaseInfoFun() {
      this.$store.dispatch('configAction', { act_type: 12 }).then((res) => {
        this.$store.dispatch('setUserBaseInfo', res.config)
      })
    },
    _isShowRecord(data) {
      this.isShowRecordPop = data
    }
  }
}
</script>

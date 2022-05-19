<style lang="less" scoped>
.radio_content {
  width: 100%;
  height: 100%;
  border-radius: 0.14rem;
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
}
</style>
<style scoped lang="less">
.marquee_top {
  transition: all 0.5s;
  margin-top: -0.3rem;
}

.roll-msg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 0.58rem;
  display: flex;
  justify-content: center;
  .popup {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;
    height: 0.58rem;
    align-items: center;
    color: #ffffff;
    display: flex;
    box-sizing: border-box;
    .box {
      display: block;
      position: relative;
      padding: 0;
      width: 100%;
      height: 0.58rem;
      line-height: 0.58rem;
      overflow: hidden;
      .lb {
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        .li {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: center;
          font-size: 0.24rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #1a1a1a;
          display: flex;
          align-items: center;
          .icon_audio {
            width: 0.46rem;
            height: 0.46rem;
            margin-top: -0.1rem;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="radio_content">
    <div class="roll-msg" v-if="recordListData">
      <div class="popup">
        <div class="box" @click="_toRecordListFun()">
          <div class="lb" :class="{ marquee_top: animate }">
            <div
              class="li"
              v-for="(item, index) in recordListData"
              :key="'key_' + index"
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: null
  },
  data() {
    return {
      recordListData: null,
      animate: false,
      timer: ''
    }
  },
  filters: {},
  components: {},
  computed: {},

  mounted() {
    this.recordListData = [
      { content: '恭喜****1****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****2****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****3****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****4****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****5****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****6****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****7****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****8****在2020年第一次活动活动中获取***大奖' },
      { content: '恭喜****9****在2020年第一次活动活动中获取***大奖' }
    ]
    let that = this
    this.timer = setInterval(() => {
      this.animate = true
      setTimeout(() => {
        that.recordListData.push(this.recordListData[0])
        that.recordListData.shift()
        that.animate = false
      }, 500)
    }, 2000)
    // this.getPageListFun();
  },
  methods: {
    _toRecordListFun() {
      // this.$store.dispatch('isShowRecordList', {status: true, data: "all"});
    },
    getPageListFun() {
      if (!localStorage.getItem('user-token')) return
      this.$store.dispatch('lotteryRecordAction', { type: 0 }).then((res) => {
        if (res && res.success) {
          if (!res.data || !res.data.records) return
          this.recordListData = res.data && res.data.records
          let that = this
          this.timer = setInterval(() => {
            this.animate = true
            setTimeout(() => {
              that.recordListData.push(this.recordListData[0])
              that.recordListData.shift()
              that.animate = false
            }, 500)
          }, 2000)
        }
      })
    }
  }
}
</script>

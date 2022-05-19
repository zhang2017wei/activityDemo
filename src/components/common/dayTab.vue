<style lang="less" scoped>
.dayTab_container {
  width: 100%;
  border-radius: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .iconLabel2 {
    transform: rotate(180deg);
  }
  .containerBox {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .dayTab_content {
    height: 100%;
    min-width: 2.7rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .dayBarLi {
    width: 110px;
    height: 100%;
    margin-right: 0.14px;
    font-size: 22px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #00475c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dayBarLiActive {
    color: #ffffff;
    background: #ff4b98;
    border-radius: 31px;
  }
}
</style>

<template>
  <div class="dayTab_container">
    <!--<div class="iconLabel" @click="_onSetIndexFun(-1)"></div>-->
    <div class="containerBox containerBoxCl scrollContent">
      <div class="dayTab_content">
        <div
          class="dayBarLi"
          :class="dayBarLiActive === index ? 'dayBarLiActive' : ''"
          @click="dayBarListClick(item, index)"
          v-for="(item, index) in dayBarList"
          :key="'key_' + index"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
    <!--<div class="iconLabel iconLabel2" @click="_onSetIndexFun(1)"></div>-->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setTime } from '../../services/transformTime'
export default {
  data() {
    return {
      dayBarLiActive: 0,
      dayBarList: null
    }
  },
  filters: {},
  components: {},
  computed: {
    ...mapState({
      userBaseInfo: (state) => state.userBaseInfo
    })
  },

  mounted() {
    this._onSetListDataFun()
  },
  methods: {
    _onSetListDataFun() {
      if (!this.userBaseInfo || !this.userBaseInfo.end_time) {
        return setTimeout(() => {
          this._onSetListDataFun()
        }, 200)
      }
      let _timestamps = this.userBaseInfo.timestamps
      let _today_timestamp = this.userBaseInfo.today_timestamp
      let _dom = document.getElementsByClassName('dayTab_content')
      let _dom2 = document.getElementsByClassName('dayBarLi')
      if (_dom && _dom[0] && _timestamps.length > 0) {
        let _num = (_dom2 && _dom2[0] && _dom2[0].offsetWidth) || 55
        _dom[0].style.width = _num * _timestamps.length + 'px'
      }
      let _ary = []
      _timestamps.forEach((item, index) => {
        _ary.push({
          time: item,
          content: setTime(item * 1000, 'MM月dd日')
        })
        if (_today_timestamp === item) {
          this.dayBarLiActive = index
          this.$parent.onSetListData({
            time: item,
            content: setTime(item * 1000, 'MM月dd日')
          })
          let _dom = document.getElementsByClassName('containerBoxCl')
          if (_dom && _dom[0] && index >= 3) {
            let _T = setTimeout(() => {
              _dom[0].scrollLeft = 20 * index
              clearTimeout(_T)
            })
          }
        }
      })
      this.dayBarList = _ary
    },
    dayBarListClick(item, index) {
      this.dayBarLiActive = index
      this.$parent.onSetListData(item)
      let _dom = document.getElementsByClassName('containerBoxCl')
      if (_dom && _dom[0]) {
        let _T = setTimeout(() => {
          _dom[0].scrollLeft = 20 * index
          clearTimeout(_T)
        })
      }
    },
    _onSetIndexFun(num) {
      if (this.dayBarLiActive === 0 && num === -1) return
      if (
        this.dayBarList &&
        this.dayBarList.length - 1 === this.dayBarLiActive &&
        num === 1
      )
        return
      this.dayBarLiActive = this.dayBarLiActive + num
      let index = this.dayBarLiActive
      let _dom = document.getElementsByClassName('containerBoxCl')
      if (_dom && _dom[0]) {
        let _T = setTimeout(() => {
          _dom[0].scrollLeft = 20 * index
          clearTimeout(_T)
        })
      }
      this.$parent.onSetListData(this.dayBarList[index])
    }
  }
}
</script>

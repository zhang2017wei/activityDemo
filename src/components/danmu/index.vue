<template>
  <div id="app" class="audio_container" v-if="danmus">
    <vue-danmaku ref="danmaku" class="demo" :danmus="danmus" v-bind="config">
      <!-- 弹幕slot -->
      <template v-slot:dm="{ index, danmu }">
        <div class="danmu-item">
          <!--<img class="img" :src="danmu.avatar" />-->
          <!--<span>{{ index }}{{ danmu.name }}：</span>-->
          <span class="textName">{{ danmu }}</span>
        </div>
      </template>
    </vue-danmaku>
  </div>
</template>

<script>
// import Stats from 'stats.js'
// var stats = new Stats()
// stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom)
// stats.dom.style.display = 'none'

// function animate() {
// stats.begin()
// stats.end()
// requestAnimationFrame(animate)
// }
// requestAnimationFrame(animate)
export default {
  name: 'App',
  components: {},
  data() {
    return {
      danmus: [],
      config: {
        channels: 0, // 轨道数量，为0则弹幕轨道数会撑满容器
        useSlot: true, // 是否开启slot
        loop: true, // 是否开启弹幕循环
        speeds: 60, // 弹幕速度，实际为每秒弹幕走过的像素距离
        fontSize: 20, // 文本模式下的字号
        top: 10, // 弹幕轨道间的垂直间距
        right: 0, // 同一轨道弹幕的水平间距
        debounce: 1000, // 弹幕刷新频率（多少毫秒插入一条弹幕，建议不小于50）
        randomChannel: true
      },
      danmuMsg: ''
    }
  },
  created() {
    // 手机端使用海量弹幕效果
    if (screen.width < 750) {
      this.config.channels = 0
    }
  },
  mounted() {
    window.onresize = () => this.resizeHandler()
    this.getDanMuList()
  },
  beforeDestroy() {
    window.onresize = null
  },
  methods: {
    getDanMuList() {
      this.$store.dispatch('getDanMuAction').then((res) => {
        if (res && res.success) {
          this.danmus = res.list
        }
        if (
          (!this.danmus || !this.danmus.length) &&
          window.location.href.indexOf('808') > -1
        ) {
          this.danmus = ['恭喜S7ven在本次活动中抽取**等奖']
        }
      })
    },
    play(type) {
      switch (type) {
        case 'play':
          this.$refs.danmaku.play()
          break
        case 'pause':
          this.$refs.danmaku.pause()
          break
        case 'stop':
          this.$refs.danmaku.stop()
          break
        case 'show':
          this.$refs.danmaku.show()
          break
        case 'hide':
          this.$refs.danmaku.hide()
          break
        case 'reset':
          this.$refs.danmaku.reset()
          break
        default:
          break
      }
    },

    resizeHandler() {
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$refs.danmaku.resize()
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.audio_container {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}
#app {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .demo {
    position: absolute;
    top: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 0;
    .danmu-item {
      display: flex;
      align-items: center;
    }
  }
  .main {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .intro {
      display: inline-block;
      color: #fff;
      text-align: center;
      text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
      h1 {
        font-size: 18px;
        line-height: 18px;
      }
    }
    .action {
      margin-top: 1px;
      color: #fff;
      min-width: 360px;
      .btn {
        color: #000;
        background: #fff;
        border: none;
        padding: 6px 16px;
        margin-right: 8px;
        border-radius: 5px;
        min-height: 31px;
        outline: none;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-color: #f3f7fa;
        }
        &:active {
          background-color: #fff;
        }
      }
      .ipt {
        width: 130px;
        padding: 8px 16px;
        border-radius: 5px;
        outline: none;
        border: none;
        margin-right: 8px;
      }
    }
  }
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  .textName {
    font-size: 0.24rem;
    color: #ffffff;
    background: #5a5abf;
    border-radius: 0.2rem;
    padding: 0.05rem 0.2rem;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
}
</style>

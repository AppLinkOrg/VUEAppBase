
<template>
<div ref="wrapper" class="wrapper">
  <div ref="innerContent" class="innerContent">
    <slot></slot>
    <loading v-show="!pulluped" title=""></loading>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import Loading from '@/components/common/loading/loading'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: []
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    postop: {
      type: Number,
      default: 0
    },
    posbottom: {
      type: Number,
      default: 0
    },
    pulluped: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }

      if (this.postop > 0) {
        let topPadding = (this.postop / 40).toFixed(4) + "rem"
        this.$refs.innerContent.style.paddingTop = topPadding
      }

      if (this.posbottom > 0) {
        let bottomPadding = (this.posbottom / 40).toFixed(4) + "rem"
        this.$refs.innerContent.style.paddingBottom = bottomPadding
      }
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  },
  components: {
    Loading
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin';
.wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
</style>

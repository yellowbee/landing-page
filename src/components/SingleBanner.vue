<template>
  <div class="banner" v-scroll-reveal>
    <img src="../assets/banner/tiger.jpg" />
    <nav>
      <img class="ml-2" src="../assets/banner/logo.png" />
      <ul class="banner-menu">
        <li class="menu-item" v-scroll-reveal="{origin: 'left'}">
          <a href class="a_top_hypers">主页</a>
        </li>
        <li class="menu-item" v-scroll-reveal="{origin: 'left'}">
          <a href class="a_top_hypers">关于</a>
        </li>
        <li class="menu-item" v-scroll-reveal="{origin: 'left'}">
          <a href class="a_top_hypers">服务</a>
        </li>
        <li class="menu-item" v-scroll-reveal="{origin: 'left'}">
          <a href class="a_top_hypers">作品</a>
        </li>
        <li class="menu-item" v-scroll-reveal="{origin: 'left'}">
          <a href class="a_top_hypers">联系我们</a>
        </li>
      </ul>
    </nav>
    <div class="banner-desc" v-scroll-reveal>
      <div class="text-big">洞悉用户需求，结合前沿技术 --- 助您成功完成数字化转型</div>
      <br />
      <div class="text-small">我们致力于为中国制造2025提供专业数字产品开发服务</div>
    </div>
    <a class="toContent" href="#advocate" v-scroll-reveal="{origin: 'right'}">
      <svg fill="white" id="icon-scroll-arrow" viewBox="0 0 32 32">
        <path
          d="M16.842 6.737v13.895l5.474-5.474 1.263 1.112-7.579 7.579-7.579-7.579 1.263-1.112 5.474 5.474v-13.895h1.684zM16 32c-8.825 0-16-7.158-16-16s7.158-16 16-16c8.842 0 16 7.158 16 16s-7.158 16-16 16zM16 30.316c7.916 0 14.316-6.417 14.316-14.316s-6.417-14.316-14.316-14.316c-7.899 0-14.316 6.417-14.316 14.316s6.417 14.316 14.316 14.316z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  color: #fff;
  min-height: 358px;
}

.banner > img {
  width: 100%;
}

nav {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  top: 10%;
}

.banner-menu {
  flex: 1;
  text-align: right;
}

.a_top_hypers {
  color: white;
  font-size: small;
}

.menu-item {
  margin: 0 3%;
  display: inline-block;
  visibility: hidden;
}

.banner-desc {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20%;
  text-shadow: 2px 2px rgba(10, 10, 10, 0.4);
}

.text-big {
  font-size: 2em;
}
.text-small {
  font-size: 1em;
}
.toContent {
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  left: 0;
  right: 0;
  bottom: 10%;
  margin: 0 auto;
}
@media (max-width: 767.98px) {
  .text-big {
    font-size: 1em;
  }
  .text-small {
    display: none;
    font-size: 0.5em;
  }
  .banner {
    min-height: 180px;
  }
}
</style>
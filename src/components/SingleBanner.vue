<template>
  <div id="banner" class="banner" v-scroll-reveal>
    <img class="img-desktop" src="../assets/banner/tiger.jpg" />
    <img class="img-mb" src="../assets/banner/tiger-mb.png" />
    <div class="mobile-header">
      <WitigerLogoIcon style="fill: white; width: 168px;" />
      <button class="btn" @click="onMenuClick">
        <HamburgerIcon style="fill: white;" />
      </button>
    </div>
    <nav ref="nav" :class="['nav',{active:!toggleMenu}]" @click="onNavClick">
      <div class="nav-content" @click="onNavContentClick">
        <div class="logo-wrapper">
          <WitigerLogoIcon class="nav-logo ml-2" />
        </div>
        <ul class="banner-menu">
          <!-- <li @click="onMenuItemClick">
            <a href="#" class="a_top_hypers">主页</a>
          </li>-->
          <li @click="onMenuItemClick">
            <a href="#services" class="a_top_hypers">我们的服务</a>
          </li>
          <!-- <li @click="onMenuItemClick">
            <a href="#services" class="a_top_hypers">服务</a>
          </li>-->
          <li @click="onMenuItemClick">
            <a href="#demoProjects" class="a_top_hypers">我们的作品</a>
          </li>
          <li @click="onMenuItemClick">
            <a href="#contact" class="a_top_hypers">联系我们</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="banner-desc" v-scroll-reveal>
      <div class="text-big">洞悉用户需求，结合前沿技术 --- 助您成功完成数字化转型</div>
      <br />
      <div class="text-small">我们致力于为工业4.0提供专业数字产品开发服务</div>
    </div>
    <a class="toContent" href="#services" v-scroll-reveal="{origin: 'right'}">
      <svg fill="white" id="icon-scroll-arrow" viewBox="0 0 32 32">
        <path
          d="M16.842 6.737v13.895l5.474-5.474 1.263 1.112-7.579 7.579-7.579-7.579 1.263-1.112 5.474 5.474v-13.895h1.684zM16 32c-8.825 0-16-7.158-16-16s7.158-16 16-16c8.842 0 16 7.158 16 16s-7.158 16-16 16zM16 30.316c7.916 0 14.316-6.417 14.316-14.316s-6.417-14.316-14.316-14.316c-7.899 0-14.316 6.417-14.316 14.316s6.417 14.316 14.316 14.316z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
import HamburgerIcon from "../assets/svg/menu-hamburger.svg";
import WitigerLogoIcon from "../assets/svg/witiger-logo.svg";

export default {
  data() {
    return {
      toggleMenu: true //true indicates menu is collapsed
    };
  },
  methods: {
    onMenuClick() {
      this.toggleMenu = !this.toggleMenu;
    },
    onMenuItemClick() {
      this.toggleMenu = true;
    },
    onNavClick() {
      this.toggleMenu = true;
    },
    onNavContentClick(event) {
      event.stopPropagation();
    }
  },
  watch: {
    toggleMenu: function(newValue) {
      const body = document.querySelector("body");
      body.style.overflow = newValue ? "auto" : "hidden";
    }
  },
  components: {
    HamburgerIcon,
    WitigerLogoIcon
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  z-index: 1000;
  color: #fff;
  min-height: 358px;
}

.banner > img {
  width: 100%;
}
.logo-wrapper {
  width: 20%;
}

.img-mb {
  display: none;
}

.mobile-header {
  display: none;
}

.nav {
  position: absolute;
  width: 100%;
  top: 10%;
  transition: all 0.5s ease 0s;
}

.nav-content {
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease 0s;
}

.nav li {
  margin: 0 3%;
  display: inline-block;
}

.nav a {
  color: white;
}

.nav-logo {
  fill: white;
  width: 168px;
}

.banner-menu {
  flex: 1;
  text-align: right;
}

.a_top_hypers {
  font-size: small;
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
  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    position: absolute;
    width: 100%;
    top: 5%;
  }

  .logo-wrapper {
    width: unset;
    margin: 2rem 0 1rem 0;
  }

  .nav-logo {
    fill: #394f5b;
  }

  .nav {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: unset;
    height: 100vh;
    z-index: 100;
    visibility: hidden;
    opacity: 0;
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    width: unset;
    height: 100%;
    margin-left: 100%;
    visibility: hidden;
    opacity: 0;
  }

  .nav ul {
    text-align: center;
    align-self: stretch;
  }

  .nav li {
    display: block;
    margin: 0;
  }

  .nav a {
    display: inline-block;
    width: 100%;
    padding: 1rem 0;
    color: #333;
  }

  .nav.active {
    display: block;
    visibility: visible;
    opacity: 1;
  }

  .nav.active .nav-content {
    margin-left: 20%;
    visibility: visible;
    opacity: 1;
  }

  .text-big {
    font-size: 1em;
  }

  .text-small {
    display: none;
    font-size: 0.6em;
    font-style: italic;
  }

  .banner {
    min-height: 180px;
  }

  .img-desktop {
    display: none;
  }

  .img-mb {
    display: block;
  }

  .banner-desc {
    left: 8%;
    right: 8%;
    bottom: 45%;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
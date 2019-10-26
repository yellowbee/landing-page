<template>
  <div id="banner">
    <ul id="banner-menu">
      <li class="menu-item">
        <a href class="a_top_hypers">主页</a>
      </li>
      <li class="menu-item">
        <a href class="a_top_hypers">关于</a>
      </li>
      <li class="menu-item">
        <a href class="a_top_hypers">服务</a>
      </li>
      <li class="menu-item">
        <a href class="a_top_hypers">作品</a>
      </li>
      <li class="menu-item">
        <a href class="a_top_hypers">联系我们</a>
      </li>
    </ul>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide caption text img-src="../assets/banner/hoop.jpg"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/banner/subway.jpeg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/banner/mountain.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
    </p>-->
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
#banner {
  position: relative;
}
#banner-menu {
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 10%;
  right: 10%;
  text-align: right;
}

.a_top_hypers {
  color: white;
  font-size: small;
}
.menu-item {
  margin: 0 3%;
  display: inline-block;
}
</style>
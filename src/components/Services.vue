<template>
  <div id="services">
    <h2 class="header" v-scroll-reveal>您好</h2>
    <p
      class="ml-2 mr-2"
      v-scroll-reveal
    >我叫刘昆仑， 是一名设计师</p>
    <a href="#contact">
      <b-button class="btn-form" squared type="submit" variant="outline-secondary">联系我</b-button>
    </a>
    <ul class="service-container">
      <li
        class="service"
        v-for="(service,index) in services"
        :key="index"
        v-scroll-reveal="{delay: index*100}"
      >
        <div class="service-box">
          <SvgIcon class="service-img" :icon="service.imageName" />
          <!-- <img class="service-img" :src="service.imageName" width="60" :alt="service.title" /> -->
          <h3>{{service.title}}</h3>
          <p>{{service.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";

const services = [
  {
    imageName: "website.svg",
    title: "传统网站/软件开发",
    content:
      "我们精通 js, java, python, c# 等多种开发语言，能够胜任传统网站/软件开发任务。"
  },
  {
    imageName: "mobile.svg",
    title: "移动端开发",
    content:
      "我们拥有设计，开发移动端App和微信小程序的经验，让您的业务“动”起来。"
  },
  {
    imageName: "bigdata.svg",
    title: "大数据",
    content:
      "我们可以帮助您收集，整理，提取大数据，并指导您如何利用大数据来提高您的业务和决策。"
  },
  {
    imageName: "ai.svg",
    title: "人工智能",
    content:
      "通过建立机器学习模型，我们让您构建更高层的应用，比如推荐系统，预测系统等。"
  },
  {
    imageName: "cloud-service.svg",
    title: "云服务",
    content:
      "我们通过云服务，让您的企业的系统包括app，数据库，机器学习的模型等移到云端，从而提高效率，节省开支，降低成本，并提高灵活性。"
  },
  {
    imageName: "design.svg",
    title: "体验设计",
    content:
      "我们始终相信以人为本的思路将会让您的产品及服务脱颖而出。结合硅谷最前沿的设计思维，我们指导您给客户提供优异的用户体验。"
  },
  {
    imageName: "brand.svg",
    title: "品牌战略",
    content:
      "品牌，和产品的质量一样重要。我们通过数字化祝您完成品牌升级，通过品牌的构建，让您的产品独一无二。"
  },
  {
    imageName: "user-insight.svg",
    title: "用户洞察",
    content:
      "我们提供最前沿的定性及定量分析技术，辅助您洞察您的用户，清晰的了解用户的痛点以及产品的改进方案。"
  }
];

export default {
  name: "Services",
  data: () => ({
    services: services.map(service => ({
      ...service
    }))
  }),
  components: {
    SvgIcon
  }
};
</script>

<style scoped>
.header {
  visibility: hidden;
}

.service-img {
  margin-bottom: 0.5rem;
}

.service-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
}

.service {
  display: flex;
  width: 25%;
  visibility: hidden;
}

.service-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  width: 100%;
  margin: 0.5rem;
  padding: 0 1rem;
  background: #f5f5f5;
  transition: all 0.75s ease 0s;
  transform: translateX(0px) translateY(0px);
}

.service-box p {
  align-self: stretch;
}

.service:nth-child(odd) .service-box:hover {
  background: #e3e1d3;
  transform: scale(1.02);
}

.service:nth-child(even) .service-box:hover {
  background: #e0cece;
  transform: scale(1.02);
}

@media (max-width: 767.98px) {
  .service {
    width: 100%;
  }
}
</style>

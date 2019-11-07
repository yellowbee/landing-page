<template>
  <section>
    <h2 class="header mb-4" v-scroll-reveal>案例展示</h2>
    <br />
    <ul class="project-container">
      <li
        class="project"
        v-for="(project,index) in projects"
        :key="index"
        v-scroll-reveal="{delay: index*100}"
      >
        <div
          class="project-box"
          :style="{
            backgroundImage: project.imageName && 'url('+project.imageName+'),url('+project.defaultImageName+')',
            backgroundPosition: 'center center',
            backgroundRepeat:'no-repeat',}"
        >
          <div v-if="!project.isPlaceholder">
            <h2>{{project.title}}</h2>
            <br />
            <p>{{project.content}}</p>
            <br />
            <button class="btn btn-link demo-project__more">了解更多 &gt;</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
const projects = [
  {
    imageName: "project-1.jpg",
    title: "",
    content: "",
    isPlaceholder: true
  },
  {
    imageName: "",
    title: "摩根大通银行 CXO应用系统",
    content:
      "摩根大通银行 CXO （Chase Commercial/Personal Online-banking）应用系统摩根大通Chase银行是全球500强企业，在全球银行系统中排前10名。CXO是摩根大通旗下Chase银行的商用和个人网上银行系统，主要是实现用户在网上进行各种金融操作，比如银行账号管理，信用卡管理，投资服务，支付服务等等。我门团队在这个项目中提供前端UI开发和后端Web Service的开发服务。使用到的技术主要是：HTML/CSS/JavaScript, ReactJS, 以及NodeJS。"
  },
  {
    imageName: "project-2.jpg",
    title: "",
    content: "",
    isPlaceholder: true
  },
  {
    imageName: "",
    title: "eHealth LSS 人工智能系统",
    content:
      "eHealth是一家从事医疗保险销售服务的跨国公司。我们主要提供前端eCommerce web application的开发和后端Web Service的开发与维护。e Heath LSS是用来给Lead（潜在用户）进行打分的系统，是用机器学习的训练好的模型对用户进行潜在商业价值的打分。使用到的技术主要是：python和python相关的机器学习的软件包。"
  },
  {
    imageName: "project-3.jpg",
    title: "",
    content: "",
    isPlaceholder: true
  },
  {
    imageName: "",
    title: "中节能唯绿 Valeen 综合管理系统",
    content:
      "中节能唯绿是中国节能环保集团所属,专业从事既有建筑节能改造和绿色建筑技术研发应用的国家级高新技术企业。我们在该项目中主要提供前后端开发包括：图形化智能监控站点内设备运行状况。设计及构建故障上报及管理。 设计及构建订单管理系统，巡检项管理系统等，使用到的技术主要是：AngularJS, Canvas, MVC, Web API, Entity framework, SQL server, C#."
  }
];

export default {
  name: "DemoProjects",
  data: () => ({
    projects: projects.map(project => ({
      ...project,
      imageName:
        project.imageName && require("../assets/projects/" + project.imageName),
      defaultImageName: require("../assets/example-bg.png")
    }))
  })
};
</script>

<style scoped>
.header {
  font-size: 2rem;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: -1rem;
  padding: 0 0.5rem;
}

.project {
  display: flex;
  width: 50%;
  visibility: hidden;
}

.project-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin: 0.5rem;
  padding: 1rem;
  background: #f5f5f5;
  transition: all 0.75s ease 0s;
}

.demo-project__more {
  align-self: center;
}

.project:nth-child(odd) .project-box:hover {
  background: #e3e1d3;
  transform: scale(1.01);
}

.project:nth-child(even) .project-box:hover {
  background: #e0cece;
  transform: scale(1.01);
}

@media (max-width: 767.98px) {
  .project {
    width: 100%;
  }
}
</style>

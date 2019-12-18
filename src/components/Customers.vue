<template>
  <section>
    <h2 class="header" v-scroll-reveal>我们的客户</h2>
    <ul>
      <li v-for="(customer,index) in customers" :key="index" v-scroll-reveal="{delay: index*100}">
        <div
          class="customer"
          :style="{
            backgroundImage: customer.imageName && 'url('+customer.imageName+')',
            backgroundPosition: 'center center',
            backgroundRepeat:'no-repeat',}"
        />
      </li>
    </ul>
  </section>
</template>

<script>
const customers = [
  {
    imageName: "dell.png",
    name: "戴尔"
  },
  {
    imageName: "cat.png",
    name: "卡特比勒"
  },
  {
    imageName: "jp-morgan.png",
    name: "摩根大通"
  },
  {
    imageName: "gm.png",
    name: "通用汽车"
  },
  {
    imageName: "gap.png",
    name: "narvar"
  },
  {
    imageName: "china-eco.png",
    name: "中节能"
  },
  {
    imageName: "ren-ming.png",
    name: "人民大学"
  }
];

export default {
  name: "Customers",
  data: () => ({
    customers: customers.map(customer => ({
      ...customer,
      imageName:
        customer.imageName &&
        require("../assets/customers/" + customer.imageName)
    }))
  })
};
</script>

<style scoped>
.header {
  visibility: hidden;
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.customer {
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px #efefef;
  transition: all 0.75s ease 0s;
}

ul li {
  visibility: hidden;
  margin: 0.5rem;
}

li:nth-child(odd) .customer:hover {
  background: #DFF1FB;
  transform: scale(1.05);
}

li:nth-child(even) .customer:hover {
  background: #DAE2FD;
  transform: scale(1.05);
}
</style>

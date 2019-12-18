<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4">
    <mdb-container class="text-center">
      <mdb-row>
        <mdb-col class="footer-logo" md="3">
          <WitigerLogoIcon style="fill: white; width: 168px;" />
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">菜单</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#banner">主页</a>
            </li>
            <li>
              <a href="#services">服务</a>
            </li>
            <li>
              <a href="#demoProjects">作品</a>
            </li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">地址</h5>
          <ul class="list-unstyled">
            <li>北京市海淀区</li>
            <li>学院路20号</li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="3">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">联系我们</h5>
          <ul class="list-unstyled">
            <li>
              邮件：
              <a href="mailto:liukunlun@outlook.com">liukunlun@outlook.com</a>
            </li>
            <li>电话/微信： 17610081155</li>
          </ul>
          <img class="qrcode" src="../assets/footer/zhihu-qrcode.png" />
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-fb mx-1">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-tw mx-1">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-gplus mx-1">
            <i class="fab fa-google-plus"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-li mx-1">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-sm btn-dribbble mx-1">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>&copy; 2019 Copyright: Witiger Co. Ltd</mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import WitigerLogoIcon from "../assets/svg/witiger-logo.svg";

export default {
  name: "Footer",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    WitigerLogoIcon
  }
};
</script>

<style scoped>
* {
  text-align: left;
}

li {
  line-height: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
}

h5 {
  color: #7d7d7d;
}

.stylish-color-dark {
  background-color: #061d2c;
}
.page-footer {
  color: white;
  margin-top: 4rem !important;
}

.qrcode {
  margin-top: 1rem;
  height: 6rem;
}

a {
  color: #fff;
}

.footer-copyright div {
  text-align: center;
}

@media (max-width: 767.98px) {
  * {
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }
}
</style>
<template>
    <!-- Footer -->
    <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
        <mdb-container class="text-left">
            <mdb-row>
                <mdb-col md="3">
                    <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">🐯智虎科技</h5>
                </mdb-col>
                <hr class="clearfix w-100 d-md-none" />
                <mdb-col md="3">
                    <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">菜单</h5>
                    <ul class="list-unstyled">
                        <li><a href="#!">主页</a></li>
                        <li><a href="#!">关于</a></li>
                        <li><a href="#!">服务</a></li>
                        <li><a href="#!">案例</a></li>
                    </ul>
                </mdb-col>
                <hr class="clearfix w-100 d-md-none" />
                <mdb-col md="3">
                    <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">地址</h5>
                    <ul class="list-unstyled">
                        <li>北京市昌平区</li>
                        <li>龙泽苑东区</li>
                        <li>5号楼 2-602</li>
                    </ul>
                </mdb-col>
                <hr class="clearfix w-100 d-md-none" />
                <mdb-col md="3">
                    <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">联系我们</h5>
                    <ul class="list-unstyled">
                        <li>邮件：beam@outlook.com</a></li>
                        <li>电话/微信： 554300112</li>
                    </ul>
                </mdb-col>
            </mdb-row>
        </mdb-container>
        <div class="text-center">
            <ul class="list-unstyled list-inline">
                <li class="list-inline-item"><a class="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"> </i></a></li>
                <li class="list-inline-item"><a class="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"> </i></a></li>
                <li class="list-inline-item"><a class="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-google-plus"> </i></a></li>
                <li class="list-inline-item"><a class="btn-floating btn-sm btn-li mx-1"><i class="fab fa-linkedin-in"> </i></a></li>
                <li class="list-inline-item"><a class="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-dribbble"> </i></a></li>
            </ul>
        </div>
        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                &copy; 2019 Copyright: Tiger AI
            </mdb-container>
        </div>
    </mdb-footer>
    <!-- Footer -->
</template>

<script>
    import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
    export default {
        name: 'Footer',
        components: {
            mdbFooter,
            mdbContainer,
            mdbRow,
            mdbCol
        }
    }
</script>

<style scoped>
.stylish-color-dark {
    background-color: #343a40;
}
.page-footer {
    color: white;
}
</style>
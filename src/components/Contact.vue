<template>
    <div class="contact-container">
        <div class="title" v-scroll-reveal="{origin:'right'}">
            <h1>联系我们</h1>
            <h6>hi, 很高兴认识你: )</h6>
        </div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="true" v-scroll-reveal>
            <b-form-group id="input-group-1" label="姓名" label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.name"
                        placeholder="请输入姓名"
                ></b-form-input>
                <div v-if="errors.name" class="err-msg">{{ errors.name }}</div>
            </b-form-group>
            <b-form-group
                    id="input-group-2"
                    label="手机号码"
                    label-for="input-2"
                    description=""
            >
                <b-form-input
                        id="input-2"
                        v-model="form.mobile"
                        placeholder="请输入手机号码"
                ></b-form-input>
                <div v-if="errors.mobile" class="err-msg">{{ errors.mobile }}</div>
            </b-form-group>
            <b-form-group
                    id="textarea-1"
                    label="留言"
                    label-for="input-2"
                    description=""
            >
                <b-form-textarea
                        id="textarea"
                        v-model="form.comment"
                        placeholder="打声招呼吧"
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
                <div v-if="errors.comment" class="err-msg">{{ errors.comment }}</div>
            </b-form-group>

            <div v-if="errors.response" class="err-msg">{{ errors.response }}</div>
            <div v-if="submitSuccess" class="err-msg">{{ submitSuccess }}</div>
            <b-button class="btn-form" squared type="submit" variant="outline-secondary">发送</b-button>
            <b-button class="btn-form" squared type="reset" variant="outline-secondary">重置</b-button>
        </b-form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Contact",
        data() {
            return {
                form: {
                    name: null,
                    mobile: null,
                    comment: null
                },
                errors: {
                    name: null,
                    mobile: null,
                    comment: null,
                    response: null
                },
                submitSuccess: false,
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                //alert(JSON.stringify(this.form))

                if (this.checkForm()) {
                    axios.post('http://localhost:3000/sms', {
                        name: this.form.name,
                        mobile: this.form.mobile,
                        comment: this.form.comment
                    })
                        .then((res) => {
                            if (!res.data.success) {
                                this.errors.response = '留言发送失败，请再尝试一次。'
                            } else {
                                this.submitSuccess = true;
                                //this.login({ token: res.data.token, uuid: res.data.uuid, activated: res.data.activated });
                            }
                        })
                        .catch((err) => {
                            this.errors.response = '留言发送失败，请再尝试一次。'
                        });
                }
            },
            checkForm() {
                let success = true;

                if (!this.form.mobile || !this.form.mobile.match(/1[\d]{10}/)) {
                    this.errors.mobile = '请输入有效手机号';
                    success = false;
                } else {
                    this.errors.mobile = null;
                }

                if (!this.form.name) {
                    this.errors.name = '姓名不能为空';
                    success = false;
                } else {
                    this.errors.name = null;
                }

                if (!this.form.comment) {
                    this.errors.comment = '留言不能为空';
                    success = false;
                } else if (this.form.comment.length > 100) {
                    this.errors.comment = '请保持留言在100个字内';
                    success = false;
                } else {
                    this.errors.comment = null;
                }


                return success;
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.name = null;
                this.form.mobile = null;
                this.form.comment = null;
                this.errors.name = null;
                this.errors.mobile = null;
                this.errors.comment = null;
                this.errors.response = null;
                this.submitSuccess = false;
                // Trick to reset/clear native browser form validation state
                // this.show = false;
                //this.$nextTick(() => {
                //    this.show = true
                //})
            }
        }
    }
</script>

<style scoped>
.contact-container {
  width: 50%;
  margin: 0 auto;
}

.title {
  margin-bottom: 6rem;
  visibility: hidden;
}
h6 {
  font-style: italic;
}

#input-1,
#input-2 {
  border-radius: 0;
}

.btn-form {
  padding: 1rem 2rem;
  font-size: 0.8rem;
  margin: 0 0.5rem;
}

.form{
    visibility: hidden;
}

.err-msg {
    color: red;
}

@media (max-width: 767.98px) {
  .contact-container {
    width: 90%;
  }
}
</style>
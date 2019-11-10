<template>
  <div class="contact-container">
    <div class="title" v-scroll-reveal="{origin:'right'}">
      <h1>联系我们</h1>
      <h6>hi, 很高兴认识你: )</h6>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" v-scroll-reveal>
      <b-form-group id="input-group-1" label="姓名" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" required placeholder="请输入姓名"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="邮箱地址" label-for="input-2" description>
        <b-form-input id="input-2" v-model="form.email" type="email" required placeholder="请输入邮箱地址"></b-form-input>
      </b-form-group>
      <b-form-group id="textarea-1" label="留言" label-for="input-2" description>
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="请在这儿留言，你的意见对我们很重要"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button id="btn-1" squared type="submit" variant="outline-secondary">发送</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        text: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
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

#btn-1 {
  padding: 1rem 2rem;
  font-size: 0.8rem;
}

.form{
    visibility: hidden;
}

@media (max-width: 767.98px) {
  .contact-container {
    width: 90%;
  }
}
</style>
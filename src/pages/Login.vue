<template>
  <div class="login">
    <div class="title"><img src="../assets/img/person_title.png" /></div>
    <div class="login-form">
      <div class="login-content">
        <p>登录</p>
        <input type="text" v-model="loginform.userId" placeholder=" 学号" />
        <input
          type="password"
          v-model="loginform.userPassword"
          placeholder=" 密码"
        />
        <!--  -->
      </div>
      <button class="btn" @click="login_audit">登录</button>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginform: {
        userId: "",
        userPassword: "",
      },
    };
  },
  methods: {
    login_audit() {
      axios({
        url: "/api/login",
        method: "post",
        params: {
          ...this.loginform,
        },
      }).then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        this.$router.push("/home");
        if (res.data.state === "登录成功") {
          alert(res.data.state);
        } else {
          alert(res.data.state);
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  height: 100%;
  background-color: #f6f6f6;
}
/* 顶部图片 */
.title {
  height: 30%;
}
.title img {
  width: 100%;
  height: 100%;
}
/* 中间登录 */
.login-form {
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.login-content {
  margin: 0 20px;
  height: 600px;
  border-radius: 40px;
  border: solid #efcbaf;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
.login-content p {
  font-weight: 800;
}
.login-content input {
  letter-spacing: 8px;
  margin: 0 20px;
  background-color: #f3d9c5;
  height: 80px;
  border-radius: 30px;
  border: none;
  opacity: 0.73;
  padding-left: 15px;
}
.login-form .btn {
  font-weight: 400;
  text-align: center;
  color: #000;
  width: 405px;
  height: 110px;
  border-radius: 45px;
  background-color: #efcbaf;
  border: none;
}
/* 底部 */
footer {
  height: 10%;
  background-color: #f4e2cd;
}
</style>
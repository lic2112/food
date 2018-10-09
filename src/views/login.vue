<template>
    <div class="am-g myapp-login">
        <div class="myapp-login-bg">
            <div class="myapp-login-logo">
                <i class="am-icon-stumbleupon"></i>
            </div>
            <div class="am-u-sm-10 myapp-login-form">
                <form class="am-form">
                    <fieldset>
                        <div class="am-form-group">
                            <input type="email" class="" id="doc-ipt-email-1" placeholder="Please enter your userName" v-model="luser" />
                        </div>
                        <div class="am-form-group">
                            <input type="password" class="" id="doc-ipt-pwd-1" placeholder="请输入密码" v-model="lpass" />
                        </div>
                        <p>
                            <button type="button" class="am-btn am-btn-default" @click="login">Login</button>
                        </p>
                        <div class="login-text">
                            Forgot Password?
                        </div>
                        <div class="login-text">
                            <router-link to="/reg" class="login-text">Register</router-link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            luser: '',
            lpass: ''
        }
    },
    methods: {
        login() {
            this.$http.post('http://localhost:3000/login', { username: this.luser, password: this.lpass }).then(res => {
                if (res.message == false) {
                    alert('账号密码错误')
                } else {
                    alert('登录成功')
                    this.$store.dispatch('user', this.luser);
                    // sessionStorage.user = this.luser;
                    this.$router.push({ path: this.$route.params.path, query: {}, params: {} })
                }
            })
        }
    }
}
</script>

<style scoped>
/* Write your styles */
html,
body {
  background: rgb(42, 144, 223);
}
/* 登陆logo */
.myapp-login {
  background: url(../assets/images/bg.jpg) rgb(42, 144, 223) top no-repeat;
  background-size: 100%;
  height: 100%;
}
.myapp-login .myapp-login-bg {
  padding-top: 30px;
  height: 100%;
}
.myapp-login .myapp-login-logo {
  width: 100%;
  text-align: center;
}
.myapp-login .myapp-login-logo i {
  font-size: 120px;
  color: #fff;
}
.myapp-login .myapp-login-form {
  margin: 0 auto;
  float: none;
  padding-top: 20px;
}
.myapp-login .myapp-login-form .am-form .am-form-group input {
  font-size: 14px;
  padding: 10px 0;
  background: none;
  border: none;
  text-align: center;
  border-bottom: 1px solid #fff;
  color: #fff;
}
.myapp-login .myapp-login-form .am-form button {
  background: #fff;
  width: 100%;
  border-radius: 30px;
  color: #2a90df;
  border: none;
  font-size: 14px;
  margin-top: 20px;
}
.myapp-login .myapp-login-form .am-form .login-text {
  font-size: 14px;
  width: 100%;
  color: #fff;
  padding-top: 20px;
  text-align: center;
}
</style>
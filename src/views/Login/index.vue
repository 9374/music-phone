<!--
 * @description: 登录页
 * @fileName: index.vue
 * @author: HanXiaoHui
 * @date: 2023-02-11 18:23:21
 * @version: V1.0.0
!-->
<template>
  <div>
    <div class="head">
      <Back />
      <div class="title">登录帐号</div>
      <div class="box"></div>
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="手机登录">
        <van-form @submit="onSubmit('phone', $event)" ref="fm">
          <van-cell-group inset>
            <van-field
              v-model="phone"
              name="phone"
              label="手机号"
              placeholder="手机号"
              :rules="validateForm.phone"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="validateForm.password"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block color="#414141" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
      </van-tab>
      <van-tab title="邮箱登录">
        <van-form @submit="onSubmit('email', $event)">
          <van-cell-group inset>
            <van-field
              v-model="email"
              name="email"
              label="邮箱"
              placeholder="邮箱"
              :rules="validateForm.email"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="validateForm.password"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block color="#414141" native-type="submit">
              登录
            </van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { loginInPhone, loginInEmail } from '@/Api/user.js'
import { useStore } from 'vuex'
import md5 from 'md5'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
export default {
  name: 'Login',
  setup () {
    const active = ref(0)
    const store = useStore()
    const router = useRouter()
    const email = ref('')
    const phone = ref('')
    const password = ref('')
    const md5Password = ref('')
    const validateForm = reactive({
      phone: [{ pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号格式有误' }],
      password: [
        { required: true, message: '请填写密码' }],
      email: [
        { pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: '邮箱格式有误' }
      ]
    })
    const fm = ref(null)
    const toHome = () => {
      router.replace('/my')
      store.dispatch('user/loginStateInfo')
    }
    const phoneLogin = async (data) => {
      const res = await loginInPhone(data)
      console.log(res)
      if (res.success) {
        store.commit('user/updateProfile', res.profile)
        store.commit('user/updateCookie', res.cookie)
        toHome()
      } else {
        Toast(res.message)
      }
    }
    const emailLogin = async (data) => {
      const res = await loginInEmail(data)
      console.log(res)
      if (res.success) {
        store.commit('user/updateProfile', res.profile)
        store.commit('user/updateCookie', res.cookie)
        toHome()
      } else {
        Toast(res.message)
      }
    }
    // console.log(fm.value.validate)
    const onSubmit = (q, values) => {
      md5Password.value = md5(encodeURIComponent(values.password))
      delete values.password
      switch (q) {
        case 'phone': {
          phoneLogin({ ...values, md5_password: md5Password.value })
          break
        }
        case 'email': {
          emailLogin({ ...values, md5_password: md5Password.value })
          break
        }
      }
      // console.log('submit', q, values)
    }
    return {
      active,
      email,
      phone,
      password,
      validateForm,
      onSubmit,
      fm
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box {
    width: 30px;
  }
}
</style>

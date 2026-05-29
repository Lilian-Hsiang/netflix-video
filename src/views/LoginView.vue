<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  errorMsg.value = ''

  if (!email.value || !password.value) {
    errorMsg.value = '請輸入電子郵件和密碼'
    return
  }

  isLoading.value = true
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 800))
  auth.login(email.value, password.value)
  isLoading.value = false
  router.push('/')
}
</script>

<template>
  <div class="login-page">
    <div class="login-bg" />

    <header class="login-header">
      <span class="logo"><img src="/images/netflix_logo.jpg" alt="Netflix Logo" /></span>
    </header>

    <main class="login-main">
      <div class="login-form-wrapper">
        <h1>登入</h1>

        <form @submit.prevent="handleLogin" class="login-form">
          <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

          <div class="input-group">
            <input v-model="email" type="email" id="email" placeholder=" " autocomplete="email" />
            <label for="email">電子郵件</label>
          </div>

          <div class="input-group">
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder=" "
              autocomplete="current-password"
            />
            <label for="password">密碼</label>
          </div>

          <button type="submit" class="btn-login" :disabled="isLoading">
            {{ isLoading ? '登入中...' : '登入' }}
          </button>

          <div class="login-options">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe" />
              <span>記住我</span>
            </label>
            <a href="#" class="help-link">需要協助？</a>
          </div>
        </form>

        <div class="login-footer">
          <p>
            第一次使用嗎？
            <a href="#" class="signup-link">立即註冊</a>
          </p>
          <p class="captcha-notice">此頁面受 Google reCAPTCHA 保護，以確認您不是機器人。</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.login-bg {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://picsum.photos/seed/netflixbg/1920/1080') center / cover no-repeat;
  z-index: 0;
}

.login-header {
  position: relative;
  z-index: 2;
  padding: 20px 4%;
}

.logo {
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--color-primary);
  letter-spacing: 2px;
}

.login-main {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-form-wrapper {
  background: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding: 60px 68px 40px;
  width: 100%;
  max-width: 450px;
}

.login-form-wrapper h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 28px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.error-msg {
  background: var(--color-primary);
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.input-group {
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 24px 16px 8px;
  background: var(--bg-input);
  color: var(--color-text);
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid transparent;
  transition: border-color var(--transition-fast);
}

.input-group input:focus {
  border-color: var(--color-text-muted);
}

.input-group label {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: var(--color-text-dim);
  font-size: 1rem;
  pointer-events: none;
  transition: all var(--transition-fast);
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  top: 12px;
  font-size: 0.72rem;
  transform: translateY(0);
}

.btn-login {
  width: 100%;
  padding: 14px;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 8px;
  transition: background var(--transition-fast);
}

.btn-login:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.btn-login:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-muted);
  cursor: pointer;
}

.remember-me input[type='checkbox'] {
  width: 16px;
  height: 16px;
  accent-color: var(--color-text-muted);
}

.help-link {
  color: var(--color-text-muted);
}

.help-link:hover {
  text-decoration: underline;
}

.login-footer {
  margin-top: 50px;
  font-size: 0.9rem;
  color: var(--color-text-dim);
}

.login-footer p {
  margin-bottom: 12px;
}

.signup-link {
  color: var(--color-text);
  font-weight: 500;
}

.signup-link:hover {
  text-decoration: underline;
}

.captcha-notice {
  font-size: 0.72rem;
  color: var(--color-text-dim);
  line-height: 1.5;
}

@media (max-width: 500px) {
  .login-form-wrapper {
    padding: 40px 28px 30px;
  }

  .logo {
    font-size: 1.6rem;
  }
}
</style>

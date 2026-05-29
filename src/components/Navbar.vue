<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()
const scrolled = ref(false)
const showDropdown = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function logout() {
  auth.logout()
  router.push('/login')
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="navbar-left">
      <router-link to="/" class="logo"
        ><img src="/images/netflix_logo-removebg.png" alt="Netflix Logo"
      /></router-link>
      <ul class="nav-links">
        <li><router-link to="/">首頁</router-link></li>
        <li><a href="#">影集</a></li>
        <li><a href="#">電影</a></li>
        <li><a href="#">最新熱門</a></li>
        <li><a href="#">我的片單</a></li>
      </ul>
    </div>
    <div class="navbar-right">
      <button class="icon-btn" title="搜尋">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
      <button class="icon-btn" title="通知">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          />
        </svg>
      </button>
      <div
        class="profile-menu"
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
      >
        <div class="avatar">
          <!-- <svg width="32" height="32" viewBox="0 0 32 32" fill="var(--color-primary)">
            <rect width="32" height="32" rx="4" />
            <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
              {{ auth.userName?.charAt(0).toUpperCase() || 'U' }}
            </text>
          </svg> -->
          <img src="/images/lilian.png" alt="" />
        </div>
        <div v-if="showDropdown" class="dropdown">
          <p class="dropdown-user">{{ auth.userName || '使用者' }}</p>
          <hr />
          <button @click="logout">登出</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  height: var(--navbar-height);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);
  transition: background var(--transition-normal);
}

.navbar.scrolled {
  background: var(--bg-navbar);
  backdrop-filter: blur(8px);
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  width: 100px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-text);
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-btn {
  background: none;
  color: var(--color-text);
  padding: 4px;
  display: flex;
  align-items: center;
  transition: color var(--transition-fast);
}

.icon-btn:hover {
  color: var(--color-text-muted);
}

.profile-menu {
  position: relative;
  cursor: pointer;
}

.avatar {
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  width: 32px;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 12px 16px;
  min-width: 160px;
}

.dropdown-user {
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 8px;
}

.dropdown hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin-bottom: 8px;
}

.dropdown button {
  background: none;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  width: 100%;
  text-align: left;
  padding: 4px 0;
}

.dropdown button:hover {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .logo {
    font-size: 1.4rem;
  }
}
</style>

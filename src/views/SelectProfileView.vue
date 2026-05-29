<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

interface Profile {
  id: string
  name: string
  image: string
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Emos',
    image: '/images/emos.jpg',
  },
  {
    id: '2',
    name: 'Elvis',
    image: '/images/elvis.png',
  },
  {
    id: '3',
    name: '帥氣爸',
    image: '/images/S__22650936.jpg',
  },
  {
    id: '4',
    name: 'Nancy',
    image: '/images/nancy.jpg',
  },
  {
    id: '5',
    name: 'Lilian',
    image: '/images/lilian.png',
  },
]

const selectProfile = (profile: Profile) => {
  // 儲存選擇的個人檔案
  localStorage.setItem('selectedProfile', JSON.stringify(profile))
  // 導航到主頁面
  router.push({ name: 'browse' })
}

const addProfile = () => {
  // 新增個人檔案的邏輯
  alert('新增個人檔案功能')
}
</script>

<template>
  <div class="select-profile">
    <div class="netflix-logo">
      <img src="/images/netflix_logo.jpg" alt="" />
    </div>
    <div class="profile-container">
      <h1 class="profile-title">選擇使用者</h1>

      <div class="profiles-grid">
        <div
          v-for="profile in profiles"
          :key="profile.id"
          class="profile-card"
          @click="selectProfile(profile)"
        >
          <div class="profile-avatar">
            <img :src="profile.image" :alt="profile.name" class="avatar-image" />
          </div>
          <p class="profile-name">{{ profile.name }}</p>
        </div>

        <div class="profile-card profile-add" @click="addProfile">
          <div class="profile-avatar profile-avatar-add">
            <img src="/images/edit.png" alt="編輯" class="avatar-image" />
          </div>
          <p class="profile-name">編輯</p>
        </div>
      </div>

      <div class="manage-profiles">
        <button class="manage-btn" @click="addProfile">管理個人檔案</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-profile {
  min-height: 100vh;
  background: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.netflix-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 300px;
}

@media (min-width: 600px) {
  .netflix-logo {
    width: 120px;
    top: 30px;
    left: 40px;
  }
}

@media (min-width: 1024px) {
  .netflix-logo {
    width: 167px;
    top: 40px;
    left: 50px;
  }
}

.logo-svg {
  width: 100%;
  height: auto;
  fill: #e50914;
}

.select-profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(20, 20, 20, 0.8) 0%,
    rgba(20, 20, 20, 0.95) 100%
  );
  z-index: 1;
}

.select-profile::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(229, 9, 20, 0.05) 0%, transparent 60%);
  animation: pulse 15s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.profile-container {
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.profile-title {
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.profiles-grid {
  display: grid;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  /* 手機版：2列 */
  grid-template-columns: repeat(2, minmax(120px, 160px));
}

/* 平板版：3列 */
@media (min-width: 600px) {
  .profiles-grid {
    grid-template-columns: repeat(3, minmax(140px, 180px));
    gap: 2.5rem;
  }

  .profile-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
}

/* 電腦版：一行顯示所有 */
@media (min-width: 1024px) {
  .profiles-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 200px));
    gap: 3rem;
    max-width: 1400px;
  }

  .profile-title {
    font-size: 3.5vw;
    margin-bottom: 4rem;
  }
}

.profile-card {
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.profile-card:hover {
  transform: scale(1.1);
}

.profile-card:hover .profile-avatar {
  border: 3px solid #fff;
}

.profile-card:hover .profile-name {
  color: #fff;
}

.profile-avatar {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 3px solid transparent;
  transition: border 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  max-width: 200px;
  background: #1a1a1a;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.profile-avatar-add {
  background: rgba(255, 255, 255, 0.15);
  /* border: 2px dashed rgba(255, 255, 255, 0.3); */
  backdrop-filter: blur(10px);
}

.profile-avatar-add .add-icon {
  opacity: 0.7;
}

.avatar-icon {
  font-size: 3rem;
  display: block;
}

/* 平板和電腦版的頭像更大 */
@media (min-width: 600px) {
  .avatar-icon {
    font-size: 4rem;
  }
}

@media (min-width: 1024px) {
  .avatar-icon {
    font-size: 5rem;
  }
}

.profile-name {
  font-size: 1rem;
  color: #808080;
  transition: color 0.3s ease;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.5px;
}

@media (min-width: 600px) {
  .profile-name {
    font-size: 1.1rem;
  }
}

@media (min-width: 1024px) {
  .profile-name {
    font-size: 1.3vw;
  }
}

.profile-add {
  opacity: 0.8;
}

.profile-add:hover {
  opacity: 1;
}

.manage-profiles {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.manage-btn {
  background: transparent;
  color: #808080;
  border: 1px solid #808080;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px;
  font-weight: 400;
  text-transform: uppercase;
}

.manage-btn:hover {
  color: #fff;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

@media (min-width: 600px) {
  .manage-btn {
    font-size: 1.1rem;
    padding: 0.8rem 2.5rem;
  }

  .manage-profiles {
    margin-top: 3.5rem;
  }
}

@media (min-width: 1024px) {
  .manage-btn {
    font-size: 1.2vw;
    padding: 0.9rem 3rem;
  }

  .manage-profiles {
    margin-top: 4rem;
  }
}
</style>

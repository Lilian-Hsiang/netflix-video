<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  videoSrc: string
}>()

const emit = defineEmits<{
  close: []
}>()

const handleClose = () => {
  emit('close')
}

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    handleClose()
  }
}
</script>

<template>
  <div class="video-player-overlay" @click="handleBackdropClick">
    <div class="video-player-container">
      <button class="close-button" @click="handleClose">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <video :src="videoSrc" controls autoplay muted class="video-element">
        您的瀏覽器不支援影片播放。
      </video>
    </div>
  </div>
</template>

<style scoped>
.video-player-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.video-player-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16 / 9;
}

.close-button {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 10;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.video-element {
  width: 100%;
  height: 100%;
  background-color: #000;
  outline: none;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .video-player-container {
    max-width: 100%;
  }

  .close-button {
    top: -40px;
    width: 36px;
    height: 36px;
  }
}
</style>

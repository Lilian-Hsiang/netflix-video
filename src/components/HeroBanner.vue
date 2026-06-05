<script setup lang="ts">
import type { Movie } from '@/data/movies'

defineProps<{
  movie: Movie
}>()

const emit = defineEmits<{
  play: []
}>()
</script>

<template>
  <section class="hero">
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      x5-playsinline
      preload="auto"
      src="https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/Ours.mp4"
    ></video>
    <img :src="movie.backdrop" alt="" class="hero-fallback" />
    <div class="hero-overlay" />
    <div class="hero-content">
      <h1 class="hero-title">{{ movie.title }}</h1>
      <p class="hero-description">{{ movie.description }}</p>
      <div class="hero-meta">
        <span class="badge">{{ movie.rating }}</span>
        <span>{{ movie.year }}</span>
        <span>{{ movie.duration }}</span>
      </div>
      <div class="hero-buttons">
        <button class="btn btn-play" @click="emit('play')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          播放
        </button>
        <button class="btn btn-info">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          更多資訊
        </button>
      </div>
    </div>
    <div class="hero-fade-bottom" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  background-color: #000;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 0;
}

.hero-fallback {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.hero-content {
  position: absolute;
  bottom: 8%;
  left: 4%;
  z-index: 2;
  max-width: 600px;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  line-height: 1.1;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-text);
  margin-bottom: 12px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 20px;
}

.badge {
  border: 1px solid var(--color-text-muted);
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 0.8rem;
}

.hero-buttons {
  display: flex;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all var(--transition-fast);
}

.btn-play {
  background: white;
  color: #141414;
}

.btn-play:hover {
  background: rgba(255, 255, 255, 0.8);
}

.btn-info {
  background: rgba(109, 109, 110, 0.7);
  color: white;
}

.btn-info:hover {
  background: rgba(109, 109, 110, 0.5);
}

.hero-fade-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(transparent, var(--bg-primary));
  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    height: 65vh;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 0.9rem;
  }

  .btn {
    padding: 8px 18px;
    font-size: 0.9rem;
  }
}
</style>

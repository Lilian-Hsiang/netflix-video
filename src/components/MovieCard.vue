<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Movie } from '@/data/movies'

const props = defineProps<{
  movie: Movie
}>()

const emit = defineEmits<{
  play: [videoSrc: string]
}>()

const isHovering = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const videoError = ref(false)

const handleVideoError = () => {
  videoError.value = true
}

const handleMouseEnter = () => {
  isHovering.value = true
  if (props.movie.videoSrc && videoRef.value) {
    videoRef.value.currentTime = 0 // 從頭開始播放
    videoRef.value.play().catch(() => {
      // 如果自動播放失敗，靜默處理
    })
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  if (videoRef.value) {
    videoRef.value.pause()
    // 返回到最後5秒的位置
    const targetTime = Math.max(0, videoRef.value.duration - 5)
    videoRef.value.currentTime = targetTime
  }
}

const handleVideoLoaded = () => {
  if (videoRef.value && props.movie.videoSrc) {
    // 設定到最後5秒的位置
    const targetTime = Math.max(0, videoRef.value.duration - 5)
    videoRef.value.currentTime = targetTime
  }
}

const handlePlay = () => {
  if (props.movie.videoSrc) {
    emit('play', props.movie.videoSrc)
  }
}
</script>

<template>
  <div 
    class="movie-card" 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <video
      v-if="movie.videoSrc"
      ref="videoRef"
      :src="movie.videoSrc"
      class="preview-video"
      muted
      loop
      playsinline
      preload="metadata"
      @loadedmetadata="handleVideoLoaded"
      @error="handleVideoError"
    />
    <img 
      :src="movie.poster" 
      :alt="movie.title" 
      loading="lazy"
      class="poster-img"
      :class="{ hidden: movie.videoSrc && !videoError }"
    />
    <div class="card-overlay">
      <button v-if="movie.videoSrc" class="play-btn" @click.stop="handlePlay" aria-label="播放影片">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      <h4>{{ movie.title }}</h4>
      <div class="card-meta">
        <span class="card-year">{{ movie.year }}</span>
        <span class="card-rating">{{ movie.rating }}</span>
      </div>
      <div class="card-genres">
        <span v-for="genre in movie.genre.slice(0, 2)" :key="genre">{{ genre }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card {
  position: relative;
  flex-shrink: 0;
  width: 200px;
  border-radius: var(--card-border-radius);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.movie-card:hover {
  transform: scale(1.08);
  z-index: 10;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
}

.movie-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.movie-card img.hidden {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.preview-video {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  background-color: #000;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 12px 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.movie-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.play-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.play-btn:hover {
  transform: scale(1.15);
  background: #fff;
}

.card-meta {
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}

.card-rating {
  border: 1px solid var(--color-text-dim);
  padding: 0 4px;
  border-radius: 2px;
  font-size: 0.7rem;
}

.card-genres {
  display: flex;
  gap: 6px;
  font-size: 0.7rem;
  color: var(--color-text-dim);
}

@media (max-width: 768px) {
  .movie-card {
    width: 140px;
  }

  .movie-card img {
    height: 210px;
  }
}
</style>

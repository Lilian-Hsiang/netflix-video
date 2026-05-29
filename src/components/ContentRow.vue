<script setup lang="ts">
import { ref } from 'vue'
import type { ContentCategory } from '@/data/movies'
import MovieCard from './MovieCard.vue'

defineProps<{
  category: ContentCategory
}>()

const emit = defineEmits<{
  play: [videoSrc: string]
}>()

const rowRef = ref<HTMLElement>()

function scrollRow(direction: 'left' | 'right') {
  if (!rowRef.value) return
  const amount = rowRef.value.clientWidth * 0.75
  rowRef.value.scrollBy({
    left: direction === 'left' ? -amount : amount,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="content-row">
    <h2 class="row-title">{{ category.title }}</h2>
    <div class="row-wrapper">
      <button class="scroll-btn scroll-left" @click="scrollRow('left')" aria-label="向左捲動">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <div class="row-cards" ref="rowRef">
        <MovieCard v-for="movie in category.movies" :key="movie.id" :movie="movie" @play="(src) => emit('play', src)" />
      </div>
      <button class="scroll-btn scroll-right" @click="scrollRow('right')" aria-label="向右捲動">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.content-row {
  padding: 0 4%;
  margin-bottom: 40px;
}

.row-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text);
}

.row-wrapper {
  position: relative;
}

.row-cards {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px 0;
  scrollbar-width: none;
}

.row-cards::-webkit-scrollbar {
  display: none;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(20, 20, 20, 0.7);
  color: white;
  width: 40px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.row-wrapper:hover .scroll-btn {
  opacity: 1;
}

.scroll-btn:hover {
  background: rgba(20, 20, 20, 0.9);
}

.scroll-left {
  left: 0;
}

.scroll-right {
  right: 0;
}
</style>

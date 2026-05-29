<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import ContentRow from '@/components/ContentRow.vue'
import FooterBar from '@/components/FooterBar.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import { featuredMovie, categories } from '@/data/movies'

const isVideoPlaying = ref(false)
const videoSrc = ref('https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/Ours.mp4')

const handlePlay = () => {
  isVideoPlaying.value = true
}

const handlePlayVideo = (src: string) => {
  videoSrc.value = src
  isVideoPlaying.value = true
}

const handleCloseVideo = () => {
  isVideoPlaying.value = false
}
</script>

<template>
  <div class="home-page">
    <Navbar />
    <HeroBanner :movie="featuredMovie" @play="handlePlay" />
    <div class="content-rows">
      <ContentRow
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @play="handlePlayVideo"
      />
    </div>
    <FooterBar />

    <VideoPlayer v-if="isVideoPlaying" :video-src="videoSrc" @close="handleCloseVideo" />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: var(--bg-primary);
}

.content-rows {
  position: relative;
  margin-top: -80px;
  z-index: 5;
}
</style>

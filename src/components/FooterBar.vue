<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-social">
        <a href="#" aria-label="Facebook">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#141414"/></svg>
        </a>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <a href="#">常見問題</a>
          <a href="#">投資人關係</a>
          <a href="#">隱私權</a>
          <a href="#">速度測試</a>
        </div>
        <div class="footer-col">
          <a href="#">帳戶</a>
          <a href="#">服務中心</a>
          <a href="#">Cookie 偏好設定</a>
          <a href="#">法律條款</a>
        </div>
        <div class="footer-col">
          <a href="#">媒體中心</a>
          <a href="#">使用條款</a>
          <a href="#">企業資訊</a>
          <a href="#">聯絡我們</a>
        </div>
      </div>
      <p class="footer-copy">&copy; 2025 Netflix Video — 練習專案，僅供學習用途</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 4% 40px;
  background: var(--bg-secondary);
}

.footer-content {
  max-width: 900px;
  margin: 0 auto;
}

.footer-social {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.footer-social a {
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.footer-social a:hover {
  color: var(--color-primary);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col a {
  color: var(--color-text-dim);
  font-size: 0.82rem;
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--color-text-muted);
}

.footer-copy {
  color: var(--color-text-dim);
  font-size: 0.75rem;
}

@media (max-width: 600px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

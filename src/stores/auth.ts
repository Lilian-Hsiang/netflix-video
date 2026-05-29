import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const userName = ref('')
  const userEmail = ref('')

  function login(email: string, _password: string) {
    isAuthenticated.value = true
    userEmail.value = email
    userName.value = email.split('@')[0]
  }

  function logout() {
    isAuthenticated.value = false
    userName.value = ''
    userEmail.value = ''
  }

  return { isAuthenticated, userName, userEmail, login, logout }
})

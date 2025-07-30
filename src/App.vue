<template>
  <div
    id="app"
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
  >
    <LanguageSwitcher />
    <div class="container mx-auto px-4 py-8">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageSwitcher } from './components'
</script>

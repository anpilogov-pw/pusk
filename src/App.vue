<template>
  <div id="app">
    <LanguageSwitcher />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageSwitcher } from './components'
</script>

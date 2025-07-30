<template>
  <div class="fixed top-5 right-5">
    <button
      class="px-4 py-2 border border-blue-500 bg-transparent text-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
      @click="switchLanguage"
    >
      {{ currentLang === 'ru' ? 'EN' : 'RU' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLang = computed(() => locale.value)

const switchLanguage = () => {
  locale.value = locale.value === 'ru' ? 'en' : 'ru'
}
</script>


<template>
  <div class="fixed top-6 right-6 z-50">
    <button
      class="px-4 py-2 bg-white border-2 border-blue-500 text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-200 transform hover:scale-105"
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


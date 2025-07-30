<template>
  <div class="text-center">
    <div class="mb-8">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        {{ $t('home') }}
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Добро пожаловать в наше приложение
      </p>
    </div>
    
    <div class="space-y-4">
      <router-link 
        :to="{ name: ROUTER_NAMES.ABOUT }" 
        class="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
      >
        {{ $t('about') }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTER_NAMES } from '../constants'
</script>
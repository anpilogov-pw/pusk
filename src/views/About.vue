<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">
        {{ $t('about') }}
      </h1>
    </div>
    
    <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            О проекте
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Это современное Vue.js приложение с поддержкой многоязычности, 
            созданное с использованием лучших практик разработки.
          </p>
        </div>
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Технологии
          </h2>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              Vue 3 + TypeScript
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              Tailwind CSS
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              Vue Router + Vue I18n
            </li>
            <li class="flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3" />
              ESLint + Prettier
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="text-center">
      <router-link 
        to="/" 
        class="inline-block px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg"
      >
        {{ $t('home') }}
      </router-link>
    </div>
  </div>
</template>
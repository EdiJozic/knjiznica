<template>
  
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h4 text-bold text-center">Quasar aplikacija Knjižnica</q-toolbar-title>
  
        <div>Quasar v{{ $q.version }}</div> 
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Link na početni prozor',
    icon: 'home',
    link: '/#/',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Popis knjiga',
    caption: 'Link na popis knjiga',
    icon: 'menu',
    link: '/#/Knjige',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Popis novih knjiga',
    caption: 'Link na popis knjiga',
    icon: 'menu',
    link: '/#/PopisKnjiga',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'GitHub Edi',
    caption: 'Link na github',
    icon: 'public',
    link: 'https://github.com/EdiJozic/knjiznica',
    target: 'blank',  // Otvara u novom tabu
  },
  {
    title: 'Veleučilište u Rijeci',
    caption: 'Link na VeleRi',
    icon: 'open_in_new',
    link: 'https://www.veleri.hr/hr',
    target: 'blank',  // Otvara u novom tabu
  }
]


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

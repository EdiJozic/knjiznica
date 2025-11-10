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
    caption: '',
    icon: 'home',
    link: '/#/',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },

  {
    title: 'Unos knjiga',
    caption: '',
    icon: 'home',
    link: '/#/unos-knjiga',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },

  {
    title: 'Popis novih knjiga',
    caption: '',
    icon: 'menu',
    link: '/#/Knjige',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Popis knjiga',
    caption: '',
    icon: 'menu',
    link: '/#/PopisKnjiga',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Pretraživanje',
    caption: '',
    icon: 'search',
    link: '/#/pretrazivanje',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Lokacija',
    caption: '',
    icon: 'map',
    link: '/#/lokacija',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Login',
    caption: '',
    icon: 'login',
    link: '/#/login',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },
  {
    title: 'Registracija',
    caption: '',
    icon: 'logout',
    link: '/#/registracija',  // Lokalna ruta
    target: 'self',  // Otvara u istom tabu
  },





]


const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

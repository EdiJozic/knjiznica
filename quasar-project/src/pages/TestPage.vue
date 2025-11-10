

<template>
    <q-page padding>

        <h1>{{ poruka }}</h1>
        <p v-html="htmlText"></p>
        <p v-text="htmlText"></p>

        <p v-for="item in days" :key="item">
           <button v-if="item=='Pon'">
            {{ item }}*
           </button> 
           <button v-else-if="item=='Uto'" v-show="false">
            {{ item }}
        </button>
        <button v-else>
            {{ item }}
        </button>
        </p>

        <a :href="link.url" :target="link.target"> {{link.text}} </a>
        <q-input color="purple-12" v-model="text" label="Item name" @keyup="log()"> </q-input>
        <q-input color="purple-12" v-model="text" label="Item name" @keyup="log()"> </q-input>

    </q-page>
</template>




<script setup>

const poruka = "Test page"
const htmlText ="<p><b>Formatirani text</b> na stranici</p>"
const days = ['Pon','Uto','Sri','Čet','Pet']

const link = {
url: 'https://veleri.hr/hr',
target: '_blank',
text: 'VeleRi'
}


import { ref } from 'vue'
const text = ref('')
text.value = "Hello"

function log(){
    console.log(text.value)

}
</script>
<template>
  <q-page padding>
    <!-- content -->
     
    <q-toolbar class="bg-grey-9 text-white">
      <q-toolbar-title>
        Popis novih knjiga
      </q-toolbar-title>
      </q-toolbar>
      <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/250399_w_1200_1200px.jpg">

      <q-card-section>
        <div class="text-h6">Sto godina samoće</div>
        <div class="text-subtitle2">Gabriel García Márquez</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem1 }}
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="https://libris.to/media/jacket/49086023o.jpg">

      <q-card-section>
        <div class="text-h6">1984</div>
        <div class="text-subtitle2">George Orwell</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem2 }}
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="https://www.njuskalo.hr/image-w920x690/hrvatska-knjizevnost/varalice-sarah-waters-slika-200076230.jpg">

      <q-card-section>
        <div class="text-h6">Skrivljena soba</div>
        <div class="text-subtitle2">Sarah Waters</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem3 }}
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="https://dijaspora.tv/wp-content/uploads/2023/06/ivo-andri%C4%87-predstava-_-Be%C4%8D-.jpg">

      <q-card-section>
        <div class="text-h6">Na Drini ćuprija</div>
        <div class="text-subtitle2">Ivo Andrić</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem4 }}
      </q-card-section>
    </q-card>

    
     </div>

     
  </q-page>
</template>

<script>
export default {
  setup () {
    return {
      lorem1: 'Ovaj magični realizam prikazuje život porodice Buendía kroz generacije u izmišljenom selu Macondo. Knjiga istražuje teme ljubavi, postojanja, i prolaznosti vremena, kroz bogatu simboliku i fantastične elemente koji se stapaju s realnim.',
      lorem2: 'U distopijskom društvu pod totalitarnim režimom, Winston Smith pokušava da se oslobodi totalne kontrole i manipulacije koju vrši Partija, predvođena Velikim Bratom. Orwellova vizija sveta u kojem su sloboda i privatnost zaraženi stalnim nadzorom, postavlja pitanja o moći, istini i manipulaciji.',
      lorem3: 'Roman koji kombinuje elemente gotičkog horora i psihološke drame, prati junakinju koja se preseljava u staru viktorijansku kuću, gde otkriva mračnu prošlost i misterioznu povezanost s njenim novim domom. Knjiga istražuje teme identiteta, tajni i duhovnih prisustava.',
      lorem4: 'Kroz priču o mostu na Drini, Andrić prikazuje istorijski, kulturni i društveni kontekst Bosne, kroz oči naroda koji je živio oko njega. Most simbolizuje vezu između različitih svetova i etničkih zajednica, a roman se bavi pitanjima istorije, identiteta i sukoba.',  
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

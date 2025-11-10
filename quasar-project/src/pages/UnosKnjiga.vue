<template>
  <q-page padding>

    <!-- Forma za unos knjige -->
    <q-card class="q-pa-lg" style="max-width: 600px; margin: auto;">
      <q-card-section>
        <div class="text-h6">Unos nove knjige</div>
      </q-card-section>

      <q-card-section>
        <q-form ref="forma" @submit.prevent="spremi" class="q-gutter-md">

          <q-input v-model="knjiga.id" label="ID knjige" filled readonly />
          <q-input v-model="knjiga.naslov" label="Naslov" filled />
          <q-input v-model="knjiga.autor" label="Autor" filled />
          <q-input v-model="knjiga.opis" type="textarea" autogrow label="Opis" filled />

          <q-file v-model="knjiga.slika" label="Odaberi sliku" filled counter use-chips ref="fileInput"/>
          <q-select v-model="knjiga.status" :options="statusOpcije" label="Status" filled />

          <div class="row q-gutter-sm">
            <q-btn type="submit" label="Spremi" color="primary" />
            <q-btn type="button" label="Odustani" color="secondary" flat @click="odustani"/>
          </div>

        </q-form>
      </q-card-section>
    </q-card>

    <!-- 🔹 ZADATAK 3: Prikaz knjiga u karticama -->
    <div class="q-mt-lg row q-gutter-md">
      <q-card v-for="k in sveKnjige" :key="k.id" class="col-12 col-sm-6 col-md-4">
        <q-img :src="k.slika" :alt="k.naslov" style="height: 200px" />
        <q-card-section>
          <div class="text-h6">{{ k.naslov }}</div>
          <div class="text-subtitle2">{{ k.autor }}</div>
          <div>{{ k.opis }}</div>
          <q-badge :color="k.status === 'Slobodno' ? 'green' : 'red'" class="q-mt-sm">
            {{ k.status }}
          </q-badge>
        </q-card-section>
      </q-card>
    </div>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nextId: JSON.parse(localStorage.getItem('knjige') || '[]').length > 0
        ? Math.max(...JSON.parse(localStorage.getItem('knjige')).map(k => k.id)) + 1
        : 7,
      knjiga: { id: 7, naslov: '', autor: '', opis: '', slika: null, status: 'Slobodno' },
      statusOpcije: [
        { label: 'Slobodno', value: 'Slobodno' },
        { label: 'Zauzeto', value: 'Zauzeto' }
      ],
      sveKnjige: []
    }
  },
  mounted() {
    this.knjiga.id = this.nextId
    this.loadKnjige()
  },
  methods: {
    loadKnjige() {
      this.sveKnjige = JSON.parse(localStorage.getItem('knjige') || '[]')
    },
    spremi() {
      if(!this.knjiga.naslov || !this.knjiga.autor) return alert("Naslov i Autor su obavezni!")

      const knjige = JSON.parse(localStorage.getItem('knjige') || '[]')
      knjige.push({ ...this.knjiga })
      localStorage.setItem('knjige', JSON.stringify(knjige))

      if(this.$q.notify) this.$q.notify({ type: 'positive', message: 'Knjiga spremljena!' })
      else alert('Knjiga spremljena!')

      this.nextId += 1
      this.knjiga = { id: this.nextId, naslov: '', autor: '', opis: '', slika: null, status: 'Slobodno' }
      this.$refs.forma.resetValidation()
      if(this.$refs.fileInput) this.$refs.fileInput.reset()

      this.loadKnjige() // 🔹 refresh prikaza kartica
    },
    odustani() {
      this.knjiga.naslov = ''
      this.knjiga.autor = ''
      this.knjiga.opis = ''
      this.knjiga.slika = null
      this.knjiga.status = 'Slobodno'
      this.$refs.forma.resetValidation()
      if(this.$refs.fileInput) this.$refs.fileInput.reset()
    }
  }
}
</script>

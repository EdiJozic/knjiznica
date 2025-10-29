<template>
  <div class="q-pa-md flex flex-center">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6 text-center">Registracija korisnika</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="potvrdiRegistraciju" class="q-gutter-md">
          <q-input v-model="korisnik.ime" label="Ime" outlined required />
          <q-input v-model="korisnik.prezime" label="Prezime" outlined required />
          <q-input v-model="korisnik.korisnicko_ime" label="Korisničko ime" outlined required />
          <q-input v-model="korisnik.email" label="Email" type="email" outlined required />
          <q-input v-model="korisnik.lozinka" label="Lozinka" type="password" outlined required />
          <q-input v-model="korisnik.telefon" label="Telefon" outlined />
          <q-input v-model="korisnik.adresa" label="Adresa" outlined />

          <div class="text-center q-mt-md">
            <q-btn color="primary" label="Potvrdi" type="submit" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const korisnik = ref({
      ime: '',
      prezime: '',
      korisnicko_ime: '',
      email: '',
      lozinka: '',
      telefon: '',
      adresa: ''
    })

    const potvrdiRegistraciju = () => {
      console.log('📦 Podaci poslani:', korisnik.value)
      // ➜ Ovdje pošalji podatke prema backend API-ju (npr. POST /api/korisnik)
      // fetch('http://localhost:3000/api/korisnik', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(korisnik.value)
      // })
    }

    return { korisnik, potvrdiRegistraciju }
  }
}
</script>

<template>
  <div class="q-pa-md flex flex-center">
    <q-card style="width: 350px">
      <q-card-section>
        <div class="text-h6 text-center">Prijava</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="prijava" class="q-gutter-md">
          <q-input
            v-model="login.korisnicko_ime"
            label="Korisničko ime"
            outlined
            required
          />
          <q-input
            v-model="login.lozinka"
            label="Lozinka"
            type="password"
            outlined
            required
          />

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
    const login = ref({
      korisnicko_ime: '',
      lozinka: ''
    })

    const prijava = () => {
      console.log('🔑 Pokušaj prijave:', login.value)
      // ➜ Ovdje ide poziv na backend API za provjeru korisnika
      // fetch('http://localhost:3000/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(login.value)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   if (data.success) alert('Uspješna prijava!')
      //   else alert('Neispravno korisničko ime ili lozinka')
      // })
    }

    return { login, prijava }
  }
}
</script>

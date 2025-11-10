<template>
  <q-page class="q-pa-md">
    <q-table
      title="Popis knjiga"
      :rows="knjige"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-Slika="props">
        <q-td :props="props">
          <img :src="props.row.slika" :alt="props.row.naslov" style="width: 80px; border-radius: 8px;" />
        </q-td>
      </template>

      <template v-slot:body-cell-Status="props">
        <q-td :props="props">
          <q-badge :color="props.row.status === 'Slobodno' ? 'green' : 'red'" align="middle">
            {{ props.row.status }}
          </q-badge>
        </q-td>
      </template>

      <template v-slot:body-cell-akcija="props">
        <q-td :props="props">
          <q-btn color="negative" label="Obriši" size="sm" @click="obrisiKnjigu(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { name: 'id', label: 'ID', field: 'id', align: 'center' },
        { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left', sortable: true },
        { name: 'autor', label: 'Autor', field: 'autor' },
        { name: 'opis', label: 'Opis', field: 'opis' },
        { name: 'slika', label: 'Slika', field: 'slika' },
        { name: 'status', label: 'Status', field: 'status' },
        { name: 'akcija', label: 'Akcija', field: 'akcija' }
      ],
      knjige: []
    }
  },
  mounted() {
    // Pocetne knjige
    const pocetne = [
      { id: 1, naslov: 'To Kill a Mockingbird', autor: 'Harper Lee', opis: 'Roman o nepravdi...', slika: 'https://covers.openlibrary.org/b/id/8228691-L.jpg', status: 'Slobodno' },
      { id: 2, naslov: '1984', autor: 'George Orwell', opis: 'Distopijska priča...', slika: 'https://covers.openlibrary.org/b/id/7222246-L.jpg', status: 'Zauzeto' },
      { id: 3, naslov: 'The Great Gatsby', autor: 'F. Scott Fitzgerald', opis: 'Priča o bogatstvu...', slika: 'https://covers.openlibrary.org/b/id/7222161-L.jpg', status: 'Slobodno' },
      { id: 4, naslov: 'The Catcher in the Rye', autor: 'J.D. Salinger', opis: 'Mladi Holden...', slika: 'https://covers.openlibrary.org/b/id/8231856-L.jpg', status: 'Zauzeto' },
      { id: 5, naslov: 'Pride and Prejudice', autor: 'Jane Austen', opis: 'Klasik o ljubavi...', slika: 'https://covers.openlibrary.org/b/id/8091016-L.jpg', status: 'Slobodno' },
      { id: 6, naslov: 'The Hobbit', autor: 'J.R.R. Tolkien', opis: 'Avantura Bilba...', slika: 'https://covers.openlibrary.org/b/id/8101354-L.jpg', status: 'Zauzeto' }
    ]
    const spremljene = JSON.parse(localStorage.getItem('knjige') || '[]')
    this.knjige = pocetne.concat(spremljene)
  },
  methods: {
    obrisiKnjigu(id) {
      this.knjige = this.knjige.filter(k => k.id !== id)
      const spremljene = this.knjige.filter(k => k.id > 6)
      localStorage.setItem('knjige', JSON.stringify(spremljene))
      this.$q.notify({ type: 'negative', message: 'Knjiga obrisana!' })
    }
  }
}
</script>

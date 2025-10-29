<template>
  <div class="q-pa-md">
    <!-- 🔍 Polje za pretraživanje -->
    <div class="q-gutter-md row items-center q-mb-md">
      <q-input
        v-model="searchTerm"
        label="Pretraži knjige"
        outlined
        dense
        style="width: 250px"
      />
      <q-checkbox v-model="searchByTitle" label="Pretraži po naslovu" />
      <q-checkbox v-model="searchByAuthor" label="Pretraži po autoru" />
      <q-btn color="primary" label="Traži" @click="pretraziKnjige" />
    </div>

    <!-- 📚 Tablica s rezultatima -->
    <q-table
      title="Rezultati pretraživanja"
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      no-data-label="Nema rezultata pretraživanja"
    >
      <!-- 🎨 Prikaz slike u ćeliji -->
      <template v-slot:body-cell-Slika="props">
        <q-td :props="props">
          <img :src="props.row.slika" :alt="props.row.name" width="80" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const searchTerm = ref('')
    const searchByTitle = ref(true)
    const searchByAuthor = ref(false)

    const columns = [
      { name: 'name', label: 'Knjiga', field: 'name', align: 'left', sortable: true },
      { name: 'id', label: 'ID', field: 'id', align: 'center' },
      { name: 'autor', label: 'Autor', field: 'autor' },
      { name: 'opis', label: 'Opis', field: 'opis' },
      { name: 'Slika', label: 'Slika', field: 'slika' },
      { name: 'status', label: 'Status', field: 'status' }
    ]

    const rows = [
      {
        name: 'To Kill a Mockingbird',
        id: 1,
        autor: 'Harper Lee',
        opis: 'Roman o nepravdi, rasizmu i odrastanju u američkom Jugu 1930-ih.',
        slika: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
        status: 'Slobodno',
      },
      {
        name: '1984',
        id: 2,
        autor: 'George Orwell',
        opis: 'Distopijska priča o totalitarnom društvu u kojem je svaka misao nadzirana.',
        slika: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
        status: 'Zauzeto',
      },
      {
        name: 'The Great Gatsby',
        id: 3,
        autor: 'F. Scott Fitzgerald',
        opis: 'Priča o bogatstvu, ljubavi i iluzijama u doba američkih dvadesetih.',
        slika: 'https://covers.openlibrary.org/b/id/7222161-L.jpg',
        status: 'Slobodno',
      },
      {
        name: 'The Catcher in the Rye',
        id: 4,
        autor: 'J.D. Salinger',
        opis: 'Mladi Holden Caulfield luta New Yorkom tražeći smisao i iskrenost.',
        slika: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
        status: 'Zauzeto',
      },
      {
        name: 'Pride and Prejudice',
        id: 5,
        autor: 'Jane Austen',
        opis: 'Klasik o ljubavi, ponosu i predrasudama u Engleskoj 19. stoljeća.',
        slika: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
        status: 'Slobodno',
      },
      {
        name: 'The Hobbit',
        id: 6,
        autor: 'J.R.R. Tolkien',
        opis: 'Avantura Bilba Bagginsa kroz svijet pun zmajeva, patuljaka i čarobnjaka.',
        slika: 'https://covers.openlibrary.org/b/id/8101354-L.jpg',
        status: 'Zauzeto',
      },
    ]

    const filteredRows = ref([...rows])

    const pretraziKnjige = () => {
      const term = searchTerm.value.toLowerCase().trim()

      if (!term) {
        filteredRows.value = [...rows]
        return
      }

      filteredRows.value = rows.filter(knjiga => {
        const byTitle = searchByTitle.value && knjiga.name.toLowerCase().includes(term)
        const byAuthor = searchByAuthor.value && knjiga.autor.toLowerCase().includes(term)
        return byTitle || byAuthor
      })
    }

    return {
      columns,
      rows,
      filteredRows,
      searchTerm,
      searchByTitle,
      searchByAuthor,
      pretraziKnjige
    }
  }
}
</script>

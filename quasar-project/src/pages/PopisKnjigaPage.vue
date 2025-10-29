<template>
  <div class="q-pa-md">
    <q-table
      title="Knjige"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <!-- 🔹 Custom prikaz za stupac "Slika" -->
      <template v-slot:body-cell-Slika="props">
        <q-td :props="props">
          <img
            :src="props.row.slika"
            :alt="props.row.name"
            style="width: 80px; border-radius: 8px;"
          />
        </q-td>
      </template>

      <!-- 🔹 Custom prikaz za stupac "Status" (opcionalno, ako želiš boje) -->
      <template v-slot:body-cell-Status="props">
        <q-td :props="props">
          <q-badge
            :color="props.row.status === 'Slobodno' ? 'green' : 'red'"
            align="middle"
          >
            {{ props.row.status }}
          </q-badge>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
const columns = [
  { name: 'name', label: 'Knjiga', field: 'name', align: 'left', sortable: true },
  { name: 'ID', label: 'ID', field: 'id', align: 'center' },
  { name: 'Autor', label: 'Autor', field: 'autor' },
  { name: 'Opis', label: 'Opis', field: 'opis' },
  { name: 'Slika', label: 'Slika', field: 'slika' },
  { name: 'Status', label: 'Status', field: 'status' }
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
  }
]
</script>

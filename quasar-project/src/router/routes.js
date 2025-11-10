const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'Knjige', component: () => import('pages/NoveKnjigePage.vue') },
      { path: 'popisknjiga', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: 'pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
      { path: 'lokacija', component: () => import('pages/LokacijaPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: 'testpage', component: () => import('pages/TestPage.vue') },
      { path: 'test1page', component: () => import('pages/Test1Page.vue') },
      {path: 'unos-knjiga',component: () => import('pages/UnosKnjiga.vue')}


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes

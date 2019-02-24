<template>
  <div>
    <h1>Success</h1>
    <ul>
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/another">another-route</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<style>
  h1 {
    background: #FAFBBB
  }
</style>

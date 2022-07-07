<template>
  <div id="app">
      <CountN/>
      <PersonList/>
  </div>
</template>

<script>
  import CountN from './components/CountN.vue';
  import PersonList from './components/PersonList.vue';

  export default {
    name: 'App',
    components: {
    CountN,
    PersonList
      }
  }
</script>

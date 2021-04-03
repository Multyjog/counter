<template>
  <div id="app">
    <HelloWorld />
    <Dropdown />
    <Input />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Dropdown from "./components/Dropdown.vue";
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Dropdown,
    Input
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>

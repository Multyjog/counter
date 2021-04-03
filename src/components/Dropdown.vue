<template>
  <div style="margin-top: 5rem">
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
    >
      <template #value="selectedCity">
        <div class="p-dropdown-city-value" v-if="selectedCity.value.name">
          <img :src="'/assets/' + selectedCity.value.name + '.png'" />
          <span>{{ selectedCity.value.name }}</span>
          <strong>{{ selectedCity.value.price }}</strong>
        </div>
        <span v-else>
          {{ selectedCity.value.name }}
        </span>
      </template>
      <template #option="cities">
        <div class="p-dropdown-car-option">
          <img :src="'assets/' + cities.option.name + '.png'" />
          <span>{{ cities.option.name }}</span>
          <strong>{{ cities.option.price }}</strong>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";

export default {
  name: "Forms",
  components: { Dropdown },

  data() {
    return {
      selectedCity: { name: "New York", code: "NY", price: 100 },
      cities: [
        { name: "New York", code: "NY", price: 100 },
        { name: "Rome", code: "RM", price: 230 },
        { name: "London", code: "LDN", price: 200 },
        { name: "Istanbul", code: "IST", price: 150 },
        { name: "Paris", code: "PRS", price: 120 }
      ]
    };
  }
};
</script>

<style scoped>
.p-dropdown {
  width: 300px;
}
img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
</style>

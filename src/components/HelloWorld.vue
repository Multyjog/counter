<template>
  <div class="hello">
    <div v-for="(item, index) in counters" v-bind:key="index">
      <div v-bind:style="{ color: color(item) }">
        {{ item }}
        <div class="buttons" v-if="item !== 20">
          <button v-on:click="sum(item, index)">
            +
          </button>
          <button v-on:click="sum5(item, index)">
            {{ integerToPositiveLimit(item) }}
          </button>
        </div>
        <div class="buttons" v-if="item !== -20">
          <button v-on:click="sub(item, index)">
            -
          </button>
          <button v-on:click="sub5(item, index)">
            {{ integerToNegativeLimit(item) }}
          </button>
        </div>
        <button
          class="buttons"
          v-on:click="reset(index)"
          v-if="initialCounters[index] !== item"
        >
          reset
        </button>
        <button v-on:click="deleteCounter(index)">
          Delete this counter
        </button>
      </div>
    </div>
    <button v-on:click="addCounter">
      Add New Counter
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      counters: [5, 10, 15],
      initialCounters: []
    };
  },
  methods: {
    color(n) {
      if (n >= 1) return "green";
      if (n === 0) return "black";
      else return "red";
    },
    sum(item, index) {
      if (item === 20) return;
      this.counters.splice(index, 1, item + 1);
    },
    sub(item, index) {
      if (item === -20) return;
      this.counters.splice(index, 1, item - 1);
    },
    sum5(item, index) {
      let newItem = item + 5;
      if (newItem > 20) newItem = 20;
      this.counters.splice(index, 1, newItem);
    },
    sub5(item, index) {
      let newItem = item - 5;
      if (newItem < -20) newItem = -20;
      this.counters.splice(index, 1, newItem);
    },
    reset(index) {
      if (confirm("Sure???")) {
        let number = this.initialCounters[index];
        this.counters.splice(index, 1, number);
      }
    },
    addCounter() {
      this.counters.push(0);
      this.initialCounters.push(0);
    },
    deleteCounter(i) {
      if (confirm("Delete?")) {
        this.counters.splice(i, 1);
        this.initialCounters.splice(i, 1);
      }
    },
    integerToPositiveLimit(item) {
      let limit = 20;
      let integerToLim = limit - item;
      if (integerToLim <= 5) return "+" + integerToLim;
      return "+5";
    },
    integerToNegativeLimit(item) {
      let limit = -20;
      let integerToLim = limit - item;
      if (integerToLim >= -5) return integerToLim;
      return "-5";
    }
  },
  mounted() {
    let initialCounters = [...this.counters];
    this.initialCounters = initialCounters;
  },
  computed: {}
};
</script>

<style scoped>
.buttons {
  display: inline;
}
</style>

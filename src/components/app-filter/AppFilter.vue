<template>
  <div class="btn-group">
    <button
        :class="{'btn btn-dark': filter === 'all', 'btn btn-outline-dark': filter !== 'all'}"
        type="button"
        @click="applyFilter('all')"
    >
      All
    </button>
    <button
        :class="{'btn btn-dark': filter === 'income', 'btn btn-outline-dark': filter !== 'income'}"
        type="button"
        @click="applyFilter('income')"
    >
      Incomes
    </button>
    <button
        :class="{'btn btn-dark': filter === 'outcome', 'btn btn-outline-dark': filter !== 'outcome'}"
        type="button"
        @click="applyFilter('outcome')"
    >
      Outcomes
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      filter: 'all'
    };
  },
  methods: {
    applyFilter(filter) {
      this.filter = filter;
      this.navigateToRoute(filter);
    },
    navigateToRoute(filter) {
      const routeName = filter === 'income' ? 'income' : filter === 'outcome' ? 'outcome' : 'home';
      this.$router.push({name: routeName});
    }
  }
};
</script>

<style>
</style>

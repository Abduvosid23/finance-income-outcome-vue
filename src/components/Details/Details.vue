<template>
  <div class="expenses-add-form">
    <h3>Details</h3>
      <h4>Incomes Total: {{incomesSum}}</h4>
      <h4>Outcomes Total: -{{outcomesSum}}</h4>
    <h4>Balance: {{balance}}</h4>
    <h4></h4>
  </div>
</template>
<script>
export default {
  props: {

    incomesSum: {
      type: Number,
      required: true
    },

    outcomesSum: {
      type: Number,
      required: true
    },
    balance:{
      type:Number,
      required:true
    }
  },
}
</script>
<style scoped>
.expenses-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0, 0, 0, 0.15);
}
</style>

<template>
<div class="app-info">

  <p>All Transaction: {{allTransactionCount}}</p>
  <p>Incomes: {{incomesCount}}</p>
  <p>Outcomes: {{outcomesCount}}</p>
</div>
</template>
<script>
import TransactionList from "@/components/transaction-list/transactionList.vue";
export default {
  props:{
    incomesCount:{
      type: Number,
      required: true
    },
    outcomesCount:{
      type: Number,
      required: true
    },
    allTransactionCount:{
      type:Number,
      required:true,
    },
  }
}
</script>
<style>
.app-info{
  padding: 1.5rem;
  border-radius: 4px;
  background-color:#fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>

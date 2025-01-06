<template>
  <h3>Transactions</h3>
  <ul v-for="transaction in filteredTransactions" :key="transaction.id">
      <TransactionListItem :transaction="transaction" />
  </ul>
</template>

<script>
import TransactionListItem from "@/components/transaction-list-item/transactionListItem.vue";
import {computed} from 'vue';
import {useRoute} from 'vue-router';

export default {
  components: {TransactionListItem},

  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const route = useRoute();
                                  //Computed method works like types of
    const filteredTransactions = computed(() => {
      if (route.name === 'income') {
        return props.transactions.filter(transaction => transaction.type === 'income'); //shows income
      } else if (route.name === 'outcome') {
        return props.transactions.filter(transaction => transaction.type === 'outcome'); //shows outcome
      } else {
        return props.transactions;  // Shows all transactions on the home route
      }
    });

    return {
      filteredTransactions,
    };
  },
}
</script>

<style>
</style>

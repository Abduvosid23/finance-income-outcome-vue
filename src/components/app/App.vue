<template>
  <dashboard :updateTermHandler="updateTermHandler"/>

  <div class="content app font-monospace">
    <!-- Getting count of array to show the total -->
    <app-info :allTransactionCount="transactions.length"
              :incomes-count="incomesCount"
              :outcomes-count="outcomesCount"/>

    <div class="search-panel">
      <search-panel :updateTermHandler="updateTermHandler"/>
      <div class="app-filter">
        <appfilter/>

      </div>
    </div>

    <div class="table">

      <!-- Sending data as a prop -->
      <TransactionList :transactions="filteredTransactions" />

    </div>
    <Details :incomesSum="incomesSum" :outcomesSum="outcomesSum" :balance="balance"/>


    <add-form @createTransaction="createTransaction"/>

  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard/Dashboard.vue";
import Appfilter from "@/components/app-filter/AppFilter.vue";
import AppInfo from "@/components/app-info/App-info.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import Details from "@/components/Details/Details.vue";
import AddForm from "@/components/add-form/AddForm.vue";
import TransactionList from "@/components/transaction-list/transactionList.vue";
import HomeViews from "@/views/HomeViews.vue";
import IncomeView from "@/views/IncomeView.vue";
import OutcomeView from "@/views/OutcomeView.vue";
import {RouterView} from "vue-router";


export default {
  components: {
    Dashboard, Appfilter, AppInfo, SearchPanel, Details, AddForm, TransactionList, HomeViews, IncomeView, OutcomeView
  },
  data() {
    return {
      transactions: [
        {id: 1, type: 'outcome', amount: 220, description: 'Grocery'},
        {id: 2, type: 'income', amount: 2200, description: 'Salary'},
        {id: 3, type: 'outcome', amount: 200, description: 'Renting'},
        {id: 4, type: 'income', amount: 500, description: 'Freelance'},
        {id: 5, type: 'outcome', amount: 200, description: 'office exp'},
        {id: 6, type: 'income', amount: 2800, description: 'Salary'},
        {id: 7, type: 'outcome', amount: 800, description: 'car retail'},
        {id: 8, type: 'outcome', amount: 500, description: 'watering'},
        {id: 9, type: 'outcome', amount: 300, description: 'garden'},
        {id: 10, type: 'income', amount: 500, description: 'freelance'},
        {id: 11, type: 'outcome', amount: 200, description: 'housekeeping'},
      ],
      term: "",
      filter: "all"
    }
  },
  computed: {

    //counting transactions to displey
    incomesCount() {
      return this.transactions.filter(t => t.type === 'income').length;
    },
    outcomesCount() {
      return this.transactions.filter(t => t.type === 'outcome').length;
    },

    //Calculating incomes and outcomes
    incomesSum() {
      return this.transactions
          .filter(t => t.type === 'income')
          .reduce((sum, transaction) => sum + transaction.amount, 0);
    },
    outcomesSum() {
      return this.transactions
          .filter(t => t.type === 'outcome')
          .reduce((sum, transaction) => sum + transaction.amount, 0);
    },
    //Calculate the balance after divorcing outcome
    balance() {
      return parseInt(this.incomesSum) - parseInt(this.outcomesSum);
    },

    //makes all to lowerCases then equals to array then sends to display
      filteredTransactions() {
      if (this.term === "") {
        return this.transactions;
      }
      const termLower = this.term.toLowerCase();
      return this.transactions.filter(t => 
        t.description.toLowerCase().includes(termLower) ||
        t.type.toLowerCase().includes(termLower)
      );
    },

  },

  methods: {
    createTransaction(item) {
      item.id = this.transactions.length + 1; //Giving and ID adding + to count of transaction
      this.transactions.push(item);           //pushes item to transaction
    },
  //gets term from search panel and equals to term and sends to filteredTransactions()
    updateTermHandler(term) {
      this.term = term;
    },
    
  }
}
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 2rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgb(0, 0, 0, 0.15);
}
</style>

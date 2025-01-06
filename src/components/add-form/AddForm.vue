<template>
 <div class="expenses-add-form">
   <h3>Transactions</h3>
   <form class="add-form d-flex" @submit.prevent>

     <input type="text" class="form-control"
     placeholder="Transaction type"
      :value="type" @input="type=$event.target.value"
     />
     <input type="number" class="form-control"
            placeholder="Amount"
            :value="amount" @input="amount = $event.target.value"
     />

     <input type="text" class="form-control"
            placeholder="Description"
            :value="description" @input="description = $event.target.value"
     />

     <button class="btn btn-outline-dark"  type="submit" @click="addTransaction" > Submit</button>
   </form>
 </div>
</template>
<script>
export default {
  data() {
    return {
      //creating empty fields for users input
      type: '',
      amount: 0,
      description: '',
    }
  },
  methods:{

    //Getting data after submitting
    addTransaction(){
      const newTransaction = {
        type: this.type,
        amount: parseInt(this.amount),  //changing type of amount to int
        description: this.description,
      }
      //sending data to parent array
      this.$emit('createTransaction', newTransaction)

      //clearing fields after submitting
      this.type = ""
      this.amount = 0
      this.description = ""

    }
  }
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

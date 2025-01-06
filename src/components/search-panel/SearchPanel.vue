<template>
  <h1>
  <input
      type="text"
         class="form-control search-input"
         placeholder="Search"
         :value="term"
         @input="changeHandler"
  />
  </h1>
</template>
<script>
export default {
  //getting function from parent
  props: {
    updateTermHandler:{
      type: Function,
      required: true
    },
  },
  data(){
    return{
      term: '',
    }
  },
  methods: {
    changeHandler(e) {
      //Get term equal to event target value
      this.term = e.target.value
      this.updateTermHandler(this.term);
    },
  },
}
</script>
<style scoped>
.search-panel{
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #efeaba;
  border-radius:4px;
  box-shadow: 15px 15px 15px rgb(0, 0, 0.15);
}
</style>

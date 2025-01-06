<template>
<!--  <h1 class="font-monospace">Dashboard</h1>-->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Finance App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">

                    <!--          Searching Element-->
          <input
              type="text"
              class="form-control search-input"
              placeholder="Search"
              :value="term"
              @input="changeHandler"
          />
        </form>
      </div>
    </div>
  </nav>
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

</style>

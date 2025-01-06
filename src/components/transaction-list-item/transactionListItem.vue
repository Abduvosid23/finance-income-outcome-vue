<template>
  <div>
    <table class="table">
      <tbody>
      <tr>
<!--        displaying each of the element that comes from prop-->
        <td>{{transaction.id}}</td>
        <td>{{transaction.type}}</td>
        <td>{{transaction.amount}}</td>
        <td>{{transaction.description}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default {
  props:{
    transaction:{
      type: Object,
      required: true,
    }
  }
}
</script>
<style>
</style>

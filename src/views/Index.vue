<template>
  <div>
    <comp1/>
    <comp2/>
  </div>
</template>

<script>
import comp1 from "@/components/comp1.vue";
import comp2 from "@/components/comp2.vue";
export default {
  name: "Home",
  components: {
    comp1,comp2
  },
}
</script>

<style>

</style>

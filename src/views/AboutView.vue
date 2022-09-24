<template>
  <div class="about">
    <h1 v-if="bool"> This is an about page {{name}}</h1>
    <h1 v-else>ไม่ถูก</h1>
    <h4 v-for="i in list">
      {{ i }}
    </h4>
    <input type="text" v-model="name"> </input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Kabigon",
      list: ["A", "B", "C", "D"],
      bool: true
    };
  },
};
</script>

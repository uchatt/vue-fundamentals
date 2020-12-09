<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="serial">SL</th>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td>{{ index }}</td>
          <td class="robot-title">
            <div>{{ robot.head.title }}</div>
            <div :data-index="index" @click="removeFromCart" class="remove">Remove</div>
          </td>
          <td class="cost">
            {{ robot.cost.toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>

    <h1 style="color: red;">You saved money on these Items</h1>
    <table>
      <thead>
        <tr>
          <th class="serial">SL</th>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td>{{ index }}</td>
          <td class="robot-title">
            <div>{{ robot.head.title }}</div>
            <div :data-index="index" @click="removeFromCart" class="remove">Remove</div>
          </td>
          <td class="cost">
            {{ robot.cost.toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    // Get cart array from vuex store
    cart() {
      return this.$store.state.cart;
    },
    cartSaleItems() {
      return this.$store.getters.cartSaleItems;
    },
  },
  methods: {
    removeFromCart(e) {
      this.$store.commit('removeRobotFromCart', e.target.getAttribute('data-index'));
    },
  },
};
</script>

<style scoped>
thead {
  padding: 1.2rem;
  background-color: #bbb;
  color: #333;
}

tbody tr {
  border-bottom: 1px solid gray;
}

td,
th {
  padding: 5px;
}

tbody tr {
  font-size: 0.9rem;
  letter-spacing: 0.03rem;
}

.robot-title {
  text-align: left;
  padding-right: 200px;
}

.serial {
    text-align: left;
    justify-content: center;
}

.cost {
  text-align: right;
}

.remove {
  color: rgb(170, 9, 9);
  padding: 0.2rem 0;
  font-size: 0.6rem;
  letter-spacing: .06rem;
  text-align: left;
  text-decoration: underline;
  cursor: pointer;
  text-transform: uppercase;
}
</style>

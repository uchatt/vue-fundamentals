<template>
  <div class="content">
    <div class="preview">
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src" alt="" />
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left" alt="" />
          <img :src="selectedRobot.torso.src" alt="" />
          <img :src="selectedRobot.rightArm.src" class="rotate-right" alt="" />
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src" alt="" />
        </div>
      </div>
    </div>
    <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @partSelected="part => (selectedRobot.head = part)"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => (selectedRobot.leftArm = part)"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => (selectedRobot.torso = part)"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => (selectedRobot.rightArm = part)"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => (selectedRobot.base = part)"
      />
    </div>
  </div>
</template>

<script>
import availableParts from '../data/parts';
import PartSelector from './PartSelector.vue';

export default {
  name: 'RobotBuilder',
  beforeRouteLeave(to, from, next) {
    if (this.addedToCard) {
      next(true);
    } else {
      /* eslint no-alert: 0 */
      /* eslint no-restricted-globals: 0 */
      const response = confirm(
        'You have not added your robot to the card, are you sure you want to leave?',
      );
      next(response);
    }
  },
  components: { PartSelector },
  data() {
    return {
      availableParts,
      cart: [],
      addedToCard: false,
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.rightArm.cost
        + robot.base.cost;
      // Shorthand for Object.assign({}, robot, { cost })
      this.$store.commit('addRobotToCart', { ...robot, cost });
      // this.cart.push({ ...robot, cost });
      this.addedToCard = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  right: 0;
  width: 220px;
  top: 145px;
  font-weight: bold;
  text-transform: uppercase;
  background: #ffff40b0;
  padding: 5px;
  border: 1px solid rgb(37, 132, 255);
  cursor: pointer;
}

td,
th {
  text-align: left;
  padding: 5px 20px 5px 5px;
}

.cost {
  text-align: right;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 50px;
  height: 50px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}
</style>

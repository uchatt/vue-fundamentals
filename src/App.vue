<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <a href="/">
              <img src="./assets/build-a-bot-logo.png" class="logo" alt="" />
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" exact>
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Build' }" exact> Build </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'BrowseParts' }" exact>
              Browse Parts
            </router-link>
          </li>
          <li class="nav-item cart relative">
            <div class="absolute" :class="{ cartActive: cartEmpty }">{{ cartLength }}</div>
            <router-link :to="{ name: 'Cart' }" exact>
              <svg
                class="cart-icon"
                :class="{ cartActive: cartEmpty }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707
                   1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <!-- Multiple Router Views -->
      <aside class="router">
        <router-view name="sidebar" />
      </aside>
      <main>
        <!-- By default name will be "default" -->
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartLength() {
      return this.$store.state.cart.length;
    },
    cartEmpty() {
      return this.$store.state.cart.length > 0;
    },
  },
};
</script>

<style>
/* applied globally */
body {
  background: linear-gradient(to bottom, #555, #999) fixed;
}

a {
  text-decoration: none;
  color: #333333;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
  align-items: center;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 1rem;
  border-right: 1px solid #bbb;
}

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

a {
  padding: 0 0.8rem;
}

.router-link-active {
  color: white;
  background-color: #666666;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 30px;
}

.cart-icon {
  height: 1.8rem;
  width: 1.8rem;
}

.cartActive {
  color: #d6411b;
}

.nav-item.cart a {
  background-color: transparent;
}

.nav-item.cart .absolute {
  border-radius: 50%;
  top: 0;
  left: -20px;
  padding: 0.5rem;
  font-size: 1.3rem;
  margin-right: 1rem;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}
</style>

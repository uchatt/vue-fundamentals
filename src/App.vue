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
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="router">
        <router-view name="sidebar"/>
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

</style>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <a href="/">
              <img src="./assets/build-a-bot-logo.png" class="logo" alt=""/>
            </a>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" exact>
              Build-a-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!--      <RobotBuilder />-->
      <router-view/>
    </main>
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
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
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
  padding: 0 .8rem;
}

.router-link-active {
  color: white;
  background-color: #666666;
  padding: .2rem .8rem;
  border-radius: 1rem;
}
</style>

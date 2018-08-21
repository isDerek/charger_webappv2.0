<template>
  <div class="tabbar">
    <router-link class="tabbar__item" :to="{path: '/home'}" replace>
      <span class="tabbar__icon icon-charger-search "></span><br>
      <span class="tabbar__label">首页</span>
    </router-link>
    <router-link class="tabbar__item" :to="{path: '/charging'}" replace>
      <span class="tabbar__icon icon-ev_station"></span><br>
      <span class="tabbar__label">设备</span>
    </router-link>
    <router-link class="tabbar__item" :to="{path: '/user'}" replace>
      <span class="tabbar__icon icon-user"></span><br>
      <span class="tabbar__label">用户</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FooterNav'
  }
</script>

<style lang="scss" scoped>
  $weuiTextColorGray: gray;

  .tabbar {
    display: flex;
    width: 100%;
    background-color: #F7F7FA;
    &__icon {
      display: inline-block;
      line-height: 12px;
    }
    &__label {
      text-align: center;
      font-size: 12px;
      line-height: 12px;
    }

    &__item {
      text-decoration: none;
      line-height: 25px;
      flex: 1;
      color: $weuiTextColorGray;
      vertical-align: center;
      text-align: center;
      user-select: none;
    }
  }
  .router-link-exact-active{
    color: orange;
  }
  .bar__item_on{
    color: orange;
  }
</style>

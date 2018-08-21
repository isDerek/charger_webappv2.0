<template>
  <div >
      <span class="icon-charging-scan"></span>
      <span class=" icon-user-recharge"></span>
      <span class=" icon-charger-status-idle"></span>
      <span class=" icon-charging-bluetooth"></span>
      <button @click="inputChargingNumber" class="btn btn_primary">输入编号</button>
      <button @click="getChargerStatus"  class="btn btn_primary">充电状态</button>
  </div>
</template>

<script>
  export default {
    name: 'charging',
    methods:{
      inputChargingNumber(){
        this.$router.push({path: '/charging/input_identfiy'})
      },
      getChargerStatus(){
        this.$router.push({path: '/charging/charging_status'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>

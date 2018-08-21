<template>
    <div class="content">
        <div class="head__content">
            <div class="head__content_name">
                <span class="icon-user-info-name "></span>
                <span class="icon-user-info-name_text">Derek</span>
            </div>
            <div class="head__content_info">
                <div class="user-content-info-age">
                    <span class="icon-user-info-name "></span>
                    <span class="icon-user-info-name_age">24</span>
                </div>
                <div class="user-content-info-phone">
                    <span class="icon-user-info-phone"></span>
                    <span class="icon-user-info-phone_text">13637676546</span>  
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="balance">
                <div class="balance_info">
                    <span>余额</span>
                    <span>0.00元</span>
                </div>
            </div>
            <div class="consume">
                <div class="consume-info">
                    <span>消费</span>
                    <span>0.00元</span>
                </div>
            </div>   
        </div>
        <div class="body-content">
            <div class="user-server-title">用户服务</div>
            <div class="user-server">
                <div class="user-server-first">
                    <div class="user-consume">
                        <div class="user-consume-image">
                            <span class="icon-withdraw-cash menu__item_i_icon"></span>
                        </div>
                        <div class="user-consume-text">
                            <span class="icon-withdraw-cash_text">用户充值</span>  
                        </div>      
                    </div>
                    <div class="user-info">
                        <div class="user-info-image">
                            <span class="icon-user-account"></span>
                        </div>
                        <div class="user-info-text">
                            <span class="icon-user-account_text">账号设置</span>
                        </div>
                    </div>                
                </div>
                <div class="user-server-second">
                    <div class="charge-status">
                        <div class="charge-status-image">
                            <span class="icon-charger-status-charging"></span>
                        </div>
                        <div class="charge-status-text">
                            <span class="icon-charger-status-charging-text">充电状态</span>
                        </div>
                    </div>
                    <div class="user-help">
                        <div class="user-help-image">
                            <span class="icon-user-help "></span>
                        </div>
                        <div class="user-help-text">
                            <span class="icon-user-help-text ">用户帮助</span>
                        </div>
                    </div>
                </div>
                <div class="user-server-third">
                    <div class="user-advice">
                        <div class="user-advice-image">
                            <span class="icon-user-advice"></span> 
                        </div>
                        <div class="user-advice-text">
                            <span class="icon-user-advice-text">用户建议</span> 
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <div class="footer"> </div>
    </div>
</template>

<script>
    export default{
        name: 'user'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
        .head__content
            background-color pink
            height 20%
            flex-direction row
            .head__content_name
                height 50%
                display flex
                align-items center
                .icon-user-info-name
                    padding-left 10px
                    font-size 50px
                    color white
                .icon-user-info-name_text
                    padding-left 20px
                    font-size 30px
                    color white
            .head__content_info
                width 100%
                height 50%
                display flex
                align-items center
                .user-content-info-age
                    width 50%
                    height 100%
                    .icon-user-info-name
                        padding-left 10px
                        display flex
                        align-items center
                        float left
                        font-size 50px
                        width 25%
                        height 100%
                        color white
                    .icon-user-info-name_age
                        padding-left 20px
                        float left
                        display flex
                        font-size 20px
                        align-items center
                        height 100%
                        width 50%
                        color white
                .user-content-info-phone
                    width 50%
                    height 100%
                    .icon-user-info-phone
                        display flex
                        float left
                        align-items center
                        font-size  50px
                        width 25%
                        height 100%
                        color white
                    .icon-user-info-phone_text
                        float left
                        display flex
                        align-items center
                        width 60%
                        font-size 20px
                        padding-left 10px
                        height 100%
                        color white
        .price-info
            width 100%
            display flex
            height 10%
            align-items center
            flex-direction row
            .balance
                display flex
                align-items center
                width 50%
                height 100%
                border-right  2px solid
                border-color pink
                font-size 20px  
                .balance_info
                    position relative
                    left 25%
            .consume
                display flex
                align-items center
                width 50%
                font-size 20px
                border-color pink
                height 100%
                .consume-info
                    position relative
                    left 25%
        .body-content
            width 100%
            height 60%
            .user-server-title
                width 100%
                height 10%
                display flex
                flex-direction row
                align-items center
                font-size 20px
                color white
                padding-left 5px
                background-color pink
            .user-server
                font-size 50px
                width 100%
                height 90%
                .user-server-first
                    width 100%
                    height 33%
                    float left
                    border-bottom 2px solid pink
                    .user-consume
                        float left
                        height 100%
                        width 49%
                        border-right 2px solid pink
                        .user-consume-image
                            width 100%
                            float left
                        .user-consume-text
                            font-size 10px
                    .user-info
                        float left
                        height 100%
                        width 50%
                        .user-info-image
                            width 100%
                            float left              
                        .user-info-text
                            font-size 10px
                .user-server-second
                    float left
                    width 100%
                    height 33%  
                    border-bottom 2px solid pink                  
                    .charge-status
                        float left
                        width 49%
                        height 100%
                        border-right 2px solid pink 
                        .charge-status-image
                            width 100%
                            float left                  
                        .charge-status-text
                            font-size 10px
                    .user-help
                        float left
                        height 30%
                        width 50%
                        .user-help-image
                            width 100%
                            float left
                        .user-help-text
                            font-size 10px
                .user-server-third
                    float left
                    width 100%
                    height 34% 
                    border-bottom 2px solid pink 
                    .user-advice
                        float left
                        height 100%
                        width 49%
                        border-right 2px solid pink 
                        .user-advice-image
                            width 100%
                            float left
                        .user-advice-text
                            font-size 10px
        .footer
            display block
            width 100%
            height 10%
            background-color pink
            
                        

</style>
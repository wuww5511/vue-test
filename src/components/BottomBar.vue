<template>
    <div class="bottom-bar">
        <div :key="item.value" v-for="item in tabs" :class="{'bar-item': true, active: item.value === tab}">{{item.label}}</div>
    </div>
</template>
<script>
export default {
    props: ['tab'],
    data () {
        return {
            tabs: [
                {
                    label: '首页',
                    value: 'index'
                },
                {
                    label: '发现',
                    value: 'discover'
                },
                {
                    label: '我的',
                    value: 'me'
                }
            ]
        }
    }
}
</script>
<style scoped>
.bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #d7d7d7;
    display: flex;
    height: 140px;
}
.bar-item{
    flex: 1;
    text-align: center;
    color: #888;
    line-height: 140px;
}
.bar-item.active{
    color: #31d9c5;
}
</style>



<template>
    <div class="top-bar">
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
                label: '活动',
                value: 'activity'
            },
            {
                label: '即刻',
                value: 't2'
            },
            {
                label: '沙发',
                value: 't3'
            },
            {
                label: '日常',
                value: 't4'
            }
        ]
        }
    }
}
</script>
<style scoped>
.top-bar{
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    height: 110px;
}
.bar-item{
    flex: 1;
    text-align: center;
    color: #888;
    line-height: 110px;
}
.bar-item.active{
    color: #353535;
}
</style>



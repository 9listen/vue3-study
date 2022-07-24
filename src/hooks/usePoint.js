import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
    // 实现鼠标打点的数据
    let point = reactive({
        x: 0,
        y: 0,
    })
    // 封装一个鼠标打点方法
    function savePoint (event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY);
    }
    // 实现鼠标打点相关的钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })
    return point
    //不用一直给window绑定点击事件，只有Demo组件在用，当Demo组件没用的时候就卸载onUnBeforeUnmount
}
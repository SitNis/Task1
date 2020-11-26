Vue.component('messages', {
    template: '\
        <li> {{ title }} </li>\ ',
    props: ['title']
})

new Vue({
    el: '#containerId',
    data:{
        newMessage:'',
        messagesList:[],
        nextTodoId: 1
    },
    methods:{
        addButton:function(){
            if (this.newMessage != "") {
                this.messagesList.push({
                    id:this.nextTodoId++,
                    text:this.newMessage
                })
            }
            this.newMessage = ""
        },
        removeLastMessage:function(){
           if (document.getElementById("container__currentMessage-Id").children.length > 1){
               document.getElementById("container__currentMessage-Id").lastChild.remove()
           }
        }
    }
})
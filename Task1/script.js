Vue.component('messages', {
    template: '\
        <li  > {{ title }} </li>\ ',
    props: ['title'],
    

    
})

new Vue({
    el: '#containerId',
    data:{
        newMessage:'',
        messagesList:[],
        nextMessageId: 0
    },
    methods:{
        addButton:function(){
            if (this.newMessage != "") {
                this.messagesList.push({
                    id:this.nextMessageId++,
                    text:this.newMessage
                })
            }
            this.newMessage = ""
        },
        removeLastMessage:function(){
        //    if (document.getElementById("container__currentMessage-Id").children.length > 1){
        //        let i = document.getElementById("container__currentMessage-Id").lastChild.id
        //        document.getElementById("container__currentMessage-Id").lastChild.remove()
        //        console.log(document.getElementById("container__allMessages-Id").children[0].children[i].insertAdjacentHTML("afterbegin","<button>x</button>"))
        //    }
        }
    },
    mounted:{
        
    }
})
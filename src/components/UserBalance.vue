<template>
    <div id="UserBalance">
        <h2>{{username}}</h2>
        <h2>Usuarios conectados: <span> {{balance}}  </span> </h2>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "",
            balance: 0
        }
    },
    created: function(){
        this.username = this.$route.params.username
        let self = this
        axios.get("https://despensapp-api.herokuapp.com/user/balance/" + this.username)
            .then((result) => {
                self.balance = result.data.balance
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
    }
}
</script>
<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }
    #UserBalance span{
        color: rgb(220, 100, 20);
        font-weight: bold;
    }
</style>
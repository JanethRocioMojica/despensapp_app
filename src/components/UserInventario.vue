<template>
<div class="cont_inventario">
    <h1> Inventario </h1>
      <div class="cont_consulta">
        <select class="caja" name="inventario" id="li_inventario">
          <option value="Papa">Papa</option>
          <option value="Cebolla">Cebolla</option>
          <option value="Arroz">Arroz</option>
        </select>
        <button type="submit" v-on:click="consultarinventario" >Consultar</button>
      </div>
      <div class="cont_actualizar">
        <input class="caja" type="number" name="Cambio de precio" id="inp_cambio" value=0>
        <button type="submit" v-on:click="actualizarprecio">Cambiar precio</button>
      </div>
</div>
</template>
<script>
  import axios from 'axios';
    export default {
        name: 'App',
        components: {},

      data: {
        
      },

      methods: {
        consultarinventario: function(){
        axios.get("https://despensapp-b.herokuapp.com/inventario/"+li_inventario.value)
          .then((result) => {
          var datos = JSON.stringify(result.data)
          alert(datos+"\n Si aun no se ven los cambios consulte en unos segundos nuevamente")
          })
          .catch((error) => {
            console.log("Error en servidor")
          })
      },
      actualizarprecio: function(){
        var update = {
          producto : li_inventario.value,
          precio : inp_cambio.value
        }
        axios.put("https://despensapp-b.herokuapp.com/inventario/actualizar_precio", update,{headers: {}})
        .then((result) => {
          alert("Valor cambiado correctamente")
        })
        .catch((error) => {
            console.log("Error en servidor")
          })
      }
    }
  }

</script>
<style>
  
  .cont_inventario{
    font-family: "Lucida Console", "Courier New", monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
.cont_inventario button{
 font-family: "Courier New", "Courier New", monospace;
color: #E5E7E9;
background: #283747;
border: 1px solid #E5E7E9;
border-radius: 5px;
padding: 10px 20px;
}
.cont_inventario button:hover{
color: #283747;
background: #E5E7E9;
border: 1px solid #E5E7E9;
}
.caja{
    width:200px;
    height: 30px;
}
.cont_consulta {
margin-bottom: 20px;
} 
</style>

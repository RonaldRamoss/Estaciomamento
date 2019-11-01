$(document).on("click","#enviar",function(){

var parametros ={
"nome":$("nome").val(),
"modelo":$("modelo").val(),
"marca":$("marca").val(),
"tipo":$("tipo").val(),
"placa":$("placa").val(),
"entrada":$("entrada").val()
};

$.ajax({
type: "post",
url: "https://ronestacionamento.000webhostapp.com/cadastra.php",
data: parametros,
success: function(data){
  navigator.notification.alert(data);
  $("nome").val("");
  $("modelo").val("");
  $("marca").val("");
  $("tipo").val("");
  $("placa").val("");
  $("entrada").val("")
},
error: function(data){
  navigator.notification.alert("Erro ao cadastrar");
}



})
});


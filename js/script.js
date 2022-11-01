
//---------------------------------------------Diseño de Type File--------------------------------------------->

function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });
  
  
  
  //---------------------------------------------Mayusculas--------------------------------------------->
  
    function mayus(e) {
    e.value = e.value.toUpperCase();
    }
  
  
  
  //---------------------------------------------Solo Letras--------------------------------------------->
  
    function soloLetras(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toString();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
        especiales = [8, 39, 110]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    
        tecla_especial = false
        for(var i in especiales) {
            if(key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
    
        if(letras.indexOf(tecla) == -1 && !tecla_especial){
            return false;}}
  
  
  
  //--------------------------------------------------------Validar Lista---------------------------------------------->
  
  function valselect(){ 
  
  m1 = document.getElementById("Nacionalidad").value;
  r = m1;
  document.getElementById("camposelect").value = r;
  } 
  
  
  
  function valselect2(){ 
  
  m1 = document.getElementById("Estado_Civil").value;
  r = m1;
  document.getElementById("camposelect2").value = r;
  } 
  
  
  
  function valselect3(){ 
  
  m1 = document.getElementById("Genero").value;
  r = m1;
  document.getElementById("camposelect3").value = r;
  } 
  
  
  function valselect4(){ 
  
  m1 = document.getElementById("Unidad_Ejecutora").value;
  r = m1;
  document.getElementById("camposelect4").value = r;
  } 
  
  
  
  function valselect5(){ 
  
  m1 = document.getElementById("uploadfile").value;
  r = m1;
  document.getElementById("camposelect5").value = r;
  } 
  
  function valselect6(){ 
  
    m1 = document.getElementById("Fecha_Afiliación").value;
    r = m1;
    document.getElementById("camposelect6").value = r;
    } 
    
  function valselect7(){ 
  
  m1 = document.getElementById("Renglon").value;
  r = m1;
  document.getElementById("camposelect7").value = r;
  } 
  
  function valselect8(){ 
  
  m1 = document.getElementById("opt").value;
  r = m1;
  document.getElementById("camposelect8").value = r;
  } 
    

  
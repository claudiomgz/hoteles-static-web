$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  $(".carousel").carousel({
    interval: 2500,
  });

  $('#enviarcorreo').on('show.bs.modal', function(){
    console.log('el modal de contacto se está mostrando');
    $('#contactoBtn').removeClass('btn-info');
    $('#contactoBtn').addClass('btn-primary');
    $('#contactoBtn').prop('disabled', true);
  });
  $('#enviarcorreo').on('shown.bs.modal', function(){
    console.log('el modal de contacto se mostró');
  });
  $('#enviarcorreo').on('hide.bs.modal', function(){
    console.log('el modal de contacto se está ocultando');
  });
  $('#enviarcorreo').on('hidden.bs.modal', function(){
    console.log('el modal de contacto se ocultó');
    $('#contactoBtn').removeClass('btn-primary');
    $('#contactoBtn').addClass('btn-info');
    $('#contactoBtn').prop('disabled', false);
  });
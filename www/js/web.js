var app={
  inicio: function(){
    console.log('inicio...');
    this.iniciaFastClick();
  },

  iniciaFastClick: function () {
    FastClick.attach(document.body);
    console.log('...FastClick iniciado');
  }
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}

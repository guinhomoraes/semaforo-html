
$(document).ready(function () {
    
    let estadoSemaforo = 0;

    setInterval(() => 
    {
        estadoSemaforo++;

        if(estadoSemaforo == 3)
        {
            estadoSemaforo = 0;   
        }

        $('.circulo').addClass('inativo').removeClass('ativo');

        switch(estadoSemaforo)
        {
            
            case 0:
                $('.vermelho').addClass('ativo').removeClass('inativo');
                break;
            case 1:
                $('.amarelo').addClass('ativo').removeClass('inativo');
                break;
            case 2:
                $('.verde').addClass('ativo').removeClass('inativo');
                break;
            default:
                $('.vermelho').addClass('ativo').removeClass('inativo');
                break;
        }


    }, 2000)

});
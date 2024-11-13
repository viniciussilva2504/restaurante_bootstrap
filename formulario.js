$(document).ready(function () {
    $('#telefone').mask('(+351) 000 000 000', {
        placeholder: '(+351) 000 000 000'
    });

    $('#nome').on('input', function () {
        let valor = $(this).val();
        let regexNome = /^[A-Za-zÀ-ÿ\s]+$/; 
        if (valor.length > 80) {
            $(this).get(0).setCustomValidity('O nome não pode ter mais de 80 caracteres.');
        } else if (valor.length <= 50 || !regexNome.test(valor)) {
            $(this).get(0).setCustomValidity('Nome deve conter apenas letras e até 80 caracteres.');
        } else {
            $(this).get(0).setCustomValidity(''); 
        }
    });

    $('#email').on('input', function () {
        let valor = $(this).val();
        if (valor.length > 100) {
            $(this).get(0).setCustomValidity('O email não pode ter mais de 100 caracteres.');
        } else if (!/^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(valor)) {
            $(this).get(0).setCustomValidity('Por favor, insira um email válido.');
        } else {
            $(this).get(0).setCustomValidity('');
        }
    });

    $('#mensagem').on('input', function () {
        let valor = $(this).val();
        if (valor.length > 200) {
            $(this).get(0).setCustomValidity('A mensagem não pode ter mais de 200 caracteres.');
        } else {
            $(this).get(0).setCustomValidity('');
        }
    });

    $('#formulario').on('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            alert('Por favor, corrija os erros no formulário.');
        }
    });
});

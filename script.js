function CalcularaHexaPara(){
    exibir.innerHTML = " ";
    var valorHexadecimal = valorDoHexa.value;
    var tipoDoValorBase = escolha_tipo_hexa_para.value;
    var hexaconverter = parseInt(valorHexadecimal, 16);

    var decimal = hexaconverter.toString(10);
    var binario = hexaconverter.toString(2);
    var octal = hexaconverter.toString(8);

    if (tipoDoValorBase == "hexadecimal_para_decimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${decimal}`;
    } else if (tipoDoValorBase == "hexadecimal_para_binario") {
        exibir.innerHTML = `O valor convertido foi: <br>${binario}`;
    } else if (tipoDoValorBase == "hexadecimal_para_octal") {
        exibir.innerHTML = `O valor convertido foi: <br>${octal}`;
    } else {
        exibir.innerHTML = `Valores incompatíveis, favor selecionar algo e digitar um valor em Hexadecimal.`;
    }
}

function CalcularDecimalPara() {
    exibir.innerHTML = " ";
    var valorDecimal = Number(valorDoDecimal.value);
    var tipoDoValorBase = escolha_tipo_decimal_para.value;

    var hexadecimal = valorDecimal.toString(16);
    var binario = valorDecimal.toString(2);
    var octal = valorDecimal.toString(8);

    if (tipoDoValorBase == "decimal_para_binario") {
        exibir.innerHTML = `O valor convertido foi: <br>${binario}`;
    } else if (tipoDoValorBase == "decimal_para_octal") {
        exibir.innerHTML = `O valor convertido foi: <br>${octal}`;
    } else if (tipoDoValorBase == "decimal_para_hexadecimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${hexadecimal}`;
    } else {
        exibir.innerHTML = `Valores incompatíveis, favor selecionar algo e digitar um valor decimal.`;
    }
}

function CalcularOctalPara() {
    exibir.innerHTML = " ";
    var valorOctal = valorDoOctal.value;
    var tipoDoValorBase = escolha_tipo_octal_para.value;
    var octalconverter = parseInt(valorOctal, 8);

    var hexadecimal = octalconverter.toString(16);
    var decimal = octalconverter.toString(10);
    var binario = octalconverter.toString(2);

    if (tipoDoValorBase == "octal_para_decimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${decimal}`;
    } else if (tipoDoValorBase == "octal_para_binario") {
        exibir.innerHTML = `O valor convertido foi: <br>${binario}`;
    } else if (tipoDoValorBase == "octal_para_hexadecimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${hexadecimal}`;
    } else {
        exibir.innerHTML = `Valores incompatíveis, favor selecionar algo e digitar um valor octal.`;
    }
}

function CalcularBinarioPara() {
    exibir.innerHTML = " ";
    var valorBinario = valorDoBinario.value;
    var tipoDoValorBase = escolha_tipo_binario_para.value;
    var binarioconverter = parseInt(valorBinario, 2);

    var hexadecimal = binarioconverter.toString(16);
    var decimal = binarioconverter.toString(10);
    var octal = binarioconverter.toString(8);

    if (tipoDoValorBase == "binario_para_decimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${decimal}`;
    } else if (tipoDoValorBase == "binario_para_octal") {
        exibir.innerHTML = `O valor convertido foi: <br>${octal}`;
    } else if (tipoDoValorBase == "binario_para_hexadecimal") {
        exibir.innerHTML = `O valor convertido foi: <br>${hexadecimal}`;
    } else {
        exibir.innerHTML = `Valores incompatíveis, favor selecionar algo e digitar um valor binário.`;
    }
}



// CODIGOS EXTERNOS

// PRELOADER

window.addEventListener('load', () => {
    const minDelay = 1000; 
    
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    
    const startTime = Date.now();
    
    
    function hidePreloader() {
        const elapsedTime = Date.now() - startTime;
        const delay = Math.max(minDelay - elapsedTime, 0); 
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            content.style.display = 'block';
        }, delay);
    }
    
    hidePreloader();
});


// NAVBAR

window.onload = function () {
    const currentPage = window.location.pathname;

    const navLinks = document.querySelectorAll('.navbar li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');


        if ((currentPage === '/index.html' || currentPage === '/') && linkPath === '../index.html') {
            link.classList.add('active');
        }

        else if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });
};

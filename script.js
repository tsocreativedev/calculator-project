let calculate = '';

function calculation(value) {
    if (value === 'reset') {
        calculate = '';
    } else if (value === 'plus-minus') {
        calculate += '-';
    } else if (value === 'per') {
        calculate += ' % ';
    } else if (value === 'divission') {
        calculate += ' / ';
    } else if (value === '7') {
        calculate += '7';
    } else if (value === '8') {
        calculate += '8';
    } else if (value === '9') {
        calculate += '9';
    } else if (value === 'x') {
        calculate += ' * ';
    } else if (value === '4') {
        calculate += '4';
    } else if (value === '5') {
        calculate += '5';
    } else if (value === '6') {
        calculate += '6';
    } else if (value === 'minus') {
        calculate += ' - ';
    } else if (value === '1') {
        calculate += '1';
    } else if (value === '2') {
        calculate += '2';
    } else if (value === '3') {
        calculate += '3';
    } else if (value === 'plus') {
        calculate += ' + ';
    } else if (value === '0') {
        calculate += '0';
    } else if (value === 'dot') {
        calculate += '.';
    } else if (value === 'equal') {
        calculate = eval(calculate);
    }      
    
    document.querySelector('input').value = calculate;
}
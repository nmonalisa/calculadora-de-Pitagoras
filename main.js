//Variáveis globais
const TriangleSizeNameList = ['triangle-side-a', 'triangle-side-b', 'hypotenuse'];
const keyList = document.querySelectorAll('.calculator-key');
let chosenTriangleSize;
const closeCurrentWindow = () => window.close();

//Recuperar escolhas do usuário
getSizeName = (size) => chosenTriangleSize = size.getAttribute("id"); //lado do triângulo
TypeKeyValue = (key) => document.querySelector(`#${chosenTriangleSize}`).value += key.textContent; //valor

//Elementos que receberão eventos ao carregar o body: área de texto e botões da calc
setEventElements = () => {
    for (name of TriangleSizeNameList) { document.querySelector(`#${name}`).setAttribute("onclick", "getSizeName(this)") };
    for (let i = 0; i <= keyList.length - 1; i++) { keyList[i].setAttribute("onclick", "TypeKeyValue(this)") }
};

//Medidas do triângulo: catetos
getCathetiSize = () => {
    data = {
        cat_op: parseInt(document.querySelector('#triangle-side-a').value),
        cat_adj: parseInt(document.querySelector('#triangle-side-b').value)
    };
    validateCathetiData(data);
    return data;
};

//Medidas do triângulo: validação
validateCathetiData = (data) => {
    if (isNaN(data['cat_op']) || isNaN(data['cat_adj'])) {
        throw new TypeError("Os campos 'cateto oposto' e 'cateto adjacente' não podem estar vazios.")
    }
};

//Medidas do triângulo: hipotenusa
getHypotenuseSize = () => {
    httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'https://atlas-231814.appspot.com/calcula');
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(httpRequest.response);
            document.querySelector('#hypotenuse').value = Number(data['hip']).toFixed(2);
        }
    };
    httpRequest.send(JSON.stringify(getCathetiSize()));
};

//Configuração do botão reset
reset = () => {
    chosenTriangleSize = ""
    for (name of TriangleSizeNameList) {
        document.querySelector(`#${name}`).value = ""
    }
};

//Atribuição de eventos aos elementos
document.body.setAttribute("onload", "setEventElements()");
document.querySelector("#submit-triangle-values").addEventListener("click", getCathetiSize);
document.querySelector("#submit-triangle-values").addEventListener("click", getHypotenuseSize);
document.querySelector('#reset-btn').addEventListener("click", reset);
document.querySelector('#close-window').addEventListener("dblclick", closeCurrentWindow);
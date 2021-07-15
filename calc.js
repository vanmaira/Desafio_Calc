//aumentar e diminuir fonte
tamanho = 10;
function diminuir() {
    tamanho --;
    document.body.style.fontSize = tamanho +"px";
}
function aumentar() {
    tamanho ++;
    document.body.style.fontSize = tamanho +"px";
}

//darkmode

let colors = ['#0D1B2A', '#5C80BC', '#415A77', '#778DA9','#E0E1DD'];
let button = document.getElementById('dark');
button.addEventListener('click', function(){   
    var colors1 = colors[0];
    var colors2 = colors[1];
    var colors3 = colors[2];
    var colors4 = colors[3];
    var colors5 = colors[4];
       
    let container1 = document.getElementById('header');
    container1.style.background = colors1;
    let container1a = document.getElementById('todo');
    container1a.style.background = colors3;
    let container2 = document.getElementById('box1a', 'box2a','box3a');
    container2.style.background = colors2;
    let container3 = document.getElementById('box1b', 'box2b','box3b');
    container3.style.background = colors3;
    let container4 = document.getElementById('box1c', 'calc');
    container4.style.background = colors4;
    let container5 = document.getElementById('footer');
    container5.style.background = colors4;
    });

// calculadora

function somarValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var soma = parseInt(ValorA) + parseInt(ValorB);
    document.getElementById("field1").value = soma;
}
function subtrairValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var sub = ValorA - ValorB;
    document.getElementById("field1").value = sub;
}
function multiplicarValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var mul = ValorA * ValorB;
    document.getElementById("field1").value = mul;
}
function dividirValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var divi = ValorA / ValorB;
    document.getElementById("field1").value = divi;
}
function porcentoValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var porc = (ValorB * 100)/ValorA;
    document.getElementById("field1").value = porc;
}
function aquadValores(){
    var ValorA = document.getElementById("valora").value;
    var aqd = Math.pow(ValorA,2);
    document.getElementById("field1").value = aqd;
}
function bquadValores(){
    var ValorB = document.getElementById("valorb").value;
    var bqd = Math.pow(ValorB,2);
    document.getElementById("field1").value = bqd;
}
function aquadbValores(){
    var ValorA = document.getElementById("valora").value;
    var ValorB = document.getElementById("valorb").value;
    var aqdb = Math.pow(ValorA, ValorB);
    document.getElementById("field1").value = aqdb;
}

// conversor

function conversao1(){
        var euro = 6.03;
        var dolar = 5.06;
        var peso = 0.053;
                
        valor = parseFloat(document.getElementById("real").value);			
        
        if(document.getElementById("moedas").value=="euro"){
            var val= valor*euro;
            document.getElementById("result1").value = val.toFixed(2);                      
         } 
        else 
            if (document.getElementById("moedas").value=="dolar"){
            var val2= valor*dolar;
            document.getElementById("result1").value = val2.toFixed(2);
        } 
        else 
            if(document.getElementById("moedas").value=="peso"){
            var val3= valor*peso;
            document.getElementById("result1").value = val3.toFixed(2);
        }
        
    }   
    
    function conversao2(){
        var temp= parseFloat(document.getElementById("celsius").value);
        if(document.getElementById("temperaturas").value=="fahre"){
            var val= (temp+32)*1.8;
            document.getElementById("result2").value = val.toFixed(2);                      
         } 
        else
            if(document.getElementById("temperaturas").value=="kelvin"){
                var val= (temp+273);;
                document.getElementById("result2").value = val.toFixed(2)
            }}
       
   

// carrossel conversao

    function slide1(){
        document.getElementById('id').src="img/euro.jpg";
        setTimeout("slide2()", 1000)
        }
        
        function slide2(){
        document.getElementById('id').src="img/dolar.jpg";
        setTimeout("slide3()", 1000)
        }
        
        function slide3(){
        document.getElementById('id').src="img/peso.jpg";
        setTimeout("slide1()", 1000)
        }

                    
    


   

      

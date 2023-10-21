//canselar envio do formulario

const form = document.getElementById('some-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('Deu certo');
});

class Heroi {
  constructor(nome, sexo, vitoria, derrota){
    this.nome = nome;
    this.sexo = sexo;
    this.vitoria = vitoria;
     this.derrota = derrota;
  }
  
  saldoRanqueada(){
    return (this.vitoria - this.derrota)
  }
  
  nivelHeroi(){
    var pontos = (this.vitoria - this.derrota)
     //Metodo que verifica nivel do Heroi
     if(pontos <= 10){
        return  "FERRO";
     }else if(pontos > 11 && pontos <= 20){
         return  "BRONZE";
     }else if(pontos> 21 && pontos <= 50){
         return  "PRATA";
     }else if(pontos > 51 && this.xp <= 80){
         return  "OURO";
     }else if(pontos> 81 && pontos <= 90){
         return  "DIAMANTE";
     }else if(pontos > 91 && pontos <= 100){
         return  "LENDARIO";
     }else{
        return  "IMORTAL";
     }
  }
}



function hiddenNome(){
    var hidden_resultado_nome = document.querySelector('.dados_nome');
    hidden_resultado_nome.classList.remove("dados_nome");
    hidden_resultado_nome.classList.add("remove");
}

function showSexo(){
    var show_resultado = document.querySelector('.dados_sexo');
    show_resultado.classList.remove('dados_sexo');
    show_resultado.classList.add("show");
    
    hiddenNome();
}

function hiddenSexo(){
    var hidden_resultado_sexo = document.querySelector('.show');
    hidden_resultado_sexo.classList.remove("show");
    hidden_resultado_sexo.classList.add("remove");
}
  


function showXP(){
    var show_resultado = document.querySelector('.dados_xp');
    show_resultado.classList.remove('dados_xp');
    show_resultado.classList.add("show");
    
    hiddenSexo();
}   


function hiddenXP(){
    var hidden_resultado_xp = document.querySelector('.show');
     hidden_resultado_xp.classList.remove("show");
     hidden_resultado_xp.classList.add("remove");   
}

function showResultado(){	
  var nome = document.getElementById('nome').value;
  var sexo = document.querySelector('input[name="sexo"]:checked').value;
  var xpVitorias = document.getElementById('xp_vitorias').value;
   var xpDerrotas = document.getElementById('xp_derotas').value;
  var show_tela = document.getElementById('mostra_resultado');

  var show_resultado = document.querySelector('.dados_mostrar');
  // Instancia da class Heroi

  var player = new Heroi( nome,sexo,parseInt(xpVitorias), parseInt(xpDerrotas));
  
  show_resultado.classList.remove('dados_mostrar');
  show_resultado.classList.add("show");
  
   show_tela.innerHTML += ` <p> Nome do Heroi: ${player.nome} </p>
                            <p> Sexo do Heroi: ${player.sexo} </p>
                            <p>Vitórias/Derrotas: ${player.vitoria} / ${player.derrota}</>
                            <p> Saldo Ranqueada do Heroi: ${player.saldoRanqueada()} </p>
                            <p> O nivel do seu heroi ${player.nome} é ${player.nivelHeroi()}</p>
                            <button onClick="window.location.reload()">Ver novamente</button>
                          `;
                          
  hiddenXP();
  }


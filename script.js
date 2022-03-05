let num=0
document.querySelector('#botao').onclick=function(){
    num=num+1
    let nome=document.getElementById('nome').value
    let peso=document.getElementById('peso').value
    peso=parseFloat(peso)
    let altura=document.getElementById('altura').value
    altura=parseFloat(altura)

    let tbody=document.querySelector('tbody')
    let tr=document.createElement('tr')

    let th=document.createElement('th')
    th.append(num)

    let th2=document.createElement('th')
    th2.append(nome)

    let th3=document.createElement('th')
    th3.append(peso)

    let th4=document.createElement('th') 
    th4.append(altura)

    let th5=document.createElement('th')
    let imc=((peso/(altura*altura)).toFixed(2))
    if(imc<18.5){
        th5.append(`${imc} Abaixo`)
    }
    else if(imc>=18.5 && imc<=24.9){
        th5.append(`${imc} Normal`)
    }
    else if(imc>=25 && imc<=29.9){
        th5.append(`${imc} Sobrepeso`)
    }
    else if(imc>=30 && imc<=34.9){
        th5.append(`${imc} Obesidade Grau I`)
    }
    else if(imc>=35 && imc<=39.9){
        th5.append(`${imc} Obesidade Grau II`)
    }
    else{
        th5.append(`${imc} Mórbida`)
    }

    tr.append(th)
    tr.append(th2)
    tr.append(th3)
    tr.append(th4)
    tr.append(th5)
    tbody.append(tr)
}
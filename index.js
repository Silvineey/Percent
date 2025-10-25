function calcular(){
    if(entrada1.value===""||entrada2.value===""){
        window.alert("preencha todos os campos")
        return
    }
    else{
        const saida=document.getElementById("saida")
        let entrada1=document.getElementById("entrada1").value
        let entrada2=document.getElementById("entrada2").value
        let resultado=entrada1*(entrada2/100)
        saida.innerHTML=resultado
    
        entrada1.value=""
        entrada2.value=""

    }
}
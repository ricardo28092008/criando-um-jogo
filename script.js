const avanca = document.querySelectorall('.btn-proximo');

avanca.forEach(button => {
    button.addeventlistener('click',function(){
        const atual = document.querySelector('.ativo');
        const proximopasso ='passo-' + this.getattribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');
    })
})
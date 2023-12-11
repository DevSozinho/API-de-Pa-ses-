(()=>{
    {//

document.querySelector('input[type="button"').addEventListener('click',()=>{
    
   let pais = document.querySelector('input[type="text"]').value

    let url = `https://restcountries.com/v3.1/name/${pais}`
    fetch(url).then(res => res.json()).then(obj => {
        var arrayInfos = []
        if(obj.length > 0){
            var bande = document.querySelector('div.bandeira')
            bande.innerHTML = ''
            console.log('Tudo certo')
                bande.innerHTML = obj[0].flag
            }else{
                console.log('Error 404 Not Found')
            }

            let allPaises = 'https://restcountries.com/v3.1/all'
            fetch(allPaises).then(ress => ress.json()).then(objj => {
                var bandLocal = document.querySelector('div.bande_list_all_paises')
                var bandLocal = document.querySelector('div.bande_list_all_paises2')
                var all = []
                for(var i = 0;i < 250;i++){
                    bandLocal.innerHTML += `<p>${objj[i].flag}</p>`
                    bandLocal.innerHTML += `<p>${objj[i].altSpellings[1]}</p>`

                }
            })
        })
    })

}//

{//
    var footer = document.querySelector('footer')
    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 0 && footer.classList.contains('max')){
            footer.classList.remove('max')
            footer.classList.add('min')
        }else if(window.pageYOffset === 0 && footer.classList.contains('min')){
            footer.classList.remove('min')
            footer.classList.add('max')
        }
    })
}//

})();
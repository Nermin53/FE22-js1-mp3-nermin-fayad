let button = document.querySelector('.button');
button.addEventListener('click', function (event) {
    event.preventDefault();
    var language = document.querySelector( ".input-value").value;
    console.log(language);

 
     fetch(`https://restcountries.com/v3.1/lang/${language}`).then(function (response) {
    return response.json();

}).then(function (data) {
   
    console.log(data);
    let div = document.createElement('div');
    div.innerHTML = '';

        document.body.append(div);

    for(var i = 0; i < data.length; i++) {
        var country = data[i].name.common;
        var capital = data[i].capital[0];

        div.innerHTML += `<h1>${country}</h1>`
   
    
        console.log(country,capital,i)
    }
    
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});
 


});
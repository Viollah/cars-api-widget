const colors = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const cars = document.querySelector('.cars');



const colorTemplateText = document.querySelector('.colour');
const colorTemplate =  Handlebars.compile(colorTemplateText.innerHTML)
const carsTemplateText = document.querySelector('.display_table');
const carsTemplate =  Handlebars.compile(carsTemplateText.innerHTML)

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then(function(result){
        cars.innerHTML = carsTemplate({car: result.data});
       console.log(result.data);
       
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function(result){
        colors.innerHTML = colorTemplate({color: result.data});
       console.log(result.data);
       
    });

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function(result){
        brand.innerHTML = colorTemplate({color: result.data});
       console.log(result.data);
       
    });
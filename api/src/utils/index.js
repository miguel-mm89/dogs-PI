const axios = require('axios')
const { Dog, Temperament } = require('../db')
const URL = 'https://api.thedogapi.com/v1/breeds'

const dogsDBinfo = async ()=>{

    let dogsDB1 = await Dog.findAll({ //aca creo un arreglo con todos los registros de la tabla dog
        include: Temperament         //de la tabla temperaments para que funcione la vinculacion y la asignacion de los temperaments.
        });       
    
    dogsDB1 = JSON.stringify(dogsDB1);
    dogsDB1 = JSON.parse(dogsDB1); //// obtengo un json del arreglo donde aloje todos los dogs con sus temperamentos
    
    //abajo itero sobre todos los registros de dogs para poder asiganrle a cada dogs los temperamentos correspondientes eso lo hago
    //mediante el reduce y el concat y mediante el map mapeo el arreglo temperamentos para extraer el nombre de cada temperamento.
    dogsDB1 = dogsDB1.reduce((acc, el) => acc.concat({
        ...el, temperaments: el.temperaments.map(g => g.name)//Me quedo solo con el nombre de cada temperaments
    }), [])// 
    return dogsDB1
}
const dogsAPIinfo = async ()=>{
    
        let response = await axios.get(URL);
           
            const conv = (data) =>{
            if(data)
            return data.split(', ')}

                        
            const dogsREADY = response.data 
             .map(d => {
                
                 return{
                     id: d.id,
                     name: d.name,
                     weight: d.weight.metric,
                     height: d.height.metric,
                     life_span: d.life_span,
                     temperaments:conv(d.temperament), 
                     image: d.image.url
                     }
             });
        
             return dogsREADY
            }

const dogsTOTALinfo = async () => {
    const apiInfo = await dogsAPIinfo();
    const DBInfo = await dogsDBinfo();
    const infoTotal = [...DBInfo, ...apiInfo];
    return infoTotal;
};

module.exports = {
    dogsDBinfo, dogsAPIinfo, dogsTOTALinfo 
};
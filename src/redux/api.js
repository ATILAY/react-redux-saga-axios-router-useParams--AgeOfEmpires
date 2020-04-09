import axios from 'axios'
// export async function getPageData(url){
//   return await axios.get(url || 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
export async function getPageData(payload){
  return await axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/${payload}`)
  .then(function (response) {
    let usefulContent =[];
    if(response.data.units){
    usefulContent= response.data.units.map((item)=>{
      return {
          id:item.id,
          name:item.name,
          description:item.description,
          age:item.age,
          cost: item.cost,
          minRequiredAge: item.age,
          woodCost:item.cost.Wood,
          foodCost:item.cost.Food,
          goldCost:item.cost.Gold,
          buildTime:item.build_time,
          reloadTime:item.reload_time,
          hitPoints:item.hit_points,
          attack:item.attack,
          accuracy:item.accuracy,
          atCreatedUrl:item.created_in
      }
  });//map
  }//if
    return usefulContent;
  })
  .catch(function (error) {
    return error;
  });
  
}
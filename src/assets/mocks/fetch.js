export default class Fetch{
  static fetchData(url,func){
    fetch(url).then(response=>{
      if(response.ok){
        response.json().then(data=>{
          func=data;
        })
      }
    })
  }
}

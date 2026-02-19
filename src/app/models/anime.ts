export interface IAnime{
  id:number;
  name:string;
  image: string;
}
export class Anime {
  id:number =0;
  name:string ='';
  image: string= '';

  constructor(obj?:IAnime){
    if(obj!= null){
      this.id = obj.id;
      this.name = obj.name;
      this.image = obj.image;
    }
  }
}

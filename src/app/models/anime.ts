import { IAnime } from "./ianime";

export class Anime {
  id:number =0;
  name:string ='';
  image: string= '';
  description: string= '';
  airedFrom: Date= new Date();

  constructor(obj?:IAnime){
    if(obj!= null){
      this.id = obj.mal_id;
      this.name = obj.title;
      this.image = obj.images['webp'].image_url;
      this.description = obj.synopsis
      this.airedFrom = obj.aired.from
    }
  }
}

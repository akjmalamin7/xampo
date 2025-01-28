export interface PackagesServices{
  _id:string;
  serviceName?:string;
}
export interface PopularCoursesModels{
  _id:string;
  packageName:string;
  photo?:string;
  discount:string;
  price:string;
  ratingNumber?:string;
  packageService?:PackagesServices[];
  validity:string;
  visible:boolean;
  readingQ:string;
  speakingQ:string;
  writingQ:string;
  listeningQ:string;
  aveRatings:string;
}
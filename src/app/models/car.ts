import { Model } from "./model";

export interface Car{
    id:number;
    plate:string;
    dailyPrice:string;
    modelYear:string;
    state:number;
    modelId:number;
    modelName:string;
    imageUrl:string;
    model:Model[]
}
import { Document } from "mongoose";

export interface ICase{
  genre: string;
  age: number;
  lat: number;
  lng: number;
  isEmailSent: boolean;
}

export interface ICaseDocument extends Document, ICase {
  
}
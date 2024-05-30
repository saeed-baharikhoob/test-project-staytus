import {FilmType} from "./Film.ts";

export interface PlanetType  {
    name: string,
    films: string[]  ,
    climate: string,
    population:number,
    created:string,
    residents:string[]

}
export type PlanetWithFilmType = Omit<PlanetType, 'films'| 'residents'> & {
    films: FilmType[]  ,
};
export type PlanetWithFilmNames = Omit<PlanetType, 'films'| 'residents'> & {
    filmsName: string;
};
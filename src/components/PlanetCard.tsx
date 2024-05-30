import { PlanetWithFilmType} from "../utils/types/Planet.ts";
import {formatDate} from "../utils/functions/formatDate.ts";
import toolsIcon from '../assets/icons/tools.jpg'
import arrowDownIcon from '../assets/icons/arrow-down.jpg'
import userIcon from '../assets/icons/user.png'
import {useState} from "react";
import PlanetDetailCard from "./PlanetDetailCard.tsx";


const PlanetCard = ({ name, films, created, climate,population  }: PlanetWithFilmType) => {
    const [openCard,setOpenCard] = useState(false)
    //check if population was more than 2 digit than I show different icon
    const icon = population >= 10 ? userIcon : toolsIcon
    const filmsTitles = films?.map(film   => film?.title).join(', ');

    const handelClick = ()=>{
        setOpenCard(!openCard)
    }
    return (
        <div className="w-full bg-cardBackground text-white p-4 mb-2 rounded-md shadow-md" onClick={handelClick}>
            <div className="flex justify-between items-center">
                <div className="text-yellow-400">{created}</div>
                <div className="text-yellow-400">{formatDate(created)}</div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                    <div className={'bg-detailCardBackground rounded-2xl px-4 py-2'}>
                        <img  width={35} height={30} src={icon} alt="icon" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">{name}</div>
                        {films ? (
                            <div>
                                <span  className="block text-xl text-lightGray">
                                       {filmsTitles}
                                    </span>
                            </div>
                        ) : <span className="block text-xl text-lightGray">
                                      films
                                    </span>}

                    </div>
                </div>
                <div className="text-xl text-mediumGray">{climate}</div>
            </div>

            <div className="flex flex-col  items-end justify-items-center mb-2">
                <img width={28} height={20} src={arrowDownIcon} alt="arrow-down-icon" className={`${openCard && 'animate-rotate-top'}`} />
            </div>
            {openCard &&
            <PlanetDetailCard name={name} filmsName={filmsTitles} climate={climate} created={created} population={population} />
            }
        </div>
    );
};

export default PlanetCard;
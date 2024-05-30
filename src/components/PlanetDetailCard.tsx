import { PlanetWithFilmNames} from "../utils/types/Planet.ts";
import toolsIcon from "../assets/icons/tools.jpg";
import userIcon from "../assets/icons/user.png";

const PlanetDetailCard = ({ name, filmsName, created, climate,population  }: PlanetWithFilmNames) => {
    const icon = population >= 10 ? userIcon : toolsIcon
    return (
        <div className=" w-full bg-detailCardBackground text-white p-7 rounded-lg shadow-lg ">
            <div className="text-yellow-400 font-semibold">{created}</div>
            <div className="mt-4">
                <div className="flex justify-between">

                    <div className={'flex items-center'}>
                        <div
                            className="bg-gradient-to-tl from-mediumGray to-mediumGray w-20 h-20 rounded-full flex items-center justify-center">
                            <span className="text-white text-4xl font-bold mx-0 p-0">B</span>
                        </div>

                        <div className="ml-4">
                            <div className="text-2xl font-bold">{name}</div>
                            <div className="text-2xl text-mediumGray">{climate}</div>
                        </div>
                    </div>
                    <div className={' px-4 py-2'}>
                    <img width={38} height={50} src={icon} alt="user-icon"/>
                    </div>
                </div>
                <div className="mt-4 text-lg">
                    {filmsName ? (
                        <div>
                          <span className="block text-2xl font-bold text-lightGray">
                                        {filmsName}
                                    </span>
                        </div>
                    ) : <span className="block text-2xl font-bold text-lightGray">
                                      films
                                    </span>}
                </div>
            </div>

        </div>
    );
};

export default PlanetDetailCard;

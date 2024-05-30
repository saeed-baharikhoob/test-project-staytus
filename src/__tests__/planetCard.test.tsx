import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlanetCard from '../components/PlanetCard';
import {PlanetWithFilmType} from "../utils/types/Planet.ts";

describe('PlanetCard Component', () => {
    const mockPlanet : PlanetWithFilmType = {
        name: 'test',
        films: [{title:'film 1' , url:'test1'},{title:'film 2', url:'test2'}],
        created: '2024-05-30T00:00:00.000Z',
        climate: 'Arid',
        population: 200000
    };

    test('renders planet card with correct data', () => {
        render(<PlanetCard {...mockPlanet} />);

        expect(screen.getByText('test')).toBeInTheDocument();
        expect(screen.getByText('Arid')).toBeInTheDocument();
        expect(screen.getByText('film 1, film 2')).toBeInTheDocument();

    });

    test('clicking on card toggles open/close', () => {
        render(<PlanetCard {...mockPlanet} />);
        const arrowDownIcon = screen.getByAltText('arrow-down-icon');

        expect(arrowDownIcon).toBeInTheDocument();

        fireEvent.click(arrowDownIcon);

        expect(screen.getByText('B')).toBeInTheDocument();

        fireEvent.click(arrowDownIcon);

        expect(screen.queryByText('B')).not.toBeInTheDocument();
    });
});

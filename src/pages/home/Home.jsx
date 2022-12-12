import { NavBar } from '../.././components/navbar/NavBar'; // COMPONENT
import { Category } from '../.././components/category/Category'; // COMPONENT

const Home = () => {
    return (
        <>
            <NavBar />
            <Category all={'all'} year2={2019} year3={2020} year4={2021} year5={'2022'} />
        </>
    );
};

export { Home };

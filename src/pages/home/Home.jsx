import { Category } from '../.././components/category/Category' // COMPONENT

const Home = () => {
  return (
    <main className='main-home'>
      {/* COMPONENT */}
      <Category year1={2019} year2={2020} year3={2021} year4={2022} />
    </main>
  )
}

export { Home }

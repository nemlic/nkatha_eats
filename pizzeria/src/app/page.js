import Header from './components/layout/Header'
import HomeMenu from './components/layout/HomeMenu'
import Hero from './components/layout/Hero'
import SectionHeaders from './components/layout/SectionHeaders/SectionHeaders'
export default function Home() {
  return (
    <>
    <Hero/>
    <HomeMenu/>
    <section className='text-center my-16'>
      <SectionHeaders
      subHeader={'Our story'}
      mainHeader={'About us'}/>
      <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-5'>
      <p>
      Our eat-out experience is all about savoring the moment. 
      With a curated selection of restaurants, cafes, and eateries,
      our platform invites you to explore a diverse culinary landscape.
      From cozy cafes to fine dining establishments,we've handpicked 
      each venue to ensure every dining experience is memorable.
      </p>
      <p>
      But why stop there? Recognizing the changing lifestyle demands, 
      we set out to redefine food delivery. Our delivery service
      brings your favorite dishes straight to your doorstep without 
      compromising on quality, taste, or freshness. 
      It's not just a meal; it's an experience delivered with care.
      </p>
      <p>
      At Nkatha Eats, we celebrate local flavors. 
      Our platform showcases the rich culinary tapestry of Nairobi,
      highlighting hidden gems and beloved classics alike.
      By supporting local businesses, we're not just feeding 
      our customers; we're nourishing the community.
      </p>
      </div>

    </section>
    <section className='text-center'> 
      <SectionHeaders
      subHeader={'Don\'t hesitate'}
      mainHeader={'Contact us'}
      />
      <div className='mt-8'>
        <a className='text-4xl underline text-gray-500'
          href='tel:+254714777725'>
          +254714777725
        </a>
      </div> 
    </section>
    </>
  );
}
import Header from '@/src/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center'>
          <p className='text-3xl font-semibold text-center'>
            Implement Authentication with NextAuth and Drizzle ORM in Next.js 14
          </p>
        </div>
      </section>
    </>
  );
}

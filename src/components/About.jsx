export default function About() {
  return (
    <section className='py-24 px-10 max-w-6xl mx-auto'>
      <h2 className='text-4xl font-light mb-6'>About Me</h2>
      <p className='max-w-3xl text-lg opacity-70'>I specialize in crafting minimal, modern digital experiences.</p>
      <div className='grid md:grid-cols-3 gap-10 mt-16'>
        <div className='p-6 bg-white rounded-xl shadow-sm'>
          <h3 className='text-4xl font-semibold'>120%</h3>
          <p className='mt-2 text-sm opacity-70'>Increase in user engagement</p>
          <img src='/images/profile.jpg' className='rounded-lg mt-6 grayscale' />
        </div>
        <div className='text-lg opacity-70 flex items-center'>4+ years designing meaningful UX/UI solutions.</div>
        <div className='text-lg opacity-70 flex items-center'>Blending creativity & strategy for impactful results.</div>
      </div>
    </section>
  );
}

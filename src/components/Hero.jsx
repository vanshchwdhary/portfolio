export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center px-10'>
      <div className='max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center pt-20'>
        
        <div>
          <p className='text-sm tracking-wide uppercase opacity-60'>
            Cybersecurity | Software Developer
          </p>

          <h1 className='text-[70px] leading-[75px] font-light mt-4'>
            Hello, I'm <span className='font-semibold'>Vansh</span>
          </h1>

          <p className='mt-6 text-lg opacity-70 max-w-lg'>
            A passionate Computer Science undergraduate specializing in cybersecurity, 
            software development, and intelligent systems. Skilled in Java, Python, 
            machine learning, ethical hacking workflows, and secure coding practices.
          </p>
        </div>

        <div className='flex justify-center'>
          <img 
            src='/images/profile.JPG' 
            className='rounded-xl shadow-xl w-[420px]' 
            alt='Vansh Profile'
          />
        </div>

      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <section className='py-24 px-10 max-w-6xl mx-auto'>
      <h2 className='text-4xl font-light mb-10'>Projects</h2>

      <div className='space-y-12'>

        {/* Plant Disease Detector */}
        <div className='p-6 rounded-xl shadow bg-white'>
          <h3 className='text-2xl font-semibold'>Plant Disease Detector</h3>
          <p className='opacity-60 text-sm'>Apr 2025 – Jun 2025</p>
          <ul className='list-disc ml-6 mt-3 space-y-1 opacity-80'>
            <li>Built a deep learning model using TensorFlow to detect and classify plant diseases.</li>
            <li>Preprocessed and augmented large datasets of leaf images for higher accuracy.</li>
          </ul>
        </div>

        {/* Financial Assistant */}
        <div className='p-6 rounded-xl shadow bg-white'>
          <h3 className='text-2xl font-semibold'>Financial Assistant</h3>
          <p className='opacity-60 text-sm'>Oct 2024 – Nov 2024</p>
          <ul className='list-disc ml-6 mt-3 space-y-1 opacity-80'>
            <li>Developed a financial assistant tool for real-time stock charts and predictions.</li>
            <li>Integrated user-defined parameters (stock name, stop-loss, duration) to provide personalized analysis.</li>
          </ul>
        </div>

        {/* Face Recognition-Based Attendance System */}
        <div className='p-6 rounded-xl shadow bg-white'>
          <h3 className='text-2xl font-semibold'>Face Recognition-Based Attendance System</h3>
          <p className='opacity-60 text-sm'>Mar 2024 – Apr 2024</p>
          <ul className='list-disc ml-6 mt-3 space-y-1 opacity-80'>
            <li>Developed using Python, OpenCV, and face-recognition libraries.</li>
            <li>Implemented automated attendance logging with timestamps and CSV export.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

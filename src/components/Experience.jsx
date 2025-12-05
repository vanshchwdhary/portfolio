export default function Experience() {
  return (
    <section className='py-24 px-10 max-w-6xl mx-auto border-t'>
      <h2 className='text-4xl font-light mb-10'>Experience</h2>

      <div className='space-y-10'>
        <div>
          <p className='text-xl font-medium'>Cyber Security Intern — VPro Tech</p>
          <p className='opacity-60'>May 2025 – June 2025</p>

          <ul className='opacity-80 mt-3 list-disc ml-6 space-y-1'>
            <li>Conducted vulnerability assessments and basic penetration testing on internal web applications.</li>
            <li>Utilized Wireshark, Nmap, and Burp Suite for network analysis and security testing.</li>
            <li>Documented and reported security flaws with mitigation strategies to the development team.</li>
            <li>Gained practical exposure to OWASP Top 10 vulnerabilities and secure coding practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

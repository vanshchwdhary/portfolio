export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-10 bg-[#f5f5f3] text-gray-800 mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

        <p className="opacity-70 mb-10 leading-relaxed">
          Whether you have a project idea, want to collaborate, or just want to say hello —
          feel free to reach out. I usually respond within a few hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
            >
              Send Message →
            </button>
          </form>

          {/* Contact Info + Socials */}
          <div className="flex flex-col gap-6 p-6 md:p-0">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <p className="opacity-70">📧 vanshchwdhary@gmail.com</p>
              <p className="opacity-70">📞 +91 7740987700</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Social Links</h3>
              <ul className="flex flex-col gap-3 opacity-80">
                <li>
                  <a
                    href="https://github.com/vanshchwdhary"
                    className="hover:opacity-100 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/vanshchwdhary"
                    className="hover:opacity-100 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode →
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vanshchwdhary/"
                    className="hover:opacity-100 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn →
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="opacity-70">Chandigarh, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

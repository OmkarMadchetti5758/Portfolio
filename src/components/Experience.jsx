import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "NDSoftTech Solutions",
    role: "Software Development Engineer Trainee",
    previousRole: "(Previously MERN Intern)",
    duration: "Oct 2025 – Present",
    location: "Pune, Maharashtra",
    color: "from-purple-500 to-pink-500",
    points: [
      "Designed and maintained RESTful APIs with secure JWT-based authentication and role-based access control",
      "Optimized PostgreSQL and MongoDB queries and indexes, reducing API response times by 30%",
      "Contributed to backend and full-stack development with focus on performance and maintainability",
      "Collaborated with frontend, QA, and product teams in Agile sprints to deliver production-ready features",
    ],
  },
  {
    company: "E-Sutra Technologies",
    role: "Full-Stack Developer Intern",
    previousRole: "",
    duration: "Mar 2025 – Aug 2025",
    location: "Delhi, India",
    color: "from-cyan-500 to-blue-500",
    points: [
      "Architected a secure multi-tenant SaaS backend using PostgreSQL with UUIDs, constraints, and soft deletes",
      "Built modular REST APIs with pagination, filtering, and validation, improving query performance by 25%",
      "Implemented authentication flows including OTP verification, password reset, and JWT lifecycle management",
      "Integrated Role-Based Access Control (RBAC) for Super Admin, Tenant, and User roles",
    ],
  },
];

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Work <span className="text-neutral-500">Experience</span>
      </motion.h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-20" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10 relative"
          >
            <div className="flex flex-col lg:flex-row gap-6 group">
              {/* Timeline dot */}
              <div className="hidden lg:flex items-start justify-center w-8 absolute left-1/2 -translate-x-1/2 mt-4">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg group-hover:scale-125 transition-transform duration-300`}
                />
              </div>

              {/* Card */}
              <div
                className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:mr-auto lg:pr-10" : "lg:ml-auto lg:pl-10"}`}
              >
                <div className="relative p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  {/* Gradient top border */}
                  <div
                    className={`absolute top-0 left-2 h-0.5 w-[95%] rounded-t-2xl bg-gradient-to-r ${exp.color}`}
                  />

                  <div className="flex items-start gap-3 mb-4">
                    <div className={`mt-1 p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                      <BsBriefcaseFill className="text-white text-sm" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.company}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.role}
                      </p>
                      {exp.previousRole && (
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {exp.previousRole}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        className="flex items-start gap-2 text-sm text-neutral-400"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${exp.color}`} />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

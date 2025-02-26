import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Star, 
  Languages, 
  Building
} from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import EducationCard from './components/EducationCard';
import CertificationCard from './components/CertificationCard';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 bg-gradient-to-r from-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Pranay Reddy Cheruku
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-semibold mb-6"
              >
                Salesforce Developer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg mb-8 leading-relaxed"
              >
                I am a <span className="font-bold">Salesforce Developer</span> with 3<span className="font-bold">+ years of experience</span>, 
                specializing in <span className="font-bold">Lightning, Apex, Omnistudio, and integrations</span>. 
                I excel at building <span className="font-bold">scalable, efficient, and user-friendly</span> solutions 
                across <span className="font-bold">Sales Cloud and Service Cloud</span>, with expertise in 
                <span className="font-bold"> automation, data migration, and API integrations</span>.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                  Contact Me
                </a>
                <a href="#projects" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition duration-300">
                  View Projects
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-white p-2">
                <div className="w-full h-full rounded-full bg-teal-600 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">PR</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>cherukupranay1999@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>9849507701</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <span>linkedin.com/in/pranay-reddy</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center gap-2 text-white hover:text-gray-200 transition duration-300"
            >
              <span>Scroll Down</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Section 
        id="skills" 
        title="Skills & Expertise" 
        icon={<Code className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Apex Programming" 
            description="Expert in developing custom Apex classes, triggers, batch jobs, and schedulable classes for complex business requirements."
            level={95}
          />
          <SkillCard 
            title="Lightning Web Components" 
            description="Proficient in building responsive, reusable UI components using LWC framework with JavaScript ES6+ features."
            level={90}
          />
          <SkillCard 
            title="Omnistudio Development" 
            description="Experienced in creating FlexCards, DataRaptors, Integration Procedures, and OmniScripts for enhanced user experiences."
            level={85}
          />
          <SkillCard 
            title="Salesforce Configuration" 
            description="Skilled in configuring custom objects, fields, page layouts, record types, and validation rules to meet business needs."
            level={95}
          />
          <SkillCard 
            title="API Integration" 
            description="Expertise in integrating Salesforce with third-party systems using REST, SOAP APIs, and middleware solutions."
            level={90}
          />
          <SkillCard 
            title="Data Management" 
            description="Proficient in data migration, transformation, and maintaining data integrity across Salesforce orgs."
            level={85}
          />
          <SkillCard 
            title="Testing & Code Quality" 
            description="Strong focus on writing comprehensive test classes, code reviews, and maintaining high code coverage."
            level={90}
          />
          <SkillCard 
            title="Version Control" 
            description="Experienced with Git, GitLab, and Salesforce DX for efficient code management and deployment."
            level={85}
          />
          <SkillCard 
            title="AWS Services" 
            description="Knowledge of AWS services like Lambda, S3, and IoT Core for extending Salesforce capabilities."
            level={75}
          />
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Languages className="w-5 h-5" />
            <span>Programming Languages</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Java/Apex", level: "Native Proficiency" },
              { name: "JavaScript", level: "Native Proficiency" },
              { name: "Python", level: "Professional Working Proficiency" },
              { name: "HTML5", level: "Full Professional Proficiency" },
              { name: "CSS3", level: "Professional Working Proficiency" },
              { name: "Visualforce Pages", level: "Full Professional Proficiency" },
              { name: "SQL", level: "Full Professional Proficiency" },
              { name: "SOQL", level: "Full Professional Proficiency" }
            ].map((language, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-teal-700">{language.name}</h4>
                <p className="text-sm text-gray-600">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section 
        id="experience" 
        title="Work Experience" 
        icon={<Briefcase className="w-6 h-6" />}
        bgColor="bg-gray-100"
      >
        <div className="space-y-8">
          <ExperienceCard 
            title="Salesforce Consultant"
            company="MTX Groups Inc"
            period="September 2021 - Present"
            location="Hyderabad, India"
            description="MTX Group Inc. (MTX) is a global technology consulting firm that enables organizations to modernize through digital transformation."
            achievements={[
              "Designed, developed, and optimized scalable Salesforce solutions, including Lightning components, Apex classes, triggers, and Omnistudio components, to enhance business functionality and efficiency.",
              "Developed and integrated Salesforce with third-party applications such as DocuSign, Stripe, AWS, and Microsoft APIs, ensuring seamless transactions and process automation.",
              "Implemented Omnistudio solutions (FlexCards, DataRaptors, Integration Procedures, and Remote Actions) to improve data processing, integration efficiency, and external system interactions.",
              "Automated complex business workflows using Process Builder, Flows, Validation Rules, and Approval Processes, reducing manual effort and improving operational efficiency.",
              "Executed data migration strategies, successfully transferring large datasets from legacy systems using Data Loader, SFDX, and API integrations while ensuring data integrity.",
              "Strengthened security and compliance by configuring profiles, permission sets, OWD, sharing rules, and field-level security to protect sensitive business data.",
              "Followed Agile methodologies (Jira, Confluence) to ensure efficient sprint planning, task management, and timely project delivery.",
              "Managed deployments and version control using GitLab, ANT, Change Sets, Copado and SFDX, ensuring seamless release management and environment stability."
            ]}
          />
          
          <ExperienceCard 
            title="Java Developer Trainee"
            company="Accenture"
            period="June 2021 - September 2021"
            location=""
            description=""
            achievements={[
              "Developed and maintained Java-based applications, contributing to the full software development lifecycle from design to deployment.",
              "Worked with relational databases (SQL, MySQL) to write optimized queries, stored procedures, and perform data management operations.",
              "Assisted in debugging and troubleshooting application issues, improving overall system stability.",
              "Documented technical processes and solutions, ensuring knowledge sharing and maintainability."
            ]}
          />
          
          <ExperienceCard 
            title="Machine Learning Engineer Trainee"
            company="Internships.goalstreets.com"
            period="December 2020 - June 2021"
            location=""
            description=""
            achievements={[
              "Developed and optimized machine learning models for predictive analytics, classification, and data-driven decision-making.",
              "Implemented feature selection techniques such as backward elimination and Sequential Feature Selector to enhance model performance.",
              "Worked with popular ML algorithms, including Logistic Regression, Decision Trees, Naïve Bayes, and k-Nearest Neighbors (k-NN) for various classification tasks.",
              "Utilized Python and ML libraries such as scikit-learn, TensorFlow, and mlxtend for model development and deployment.",
              "Developed and fine-tuned deep learning models using Neural Networks for complex pattern recognition tasks."
            ]}
          />
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section 
        id="projects" 
        title="Personal Projects" 
        icon={<Code className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Smart Home Automation using IoT"
            description="Developed an IoT-based home automation system using NodeMCU, Raspberry Pi, and Arduino to control appliances remotely. Integrated AWS IoT Core for cloud connectivity and real-time monitoring. Implemented voice commands using Google Assistant and Alexa for hands-free control."
            technologies={["IoT", "NodeMCU", "Raspberry Pi", "Arduino", "AWS IoT Core", "Voice Integration"]}
            image="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          
          <ProjectCard 
            title="Machine Learning-Based Sentiment Analysis"
            description="Built a sentiment analysis model using Natural Language Processing (NLP) to classify customer reviews as positive, neutral, or negative. Utilized Python, Scikit-Learn, and TensorFlow, with visualizations in Matplotlib and Seaborn. Integrated the model into a web application using Flask for real-time predictions."
            technologies={["Python", "NLP", "Scikit-Learn", "TensorFlow", "Flask", "Matplotlib", "Seaborn"]}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          
          <ProjectCard 
            title="Personal Finance Tracker with Salesforce"
            description="Developed a personal finance tracking system using Salesforce Lightning and Apex to monitor expenses and income. Created custom objects, dashboards, and automation rules for financial insights. Integrated third-party APIs for currency exchange rate updates."
            technologies={["Salesforce", "Lightning", "Apex", "Custom Objects", "Dashboards", "API Integration"]}
            image="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          />
        </div>
      </Section>
      
      {/* Education Section */}
      <Section 
        id="education" 
        title="Education" 
        icon={<GraduationCap className="w-6 h-6" />}
        bgColor="bg-gray-100"
      >
        <EducationCard 
          degree="Bachelor of Technology in Computer Science Engineering"
          institution="Sri Indu College of Engineering and Technology"
          affiliation="Affiliated with Jawaharlal Nehru Technological University (JNTU), Hyderabad"
          period="June 2017 - August 2021"
          gpa="8.19"
          courses={[
            "Core subjects: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, IoT",
            "Hands-on experience with Salesforce Development, Java, Python, AI/ML, and Cloud Computing",
            "Thesis: \"Enhancing IoT Security using Machine Learning Techniques\""
          ]}
        />
      </Section>
      
      {/* Certifications Section */}
      <Section 
        id="certifications" 
        title="Certifications" 
        icon={<Award className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificationCard 
            name="Salesforce Certified Platform Developer I"
            issuer="Salesforce"
            date="April 2022"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-Developer-I.png"
          />
          
          <CertificationCard 
            name="Salesforce Certified Administrator"
            issuer="Salesforce"
            date="April 2022"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Administrator.png"
          />
          
          <CertificationCard 
            name="Salesforce Certified Omnistudio Consultant"
            issuer="Salesforce"
            date="October 2022"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/OmniStudio-Consultant.png"
          />
          
          <CertificationCard 
            name="Salesforce Certified Platform App Builder"
            issuer="Salesforce"
            date="March 2023"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-App-Builder.png"
          />
          
          <CertificationCard 
            name="Salesforce AI Associate"
            issuer="Salesforce"
            date="February 2025"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Einstein-Discovery-Consultant.png"
          />
          
          <CertificationCard 
            name="Salesforce Basics"
            issuer="Salesforce"
            date="January 2022"
            icon="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Salesforce-Certified-Associate.png"
          />
        </div>
      </Section>
      
      {/* Achievements Section */}
      <Section 
        id="achievements" 
        title="Achievements" 
        icon={<Star className="w-6 h-6" />}
        bgColor="bg-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold">Star of the Month Award</h3>
            </div>
            <p className="text-gray-700">
              Recognized for outstanding contributions to on-time project delivery at <strong>MTX Group Inc.</strong>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold">Best Learner Award</h3>
            </div>
            <p className="text-gray-700">
              Awarded for dedicating extra time to learning new technologies and completing milestone challenges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold">Team Excellence Award</h3>
            </div>
            <p className="text-gray-700">
              Honored twice for exceptional collaboration, innovative problem-solving, and exceeding project goals.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Organizations Section */}
      <Section 
        id="organizations" 
        title="Organizations" 
        icon={<Building className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">MTX Group Inc.</h3>
            <p className="text-gray-600 mb-3">September 2021 - Present</p>
            <p className="text-gray-700">Consultant (Salesforce Developer)</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Accenture</h3>
            <p className="text-gray-600 mb-3">June 2021 - September 2021</p>
            <p className="text-gray-700">Java Developer Trainee</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Internships.goalstreets.com</h3>
            <p className="text-gray-600 mb-3">December 2020 - June 2021</p>
            <p className="text-gray-700">Machine Learning Engineer Trainee</p>
          </div>
        </div>
      </Section>
      
      {/* Interests Section */}
      <Section 
        id="interests" 
        title="Interests" 
        icon={<Star className="w-6 h-6" />}
        bgColor="bg-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Salesforce & Cloud Technologies – Passionate about building scalable and efficient cloud-based solutions.",
            "Artificial Intelligence & Machine Learning – Exploring AI-driven automation and predictive analytics.",
            "IoT & Smart Automation – Enthusiastic about developing smart, connected devices for real-world applications.",
            "Software Development & Problem-Solving – Love coding and optimizing solutions for better performance.",
            "Tech Innovations & Emerging Trends – Keeping up with advancements in AI, blockchain, and cloud computing.",
            "Leadership & Team Collaboration – Enjoy mentoring, teamwork, and contributing to impactful projects."
          ].map((interest, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-full mt-1">
                  <Star className="w-4 h-4 text-teal-600" />
                </div>
                <p className="text-gray-700">{interest}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>cherukupranay1999@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>9849507701</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/pranay-reddy</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-gray-200 transition duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-gray-200 transition duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-white text-teal-700 p-3 rounded-full hover:bg-gray-200 transition duration-300">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-lg bg-teal-800 text-white placeholder-teal-300 border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-lg bg-teal-800 text-white placeholder-teal-300 border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-teal-800 text-white placeholder-teal-300 border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Target,
  BarChart3,
  Zap,
  TrendingUp,
  Eye,
  Globe,
  Instagram,
  Linkedin,
  Users
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = [
    "All",
    "Business Clients",
    "International Clients",
    "Social Media Management"
  ];

  const projects = [
    {
      id: 1,
      title: "Medical Dialogues",
      category: "Business Clients",
      description:
        "Healthcare information platform for medical professionals across India.",
      longDescription:
        "Worked on digital marketing strategy, content management and audience engagement for Medical Dialogues to increase reach and professional engagement.",
      image:
        "https://images.unsplash.com/photo-1584516150909-c43483ee7938?q=80&w=900",
      technologies: ["Content Strategy", "Audience Engagement", "Digital Marketing"],
      metrics: ["National Reach", "High Engagement"],
      website: "https://medicaldialogues.in/",
      icon: Users
    },

    {
      id: 2,
      title: "RealtyDart",
      category: "Business Clients",
      description:
        "Real estate platform providing property search and investment advisory.",
      longDescription:
        "Executed social media marketing and lead generation campaigns for multiple real estate projects.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900",
      technologies: ["Lead Gen", "FB/IG Ads", "Campaign Management"],
      metrics: ["Lead Volume", "ROAS Focused"],
      website: "https://www.realtydart.com/",
      icon: Target
    },

    {
      id: 3,
      title: "Market Buzzer",
      category: "Business Clients",
      description:
        "Business communication and teleservice solutions provider.",
      longDescription:
        "Handled LinkedIn marketing, brand awareness campaigns and B2B content strategies.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=900",
      technologies: ["LinkedIn Growth", "B2B Strategy", "Copywriting"],
      metrics: ["B2B Authority", "Network Growth"],
      website: "https://marketbuzzerteleservices.com/",
      icon: Linkedin
    },

    {
      id: 4,
      title: "One Login Digital",
      category: "Business Clients",
      description: "Full service digital marketing agency campaigns.",
      longDescription:
        "Worked on SEO, social media strategy, and cross promotional marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=900",
      technologies: ["SEO", "Brand Strategy", "Omnichannel"],
      metrics: ["Search Ranking", "Brand Lift"],
      website: "https://www.onelogindigitalmedia.com/",
      icon: Zap
    },

    {
      id: 5,
      title: "Blue Pearl Woodworks",
      category: "Business Clients",
      description:
        "Custom woodworking and furniture manufacturing brand.",
      longDescription:
        "Built visual storytelling campaigns and portfolio showcases.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900",
      technologies: ["Visual Branding", "Storytelling", "IG Feed"],
      metrics: ["Aesthetic Growth", "Direct Inquiry"],
      website: "https://bluepearlwoodworks.com/",
      icon: Eye
    },

    {
      id: 6,
      title: "Two Mentor",
      category: "International Clients",
      description: "Professional mentorship platform.",
      longDescription:
        "Developed digital presence and community engagement campaigns targeting a global professional audience.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900",
      technologies: ["Global Marketing", "Community Building"],
      metrics: ["International Reach", "Community ROI"],
      website: "https://www.twomentor.com/",
      icon: Globe
    },

    {
      id: 7,
      title: "South Florida Intervention",
      category: "International Clients",
      description: "Addiction recovery services provider.",
      longDescription:
        "Created awareness campaigns and healthcare focused marketing strategies.",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7e1f1c2f06?q=80&w=900",
      technologies: ["Healthcare Marketing", "PPC Awareness"],
      metrics: ["US Market Impact", "Lead Privacy"],
      website: "https://southfloridaintervention.com/",
      icon: TrendingUp
    },

    {
      id: 8,
      title: "Novare Professional",
      category: "International Clients",
      description: "Consulting and advisory firm.",
      longDescription:
        "Developed LinkedIn branding and thought leadership campaigns.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900",
      technologies: ["Thought Leadership", "Personal Branding"],
      metrics: ["Inbound Leads", "Brand Authority"],
      website: "https://novare-ps.com/",
      icon: BarChart3
    },

    {
      id: 9,
      title: "Regenesis Power",
      category: "International Clients",
      description: "Renewable energy solutions company.",
      longDescription:
        "Executed sustainability storytelling and green marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=900",
      technologies: ["Green Marketing", "Sustainability PR"],
      metrics: ["CSR Engagement", "Market Education"],
      website: "https://regenesispower.com/",
      icon: Globe
    },

    {
      id: 10,
      title: "My eCalorie Counts",
      category: "Social Media Management",
      description: "Health and nutrition Instagram platform.",
      longDescription:
        "Created nutrition focused content strategies.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=900",
      technologies: ["Instagram Growth", "Viral Content"],
      metrics: ["Follower Growth", "Community Engagement"],
      website: "https://www.instagram.com/myecaloriecounts",
      icon: Instagram
    },

    {
      id: 11,
      title: "Draaz Fashion",
      category: "Social Media Management",
      description: "Fashion ecommerce brand growth.",
      longDescription:
        "Developed fashion campaigns and product showcases.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900",
      technologies: ["E-com Marketing", "Visual Merchandising"],
      metrics: ["Sales Conversion", "Brand Aesthetic"],
      website: "https://www.instagram.com/draaz.co.in",
      icon: Zap
    },

    {
      id: 12,
      title: "Machan BYOB",
      category: "Social Media Management",
      description: "Hospitality and restaurant marketing.",
      longDescription:
        "Promoted events, menu highlights and dining campaigns.",
      image:
        "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=900",
      technologies: ["Event Promotion", "Local SEO"],
      metrics: ["Foot Traffic", "Viral Reels"],
      website: "https://www.instagram.com/machanbyobofficial",
      icon: Eye
    }
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Growth <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Portfolios</span>
          </h2>

          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mt-4"></div>

        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map(category => (

            <button
              key={category}
              onClick={()=>{
                setSelectedCategory(category)
                setVisibleProjects(6)
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {displayedProjects.map(project => (

           <motion.div
  key={project.id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ y: -6 }}
  className="flex flex-col h-full bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-xl transition"
>

              <div className="relative h-52">

                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 right-4 p-2 bg-black/40 rounded-lg">
                  <project.icon className="text-white w-5 h-5" />
                </div>

              </div>

              <div className="flex flex-col flex-grow p-6">

                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded w-fit">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    Case Study <Eye size={16}/>
                  </button>

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-blue-600 text-white rounded-lg"
                  >
                    <ExternalLink size={16}/>
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Show More */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleProjects(prev => prev + 6)}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-lg"
            >
              See More
            </button>
          </div>
        )}

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={()=>setSelectedProject(null)}
          >

            <motion.div
              initial={{scale:0.95,y:20}}
              animate={{scale:1,y:0}}
              exit={{scale:0.95,y:20}}
              className="custom-scroll bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e)=>e.stopPropagation()}
            >

              <div className="relative h-64">

                <img src={selectedProject.image} className="w-full h-full object-cover"/>

                <button
                  onClick={()=>setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center"
                >
                  ×
                </button>

              </div>

              <div className="p-8">

  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
    {selectedProject.title}
  </h3>

  <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
    {selectedProject.longDescription}
  </p>

  <div className="grid md:grid-cols-2 gap-8 mb-8">

    {/* Strategy */}

    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
        Core Strategy
      </h4>

      <div className="flex flex-wrap gap-2">

        {selectedProject.technologies.map((tech:any,i:number)=>(
          <span
            key={i}
            className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
          >
            {tech}
          </span>
        ))}

      </div>
    </div>

    {/* Outcomes */}

    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-4">
        Key Outcomes
      </h4>

      <div className="space-y-2">

        {selectedProject.metrics.map((m:any,i:number)=>(
          <div
            key={i}
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-semibold"
          >
            <TrendingUp className="w-4 h-4 text-teal-500"/>
            {m}
          </div>
        ))}

      </div>
    </div>

  </div>

  {/* Visit Button */}

  <a
    href={selectedProject.website}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition shadow-lg"
  >
    Visit Project
    <ExternalLink className="ml-2 w-5 h-5"/>
  </a>

</div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Projects;
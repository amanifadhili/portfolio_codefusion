import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Award,
  Users,
  Zap,
  Lightbulb,
  Shield,
  TrendingUp,
  Star,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Cpu,
  Brain,
  Smartphone,
  Database,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export interface TeamSectionProps {
  className?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  location: string;
  avatar: string;
  isFounder: boolean;
  isFeatured: boolean;
  achievements: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    email?: string;
  };
  skills: {
    name: string;
    level: "expert" | "advanced" | "intermediate";
    icon: React.ComponentType<any>;
  }[];
  funFact: string;
  favoriteTech: string;
  joinedDate: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ className = "" }) => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  // Team member data
  const teamMembers: TeamMember[] = [
    {
      id: "alex-chen",
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      title: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years of experience in technology innovation and business strategy. Alex has led multiple successful startups and brings deep expertise in IoT, embedded systems, and emerging technologies.",
      expertise: [
        "IoT Architecture",
        "Business Strategy",
        "Product Vision",
        "Team Leadership",
      ],
      experience: "15+ years in tech leadership",
      education: "MS Computer Science, Stanford University",
      location: "San Francisco, CA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      isFounder: true,
      isFeatured: true,
      achievements: [
        "Led 3 successful tech startups to acquisition",
        "Named 'Top 40 Under 40' by TechCrunch",
        "Speaker at IoT World Conference 2023",
        "Patent holder for smart city infrastructure",
      ],
      socialLinks: {
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
        twitter: "https://twitter.com/alexchen",
        website: "https://alexchen.dev",
        email: "alex@codefusion.com",
      },
      skills: [
        { name: "IoT Development", level: "expert", icon: Cpu },
        { name: "Business Strategy", level: "expert", icon: TrendingUp },
        { name: "Team Leadership", level: "expert", icon: Users },
        { name: "Product Vision", level: "advanced", icon: Lightbulb },
      ],
      funFact: "Built his first IoT device at age 12 using Arduino",
      favoriteTech: "Raspberry Pi & MQTT",
      joinedDate: "January 2020",
    },
    {
      id: "sarah-rodriguez",
      name: "Sarah Rodriguez",
      role: "Co-Founder & CTO",
      title: "Chief Technology Officer",
      bio: "Technical architect and engineering leader with expertise in scalable systems, machine learning, and cloud infrastructure. Sarah has architected solutions for Fortune 500 companies and brings deep technical knowledge.",
      expertise: [
        "System Architecture",
        "Machine Learning",
        "Cloud Infrastructure",
        "Technical Leadership",
      ],
      experience: "12+ years in software engineering",
      education: "PhD Computer Science, MIT",
      location: "Boston, MA",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      isFounder: true,
      isFeatured: true,
      achievements: [
        "Published 20+ research papers in ML/AI",
        "Led engineering teams at Google & Microsoft",
        "Open source contributor to TensorFlow",
        "Advisor to 5 successful ML startups",
      ],
      socialLinks: {
        github: "https://github.com/sarahrodriguez",
        linkedin: "https://linkedin.com/in/sarahrodriguez",
        twitter: "https://twitter.com/sarahrodriguez",
        website: "https://sarahrodriguez.dev",
        email: "sarah@codefusion.com",
      },
      skills: [
        { name: "Machine Learning", level: "expert", icon: Brain },
        { name: "System Architecture", level: "expert", icon: Shield },
        { name: "Cloud Infrastructure", level: "expert", icon: Globe },
        { name: "Technical Leadership", level: "advanced", icon: Zap },
      ],
      funFact: "Can solve Rubik's cube in under 2 minutes",
      favoriteTech: "TensorFlow & Kubernetes",
      joinedDate: "January 2020",
    },
    {
      id: "michael-kim",
      name: "Michael Kim",
      role: "VP of Engineering",
      title: "Vice President of Engineering",
      bio: "Engineering leader with expertise in mobile development, embedded systems, and team scaling. Michael has built and led engineering teams at multiple successful startups.",
      expertise: [
        "Mobile Development",
        "Embedded Systems",
        "Team Scaling",
        "Agile Processes",
      ],
      experience: "10+ years in engineering leadership",
      education: "BS Computer Engineering, UC Berkeley",
      location: "Seattle, WA",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      isFounder: false,
      isFeatured: false,
      achievements: [
        "Led engineering team of 50+ developers",
        "Delivered 15+ mobile apps to market",
        "Expert in React Native & Flutter",
        "Certified Scrum Master",
      ],
      socialLinks: {
        github: "https://github.com/michaelkim",
        linkedin: "https://linkedin.com/in/michaelkim",
        twitter: "https://twitter.com/michaelkim",
        email: "michael@codefusion.com",
      },
      skills: [
        { name: "Mobile Development", level: "expert", icon: Smartphone },
        { name: "Embedded Systems", level: "advanced", icon: Cpu },
        { name: "Team Leadership", level: "advanced", icon: Users },
        { name: "Agile Processes", level: "expert", icon: TrendingUp },
      ],
      funFact: "Built a robot that can make coffee",
      favoriteTech: "React Native & Arduino",
      joinedDate: "March 2021",
    },
    {
      id: "emily-wang",
      name: "Emily Wang",
      role: "Head of Design",
      title: "Director of User Experience",
      bio: "Creative design leader with expertise in user experience, visual design, and design systems. Emily has designed products used by millions of users worldwide.",
      expertise: [
        "User Experience",
        "Visual Design",
        "Design Systems",
        "User Research",
      ],
      experience: "8+ years in product design",
      education: "BFA Design, Parsons School of Design",
      location: "New York, NY",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      isFounder: false,
      isFeatured: false,
      achievements: [
        "Designed products for 10M+ users",
        "Awarded 'Designer of the Year' 2022",
        "Speaker at Design Week conferences",
        "Mentor to 20+ junior designers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/emilywang",
        twitter: "https://twitter.com/emilywang",
        website: "https://emilywang.design",
        email: "emily@codefusion.com",
      },
      skills: [
        { name: "User Experience", level: "expert", icon: Users },
        { name: "Visual Design", level: "expert", icon: Star },
        { name: "Design Systems", level: "advanced", icon: Shield },
        { name: "User Research", level: "advanced", icon: Lightbulb },
      ],
      funFact: "Can identify any font just by looking at it",
      favoriteTech: "Figma & Principle",
      joinedDate: "June 2021",
    },
    {
      id: "david-patel",
      name: "David Patel",
      role: "Lead Data Scientist",
      title: "Senior Data Scientist",
      bio: "Data science expert with deep knowledge in machine learning, predictive analytics, and big data processing. David has built ML models that drive business decisions for Fortune 100 companies.",
      expertise: [
        "Machine Learning",
        "Predictive Analytics",
        "Big Data",
        "Statistical Modeling",
      ],
      experience: "7+ years in data science",
      education: "MS Statistics, Stanford University",
      location: "Austin, TX",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      isFounder: false,
      isFeatured: false,
      achievements: [
        "Built ML models for 5 Fortune 100 companies",
        "Published 15+ papers in data science",
        "Kaggle competition winner",
        "Open source contributor to scikit-learn",
      ],
      socialLinks: {
        github: "https://github.com/davidpatel",
        linkedin: "https://linkedin.com/in/davidpatel",
        twitter: "https://twitter.com/davidpatel",
        email: "david@codefusion.com",
      },
      skills: [
        { name: "Machine Learning", level: "expert", icon: Brain },
        { name: "Predictive Analytics", level: "expert", icon: TrendingUp },
        { name: "Big Data", level: "advanced", icon: Database },
        { name: "Statistical Modeling", level: "advanced", icon: Code },
      ],
      funFact: "Can recite pi to 100 decimal places",
      favoriteTech: "Python & TensorFlow",
      joinedDate: "September 2021",
    },
    {
      id: "lisa-thompson",
      name: "Lisa Thompson",
      role: "Head of Operations",
      title: "Director of Operations",
      bio: "Operations leader with expertise in project management, client relations, and business process optimization. Lisa ensures smooth delivery of all CodeFusion projects.",
      expertise: [
        "Project Management",
        "Client Relations",
        "Process Optimization",
        "Team Coordination",
      ],
      experience: "9+ years in operations",
      education: "MBA, Harvard Business School",
      location: "Chicago, IL",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      isFounder: false,
      isFeatured: false,
      achievements: [
        "Managed 100+ successful projects",
        "Led operations for 3 tech companies",
        "PMP certified project manager",
        "Client satisfaction rate: 98%",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/lisathompson",
        email: "lisa@codefusion.com",
      },
      skills: [
        { name: "Project Management", level: "expert", icon: Calendar },
        { name: "Client Relations", level: "expert", icon: Users },
        { name: "Process Optimization", level: "advanced", icon: TrendingUp },
        { name: "Team Coordination", level: "advanced", icon: Shield },
      ],
      funFact: "Organized a team building event for 500 people",
      favoriteTech: "Asana & Slack",
      joinedDate: "November 2021",
    },
  ];

  // Handle member hover
  const handleMemberHover = (memberId: string | null) => {
    setHoveredMember(memberId);
  };

  // Handle member selection
  const handleMemberSelect = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // Handle social link click
  const handleSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Get skill level color
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "text-green-600 dark:text-green-400";
      case "advanced":
        return "text-blue-600 dark:text-blue-400";
      case "intermediate":
        return "text-yellow-600 dark:text-yellow-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  // Get skill level badge color
  const getSkillLevelBadgeColor = (level: string) => {
    switch (level) {
      case "expert":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <section
      id="team"
      className={`py-20 bg-white dark:bg-gray-800 ${className}`}
    >
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Meet Our Team"
            subtitle="The brilliant minds behind CodeFusion's innovative solutions"
            variant="default"
            align="center"
            showDivider
          />
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              onHoverStart={() => handleMemberHover(member.id)}
              onHoverEnd={() => handleMemberHover(null)}
            >
              <Card
                variant="elevated"
                className={`h-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  hoveredMember === member.id
                    ? "ring-2 ring-primary-500 shadow-2xl"
                    : ""
                }`}
                onClick={() => handleMemberSelect(member)}
              >
                {/* Member Avatar */}
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {member.isFounder && (
                      <div className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Founder
                      </div>
                    )}
                    {member.isFeatured && (
                      <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    {member.location}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  {/* Name and Role */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {member.title}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          +{member.expertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    {member.socialLinks.github && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialLink(member.socialLinks.github!);
                        }}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                    {member.socialLinks.linkedin && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialLink(member.socialLinks.linkedin!);
                        }}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                    )}
                    {member.socialLinks.twitter && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialLink(member.socialLinks.twitter!);
                        }}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                    )}
                    {member.socialLinks.website && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialLink(member.socialLinks.website!);
                        }}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        aria-label={`${member.name}'s Website`}
                      >
                        <Globe className="w-4 h-4" />
                      </button>
                    )}
                    {member.socialLinks.email && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSocialLink(
                            `mailto:${member.socialLinks.email}`
                          );
                        }}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Statistics */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "6", label: "Team Members" },
              { icon: Award, value: "50+", label: "Years Combined Experience" },
              { icon: Zap, value: "100+", label: "Projects Delivered" },
              { icon: Star, value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation and technology excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="inline-flex items-center px-8 py-4 border border-primary-500 text-primary-500 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TeamSection;

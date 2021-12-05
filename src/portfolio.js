/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gr8ayu",
  title: "Hi all, I'm Ayush",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Python / Django and some other cool libraries and frameworks. I am also learning DevOps and work with AWS."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gr8ayu",
  linkedin: "https://www.linkedin.com/in/gr8ayu/",
  gmail: "anonymouskmr@gmail.com",
  medium: "https://medium.com/@gr8ayu",
  stackoverflow: "https://stackoverflow.com/users/8256944/gr8ayu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full stack developer, learning and exploring various domains of tech and life.",
  skills: [
    emoji(
      "⚡ Develop fully functional backend design using Django/Flask."
    ),
    emoji("⚡ Building CI CD pipelines."),
    emoji(
      "⚡ Documenting and debugging of some big projects."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
  
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RV College of Engineering",
      logo: require("./assets/images/rvceLogo.png"),
      subHeader: "BE in Information Science",
      duration: "August 2018 - August 2022",
      desc: "Took course on Operating systems, Software Engg, CyberSecurity...",
      descBullets: [
        "Hold the position of President for College Coding Club.",
        "Technical head of Entrepreneurship Club."
      ]
    },
    {
      schoolName: "DAV Hehal",
      logo: require("./assets/images/davLogo.png"),
      subHeader: "Secondary & Higher Secondary",
      duration: "2003 - March 2017",
      desc: "",
      descBullets: ["10th : 10 CGPA", "12th : 8.74 %"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const skillSet = {
  viewSkillSets: true, //Set it to true to show SkillSet Section
  title: "Skills",
  subTitle: "",

  skills :[
    {
      category : "Languages",
      skills : [{
        name : "Python",
        image : require("./assets/images/python.png"),

      },
      {
        name : "Java",
        image : require("./assets/images/java.png"),
      },
      {
        name : "C++",
        image : require("./assets/images/cpp.png"),
      },
    ]
    },
    {
      category : "DevOps",
      // "Docker", "Git","Github", "Github Actions", "Terraform"
      skills: [
        {
          name: "Docker",
          image: require("./assets/images/docker.jpeg"),
        },
        {
          name: "Git",
          image: require("./assets/images/git.png"),
        },
        {
          name: "Github",
          image: require("./assets/images/github.png"),
        },
        {
          name: "Github Actions",
          image: require("./assets/images/github-actions.png"),
        },
        {
          name: "Terraform",
          image: require("./assets/images/terraform.png"),
        },
      ]
    },
    {
      category : "Backend",
      // "Django", "Flask", "Firebase", "Nginx", "MySQL"
      skills: [

        {
          name: "Django",
          image: require("./assets/images/django.jpeg"),
        },
        {
          name: "Flask",
          image: require("./assets/images/flask.png"),
        },
        {
          name: "Firebase",
          image: require("./assets/images/firebase.png"),
        },
        {
          name: "Nginx",
          image: require("./assets/images/nginx.png"),
        },
        {
          name: "MySQL",
          image: require("./assets/images/mysql.png"),
        },

      ]
    },
    {
      category : "Frontend",
      // "React", "Redux" , "HTML", "CSS", "JavaScript", "Bootstrap"
      skills: [
        {
          name: "React",
          image: require("./assets/images/react.png"),
        },
        {
          name: "Redux",
          image: require("./assets/images/redux.png"),
        },
        {
          name: "HTML",
          image: require("./assets/images/html.png"),
        },
        {
          name: "CSS",
          image: require("./assets/images/css.png"),
        },
        {
          name: "JavaScript",
          image: require("./assets/images/javascript.png"),
        },
        {
          name: "Bootstrap",
          image: require("./assets/images/bootstrap.png"),
        },

      ]
    },
    {
      category : "Data Science",
      // "Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "Seaborn", "Keras"
      skills : [
        {
          name : "Pandas",
          image : require("./assets/images/pandas.png"),
        },
        {
          name : "Numpy",
          image : require("./assets/images/numpy.png"),
        },
        {
          name : "Scikit-Learn",
          image : require("./assets/images/sklearn.jpeg"),
        },
        {
          name : "Matplotlib",
          image : require("./assets/images/matplotlib.png"),
        },
        {
          name : "Seaborn",
          image : require("./assets/images/seaborn.jpeg"),
        },
        {
          name : "Keras",
          image : require("./assets/images/keras.png"),
        },

      ]
    },
    {
      category : "Cloud",
      // "AWS", "GCP", "Azure"
      skills : [
        {
          name : "AWS",
          image : require("./assets/images/aws.png"),
        },
        {
          name : "GCP",
          image : require("./assets/images/gcp.png"),
        },
        {
          name : "Azure",
          image : require("./assets/images/azure.jpeg"),
        },

      ]
    },
    {
      category : "Others",
      // "Linux", "Celery", "RabbitMQ", "Photoshop" 
      skills : [
        {
          name : "Linux",
          image : require("./assets/images/linux.png"),
        },
        {
          name : "Celery",
          image : require("./assets/images/celery.png"),
        },
        {
          name : "RabbitMQ",
          image : require("./assets/images/rabbitmq.png"),
        },
        {
          name : "Photoshop",
          image : require("./assets/images/photoshop.png"),
        },

      ]
    }
  
  ]
}

const testimonials = {
  viewTestimonials: true, //Set it to true to show Testimonials Section
  testimonials: [
    {
      title: "Ayush",
      company: "InterviewVector",
      text: "lorem ipsum...",
    }
  ]
}

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer Intern",
      company: "InterviewVector",
      companylogo: require("./assets/images/ivlogo.jpeg"),
      date: "Aug 2021 – Present",
      desc: "",
      descBullets: [
        "Working on feature development of the ﬂask server",
        "Implemented monitoring and logging of error.",
        "Preparing documentation and apidocs using swagger..",
        "Preparing test suites for server using pytest.",
        "Responsible for debugging of existing product in development.",
        "Designing & Implementation of git workﬂow and CI CD pipeline on github action and AWS.",
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "SAP Labs",
      companylogo: require("./assets/images/saplogo.png"),
      date: "June 2021 – August 2021",
      desc: "",
      descBullets: [
        "Working on Outlook add-in for SAP ByDesign CRM Team.",
        "Responsible for debugging of existing product in development.",
        "Preparing documentations for the product."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Oxen Farm Solutions Pvt. Ltd.",
      companylogo: require("./assets/images/oxenlogo.jpeg"),
      date: "Mar 2021 – Apr 2021",
      desc: "",
      descBullets: [
        "Creating automated scripts to scrape data from data source using selenium.",
        "Setting up cloud server to perform periodic automated tasks on AWS.",
        "Building internal web app for faster processing and analysis of data."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Maesh Singapore Pvt. Ltd.",
      companylogo: require("./assets/images/maeshlogo.png"),
      date: "Nov 2020 – Dec 2020",
      desc: "",
      descBullets: [
        "Feature Development on Django for automated report generation and email alert using crontabs",
        "Built fully automated CI/CD pipelines on Microsoft Azure for containerized applications using Docker.",
        "Integrated pytest for integration testing."
      ]

    },
    
    {
      role: "President",
      company: "Coding Club RVCE",
      companylogo: require("./assets/images/cclogo.png"),
      date: "Sept 2018 – Present",
      desc: "",
      descBullets: [
        "Organised 20 events, workshops, seminars and hackathons",
        "Proposed various marketing and network activities to raise awareness",
        "Building network on and oﬀ campus."
      ]
    }
    ,
    {
      role: "Design & Tech Head",
      company: "E-Cell RVCE",
      companylogo: require("./assets/images/ecelllogo.png"),
      date: "Sept 2018 – Present",
      desc: "",
      descBullets: [
        "Responsible for managing the website and technical responsibilities.",
        "Designed posters, Banners, graphics for both print and digital platforms."
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/wirin_thumbnail.png"),
      projectName: "Wirin Project",
      projectDesc: "Migrating Full Fledge Desktop Based Scenario Editor to Web Platform",
      footerLink: [
        {
          name: "More Details",
          url: "https://docs.google.com/presentation/d/1p3TaTkKFrdb4JAljTNCr1JpCQRUg9yGF/edit?usp=sharing&ouid=112426150733350091604&rtpof=true&sd=true"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/spcportal_thumbnail.png"),
      projectName: "SPCPortal",
      projectDesc: "Web platform for training and placement cell to manage Placements and Internships", 
      footerLink: [
        {
          name: "More Details",
          url: "https://github.com/Gr8ayu/SPCPortal"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Events Organised",
  subtitle: emoji(
    "I love to organise fun events 😅"
  ),

  talks: [
    {
      title: "Finding Sherlock",
      subtitle: "CTF Contest for the college during Technical Fest '8th Miles' 2019",
      slides_url: "https://www.instagram.com/tv/B86BXLuDEGg/",
      event_url: "https://relayhack.herokuapp.com/"
    },
    {
      title: "The Amazing Race",
      subtitle: "Treasure Hunt like coding contest, to solve the questions to get the clues and win the race",
      slides_url: "https://www.instagram.com/p/B7lqZYiDP2Y/",
      event_url: ""
    },
    {
      title: "Comprehensive Placement Preparation",
      subtitle: "Workshop on preparation for placements for college students",
      slides_url: "https://www.instagram.com/p/CNw1u-HDLxv/",
      event_url: ""
    },
   
    {
      title: "Indian Police Hackathon",
      subtitle: "National level hackathon organised with Karnataka Police ",
      slides_url: "https://www.instagram.com/p/B4X3uLBDrMV/",
      event_url: ""
    },
   
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9122371740",
  email_address: "anonymouskmr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  skillSet
};


// src/data/examData.js - Updated with Vouchers
//examGuides


 export const examGuides= {
  aws: {
    title: "AWS Certification Exams",
    description:
      "Explore AWS certification exams for cloud, architecture, development, operations, and DevOps professionals.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "CLF-C02",
            name: "AWS Certified Cloud Practitioner",
            description:
              "Foundational certification covering AWS cloud concepts, services, security, architecture, pricing, and support.",
          },
        ],
      },

      {
        name: "Associate",
        exams: [
          {
            code: "SAA-C03",
            name: "AWS Certified Solutions Architect – Associate",
            description:
              "Validates the ability to design secure, resilient, high-performing, and cost-optimized AWS architectures.",
          },
          {
            code: "DVA-C02",
            name: "AWS Certified Developer – Associate",
            description:
              "Validates skills in developing, deploying, and debugging cloud applications using AWS services.",
          },
          {
            code: "SOA-C02",
            name: "AWS Certified CloudOps Engineer – Associate",
            description:
              "Validates skills in deploying, managing, and operating workloads on AWS.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "SAP-C02",
            name: "AWS Certified Solutions Architect – Professional",
            description:
              "Advanced certification for designing complex AWS solutions and architectures.",
          },
          {
            code: "DOP-C02",
            name: "AWS Certified DevOps Engineer – Professional",
            description:
              "Validates advanced DevOps skills including CI/CD, automation, monitoring, and infrastructure management.",
          },
        ],
      },

      {
        name: "Specialty",
        exams: [
          {
            code: "ANS-C01",
            name: "AWS Certified Advanced Networking – Specialty",
            description:
              "Advanced certification covering AWS networking architecture, connectivity, routing, and security.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate your AWS cloud skills.",
      "Build a career in cloud computing.",
      "Improve your professional profile.",
      "Demonstrate practical AWS knowledge.",
    ],

    careerPaths: {
      "Cloud Architect": ["CLF-C02", "SAA-C03", "SAP-C02"],
      "Cloud Developer": ["CLF-C02", "DVA-C02"],
      DevOps: ["CLF-C02", "SOA-C02", "DOP-C02"],
      Networking: ["SAA-C03", "ANS-C01"],
    },
  },

  // =====================================================
  // MICROSOFT AZURE
  // =====================================================

  azure: {
    title: "Microsoft Azure Certification Exams",
    description:
      "Explore Microsoft Azure certification exams covering cloud, AI, data, administration, networking, security, and DevOps.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "AZ-900",
            name: "Microsoft Azure Fundamentals",
            description:
              "Introduction to cloud concepts, Azure services, security, pricing, and management.",
          },
          {
            code: "AI-900",
            name: "Microsoft Azure AI Fundamentals",
            description:
              "Introduction to artificial intelligence and machine learning concepts on Azure.",
          },
          {
            code: "DP-900",
            name: "Microsoft Azure Data Fundamentals",
            description:
              "Introduction to data concepts and Microsoft Azure data services.",
          },
          {
            code: "SC-900",
            name: "Microsoft Security, Compliance, and Identity Fundamentals",
            description:
              "Introduction to Microsoft security, compliance, and identity concepts.",
          },
        ],
      },

      {
        name: "Associate",
        exams: [
          {
            code: "AZ-104",
            name: "Azure Administrator Associate",
            description:
              "Validates skills in managing Azure subscriptions, storage, networking, compute, and security.",
          },
          {
            code: "AZ-204",
            name: "Developing Solutions for Microsoft Azure",
            description:
              "Validates skills in developing cloud applications and services on Microsoft Azure.",
          },
          {
            code: "AZ-700",
            name: "Designing and Implementing Microsoft Azure Networking Solutions",
            description:
              "Focuses on Azure networking architecture, connectivity, routing, and network security.",
          },
          {
            code: "AZ-140",
            name: "Configuring and Operating Microsoft Azure Virtual Desktop",
            description:
              "Validates skills for implementing and managing Azure Virtual Desktop environments.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "AZ-305",
            name: "Designing Microsoft Azure Infrastructure Solutions",
            description:
              "Advanced certification focused on designing Azure infrastructure and cloud solutions.",
          },
          {
            code: "AZ-400",
            name: "Designing and Implementing Microsoft DevOps Solutions",
            description:
              "Covers DevOps practices including CI/CD, source control, infrastructure as code, and monitoring.",
          },
        ],
      },

      {
        name: "Security, Compliance & Identity",
        exams: [
          {
            code: "SC-100",
            name: "Microsoft Cybersecurity Architect",
            description:
              "Advanced cybersecurity architecture across Microsoft cloud and enterprise environments.",
          },
          {
            code: "SC-200",
            name: "Microsoft Security Operations Analyst",
            description:
              "Focuses on threat detection, incident response, security monitoring, and investigation.",
          },
          {
            code: "SC-300",
            name: "Microsoft Identity and Access Administrator",
            description:
              "Focuses on identity, authentication, authorization, and Microsoft Entra ID.",
          },
          {
            code: "SC-401",
            name: "Microsoft Information Security Administrator",
            description:
              "Focuses on information protection, security, compliance, and data governance.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Microsoft Azure cloud skills.",
      "Build a career in cloud computing.",
      "Improve your professional profile.",
      "Prepare for Azure administration, development, architecture, DevOps, and security roles.",
    ],

    careerPaths: {
      "Azure Administrator": ["AZ-900", "AZ-104"],
      "Azure Developer": ["AZ-900", "AZ-204"],
      "Cloud Architect": ["AZ-900", "AZ-104", "AZ-305"],
      DevOps: ["AZ-900", "AZ-104", "AZ-400"],
      Cybersecurity: ["SC-900", "SC-200", "SC-300", "SC-100"],
      Networking: ["AZ-900", "AZ-700"],
    },
  },

  // =====================================================
  // GOOGLE CLOUD
  // =====================================================

  google: {
    title: "Google Cloud Certification Exams",
    description:
      "Explore Google Cloud certifications covering cloud engineering, architecture, data, security, and machine learning.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "CDL",
            name: "Google Cloud Digital Leader",
            description:
              "Foundational certification covering Google Cloud products, services, and digital transformation.",
          },
        ],
      },

      {
        name: "Associate",
        exams: [
          {
            code: "ACE",
            name: "Associate Cloud Engineer",
            description:
              "Validates skills in deploying, managing, and operating applications on Google Cloud.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "PCA",
            name: "Professional Cloud Architect",
            description:
              "Validates advanced skills in designing secure, scalable, and highly available Google Cloud solutions.",
          },
          {
            code: "PDE",
            name: "Professional Data Engineer",
            description:
              "Validates skills in designing and building data processing systems on Google Cloud.",
          },
          {
            code: "PCSE",
            name: "Professional Cloud Security Engineer",
            description:
              "Validates skills in designing and implementing secure Google Cloud infrastructure.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Google Cloud skills.",
      "Build a cloud engineering career.",
      "Improve your professional profile.",
      "Demonstrate Google Cloud expertise.",
    ],

    careerPaths: {
      "Cloud Engineer": ["CDL", "ACE"],
      "Cloud Architect": ["CDL", "ACE", "PCA"],
      "Data Engineer": ["CDL", "PDE"],
      Security: ["CDL", "PCSE"],
    },
  },

  // =====================================================
  // RED HAT
  // =====================================================

  redhat: {
    title: "Red Hat Certification Exams",
    description:
      "Explore Red Hat certifications covering Linux administration, automation, engineering, and enterprise technologies.",

    levels: [
      {
        name: "Core",
        exams: [
          {
            code: "EX200",
            name: "Red Hat Certified System Administrator",
            description:
              "Validates core Linux system administration skills using Red Hat Enterprise Linux.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "EX294",
            name: "Red Hat Certified Engineer",
            description:
              "Advanced Linux administration and automation using Ansible.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "RHCA",
            name: "Red Hat Certified Architect",
            description:
              "Advanced Red Hat certification path for experienced enterprise Linux professionals.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Linux administration skills.",
      "Build a Linux career.",
      "Improve your professional profile.",
      "Demonstrate enterprise Linux expertise.",
    ],

    careerPaths: {
      "Linux Administrator": ["EX200"],
      "Linux Engineer": ["EX200", "EX294"],
      DevOps: ["EX200", "EX294"],
      "Enterprise Architect": ["EX200", "EX294", "RHCA"],
    },
  },

  // =====================================================
  // COMPTIA
  // =====================================================

  comptia: {
    title: "CompTIA Certification Exams",
    description:
      "Explore CompTIA vendor-neutral certifications covering IT support, networking, cybersecurity, cloud, and infrastructure.",

    levels: [
      {
        name: "Core",
        exams: [
          {
            code: "A+",
            name: "CompTIA A+",
            description:
              "Foundational IT certification covering hardware, software, troubleshooting, operating systems, and support.",
          },
          {
            code: "Network+",
            name: "CompTIA Network+",
            description:
              "Covers networking concepts, infrastructure, operations, troubleshooting, and security.",
          },
          {
            code: "Security+",
            name: "CompTIA Security+",
            description:
              "Foundational cybersecurity certification covering threats, risk, security architecture, and operations.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "CySA+",
            name: "CompTIA CySA+",
            description:
              "Cybersecurity analytics, threat detection, vulnerability management, and incident response.",
          },
          {
            code: "PenTest+",
            name: "CompTIA PenTest+",
            description:
              "Penetration testing, vulnerability assessment, and ethical hacking concepts.",
          },
        ],
      },
    ],

    whyCertify: [
      "Vendor-neutral IT certifications.",
      "Build a career in IT and cybersecurity.",
      "Improve your professional profile.",
      "Demonstrate practical IT knowledge.",
    ],

    careerPaths: {
      "IT Support": ["A+"],
      Networking: ["A+", "Network+"],
      Cybersecurity: ["Security+", "CySA+", "PenTest+"],
      "Network Security": ["Network+", "Security+"],
    },
  },

  // =====================================================
  // CISCO
  // =====================================================

  cisco: {
    title: "Cisco Certification Exams",
    description:
      "Explore Cisco certifications covering networking, security, infrastructure, automation, and enterprise technologies.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "200-301",
            name: "Cisco Certified Network Associate (CCNA)",
            description:
              "Covers networking fundamentals, IP connectivity, network access, security fundamentals, and automation.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "CCNP",
            name: "Cisco Certified Network Professional",
            description:
              "Advanced networking certification covering enterprise networking, security, and automation.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate networking skills.",
      "Build a network engineering career.",
      "Improve your professional profile.",
      "Demonstrate enterprise networking knowledge.",
    ],

    careerPaths: {
      "Network Engineer": ["200-301", "CCNP"],
      "Network Administrator": ["200-301"],
      "Network Security": ["200-301", "CCNP"],
    },
  },

  // =====================================================
  // FORTINET
  // =====================================================

  fortinet: {
    title: "Fortinet Certification Exams",
    description:
      "Explore Fortinet certifications covering network security, FortiGate administration, and security operations.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "NSE 1",
            name: "Fortinet Certified Fundamentals",
            description:
              "Introduces cybersecurity concepts and Fortinet security technologies.",
          },
          {
            code: "NSE 2",
            name: "Fortinet Certified Associate",
            description:
              "Covers foundational network security concepts and Fortinet solutions.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "NSE 4",
            name: "Fortinet Certified Professional",
            description:
              "Validates FortiGate configuration, administration, and security management skills.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "NSE 5",
            name: "Fortinet Certified Solution Specialist",
            description:
              "Advanced Fortinet security operations and security management skills.",
          },
          {
            code: "NSE 6",
            name: "Fortinet Certified Specialist",
            description:
              "Advanced configuration and management of Fortinet security products.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate network security skills.",
      "Build a cybersecurity career.",
      "Improve your professional profile.",
      "Demonstrate Fortinet security expertise.",
    ],

    careerPaths: {
      "Network Security": ["NSE 2", "NSE 4"],
      "Security Administration": ["NSE 4", "NSE 5"],
      "Security Operations": ["NSE 4", "NSE 5", "NSE 6"],
    },
  },

  // =====================================================
  // SNOWFLAKE
  // =====================================================

  snowflake: {
    title: "Snowflake Certification Exams",
    description:
      "Explore Snowflake certifications covering cloud data platforms, data engineering, analytics, and architecture.",

    levels: [
      {
        name: "Core",
        exams: [
          {
            code: "COF-C02",
            name: "SnowPro Core",
            description:
              "Validates knowledge of Snowflake architecture, security, data loading, performance, and administration.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "SnowPro Advanced",
            name: "SnowPro Advanced Certifications",
            description:
              "Advanced certifications for Snowflake architecture, data engineering, and specialized data roles.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate cloud data platform skills.",
      "Build a data engineering career.",
      "Improve your professional profile.",
      "Demonstrate Snowflake expertise.",
    ],

    careerPaths: {
      "Data Engineer": ["COF-C02"],
      "Data Analyst": ["COF-C02"],
      "Cloud Data Architect": ["COF-C02"],
    },
  },

  // =====================================================
  // SALESFORCE
  // =====================================================

  salesforce: {
    title: "Salesforce Certification Exams",
    description:
      "Explore Salesforce certifications covering CRM administration, development, consulting, and architecture.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "ADM-201",
            name: "Salesforce Certified Administrator",
            description:
              "Validates Salesforce configuration, security, automation, data management, and administration skills.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "Platform Developer",
            name: "Salesforce Platform Developer",
            description:
              "Covers Salesforce application development and platform customization.",
          },
          {
            code: "Consultant",
            name: "Salesforce Certified Consultant",
            description:
              "Validates Salesforce implementation and consulting skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate CRM platform skills.",
      "Build a Salesforce career.",
      "Improve your professional profile.",
      "Demonstrate Salesforce expertise.",
    ],

    careerPaths: {
      Administrator: ["ADM-201"],
      Developer: ["ADM-201", "Platform Developer"],
      Consultant: ["ADM-201", "Consultant"],
    },
  },

  // =====================================================
  // DATABRICKS
  // =====================================================

  databricks: {
    title: "Databricks Certification Exams",
    description:
      "Explore Databricks certifications covering data engineering, analytics, machine learning, and the Lakehouse platform.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "Data Engineer Associate",
            name: "Databricks Data Engineer Associate",
            description:
              "Validates foundational data engineering skills using the Databricks Lakehouse platform.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "Data Engineer Professional",
            name: "Databricks Data Engineer Professional",
            description:
              "Advanced data engineering skills including production pipelines and optimization.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate modern data engineering skills.",
      "Build a data engineering career.",
      "Improve your professional profile.",
      "Demonstrate Lakehouse platform knowledge.",
    ],

    careerPaths: {
      "Data Engineer": [
        "Data Engineer Associate",
        "Data Engineer Professional",
      ],
      "Data Analytics": ["Data Engineer Associate"],
    },
  },

  // =====================================================
  // KUBERNETES
  // =====================================================

  kubernetes: {
    title: "Kubernetes Certification Exams",
    description:
      "Explore Kubernetes certifications covering cluster administration, application development, and security.",

    levels: [
      {
        name: "Administrator",
        exams: [
          {
            code: "CKA",
            name: "Certified Kubernetes Administrator",
            description:
              "Validates practical skills in Kubernetes cluster administration and operations.",
          },
        ],
      },

      {
        name: "Developer",
        exams: [
          {
            code: "CKAD",
            name: "Certified Kubernetes Application Developer",
            description:
              "Validates skills in developing and deploying applications on Kubernetes.",
          },
        ],
      },

      {
        name: "Security",
        exams: [
          {
            code: "CKS",
            name: "Certified Kubernetes Security Specialist",
            description:
              "Validates Kubernetes security configuration and operational security skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Kubernetes skills.",
      "Build a DevOps career.",
      "Improve your cloud-native skills.",
      "Demonstrate container orchestration expertise.",
    ],

    careerPaths: {
      "Kubernetes Administrator": ["CKA"],
      "Cloud Native Developer": ["CKA", "CKAD"],
      "Kubernetes Security": ["CKA", "CKS"],
      DevOps: ["CKA", "CKAD", "CKS"],
    },
  },

  // =====================================================
  // VMWARE
  // =====================================================

  vmware: {
    title: "VMware Certification Exams",
    description:
      "Explore VMware certifications covering virtualization, data center, cloud infrastructure, and enterprise technologies.",

    levels: [
      {
        name: "Professional",
        exams: [
          {
            code: "VCP",
            name: "VMware Certified Professional",
            description:
              "Validates skills in VMware virtualization and data center technologies.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "VCAP",
            name: "VMware Certified Advanced Professional",
            description:
              "Advanced VMware skills across architecture, design, and deployment.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate virtualization skills.",
      "Build a cloud infrastructure career.",
      "Improve your professional profile.",
      "Demonstrate enterprise virtualization expertise.",
    ],

    careerPaths: {
      Virtualization: ["VCP", "VCAP"],
      "Data Center": ["VCP", "VCAP"],
      "Cloud Infrastructure": ["VCP"],
    },
  },

  // =====================================================
  // JUNIPER
  // =====================================================

  juniper: {
    title: "Juniper Networks Certification Exams",
    description:
      "Explore Juniper certifications covering networking, routing, switching, security, and Junos technologies.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "JNCIA-Junos",
            name: "JNCIA-Junos",
            description:
              "Entry-level certification covering Junos OS and fundamental networking concepts.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "JNCIP",
            name: "Juniper Networks Certified Professional",
            description:
              "Advanced Junos networking and troubleshooting skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Juniper networking skills.",
      "Build a network engineering career.",
      "Improve your professional profile.",
      "Demonstrate Junos expertise.",
    ],

    careerPaths: {
      Networking: ["JNCIA-Junos", "JNCIP"],
      "Network Engineer": ["JNCIA-Junos", "JNCIP"],
      "Network Administrator": ["JNCIA-Junos"],
    },
  },

  // =====================================================
  // ORACLE
  // =====================================================

  oracle: {
    title: "Oracle Certification Exams",
    description:
      "Explore Oracle certifications covering cloud infrastructure, databases, enterprise applications, and development.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "OCI-Associate",
            name: "Oracle Cloud Infrastructure Architect Associate",
            description:
              "Validates foundational Oracle Cloud Infrastructure architecture and deployment skills.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "OCI-Professional",
            name: "Oracle Cloud Infrastructure Architect Professional",
            description:
              "Advanced Oracle Cloud infrastructure architecture and design skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Oracle Cloud skills.",
      "Build a cloud architecture career.",
      "Improve your professional profile.",
      "Demonstrate enterprise cloud expertise.",
    ],

    careerPaths: {
      "Cloud Architect": ["OCI-Associate", "OCI-Professional"],
      "Cloud Engineer": ["OCI-Associate"],
      "Enterprise IT": ["OCI-Associate", "OCI-Professional"],
    },
  },

  // =====================================================
  // SERVICENOW
  // =====================================================

  servicenow: {
    title: "ServiceNow Certification Exams",
    description:
      "Explore ServiceNow certifications covering IT service management, administration, application development, and enterprise workflows.",

    levels: [
      {
        name: "Fundamentals",
        exams: [
          {
            code: "CSA",
            name: "ServiceNow Certified System Administrator",
            description:
              "Validates ServiceNow configuration, administration, security, and platform management skills.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "CAD",
            name: "ServiceNow Certified Application Developer",
            description:
              "Validates application development and customization skills on the ServiceNow platform.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate ServiceNow platform skills.",
      "Build an ITSM career.",
      "Improve your professional profile.",
      "Demonstrate enterprise workflow expertise.",
    ],

    careerPaths: {
      "ServiceNow Administrator": ["CSA"],
      "ServiceNow Developer": ["CSA", "CAD"],
      ITSM: ["CSA"],
    },
  },

  // =====================================================
  // ALIBABA CLOUD
  // =====================================================

  alibaba: {
    title: "Alibaba Cloud Certification Exams",
    description:
      "Explore Alibaba Cloud certifications covering cloud computing, architecture, networking, and infrastructure.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "ACA",
            name: "Alibaba Cloud Certified Associate",
            description:
              "Foundational Alibaba Cloud services, infrastructure, and cloud computing concepts.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "ACP",
            name: "Alibaba Cloud Certified Professional",
            description:
              "Advanced Alibaba Cloud architecture and infrastructure skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Alibaba Cloud skills.",
      "Build a cloud computing career.",
      "Improve your professional profile.",
      "Demonstrate cloud infrastructure expertise.",
    ],

    careerPaths: {
      "Cloud Engineer": ["ACA", "ACP"],
      "Cloud Architect": ["ACA", "ACP"],
      "Cloud Administrator": ["ACA"],
    },
  },

  // =====================================================
  // DOCKER
  // =====================================================

  docker: {
    title: "Docker Certification Exams",
    description:
      "Explore Docker certification paths covering containers, images, networking, security, and DevOps workflows.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "DCA",
            name: "Docker Certified Associate",
            description:
              "Validates practical Docker containerization and management skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Docker skills.",
      "Build a DevOps career.",
      "Improve containerization knowledge.",
      "Demonstrate practical Docker expertise.",
    ],

    careerPaths: {
      DevOps: ["DCA"],
      "Container Engineer": ["DCA"],
      "Cloud Engineer": ["DCA"],
    },
  },

  // =====================================================
  // GIT
  // =====================================================

  git: {
    title: "Git Certification Exams",
    description:
      "Explore Git and GitLab-related certification paths covering source control, collaboration, and DevOps workflows.",

    levels: [
      {
        name: "Core",
        exams: [
          {
            code: "GIT",
            name: "Git Version Control",
            description:
              "Covers source control, branching, merging, collaboration, and Git workflows.",
          },
        ],
      },

      {
        name: "DevOps",
        exams: [
          {
            code: "GIT-CI",
            name: "Git CI/CD & DevOps",
            description:
              "Covers source control workflows, automation, and CI/CD practices.",
          },
        ],
      },
    ],

    whyCertify: [
      "Improve source control skills.",
      "Build a software development career.",
      "Improve DevOps knowledge.",
      "Demonstrate Git workflow expertise.",
    ],

    careerPaths: {
      "Software Developer": ["GIT"],
      DevOps: ["GIT", "GIT-CI"],
      "CI/CD Engineer": ["GIT-CI"],
    },
  },

  // =====================================================
  // HUAWEI
  // =====================================================

  huawei: {
    title: "Huawei Certification Exams",
    description:
      "Explore Huawei ICT certifications covering networking, routing, switching, cloud, and enterprise infrastructure.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "HCIA",
            name: "Huawei Certified ICT Associate",
            description:
              "Foundational Huawei networking and ICT technology certification.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "HCIP",
            name: "Huawei Certified ICT Professional",
            description:
              "Advanced networking and enterprise infrastructure skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate Huawei networking skills.",
      "Build a network engineering career.",
      "Improve your professional profile.",
      "Demonstrate enterprise networking knowledge.",
    ],

    careerPaths: {
      Networking: ["HCIA", "HCIP"],
      "Network Engineer": ["HCIA", "HCIP"],
      "Network Administrator": ["HCIA"],
    },
  },

  // =====================================================
  // MONGODB
  // =====================================================

  mongodb: {
    title: "MongoDB Certification Exams",
    description:
      "Explore MongoDB certification paths covering database development, administration, data modeling, and application development.",

    levels: [
      {
        name: "Developer",
        exams: [
          {
            code: "MongoDB-Developer",
            name: "MongoDB Developer Certification",
            description:
              "Validates skills in building applications using MongoDB.",
          },
        ],
      },

      {
        name: "Database",
        exams: [
          {
            code: "MongoDB-DBA",
            name: "MongoDB Database Administration",
            description:
              "Covers database deployment, administration, monitoring, and operations.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate MongoDB skills.",
      "Build a backend development career.",
      "Improve your database knowledge.",
      "Demonstrate NoSQL database expertise.",
    ],

    careerPaths: {
      "Backend Developer": ["MongoDB-Developer"],
      "Database Developer": ["MongoDB-Developer"],
      "Database Administrator": ["MongoDB-DBA"],
    },
  },

  // =====================================================
  // NUTANIX
  // =====================================================

  nutanix: {
    title: "Nutanix Certification Exams",
    description:
      "Explore Nutanix certifications covering hyperconverged infrastructure, virtualization, cloud, and enterprise infrastructure.",

    levels: [
      {
        name: "Professional",
        exams: [
          {
            code: "NCP",
            name: "Nutanix Certified Professional",
            description:
              "Validates skills in Nutanix infrastructure, virtualization, and cloud management.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "NCM",
            name: "Nutanix Certified Master",
            description:
              "Advanced Nutanix infrastructure and enterprise cloud skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate enterprise cloud infrastructure skills.",
      "Build a virtualization career.",
      "Improve your professional profile.",
      "Demonstrate Nutanix expertise.",
    ],

    careerPaths: {
      "Cloud Infrastructure": ["NCP", "NCM"],
      Virtualization: ["NCP"],
      Multicloud: ["NCP", "NCM"],
    },
  },

  // =====================================================
  // PALO ALTO
  // =====================================================

  paloalto: {
    title: "Palo Alto Networks Certification Exams",
    description:
      "Explore Palo Alto Networks certifications covering network security, firewalls, cybersecurity, and security operations.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "PCNSA",
            name: "Palo Alto Networks Certified Network Security Administrator",
            description:
              "Validates foundational Palo Alto Networks firewall administration skills.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "PCNSE",
            name: "Palo Alto Networks Certified Network Security Engineer",
            description:
              "Validates advanced skills in Palo Alto Networks security technologies.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate network security skills.",
      "Build a cybersecurity career.",
      "Improve your professional profile.",
      "Demonstrate firewall security expertise.",
    ],

    careerPaths: {
      "Network Security": ["PCNSA", "PCNSE"],
      "Security Engineer": ["PCNSA", "PCNSE"],
      "Firewall Administrator": ["PCNSA"],
    },
  },

  // =====================================================
  // SAP
  // =====================================================

  sap: {
    title: "SAP Certification Exams",
    description:
      "Explore SAP certifications covering enterprise applications, cloud, integration, business technology, and ERP.",

    levels: [
      {
        name: "Associate",
        exams: [
          {
            code: "SAP-ASSOCIATE",
            name: "SAP Certified Associate",
            description:
              "Validates foundational SAP technology and enterprise application skills.",
          },
        ],
      },

      {
        name: "Professional",
        exams: [
          {
            code: "SAP-PROFESSIONAL",
            name: "SAP Certified Professional",
            description:
              "Advanced SAP technology, integration, and enterprise solution skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate SAP enterprise technology skills.",
      "Build an enterprise IT career.",
      "Improve your professional profile.",
      "Demonstrate SAP expertise.",
    ],

    careerPaths: {
      "SAP Consultant": ["SAP-ASSOCIATE", "SAP-PROFESSIONAL"],
      "Enterprise IT": ["SAP-ASSOCIATE"],
      "SAP Cloud": ["SAP-ASSOCIATE", "SAP-PROFESSIONAL"],
    },
  },

  // =====================================================
  // IBM
  // =====================================================

  ibm: {
    title: "IBM Certification Exams",
    description:
      "Explore IBM certifications covering cloud, AI, data, security, architecture, and enterprise technologies.",

    levels: [
      {
        name: "Professional",
        exams: [
          {
            code: "IBM-CLOUD",
            name: "IBM Cloud Certification",
            description:
              "Validates knowledge and skills related to IBM Cloud technologies.",
          },
        ],
      },

      {
        name: "Advanced",
        exams: [
          {
            code: "IBM-ARCH",
            name: "IBM Certified Solution Architect",
            description:
              "Advanced enterprise architecture and cloud solution design skills.",
          },
        ],
      },
    ],

    whyCertify: [
      "Validate IBM technology skills.",
      "Build a cloud or enterprise IT career.",
      "Improve your professional profile.",
      "Demonstrate IBM technology expertise.",
    ],

    careerPaths: {
      "Cloud Engineer": ["IBM-CLOUD"],
      "Cloud Architect": ["IBM-CLOUD", "IBM-ARCH"],
      "Enterprise Architect": ["IBM-ARCH"],
    },
  },
};

// =====================================================
// HELPER FUNCTION
// =====================================================

export const getExamGuide = (guideId) => {
  if (!guideId) return null;

  const normalizedId = String(guideId)
    .trim()
    .toLowerCase();

  return examGuides[normalizedId] || null;
};

// Get all exam guides
export const getAllExamGuides = () => {
  return examGuides;
};


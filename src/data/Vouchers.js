// src/data/vouchers.js
import { examGuides } from "./examData";

export const vouchersData = [
  // ========== AWS ==========
  {
    _id: "voucher-1",
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    shortName: "AWS Solutions Architect",
    code: "SAA-C03",
    logo: "aws",
    category: "Cloud",
    officialPrice: 150.0,
    youPay: 105.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "aws",
    description:
      "AWS Certified Solutions Architect - Associate (SAA-C03) exam voucher. Design and deploy scalable, highly available systems on AWS.",
  },

  // ========== MICROSOFT AZURE ==========
  {
    _id: "voucher-2",
    id: 2,
    name: "Microsoft Azure Administrator Associate",
    shortName: "Azure Administrator",
    code: "AZ-104",
    logo: "microsoft",
    category: "Cloud",
    officialPrice: 165.0,
    youPay: 115.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "azure",
    description:
      "Microsoft Azure Administrator Associate (AZ-104) exam voucher. Manage and maintain Azure environments.",
  },

  // ========== GOOGLE CLOUD ==========
  {
    _id: "voucher-3",
    id: 3,
    name: "Google Cloud Professional Cloud Architect",
    shortName: "Google Cloud Architect",
    code: "GCP-PCA",
    logo: "google",
    category: "Cloud",
    officialPrice: 200.0,
    youPay: 140.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "google",
    description:
      "Google Cloud Professional Cloud Architect (PCA) exam voucher. Design, develop, and manage secure, scalable solutions on GCP.",
  },

  // ========== RED HAT ==========
  {
    _id: "voucher-4",
    id: 4,
    name: "Red Hat Certified System Administrator",
    shortName: "Red Hat System Admin",
    code: "EX200",
    logo: "redhat",
    category: "Linux",
    officialPrice: 400.0,
    youPay: 280.0,
    discount:60,
    popular: true,
    instantDelivery: true,
    guideId: "redhat",
    description:
      "Red Hat Certified System Administrator (EX200) exam voucher. Validate your Linux system administration skills on Red Hat Enterprise Linux.",
  },

  // ========== COMPTIA ==========
  {
    _id: "voucher-5",
    id: 5,
    name: "CompTIA Security+",
    shortName: "CompTIA Security+",
    code: "SY0-701",
    logo: "comptia",
    category: "Security",
    officialPrice: 392.0,
    youPay: 274.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "comptia",
    description:
      "CompTIA Security+ (SY0-701) exam voucher. Validate your security fundamentals, threat management, and compliance skills.",
  },

  // ========== CISCO ==========
  {
    _id: "voucher-6",
    id: 6,
    name: "Cisco Certified Network Associate",
    shortName: "CCNA",
    code: "200-301",
    logo: "cisco",
    category: "Networking",
    officialPrice: 300.0,
    youPay: 210.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "cisco",
    description:
      "Cisco Certified Network Associate (CCNA) exam voucher. Learn network fundamentals, IP connectivity, security, and automation.",
  },

  // ========== DATABRICKS ==========
  {
    _id: "voucher-7",
    id: 7,
    name: "Databricks Certified Data Engineer Associate",
    shortName: "Databricks Data Engineer",
    code: "DB-DEA",
    logo: "databricks",
    category: "Data",
    officialPrice: 200.0,
    youPay: 140.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "databricks",
    description:
      "Databricks Certified Data Engineer Associate exam voucher. Validate processing and data pipeline engineering skills.",
  },

  // ========== KUBERNETES ==========
  {
    _id: "voucher-8",
    id: 8,
    name: "Certified Kubernetes Administrator",
    shortName: "CKA (Kubernetes)",
    code: "CKA",
    logo: "kubernetes",
    category: "DevOps",
    officialPrice: 395.0,
    youPay: 276.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "kubernetes",
    description:
      "Certified Kubernetes Administrator (CKA) exam voucher. Demonstrate competence in Kubernetes administration and management.",
  },

  // ========== VMWARE ==========
  {
    _id: "voucher-9",
    id: 9,
    name: "VMware Certified Professional - Data Center Virtualization",
    shortName: "VMware VCP-DCV",
    code: "2V0-21.23",
    logo: "vmware",
    category: "Virtualization",
    officialPrice: 250.0,
    youPay: 175.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "vmware",
    description:
      "VMware Certified Professional - Data Center Virtualization exam voucher. Demonstrate skills in vSphere environments.",
  },

  // ========== COMPTIA (MORE) ==========
  {
    _id: "voucher-10",
    id: 10,
    name: "CompTIA Network+",
    shortName: "CompTIA Network+",
    code: "N10-008",
    logo: "comptia",
    category: "Networking",
    officialPrice: 348.0,
    youPay: 244.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "comptia",
    description:
      "CompTIA Network+ (N10-008) exam voucher. Learn networking fundamentals, infrastructure, operations, and security.",
  },
  

  // ========== JUNIPER ==========
  {
    _id: "voucher-11",
    id: 11,
    name: "Juniper Networks Certified Associate - Junos",
    shortName: "JNCIA-Junos",
    code: "JN0-104",
    logo: "juniper",
    category: "Networking",
    officialPrice: 200.0,
    youPay: 140.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "juniper",
    description:
      "Juniper Networks Certified Associate (JNCIA-Junos) exam voucher. Entry-level networking fundamentals for Junos OS.",
  },

  // ========== FORTINET ==========
  {
    _id: "voucher-12",
    id: 12,
    name: "Fortinet NSE 4 - FortiOS",
    shortName: "Fortinet NSE 4",
    code: "NSE4",
    logo: "fortinet",
    category: "Security",
    officialPrice: 400.0,
    youPay: 280.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "fortinet",
    description:
      "Fortinet NSE 4 (FortiOS) exam voucher. Validate your skills in Fortinet security solutions and network security.",
  },

  // ========== SNOWFLAKE ==========
  {
    _id: "voucher-13",
    id: 13,
    name: "SnowPro Core Certification",
    shortName: "SnowPro Core",
    code: "COF-C02",
    logo: "snowflake",
    category: "Data",
    officialPrice: 350.0,
    youPay: 245.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "snowflake",
    description:
      "SnowPro Core Certification (COF-C02) exam voucher. Validate your understanding of Snowflake architecture, security, and performance.",
  },

  // ========== SALESFORCE ==========
  {
    _id: "voucher-14",
    id: 14,
    name: "Salesforce Certified Administrator",
    shortName: "Salesforce Admin",
    code: "ADM-201",
    logo: "salesforce",
    category: "CRM",
    officialPrice: 250.0,
    youPay: 175.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "salesforce",
    description:
      "Salesforce Certified Administrator (ADM-201) exam voucher. Validate your skills in Salesforce configuration, automation, and user management.",
  },

  // ========== ORACLE ==========
  {
    _id: "voucher-15",
    id: 15,
    name: "Oracle Cloud Infrastructure Architect Associate",
    shortName: "Oracle OCI Architect",
    code: "1Z0-1072",
    logo: "oracle",
    category: "Cloud",
    officialPrice: 245.0,
    youPay: 170.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "oracle",
    description:
      "Oracle Cloud Infrastructure Architect Associate exam voucher. Design and deploy Oracle Cloud solutions.",
  },

  // ========== SERVICENOW ==========
  {
    _id: "voucher-16",
    id: 16,
    name: "ServiceNow Certified System Administrator",
    shortName: "ServiceNow CSA",
    code: "CSA",
    logo: "servicenow",
    category: "ITSM",
    officialPrice: 300.0,
    youPay: 210.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "servicenow",
    description:
      "ServiceNow Certified System Administrator (CSA) exam voucher. Configure, implement, and maintain ServiceNow platform.",
  },

  // ========== ALIBABA CLOUD ==========
  {
    _id: "voucher-17",
    id: 17,
    name: "Alibaba Cloud Certified Associate",
    shortName: "Alibaba ACA",
    code: "ACA-Cloud1",
    logo: "alibaba",
    category: "Cloud",
    officialPrice: 120.0,
    youPay: 84.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "alibaba",
    description:
      "Alibaba Cloud Certified Associate exam voucher. Demonstrate basic knowledge of Alibaba Cloud core services.",
  },

  // ========== DOCKER ==========
  {
    _id: "voucher-18",
    id: 18,
    name: "Docker Certified Associate",
    shortName: "Docker DCA",
    code: "DCA",
    logo: "docker",
    category: "DevOps",
    officialPrice: 195.0,
    youPay: 136.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "docker",
    description:
      "Docker Certified Associate (DCA) exam voucher. Validate container orchestration, image creation, and security skills.",
  },

  // ========== GIT / GITLAB ==========
  {
    _id: "voucher-19",
    id: 19,
    name: "GitLab Certified Associate",
    shortName: "GitLab Associate",
    code: "GL-ASSOC",
    logo: "git",
    category: "DevOps",
    officialPrice: 150.0,
    youPay: 105.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "git",
    description:
      "GitLab Certified Associate exam voucher. Demonstrate proficiency in Git fundamentals, CI/CD, and DevOps workflows.",
  },

  // ========== HUAWEI ==========
  {
    _id: "voucher-20",
    id: 20,
    name: "Huawei Certified ICT Associate",
    shortName: "Huawei HCIA",
    code: "HCIA-Datacom",
    logo: "huawel",
    category: "Networking",
    officialPrice: 200.0,
    youPay: 140.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "huawei",
    description:
      "Huawei Certified ICT Associate (HCIA) exam voucher. Master basic routing, switching, and network engineering.",
  },

  // ========== MONGODB ==========
  {
    _id: "voucher-21",
    id: 21,
    name: "MongoDB Certified Developer Associate",
    shortName: "MongoDB Developer",
    code: "C100DEV",
    logo: "mongodb",
    category: "Database",
    officialPrice: 150.0,
    youPay: 105.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "mongodb",
    description:
      "MongoDB Certified Developer Associate exam voucher. Validate skills in building applications with MongoDB.",
  },

  // ========== NUTANIX ==========
  {
    _id: "voucher-22",
    id: 22,
    name: "Nutanix Certified Professional - Multicloud Infrastructure",
    shortName: "Nutanix NCP-MCI",
    code: "NCP-MCI",
    logo: "nutanix",
    category: "Virtualization",
    officialPrice: 199.0,
    youPay: 139.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "nutanix",
    description:
      "Nutanix Certified Professional (NCP-MCI) exam voucher. Demonstrate ability to deploy and manage Nutanix Enterprise Cloud.",
  },

  // ========== PALO ALTO NETWORKS ==========
  {
    _id: "voucher-23",
    id: 23,
    name: "Palo Alto Networks Certified Network Security Engineer",
    shortName: "Palo Alto PCNSE",
    code: "PCNSE",
    logo: "PaloAlto",
    category: "Security",
    officialPrice: 175.0,
    youPay: 122.0,
    discount: 60,
    popular: true,
    instantDelivery: true,
    guideId: "paloalto",
    description:
      "Palo Alto Networks Certified Network Security Engineer (PCNSE) exam voucher. Demonstrate expertise in Next-Generation Firewalls.",
  },

  // ========== SAP ==========
  {
    _id: "voucher-24",
    id: 24,
    name: "SAP Certified Associate - Integration Associate",
    shortName: "SAP Associate",
    code: "C_CPI_15",
    logo: "sap",
    category: "ERP",
    officialPrice: 250.0,
    youPay: 175.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "sap",
    description:
      "SAP Certified Application Associate exam voucher. Validate expertise in SAP Integration Suite and cloud solutions.",
  },

  // ========== IBM ==========
  {
    _id: "voucher-25",
    id: 25,
    name: "IBM Certified Solution Architect - Cloud",
    shortName: "IBM Cloud Architect",
    code: "C1000-118",
    logo: "IBM",
    category: "Cloud",
    officialPrice: 200.0,
    youPay: 140.0,
    discount: 60,
    popular: false,
    instantDelivery: true,
    guideId: "ibm",
    description:
      "IBM Certified Solution Architect - Cloud v4 exam voucher. Design, plan, and architect secure IBM Cloud solutions.",
  },
];
import { title } from "process";

// lib/projects-data.ts
export const projects = [
  {
    id: "myagentmd",
    title: "My Agent MD",
    category: "Web Development",
    duration: "1 Day",
    description:
      "Web untuk generate Agent.MD sesuai dengan kebutuhanmu",
    fullDescription:
      "My Agent MD adalah proyek yang dikembangkan untuk memberikan pengalaman bagi pengguna untuk membuat Agent.MD sesuai dengan kebutuhan mereka",
    background:
      "My Agent MD adalah proyek yang dikembangkan untuk memberikan pengalaman bagi pengguna untuk membuat Agent.MD sesuai dengan kebutuhan mereka",
    objectives: [
      "Memberikan pengalaman bagi pengguna untuk membuat Agent.MD sesuai dengan kebutuhan mereka",
    ],
    images: ["/project/myagentmd.png"],
    image: "/project/myagentmd.png",
    technologies: [
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveLink: "https://myagentmd.vercel.app/",
    githubLink: "https://github.com/KwikAndreas/myagentmd",
    featured: true,
    stats: {
      users: "10+",
      completionDate: "July 2026",
      rating: 4.7,
    },
    status: "Live",
  },
    {
    id: "revdadas",
    title: "Revenue Daerah Cerdas",
    category: "AI Development",
    duration: "3 Months",
    description:
      "Model Precompute untuk menghitung potensi pajak dan retribusi daerah",
    fullDescription:
      "Model Precompute untuk menghitung potensi pajak dan retribusi daerah",
    background:
      "RevDaDas adalah proyek pemerintah provinsi kalimantan barat.",
    objectives: [
      "Pengguna bisa melatih Model dan membuat model memiliki Knowledge yang diturunkan dan dipersonalisasikan pengguna",
      "Menggabungkan AI dengan Reinforcement Learning, yang belajar dari respon sebelumnya yang masih bergatung dengan LLM API key",
    ],
    images: ["/project/revdadas.png"],
    image: "/project/revdadas.png",
    technologies: [
      "Python",
      "Numpy",
      "Prophet",
      "Scikit-Learn",
      "NextJS",
      "Recharts",
      "React",
      "Vanilla CSS",
      "html2pdf",
    ],
    liveLink: "https://revdadas.vercel.app/",
    githubLink: "https://github.com/KwikAndreas/revdadas",
    featured: true,
    stats: {
      users: "30+",
      completionDate: "July 2026",
      rating: 4.5,
    },
    status: "Hackathon",
  },
  {
    id: "legacybot",
    title: "Legacy Bot",
    category: "AI Development",
    duration: "1 Weeks",
    description:
      "AI dengan Reinforcement Learning, yang belajar dari respon sebelumnya yang masih bergatung dengan LLM API key",
    fullDescription:
      "AI dengan Reinforcement Learning, yang belajar dari respon sebelumnya yang masih bergatung dengan LLM API key",
    background:
      "LegacyBot adalah proyek game RPG yang dikembangkan untuk memberikan pengalaman bermain yang mendalam dan imersif. Game ini dirancang dengan fokus pada mekanik crafting yang kompleks, sistem quest yang kaya, dan dunia terbuka yang luas untuk dijelajahi oleh para pemain.",
    objectives: [
      "Pengguna bisa melatih Model dan membuat model memiliki Knowledge yang diturunkan dan dipersonalisasikan pengguna",
      "Menggabungkan AI dengan Reinforcement Learning, yang belajar dari respon sebelumnya yang masih bergatung dengan LLM API key",
    ],
    images: ["/project/legacybot.png"],
    image: "/project/legacybot.png",
    technologies: [
      "Python",
      "Gemini API",
      "LangChain",
      "LangGraph",
    ],
    liveLink: "",
    githubLink: "https://github.com/KwikAndreas/legacybot",
    featured: true,
    stats: {
      users: "3+",
      completionDate: "June 2026",
      rating: 4.9,
    },
    status: "Draft",
  },
  {
    id: "pingx",
    title: "PingX",
    category: "Node Package Manager",
    duration: "1 Weeks",
    description:
      "Node.js package untuk monitoring latency server dan koneksi jaringan dengan tampilan yang sudah dioptimalkan.",
    fullDescription:
      "Node.js package untuk monitoring latency server dan koneksi jaringan dengan tampilan yang sudah dioptimalkan.",
    background:
      "PingX adalah paket Node.js open source yang dirancang untuk memantau latency server dan koneksi jaringan secara real-time. Paket ini menyediakan antarmuka yang mudah digunakan dan visualisasi data yang informatif untuk membantu pengembang mengidentifikasi dan mengatasi masalah jaringan dengan cepat.",
    objectives: [
      "Menyediakan alat monitoring latency yang mudah digunakan",
      "Memberikan visualisasi data yang informatif",
    ],
    images: ["/project/PingX.webp"],
    image: "/project/PingX.webp",
    technologies: ["Node.js", "Javascript"],
    liveLink: "https://www.npmjs.com/package/@xavorus/pingx",
    githubLink: "https://github.com/KwikAndreas/pingx",
    featured: false,
    stats: {
      users: "415+",
      completionDate: "November 2025",
      rating: 4.9,
    },
    status: "Live",
  },
  {
    id: "kelasbios",
    title: "Kelas BIOS",
    category: "Web Development",
    client: "Organization Project",
    duration: "2 days",
    description:
      "Platform pendaftaran online untuk anggota dan sesi kelas Himpunan Mahasiswa Informatika (HIMA BIOS).",
    fullDescription:
      "Platform pendaftaran online yang memudahkan calon anggota HIMA BIOS untuk mendaftar sebagai anggota serta mengikuti sesi kelas dan workshop yang diselenggarakan oleh organisasi.",
    background:
      "HIMA BIOS membutuhkan sistem pendaftaran digital untuk mengelola anggota dan peserta kelas secara efisien. Sistem manual sebelumnya menyebabkan kesulitan dalam tracking pendaftaran dan komunikasi dengan calon anggota.",
    objectives: [
      "Meningkatkan efisiensi proses pendaftaran anggota",
      "Mempermudah calon anggota dalam mengakses informasi kelas",
      "Implementasi sistem notifikasi otomatis untuk pendaftaran",
    ],
    images: [
      "/project/kelasbios_home.webp",
      "/project/kelasbios_dashboard.webp",
      "/project/kelasbios_admin.webp",
    ],
    image: "/project/kelasbios_home.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveLink: "https://kelasbios.vercel.app",
    githubLink: "https://github.com/KwikAndreas/kelasbios",
    featured: false,
    stats: {
      users: "40+",
      rating: 4.8,
      completionDate: "Maret 2026",
    },
    status: "Live",
  },
  {
    id: "himabios",
    title: "Hima BIOS",
    category: "Web Development",
    client: "Organization Project",
    duration: "2 weeks",
    description:
      "Website resmi Himpunan Mahasiswa BIOS dengan fitur informasi organisasi.",
    fullDescription:
      "Website institusional untuk Himpunan Mahasiswa Bioinformatika (HIMA BIOS) yang berfungsi sebagai hub informasi dan komunikasi. Platform ini menampilkan profil organisasi, struktur kepengurusan, agenda kegiatan, blog artikel bioinformatika.",
    background:
      "HIMA BIOS membutuhkan presence digital yang profesional untuk meningkatkan visibilitas organisasi, mempermudah komunikasi dengan mahasiswa, dan sebagai platform informasi terpusat. Website lama tidak responsive dan sulit diupdate oleh pengurus.",
    objectives: [
      "Meningkatkan brand awareness dan profesionalisme organisasi",
      "Menyediakan platform informasi terpusat untuk mahasiswa",
      "Memfasilitasi registrasi dan komunikasi event secara digital",
      "Memberikan portal anggota untuk akses konten eksklusif",
    ],
    images: [
      "/project/himabios.webp",
      "/project/himabios_learn.webp",
      "/project/himabios_about.webp",
      "/project/himabios_announcement.webp",
    ],
    image: "/project/himabios.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
    liveLink: "https://himabios.vercel.app",
    githubLink: "https://github.com/KwikAndreas/himabios",
    featured: false,
    stats: {
      users: "120+",
      rating: 5.0,
      completionDate: "September 2025",
    },
    status: "Live",
  },
  {
    id: "gki-cipinang-indah",
    title: "GKI Cipinang Indah",
    category: "Web Development",
    client: "GKI Cipinang Indah Church",
    duration: "3 months",
    description:
      "Website gereja modern dengan sistem manajemen jemaat, jadwal ibadah, dan platform donasi online. Dibangun dengan Next.js dan PostgreSQL.",
    fullDescription:
      "Platform digital komprehensif untuk gereja yang mencakup sistem registrasi jemaat, manajemen acara, streaming ibadah online, dan integrasi pembayaran untuk donasi.",
    background:
      "Gereja membutuhkan platform digital untuk mengelola jemaat dan mempermudah akses informasi ibadah, terutama setelah pandemi COVID-19 yang mengharuskan adaptasi teknologi.",
    objectives: [
      "Menyediakan platform digital untuk manajemen jemaat",
      "Memfasilitasi streaming ibadah online",
      "Mengintegrasikan sistem donasi digital",
      "Meningkatkan engagement komunitas gereja",
    ],
    images: [
      "/project/gkicinda.webp",
      "/project/gkicinda_youtube.webp",
      "/project/gkicinda_jadwal.webp",
      "/project/gkicinda_renungan.webp",
      "/project/gkicinda_profile.webp",
      "/project/gkicinda_artikel.webp",
      "/project/gkicinda_info.webp",
      "/project/gkicinda_kalender.webp",
      "/project/gkicinda_download.webp",
    ],
    image: "/project/gkicinda.webp",
    technologies: [
      "Next.js",
      "Vite",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
    liveLink: "https://gkicinda.id",
    githubLink: "https://github.com/KwikAndreas/GKI-CINDA",
    featured: true,
    stats: {
      users: "900+",
      rating: 5.0,
      completionDate: "August 2025",
    },
    status: "Live",
  },

  {
    id: "waste-sorter",
    title: "Waste Sorter",
    category: "Game Development",
    client: "Educational Initiative",
    duration: "1.5 months",
    description:
      "Game edukasi untuk memilah sampah dengan mekanik drag-and-drop, leaderboard, dan sistem reward.",
    fullDescription:
      "Game interaktif yang mengajarkan pemain tentang pentingnya daur ulang dan pengelolaan sampah. Fitur termasuk berbagai level, tantangan waktu, dan integrasi media sosial.",
    background:
      "Inisiatif edukasi lingkungan untuk meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah dan daur ulang melalui gamifikasi.",
    objectives: [
      "Edukasi pengelolaan sampah yang benar",
      "Meningkatkan kesadaran lingkungan",
      "Gamifikasi pembelajaran sustainability",
      "Engagement melalui kompetisi dan leaderboard",
    ],
    images: ["/project/waste_sorter.webp"],
    image: "/project/waste_sorter.webp",
    technologies: [
      "Unity",
      "C#",
      "Python",
      "TensorFlow",
      "CNN",
      "Blender",
      "Adobe Illustrator",
    ],
    liveLink: "https://bit-grow.itch.io/waste-sorter",
    githubLink: undefined,
    featured: false,
    stats: {
      users: "100+",
      rating: 5.0,
      completionDate: "Mei 2025",
    },
    status: "Live",
  },
  {
    id: "car-rush",
    title: "Car Rush",
    category: "Game Development",
    client: "Personal Project",
    duration: "2 months",
    description:
      "Game mobile endless runner dengan Unity 3D. Fitur multiplayer real-time, sistem upgrade kendaraan, dan leaderboard global.",
    fullDescription:
      "Game racing mobile dengan mekanik endless runner, sistem monetisasi in-app purchase, analytics terintegrasi, dan cloud save functionality.",
    background:
      "Proyek personal untuk mengeksplorasi game development dengan Unity dan mempelajari implementasi sistem multiplayer real-time dalam mobile gaming.",
    objectives: [
      "Mengembangkan game mobile yang engaging",
      "Implementasi sistem multiplayer real-time",
      "Integrasi monetisasi in-app purchase",
      "Optimasi performa untuk berbagai device mobile",
    ],
    images: ["/project/carrush.webp"],
    image: "/project/carrush.webp",
    technologies: ["Unity", "C#", "Blender", "Adobe Illustrator"],
    liveLink: "https://bit-grow.itch.io/carrush",
    githubLink: undefined,
    featured: false,
    stats: {
      users: undefined,
      rating: undefined,
      completionDate: "June 2023",
    },
    status: "Abandoned",
  },
] as const;

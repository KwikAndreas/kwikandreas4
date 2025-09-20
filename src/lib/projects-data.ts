// lib/projects-data.ts
export const projects = [
  {
    id: "biosmerch",
    title: "BIOS Merchandise",
    category: "Web Development",
    client: "Organization Project",
    duration: "5 days",
    description:
      "E-commerce platform untuk penjualan merchandise organisasi BIOS dengan sistem katalog produk.",
    fullDescription:
      "Platform e-commerce komprehensif yang dikembangkan khusus untuk organisasi BIOS (Bioinformatics Student Organization). Fitur mencakup katalog produk interaktif, sistem keranjang belanja, integrasi payment gateway Stripe, order tracking, dan dashboard admin untuk manajemen produk dan pesanan.",
    background:
      "Organisasi BIOS membutuhkan platform digital untuk menjual merchandise resmi seperti kaos, tote bag, dan aksesoris lainnya kepada mahasiswa dan alumni. Sebelumnya penjualan dilakukan secara manual yang tidak efisien dan sulit untuk tracking.",
    objectives: [
      "Digitalisasi sistem penjualan merchandise organisasi",
      "Menyediakan platform yang user-friendly untuk mahasiswa berbelanja",
      "Implementasi sistem payment yang aman dan terpercaya",
      "Memberikan dashboard admin untuk manajemen inventory dan orders",
    ],
    images: ["/project/merchbios.webp"],
    image: "/project/merchbios.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveLink: "https://merchbios.vercel.app",
    githubLink: "https://github.com/KwikAndreas/merchbios",
    featured: false,
    stats: {
      users: "120+",
      completionDate: "September 2025",
      rating: 4.5,
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
      "/project/gkicinda_home.webp",
      "/project/gkicinda_youtube.webp",
      "/project/gkicinda_jadwal.webp",
      "/project/gkicinda_renungan.webp",
      "/project/gkicinda_profile.webp",
      "/project/gkicinda_artikel.webp",
      "/project/gkicinda_info.webp",
      "/project/gkicinda_kalender.webp",
      "/project/gkicinda_download.webp",
    ],
    image: "/project/gkicinda_home.webp",
    technologies: [
      "Next.js",
      "Vite",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveLink: "https://gkicinda.id",
    githubLink: "https://github.com/KwikAndreas/GKI-CINDA",
    featured: true,
    stats: {
      users: "700+",
      rating: 5.0,
      completionDate: "August 2025",
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
  {
    id: "angke5",
    title: "Angke5",
    category: "Web Development",
    client: "Restaurant Business",
    duration: "4 months",
    description:
      "Platform e-commerce untuk penjualan buah segar dengan sistem inventory real-time, tracking pengiriman, dan program loyalitas pelanggan.",
    fullDescription:
      "E-commerce platform dengan fitur advanced seperti AI recommendation engine, real-time inventory management, automated logistics, dan customer loyalty program.",
    background:
      "Bisnis restoran membutuhkan sistem reservasi dan pemesanan online yang terintegrasi dengan sistem inventory dan customer management.",
    objectives: [
      "Digitalisasi sistem reservasi restoran",
      "Implementasi sistem inventory real-time",
      "Pengembangan program loyalitas pelanggan",
      "Optimasi operasional restoran",
    ],
    images: [
      "/project/angke5.webp",
      "/project/angke5_menu.webp",
      "/project/angke5_about.webp",
      "/project/angke5_contact.webp",
      "/project/angke5_rooms.webp",
    ],
    image: "/project/angke5.webp",
    liveLink: "https://angke5.web.app/",
    githubLink: undefined,
    technologies: ["Flutter", "Firebase"],
    featured: true,
    stats: {
      users: "200+",
      rating: 4.8,
      completionDate: "May 2025",
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
      users: "40+",
      rating: 5.0,
      completionDate: "Nov 2024",
    },
    status: "Live",
  },
] as const;

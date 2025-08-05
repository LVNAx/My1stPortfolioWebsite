import HeroImage from "/assets/nkc.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel2.jpg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/claude.png";
import Tools9 from "/assets/tools/python.png";
import Tools10 from "/assets/tools/pandas.png";
import Tools11 from "/assets/tools/plotly.png";
import Tools12 from "/assets/tools/sklearn.jpg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Claude",
    ket: "AI",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Pandas",
    ket: "Library",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Plotly",
    ket: "Library",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Sklearn",
    ket: "Library",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Sistem Informasi Apotek Simulasi",
    desk: "Sebuah website untuk mengelola informasi di Apotek yang dibuat menggunakan Laravel dan TailwindCSS",
    tools: ["Laravel", "CSS", "PHP"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Penelitian Terkait Cedera Otak",
    desk: "Sebuah penelitian yang dilaksanakan bersama Mahasiswa FK UI untuk menilai tingkat efektif Stem Cells pada Brain Injury menggunakan Network Meta-Analysis",
    tools: ["RLanguage"],
    dad: "300",
  },
];



import Pendidikan1 from "/assets/pendidikan/pendidikan1.png";
import Pendidikan2 from "/assets/pendidikan/pendidikan2.png";

export const listPendidikan = [
  {
    id: 1,
    gambar: Pendidikan1,
    nama: "Universitas Indonesia",
    desk: "Jurusan Ilmu Komputer",
    tahun: "2025 - Sekarang",
    dad: "300",
  },
  {
    id: 2,
    gambar: Pendidikan2,
    nama: "SMA Negeri 1 Pontianak",
    desk: "Kurikulum Merdeka",
    tahun: "2022—2025",
    dad: "300",
  }
];

export const homeServices = [
    {
        id: 1,
        name: 'Cari Dokter',
        icon: 'user-md',
        color: '#E3F2FD',
        iconColor: '#2196F3',
        route: '/home/search-doctor',
    },
    {
        id: 2,
        name: 'Poli Klinik',
        icon: 'hospital',
        color: '#E8F5E9',
        iconColor: '#4CAF50',
        route: '/home/search-doctor',
    },
    {
        id: 3,
        name: 'Jadwal',
        icon: 'calendar-alt',
        color: '#FFF3E0',
        iconColor: '#FF9800',
        route: '/home/history',
    },
    {
        id: 4,
        name: 'Info Bed',
        icon: 'procedures',
        color: '#F3E5F5',
        iconColor: '#9C27B0',
    },
];

export const quickActions = [
    {
        id: '1',
        doctorName: 'Dr. Budi Santoso',
        specialist: 'Spesialis Jantung',
        price: 'Rp 200.000',
        hospital: 'RSUD O.I.D',
    },
    {
        id: '2',
        doctorName: 'Dr. Siti Aminah',
        specialist: 'Spesialis Anak',
        price: 'Rp 150.000',
        hospital: 'RSUD O.I.D',
    },
];

export const doctors = [
    {
        id: '1',
        name: 'Dr. Andi Pratama',
        specialist: 'Spesialis Jantung',
        price: 'Rp 150.000',
        rating: 4.8,
        location: 'RSUD Oto Iskandar Dinata',
        education: 'Lulusan Spesialis Jantung UI (2012)',
        experience: '12 Tahun Pengalaman',
        description: 'dr. Andi Pratama adalah Spesialis Jantung dengan pengalaman lebih dari 10 tahun. Beliau berfokus pada diagnosa dan penanganan penyakit jantung koroner serta gagal jantung dengan pendekatan medis yang suportif.',
        schedule: [
            { day: 'Senin', time: '09:00 - 12:00', available: true },
            { day: 'Rabu', time: '13:00 - 16:00', available: true },
            { day: 'Jumat', time: '09:00 - 12:00', available: false },
        ],
        reviews: [
            { id: 'r1', user: 'Budi S.', rating: 5, comment: 'Penjelasan sangat jelas dan menenangkan.' },
            { id: 'r2', user: 'Ani R.', rating: 4, comment: 'Sangat profesional, antrian agak lama tapi sepadan.' },
        ]
    },
    {
        id: '2',
        name: 'Dr. Siti Aminah',
        specialist: 'Dokter Umum',
        price: 'Rp 50.000',
        rating: 4.5,
        location: 'RSUD Oto Iskandar Dinata',
        education: 'Lulusan Kedokteran Umum UNPAD (2015)',
        experience: '8 Tahun Pengalaman',
        description: 'dr. Siti Aminah adalah Dokter Umum yang berfokus pada kesehatan keluarga. Beliau sangat mendalam dalam mendengarkan keluhan pasien dan memberikan solusi pencegahan yang efektif.',
        schedule: [
            { day: 'Selasa', time: '08:00 - 11:00', available: true },
            { day: 'Kamis', time: '08:00 - 11:00', available: true },
            { day: 'Sabtu', time: '10:00 - 13:00', available: true },
        ],
        reviews: [
            { id: 'r3', user: 'Indra W.', rating: 5, comment: 'Ramah sekali dan sabar menghadapi anak-anak.' },
        ]
    },
    {
        id: '3',
        name: 'Dr. Budi Santoso',
        specialist: 'Spesialis Anak',
        price: 'Rp 120.000',
        rating: 4.9,
        location: 'Klinik Sehat Bandung',
        education: 'Spesialis Anak UGM (2010)',
        experience: '14 Tahun Pengalaman',
        description: 'dr. Budi Santoso adalah Spesialis Anak yang ramah dan berpengalaman dalam menangani berbagai kondisi kesehatan anak, mulai dari imunisasi hingga penyakit kronis pada anak.',
        schedule: [
            { day: 'Senin', time: '15:00 - 18:00', available: true },
            { day: 'Selasa', time: '15:00 - 18:00', available: false },
            { day: 'Rabu', time: '15:00 - 18:00', available: true },
        ],
        reviews: [
            { id: 'r4', user: 'Mama Dery', rating: 5, comment: 'Dokter favorit anak saya, tidak pelit ilmu.' },
        ]
    },
    {
        id: '4',
        name: 'Dr. Maria Ulfa',
        specialist: 'Dokter Gigi',
        price: 'Rp 100.000',
        rating: 4.7,
        location: 'RSUD Oto Iskandar Dinata',
        education: 'Kedokteran Gigi USU (2018)',
        experience: '5 Tahun Pengalaman',
        description: 'dr. Maria Ulfa adalah Dokter Gigi yang ahli dalam konservasi gigi dan estetika gigi. Beliau sangat teliti dan menggunakan teknologi terbaru dalam prakteknya.',
        schedule: [
            { day: 'Rabu', time: '09:00 - 14:00', available: true },
            { day: 'Kamis', time: '09:00 - 14:00', available: true },
            { day: 'Jumat', time: '13:00 - 17:00', available: true },
        ],
        reviews: [
            { id: 'r5', user: 'Kevin J.', rating: 4, comment: 'Cabut gigi tidak sakit sama sekali. Mantap!' },
        ]
    },
];

export const specialties = [
    'Semua Spesialisasi',
    'Spesialis Jantung',
    'Spesialis Anak',
    'Dokter Umum',
    'Dokter Gigi',
    'Spesialis Penyakit Dalam',
];

export const locations = [
    'Semua Lokasi',
    'RSUD Oto Iskandar Dinata',
    'Klinik Sehat Bandung',
    'Bandung Kota',
    'Soreang',
];

export const notifications = [
    {
        id: '1',
        title: 'Jadwal Kontrol',
        message: 'Jangan lupa jadwal kontrol dengan Dr. Budi Santoso besok jam 09:00.',
        time: '1 jam yang lalu',
        read: false,
    },
    {
        id: '2',
        title: 'Pendaftaran Berhasil',
        message: 'Pendaftaran akun Anda berhasil. Silakan lengkapi data diri Anda.',
        time: '1 hari yang lalu',
        read: true,
    },
];

export const healthArticles = [
    {
        id: '1',
        title: 'Pentingnya Check-up Rutin',
        description: 'Deteksi dini penyakit dengan pemeriksaan kesehatan berkala.',
        image:
            'https://img.freepik.com/free-vector/health-check-concept-illustration_114360-2646.jpg',
    },
];

export const calendarDates = [
    { date: '2026-01-19', day: 'Sen', label: '19' },
    { date: '2026-01-20', day: 'Sel', label: '20' },
    { date: '2026-01-21', day: 'Rab', label: '21' },
    { date: '2026-01-22', day: 'Kam', label: '22' },
    { date: '2026-01-23', day: 'Jum', label: '23' },
];

export const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30'
];

export const profileMenuItems = [
    { id: 'edit-profile', icon: 'user-edit', label: 'Ubah Profil', route: '/home/edit-profile' },
    { id: 'change-password', icon: 'lock', label: 'Ubah Kata Sandi', route: '/home/change-password' },
    { id: 'medical-record', icon: 'file-medical', label: 'Rekam Medis' },
    { id: 'payment', icon: 'credit-card', label: 'Metode Pembayaran' },
];

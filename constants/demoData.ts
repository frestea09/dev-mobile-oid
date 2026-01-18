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
        name: 'Dr. Budi Santoso',
        specialist: 'Spesialis Jantung',
        price: 'Rp 200.000',
        hospital: 'RSUD O.I.D',
    },
    {
        id: '2',
        name: 'Dr. Siti Aminah',
        specialist: 'Spesialis Anak',
        price: 'Rp 150.000',
        hospital: 'RSUD O.I.D',
    },
    {
        id: '3',
        name: 'Dr. Andi Pratama',
        specialist: 'Spesialis Penyakit Dalam',
        price: 'Rp 180.000',
        hospital: 'RSUD O.I.D',
    },
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

export const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '13:30'];

export const profileMenuItems = [
    { id: 'edit-profile', icon: 'user-edit', label: 'Ubah Profil', route: '/home/edit-profile' },
    { id: 'change-password', icon: 'lock', label: 'Ubah Kata Sandi', route: '/home/change-password' },
    { id: 'medical-record', icon: 'file-medical', label: 'Rekam Medis' },
    { id: 'payment', icon: 'credit-card', label: 'Metode Pembayaran' },
];

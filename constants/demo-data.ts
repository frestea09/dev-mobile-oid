export const services = [
  {
    id: 'svc-general',
    name: 'Konsultasi Umum',
    category: 'Dokter Umum',
    duration: '30 menit',
    price: 150000,
    rating: 4.8,
    description: 'Konsultasi cepat untuk keluhan sehari-hari dengan dokter berpengalaman.',
  },
  {
    id: 'svc-derma',
    name: 'Konsultasi Kulit',
    category: 'Dermatologi',
    duration: '45 menit',
    price: 240000,
    rating: 4.9,
    description: 'Periksa kesehatan kulit dan dapatkan rekomendasi perawatan terbaik.',
  },
  {
    id: 'svc-mental',
    name: 'Konseling Mental',
    category: 'Psikologi',
    duration: '60 menit',
    price: 320000,
    rating: 4.7,
    description: 'Sesi privat untuk menjaga kesehatan mental dan keseimbangan emosi.',
  },
];

export const doctors = [
  {
    id: 'doc-sinta',
    name: 'dr. Sinta Rahma',
    specialty: 'Dokter Umum',
    location: 'Klinik OHealth, Jakarta',
    rating: 4.9,
  },
  {
    id: 'doc-nico',
    name: 'dr. Nico Pratama',
    specialty: 'Dermatologi',
    location: 'OHealth Skin Center, Bandung',
    rating: 4.8,
  },
  {
    id: 'doc-laras',
    name: 'psikolog Laras Anindya',
    specialty: 'Psikologi Klinis',
    location: 'OHealth Mind Space, Surabaya',
    rating: 4.9,
  },
];

export const quickActions = [
  {
    id: 'act-book',
    labelKey: 'actions.bookAppointment',
    icon: 'calendar.badge.plus',
  },
  {
    id: 'act-services',
    labelKey: 'actions.browseServices',
    icon: 'stethoscope',
  },
  {
    id: 'act-chat',
    labelKey: 'actions.chatDoctor',
    icon: 'message.fill',
  },
  {
    id: 'act-support',
    labelKey: 'actions.supportCenter',
    icon: 'phone.fill',
  },
];

export const appointments = [
  {
    id: 'apt-001',
    serviceId: 'svc-general',
    doctorId: 'doc-sinta',
    date: '2025-03-18',
    time: '09:30',
    location: 'Ruang 3A',
    status: 'confirmed',
  },
  {
    id: 'apt-002',
    serviceId: 'svc-derma',
    doctorId: 'doc-nico',
    date: '2025-03-21',
    time: '13:00',
    location: 'Ruang 2B',
    status: 'scheduled',
  },
];

export const bookingDates = [
  {
    id: 'date-01',
    label: 'Selasa, 18 Mar',
    value: '2025-03-18',
  },
  {
    id: 'date-02',
    label: 'Kamis, 20 Mar',
    value: '2025-03-20',
  },
  {
    id: 'date-03',
    label: 'Jumat, 21 Mar',
    value: '2025-03-21',
  },
];

export const bookingTimes = [
  {
    id: 'time-01',
    label: '09:30 - 10:00',
    value: '09:30',
  },
  {
    id: 'time-02',
    label: '11:00 - 11:30',
    value: '11:00',
  },
  {
    id: 'time-03',
    label: '13:00 - 13:30',
    value: '13:00',
  },
];

import { create } from 'zustand';

export interface Appointment {
    id: string;
    doctorName: string;
    specialist: string;
    hospital: string;
    date: string;
    time: string;
    nik: string;
    status: 'upcoming' | 'completed' | 'cancelled';
    diagnosis?: string;
    serviceName?: string;
    paymentStatus?: 'paid' | 'pending';
}

interface BookingState {
    appointments: Appointment[];
    addAppointment: (appointment: Appointment) => void;
    cancelAppointment: (id: string) => void;
    rescheduleAppointment: (id: string, date: string, time: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    appointments: [
        {
            id: '1',
            doctorName: 'Dr. Andi Pratama',
            specialist: 'Spesialis Jantung',
            hospital: 'RSUD O.I.D',
            date: '2026-01-20',
            time: '09:30',
            nik: '3201012345678901',
            status: 'upcoming',
        },
        {
            id: '2',
            doctorName: 'Dr. Siti Aminah',
            specialist: 'Dokter Umum',
            hospital: 'RSUD O.I.D',
            date: '2026-01-15',
            time: '08:00',
            nik: '3201012345678901',
            status: 'completed',
            diagnosis: 'Gejala flu ringan, butuh istirahat.',
            serviceName: 'Konsultasi Umum',
            paymentStatus: 'paid',
        }
    ],
    addAppointment: (appointment) => set((state) => ({
        appointments: [appointment, ...state.appointments]
    })),
    cancelAppointment: (id) => set((state) => ({
        appointments: state.appointments.map(app =>
            app.id === id ? { ...app, status: 'cancelled' } : app
        )
    })),
    rescheduleAppointment: (id, date, time) => set((state) => ({
        appointments: state.appointments.map(app =>
            app.id === id ? { ...app, date, time } : app
        )
    })),
}));

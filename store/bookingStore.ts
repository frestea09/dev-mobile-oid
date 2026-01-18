import { create } from 'zustand';

export interface Appointment {
    id: string;
    doctorName: string;
    specialist: string;
    hospital: string;
    date: string;
    time: string;
    status: 'upcoming' | 'completed' | 'cancelled';
}

interface BookingState {
    appointments: Appointment[];
    addAppointment: (appointment: Appointment) => void;
    cancelAppointment: (id: string) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    appointments: [
        {
            id: '1',
            doctorName: 'Dr. Budi Santoso',
            specialist: 'Spesialis Jantung',
            hospital: 'RSUD O.I.D',
            date: '2026-01-20',
            time: '09:00',
            status: 'upcoming',
        }
    ],
    addAppointment: (appointment) => set((state) => ({
        appointments: [appointment, ...state.appointments]
    })),
    cancelAppointment: (id) => set((state) => ({
        appointments: state.appointments.filter(app => app.id !== id)
    })),
}));

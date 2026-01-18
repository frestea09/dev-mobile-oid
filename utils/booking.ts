import type { Appointment } from '../store/bookingStore';

interface BookingPayload {
    doctorName: string;
    specialist: string;
    hospital: string;
    date: string;
    time: string;
}

export const createAppointment = (payload: BookingPayload): Appointment => ({
    id: `APT-${Date.now()}`,
    doctorName: payload.doctorName,
    specialist: payload.specialist,
    hospital: payload.hospital,
    date: payload.date,
    time: payload.time,
    status: 'upcoming',
});

import { appointments, bookingDates, bookingTimes, doctors, services } from '@/constants/demo-data';

export const getServiceById = (serviceId: string | undefined) =>
  services.find((service) => service.id === serviceId) ?? services[0];

export const getDoctorById = (doctorId: string | undefined) =>
  doctors.find((doctor) => doctor.id === doctorId) ?? doctors[0];

export const getDateByValue = (value: string | undefined) =>
  bookingDates.find((date) => date.value === value) ?? bookingDates[0];

export const getTimeByValue = (value: string | undefined) =>
  bookingTimes.find((time) => time.value === value) ?? bookingTimes[0];

export const getAppointmentSummary = (appointmentId: string) => {
  const appointment = appointments.find((item) => item.id === appointmentId);
  if (!appointment) {
    return null;
  }
  const service = getServiceById(appointment.serviceId);
  const doctor = getDoctorById(appointment.doctorId);

  return {
    id: appointment.id,
    serviceName: service.name,
    doctorName: doctor.name,
    date: appointment.date,
    time: appointment.time,
    location: appointment.location,
    status: appointment.status,
  };
};


export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  hospital: string;
  contact: string;
  available: boolean;
}

export const egyptianDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiology",
    location: "Cairo",
    hospital: "Cairo International Medical Center",
    contact: "+20 10-1234-5678",
    available: true
  },
  {
    id: 2,
    name: "Dr. Fatima Ali",
    specialty: "Neurology",
    location: "Cairo",
    hospital: "Ain Shams University Hospital",
    contact: "+20 11-2345-6789",
    available: true
  },
  {
    id: 3,
    name: "Dr. Mohamed Ibrahim",
    specialty: "Orthopedics",
    location: "Giza",
    hospital: "Giza Medical Complex",
    contact: "+20 12-3456-7890",
    available: false
  },
  {
    id: 4,
    name: "Dr. Laila Mahmoud",
    specialty: "Pediatrics",
    location: "Cairo",
    hospital: "Children's Cairo Hospital",
    contact: "+20 10-9876-5432",
    available: true
  },
  {
    id: 5,
    name: "Dr. Omar Farooq",
    specialty: "Dermatology",
    location: "Giza",
    hospital: "Giza Dermatology Center",
    contact: "+20 11-8765-4321",
    available: true
  },
  {
    id: 6,
    name: "Dr. Nour El-Din",
    specialty: "Ophthalmology",
    location: "Cairo",
    hospital: "Cairo Eye Institute",
    contact: "+20 12-7654-3210",
    available: true
  },
  {
    id: 7,
    name: "Dr. Amina Kamal",
    specialty: "Gynecology",
    location: "Giza",
    hospital: "Women's Health Center Giza",
    contact: "+20 10-2468-1357",
    available: true
  },
  {
    id: 8,
    name: "Dr. Youssef Adel",
    specialty: "Psychiatry",
    location: "Cairo",
    hospital: "Cairo Mental Health Institute",
    contact: "+20 11-1357-2468",
    available: false
  }
];

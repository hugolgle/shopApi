export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  role: {
    id: number;
    name: string;
  };
  commands: Array<{
    id: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export interface UserProfileForm {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  email: string;
  password: string;
}

export interface Student {
  id: number, 
  name: string,
  surnames: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  career: string,
  description: string
}

export interface Career {
  id: number;
  name: string;
}

export interface ElementCard {
  icon: string;
  text: string;
}
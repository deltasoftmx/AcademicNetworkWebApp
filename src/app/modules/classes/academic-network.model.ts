export class Response<T> {
  code: number;
  data: T;
  messages: string[];
}

export class UserPublicData {
  username: string
  firstname: string
  lastname: string
  description: string;
  profile_img_src: string;
  created_at: string;
  type_user: string;
  major: string;
}

export class SigninData {
  username: string
  firstname: string
  lastname: string
  description: string;
  profile_img_src: string;
  created_at: string;
  type_user: string;
  major: string;
  session_token: string;
}

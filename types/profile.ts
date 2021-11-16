export type Company = {
  name: string,
  website: string,
  emails: Email[]
}

export type Email = {
  address: string,
  type: 'primary' | 'secondary' | 'professional',
}

export type Expertise = {
  title: string,
  noun: string,
  proficiency: number,
  startedAt: string,
}

export type Freelance = {
  isFreelance: true,
  projects: Project[],
  joinedAt: string,
  leftAt: string | null | false,
}

export type Interest = {
  icon: string,
  title: string,
  passion: number,
}

export type Job = {
  company: Company,
  isFreelance?: boolean
  joinedAt: string,
  leftAt?: string,
  positions: Position[],
  projects: Project[],
}

export type Location = {
  country: string,
  state: string,
}

export type Phone = {
  number: string,
  country: string,
  countryCode: string,
  type: string,
}

export type Position = {
  title: string,
  responsibilities: string[],
}

export type Project = {
  title: string,
  contributions: string[],
  url: string,
}

export type Social = {
  icon: string,
  title: string,
  userName: string,
  url: string,
}

export type Stack = {
  language: string,
  framework: string,
  proficiency: number,
  startedAt: string,
  isMainStack: boolean,
}

export type Technology = {
  name: string,
  proficiency: number,
}

export type TechnologyCategory = {
  name: string,
  list: Technology[],
}

export type Website = {
  title: string,
  url: string,
  repository: string,
  launchedAt: string,
}

type Profile = {
  firstName: string,
  lastName: string,
  middleName: string,
  nickName: string,
  dateOfBirth: string,
  bio: string[],

  emails: Email[],
  expertise: Expertise[],
  interests: Interest[],
  locations: Location[],
  phones: Phone[],
  socials: Social[],
  stack: Stack[],
  technologies: TechnologyCategory[],
  workHistory: Job[],
  website: Website,
}

export default Profile;
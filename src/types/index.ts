export interface BaseProject {
  title: string
  baseImg: string
  techUsed: string[]
  links: {
    github: string,
  }
}

export interface ExtendedProject extends BaseProject {
  hoverImg: string
  description: string
  links: {
    github: string,
    live: string
  }
}

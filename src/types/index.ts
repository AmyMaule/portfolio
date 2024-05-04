type ProjectLinksType = {
  github: string,
  live: string
}

export type ProjectType = {
  title: string,
  baseImg: string,
  hoverImg: string,
  techUsed: string[],
  description: string,
  links: ProjectLinksType
}

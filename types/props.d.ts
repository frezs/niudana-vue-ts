interface AppAnyPropRecord extends Record<string, any> { }

interface AppFeedCardTagProps {
  id?: string
  title: string
  url: string
}

interface AppFeedCardProps {
  id?: string
  image: string
  url: string
  title: string
  desc: string
  updateTime: string
  tags: AppFeedCardTagProps[]
}

interface AppFooterLinkProps {
  name: string
  url: string
}

interface AppTagCardProps {
  name: string
  tag: string
  url: string
  count: number
}

interface AppJumpCardTagProps extends AppFeedCardTagProps { }

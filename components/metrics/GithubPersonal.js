import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import MetricCard from 'components/metrics/Card'

export default function GithubPersonalCard() {
  const { data } = useSWR('/api/github-stats', fetcher)

  const repos = new Number(data?.repos)
  const gists = new Number(data?.gists)
  const link1 = 'https://github.com/TaylorHo?tab=repositories'
  const link2 = 'https://gist.github.com/TaylorHo'

  return (
    <div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <MetricCard header="Repositórios no Github" link={link1} metric={repos} isCurrency={false} />
      <MetricCard header="Gists no Github" link={link2} metric={gists} isCurrency={false} />
    </div>
  )
}

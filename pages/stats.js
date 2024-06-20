import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Stats() {
  return (
    <>
      <PageSEO
        title={`Estatísticas - ${siteMetadata.author}`}
        description="Estatísticas sobre minhas publicações e realizações"
      />
      <div className="mx-auto max-w-2xl overflow-hidden">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Estatísticas
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Um painel com informações sobre atividade no GitHub e de realizações pessoais.
          </p>
        </div>
        <div className="pt-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
        </div>
      </div>
    </>
  )
}

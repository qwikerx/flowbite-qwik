import { Link, Tooltip } from 'flowbite-qwik'
import { component$, Resource, useResource$ } from '@builder.io/qwik'
import { fetchSafe } from '~/utils/fetch'
import { IconAngleRightOutline } from 'flowbite-qwik-icons'

interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

export const ContributorSection = component$(() => {
  const contributorResource = useResource$(async () => {
    try {
      if (!import.meta.env.PROD) return { contributors: [] }

      const contributors = await fetchSafe<Contributor[]>('https://api.github.com/repos/qwikerx/flowbite-qwik/contributors?per_page=21')

      return {
        contributors,
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return { contributors: [] }
    }
  })

  return (
    <Resource
      value={contributorResource}
      onResolved={(data) => {
        return (
          <section>
            <div class="mx-auto max-w-8xl px-4 py-8 lg:px-20 lg:py-24">
              <div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
                <div class="flex max-w-2xl flex-col items-center justify-center gap-4">
                  <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Community contributors</h2>
                  <p class="text-center text-lg font-normal">
                    Join a community of open-source contributors by tuning in with the Flowbite Qwik community and become one of the highlighted
                    members
                  </p>
                </div>
                <div class="flex max-w-5xl flex-col gap-3 px-4 lg:px-8">
                  <div class="flex flex-wrap items-center justify-center gap-3">
                    {data.contributors.map((contributor) => (
                      <Tooltip style="dark">
                        <Link q:slot="trigger" href={contributor.html_url} rel="nofollow noreferrer noopener" target="_blank">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={contributor.avatar_url}
                            alt={`${contributor.login} avatar`}
                            class="size-10 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-300 sm:size-12 lg:size-16"
                            width={64}
                            height={64}
                          />
                        </Link>
                        <div q:slot="content">{contributor.login}</div>
                      </Tooltip>
                    ))}
                  </div>
                </div>
                <div class="flex w-full max-w-5xl flex-row items-center justify-between lg:px-4">
                  <div class="flex w-full flex-col items-start justify-between gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800 sm:flex-row sm:items-center sm:gap-8">
                    <div class="hidden lg:block lg:w-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path
                          d="M20.7996 10.2766C20.7996 11.5496 20.2939 12.7705 19.3937 13.6707C18.4935 14.5709 17.2726 15.0766 15.9996 15.0766C14.7266 15.0766 13.5057 14.5709 12.6055 13.6707C11.7053 12.7705 11.1996 11.5496 11.1996 10.2766C11.1996 9.00352 11.7053 7.78262 12.6055 6.88245C13.5057 5.98228 14.7266 5.47656 15.9996 5.47656C17.2726 5.47656 18.4935 5.98228 19.3937 6.88245C20.2939 7.78262 20.7996 9.00352 20.7996 10.2766ZM28.7996 13.4766C28.7996 14.3253 28.4625 15.1392 27.8623 15.7393C27.2622 16.3394 26.4483 16.6766 25.5996 16.6766C24.7509 16.6766 23.937 16.3394 23.3369 15.7393C22.7368 15.1392 22.3996 14.3253 22.3996 13.4766C22.3996 12.6279 22.7368 11.8139 23.3369 11.2138C23.937 10.6137 24.7509 10.2766 25.5996 10.2766C26.4483 10.2766 27.2622 10.6137 27.8623 11.2138C28.4625 11.8139 28.7996 12.6279 28.7996 13.4766ZM22.3996 24.6766C22.3996 22.9792 21.7253 21.3513 20.5251 20.1511C19.3249 18.9508 17.697 18.2766 15.9996 18.2766C14.3022 18.2766 12.6744 18.9508 11.4741 20.1511C10.2739 21.3513 9.59961 22.9792 9.59961 24.6766V29.4766H22.3996V24.6766ZM9.59961 13.4766C9.59961 14.3253 9.26247 15.1392 8.66235 15.7393C8.06224 16.3394 7.2483 16.6766 6.39961 16.6766C5.55092 16.6766 4.73698 16.3394 4.13687 15.7393C3.53675 15.1392 3.19961 14.3253 3.19961 13.4766C3.19961 12.6279 3.53675 11.8139 4.13687 11.2138C4.73698 10.6137 5.55092 10.2766 6.39961 10.2766C7.2483 10.2766 8.06224 10.6137 8.66235 11.2138C9.26247 11.8139 9.59961 12.6279 9.59961 13.4766ZM25.5996 29.4766V24.6766C25.6019 23.0498 25.1889 21.4494 24.3996 20.027C25.109 19.8454 25.8504 19.8283 26.5674 19.9769C27.2844 20.1255 27.9579 20.4359 28.5367 20.8844C29.1155 21.3329 29.5842 21.9077 29.907 22.5649C30.2299 23.2221 30.3983 23.9443 30.3996 24.6766V29.4766H25.5996ZM7.59961 20.027C6.81041 21.4494 6.39737 23.0498 6.39961 24.6766V29.4766H1.59961V24.6766C1.5993 23.9438 1.76675 23.2207 2.08912 22.5627C2.4115 21.9047 2.88024 21.3293 3.45942 20.8804C4.03861 20.4316 4.71286 20.1213 5.43051 19.9734C6.14815 19.8255 6.89014 19.8438 7.59961 20.027Z"
                          fill="#8A4DDA"
                        />
                      </svg>
                    </div>
                    <div class="flex w-full flex-col">
                      <h2 class="text-left text-xl font-bold tracking-tight text-gray-900 dark:text-white">Join the community</h2>
                      <p>Become a member of a community of developers by supporting Flowbite</p>
                    </div>
                    <Link href="https://github.com/qwikerx/flowbite-qwik" iconRight={IconAngleRightOutline}>
                      See our repository
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
})

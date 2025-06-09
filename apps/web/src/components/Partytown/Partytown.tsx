import { partytownSnippet, PartytownConfig } from '@qwik.dev/partytown/integration'

export const QwikPartytown = (props: PartytownConfig) => <script dangerouslySetInnerHTML={partytownSnippet(props)} />

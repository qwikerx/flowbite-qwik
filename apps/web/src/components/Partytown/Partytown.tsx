// @ts-expect-error strange behaviour
import { partytownSnippet, PartytownConfig } from '@builder.io/partytown/integration'

export const QwikPartytown = (props: PartytownConfig) => <script dangerouslySetInnerHTML={partytownSnippet(props)} />

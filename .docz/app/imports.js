export const imports = {
  'components/player_image.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-player-image" */ 'components/player_image.mdx'),
}

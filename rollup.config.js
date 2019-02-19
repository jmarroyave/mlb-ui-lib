import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    input: 'src/player_image.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'mlb-ui-lib',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ]
}
export default config
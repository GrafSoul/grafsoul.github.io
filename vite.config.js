import { defineConfig } from 'vite';
import path from 'path';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig(() => {
    return {
        base: '/',
        root: path.resolve(__dirname, 'src'),
        build: {
            outDir: '../build',
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/js/[name].[hash].js',
                    chunkFileNames: 'assets/js/[name].[hash].js',
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name.endsWith('.css')) {
                            return 'assets/css/[name].[hash][extname]';
                        } else if (assetInfo.name.endsWith('.js')) {
                            return 'assets/js/[name].[hash][extname]';
                        } else if (
                            ['.jpeg', '.jpg', '.png', '.gif', '.svg'].some(
                                (ext) => assetInfo.name.endsWith(ext),
                            )
                        ) {
                            return 'assets/images/[name].[hash][extname]';
                        } else if (
                            ['.mp4', '.webm'].some((ext) =>
                                assetInfo.name.endsWith(ext),
                            )
                        ) {
                            return 'assets/video/[name].[hash][extname]';
                        } else if (
                            ['.eot', '.woff', '.woff2', '.ttf', '.otf'].some(
                                (ext) => assetInfo.name.endsWith(ext),
                            )
                        ) {
                            return 'assets/fonts/[name].[hash][extname]';
                        } else {
                            return 'assets/[name].[hash][extname]';
                        }
                    },
                },
            },
        },
        server: {
            port: 3000,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@js': path.resolve(__dirname, 'src/js'),
            },
        },
        plugins: [
            viteImagemin({
                gifsicle: {
                    optimizationLevel: 8,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 8,
                },
                mozjpeg: {
                    quality: 80,
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
            }),
        ],
    };
});

Una vez instalado el node_moudles

copiar y pegar esto en la línea 305
proyect\node_modules\react-scripts\config\webpack.config.js

fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer/"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "zlib": require.resolve("browserify-zlib") 
      },

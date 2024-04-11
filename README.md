# wasm-mandelbrot

The example of wasm application rendering Mandelbrot set.
This example is based on "Chapter6 WebAssembly" in "実践 Rust プログラミング入門". The parts of code is based on "Chapter6 WebAssembly" in "実践 Rust プログラミング入門" is subject to [forcia/rustbook](https://github.com/forcia/rustbook)'s license.

## References

- [実践 Rust プログラミング入門](https://www.shuwasystem.co.jp/book/9784798061702.html)
- [forcia/rustbook](https://github.com/forcia/rustbook)

## Environments

- Visual Studio Code Devcontainer
- rustc 1.77.1
- rustup 1.27.0
- cargo 1.77.1
- wasm-pack 0.12.1
- Next.js 14.1.4
- React 18

## Usage

### Build wasm

```sh
mandelbrot$ wasm-pack build
[INFO]: Optimizing wasm binaries with `wasm-opt`...
[INFO]: Optional fields missing from Cargo.toml: 'description', 'repository', and 'license'. These are not necessary, but recommended
[INFO]: ✨   Done in 0.73s
[INFO]: 📦   Your wasm pkg is ready to publish at /workspaces/mandelbrot/mandelbrot/pkg.
```

### Launch wasm-app

```sh
www$ npm run start

> create-wasm-app@0.1.0 start
> NODE_OPTIONS='--openssl-legacy-provider' webpack-dev-server

(node:20786) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ ｢wds｣: Project is running at http://localhost:8080/
```

### Launch Next.js Application

```sh
next-mandelbrot$ npm run dev

> next-mandelbrot@0.1.0 dev
> next dev

Debugger attached.
Debugger attached.
   ▲ Next.js 14.1.4
   - Local:        http://localhost:3000

Debugger attached.
Waiting for the debugger to disconnect...
 ✓ Ready in 1677ms
```

## License

[MIT License](LICENSE)

## Author

[toms74209200](https://github.com/toms74209200)

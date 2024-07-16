# Render High Quality Terminal Output Videos

This project uses [Remotion](https://www.remotion.dev) and [asciinema-player](https://github.com/asciinema/asciinema-player) to render high quality videos of terminal output. If you are a developer and produce videos online, this is the project to get your terminal output looking sharp.

## Commands

**Install Dependencies**

```console
pnpm i
```

**Start Preview**

```console
pnpm start
```

**Render video**

```console
pnpm build
```

Edit parameters in config.ts for output resolution, render parameters, input file location.

Edit package.json for th output file location.

Edit remote.config.ts for number of CPU core to use.

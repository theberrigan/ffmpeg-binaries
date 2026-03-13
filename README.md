## What is it

FFmpeg and FFprobe binaries for Windows, Linux and macOS.

This package is similar to [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static), but uses current versions of binaries.

## Sources of the binaries

- [Windows (x64 and arm64)](https://github.com/BtbN/FFmpeg-Builds/releases)
- [Linux (x64 and arm64)](https://github.com/BtbN/FFmpeg-Builds/releases)
- [macOS (x64)](https://evermeet.cx/ffmpeg/)

This package downloads binaries from [Releases section](https://github.com/theberrigan/ffmpeg-binaries/releases) of the GitHub repository.

## Usage

```
npm i -S @berrigan/ffmpeg-binaries
```

```js
import { FFMPEG_PATH, FFPROBE_PATH } from '@berrigan/ffmpeg-binaries';

import { spawnSync } from 'node:child_process';

spawnSync(FFMPEG_PATH, [ '-i', 'input.mov', 'output.mp4' ]);

```

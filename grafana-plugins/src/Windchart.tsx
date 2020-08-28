import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const hueForSpeed = (mph: number) => {
  if (mph >= 25) {
    return -82.5;
  }
  return 230 - Number(mph) * 12.5;
};

export const Windchart: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  let dir: number[] = [];
  let mph: number[] = [];
  let currentDir = 0;
  let currentMph = 0;
  let maxMph = 5;
  let ringRadii: number[] = [];

  try {
    //@ts-ignore
    dir = data.series.map(s => s.fields.find(f => f.name === 'dir'))[0]?.values.toArray();
    //@ts-ignore
    mph = data.series
      .map(s => s.fields.find(f => f.name === 'mps'))[0]
      ?.values.toArray()
      .map(v => Number((v * 2.237).toFixed(1)));

    currentMph = (mph && mph[0]) || 0;
    currentDir = (dir && dir[0]) || 0;

    maxMph = (mph && Math.max(...mph)) || 5;

    ringRadii = Array.from({ length: Math.ceil(maxMph) })
      .map((_, i) => {
        if (i % 5 === 0) {
          return i;
        }
        return -1;
      })
      .filter(v => v !== -1)
      .slice(1);
  } catch (e) {
    console.log(e);
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
        <defs>
          <path id="hashmark" d="M 250 3 L 256 29 L 262 3 Z" className={styles.hashmark} />
          <line id="line" x1="256" y1="32" x2="256" y2="480" className={styles.line} />
        </defs>

        <g className={styles.text}>
          <text x="243" y="30">
            N
          </text>
          <text x="483" y="269">
            E
          </text>
          <text x="243" y="509">
            S
          </text>
          <text x="4" y="269">
            W
          </text>
        </g>
        <g>
          <use href="#hashmark" transform="rotate(22.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(45, 256, 256)" />
          <use href="#hashmark" transform="rotate(67.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(112.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(135, 256, 256)" />
          <use href="#hashmark" transform="rotate(157.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(202.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(225, 256, 256)" />
          <use href="#hashmark" transform="rotate(247.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(292.5, 256, 256)" />
          <use href="#hashmark" transform="rotate(315, 256, 256)" />
          <use href="#hashmark" transform="rotate(337.5, 256, 256)" />
        </g>

        <use href="#line" transform="rotate(22.5, 256, 256)" />
        <use href="#line" transform="rotate(67.5, 256, 256)" />
        <use href="#line" transform="rotate(112.5, 256, 256)" />
        <use href="#line" transform="rotate(157.5, 256, 256)" />

        <circle cx={256} cy={256} r={220} style={{ fill: 'transparent', stroke: 'grey', strokeWidth: 1 }} />
        {!dir && (
          <text id="no-data" x="256" y="256" textAnchor="middle" dominantBaseline="middle" fontSize="3em" fill="white">
            No Data
          </text>
        )}
        <g>
          {ringRadii.map(i => (
            //@ts-ignore
            <circle
              cx={256}
              cy={256}
              //@ts-ignore
              r={(220 / maxMph) * i}
              style={{
                fill: 'transparent',
                //@ts-ignore
                stroke: `hsl(${hueForSpeed(i)}, 100%, 50%)`,
                strokeWidth: 1,
              }}
            />
          ))}
        </g>
        <g>
          {dir &&
            mph &&
            dir.map((d, i) => (
              <circle
                cx={256 + (220 / maxMph) * mph[i] * Math.cos((d - 90) * (Math.PI / 180)) || 256}
                cy={256 + (220 / maxMph) * mph[i] * Math.sin((d - 90) * (Math.PI / 180)) || 256}
                r={3}
                style={{
                  fill: `hsla(
                    ${hueForSpeed(mph[i])},
                    ${100 - (100 / dir.length) * i}%,
                    50%,
                    ${1 - (1 / dir.length) * i})`,
                }}
              />
            ))}
        </g>
        {currentMph > 0 && (
          <g>
            <path
              className={styles.directionIndicator}
              id="directionIndicator"
              d="M 258 35 L 260 256 L 314 314 L 256 480 L 197 314 L 252 256 L 254 35 Z"
              style={{ transform: `rotate(${currentDir}deg)` }}
            />

            <circle
              className={cx(
                styles.centerCircle,
                css`
                  opacity: 0.85;
                `
              )}
              id="centerCircle"
              cx="256"
              cy="256"
              r="82.9"
            />

            <text
              className={styles.velocityText}
              style={{
                stroke: `hsl(${hueForSpeed(currentMph)}, 100%, 50%)`,
                fill: `hsla(${hueForSpeed(currentMph)}, 100%, 50%, 0.25)`,
              }}
              id="velocityText"
              x="256"
              y="266"
            >
              {Math.round(currentMph)}
            </text>
            <text className={styles.velocityLegend} x="256" y="325">
              {currentDir}°
            </text>
          </g>
        )}
      </svg>
      <div className={styles.speedLegend}>
        {[0, 5, 10, 15, 20, 25].map(i => (
          <span
            style={{
              color: `hsl(${hueForSpeed(i)}, 100%, 50%)`,
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            {i}
          </span>
        ))}
        <p>{maxMph}</p>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(theme => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    hashmark: css`
      fill: grey;
    `,
    face: css`
      fill: none;
      stroke: ${theme.palette.yellow};
      stroke-width: 32px;
    `,
    centerCircle: css`
      fill: ${theme.colors.bg1};
      fill-opacity: 0.5;
    `,
    velocityText: css`
      stroke-width: 3;
      font-size: 9rem;
      font-weight: bold;
      text-anchor: middle;
      dominant-baseline: middle;
    `,
    velocityLegend: css`
      fill: ${theme.palette.orange};
      font-size: 1.5em;
      font-weight: bold;
      text-anchor: middle;
    `,
    text: css`
      fill: grey;
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
      font-size: 3rem;
    `,
    line: css`
      stroke: grey;
      stroke-width: 1px;
    `,
    ring: css`
      fill: transparent;
      stroke: ${theme.palette.yellow};
      stroke-width: 1;
    `,
    speedLegend: css`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
    `,
    directionIndicator: css`
      fill: transparent;
      stroke: ${theme.palette.orange};
      stroke-width: 3px;
      transform-origin: 256px 256px;
      transform: rotate(0deg);
    `,
  };
});

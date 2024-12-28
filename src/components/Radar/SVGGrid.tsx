import { status } from "../../types";
import { rings } from "../../constants";
import useViewport from '@hooks/useViewport';

const height = 810;

export function SVGGrid() {
  const windowWidth = useViewport();
  const width = Math.max(windowWidth, 1400);

  return (
    <svg width={width} height={height} style={{ backgroundColor: "white" }}>
      <g
        style={{ backgroundColor: "green" }}
        transform={`translate(${width / 2}, ${height / 2})`}
      >
        <line
          x1={0}
          y1={-380}
          x2={0}
          y2={380}
          stroke="#f2f2ff"
          strokeWidth={2}
        ></line>

        <line
          x1={-width / 2}
          y1={0}
          x2={width / 2}
          y2={0}
          stroke="#f2f2ff"
          strokeWidth={2}
        ></line>

        {status.map((status, i) => {
          return (
            <g key={status}>
              <circle
                cx={0}
                cy={0}
                r={rings[i].radius}
                fill="none"
                stroke="#dde"
                strokeWidth={4}
              ></circle>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

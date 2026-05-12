import {
  Box,
  CircularProgress,
  type BoxProps,
  type CircularProgressProps,
} from "@mui/material";

interface SpinnerProps extends BoxProps {
  fullPage?: boolean;
  size?: string | number;
  color?: CircularProgressProps["color"];
}

function Spinner({ fullPage, sx, size, color, ...props }: SpinnerProps) {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: fullPage ? "100dvh" : "100%",
        flexGrow: 1,
        ...sx,
      }}
    >
      <CircularProgress
        enableTrackSlot
        color={color}
        aria-label="Loading…"
        size={size ?? "2.5rem"}
        className="self-center"
      />
    </Box>
  );
}

export default Spinner;

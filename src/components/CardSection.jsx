import Paper from "@mui/material/Paper";

export default function CardSection({ className }) {
  return (
    <div className={className}>
      <Paper
        square={false}
        className="h-full w-1/5 opacity-75 rounded-3xl p-4"
        elevation={3}
      >
        Card
      </Paper>
      <Paper
        square={false}
        className="h-full w-1/5 opacity-75 rounded-3xl p-4"
        elevation={3}
      >
        Card
      </Paper>
    </div>
  );
}

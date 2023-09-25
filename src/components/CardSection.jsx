import * as React from "react";
// import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import data from "../data/data.json";

export default function CardSection({ className }) {
  const d = Object.entries(data);
  return (
    <div className={className}>
      {d.map((f, i) => (
        <Card sx={{ maxWidth: 345 }} key={i} className="my-8">
          <CardMedia
            sx={{ height: 140 }}
            src={f[1].imageUrl}
            title={f[0]}
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {f[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {f[1].Description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

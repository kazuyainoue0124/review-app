import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

const Sidebar = () => {
  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              山田太郎
            </Typography>
            <Typography variant="subtitle1" paragraph>
              こんにちは！SE歴3年の山田太郎です！
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Sidebar;

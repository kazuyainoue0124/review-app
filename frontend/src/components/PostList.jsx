import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

const PostList = (props) => {
  const { post } = props;
  return (
    <Grid item xs={12} md={8}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              記事のタイトルが入ります。
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            2022年12月15日
            </Typography>
            <Typography variant="subtitle1">
              by 山田太郎
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              記事のタイトルが入ります。
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            2022年12月15日
            </Typography>
            <Typography variant="subtitle1">
              by 山田太郎
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              記事のタイトルが入ります。
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            2022年12月15日
            </Typography>
            <Typography variant="subtitle1">
              by 山田太郎
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              記事のタイトルが入ります。
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            2022年12月15日
            </Typography>
            <Typography variant="subtitle1">
              by 山田太郎
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", mt: 4 }}>
          <CardContent sx={{ flex: 3 }}>
            <Typography component="h2" variant="h5">
              記事のタイトルが入ります。
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            2022年12月15日
            </Typography>
            <Typography variant="subtitle1">
              by 山田太郎
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

PostList.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostList;

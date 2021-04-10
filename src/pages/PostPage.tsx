import { Typography } from "@material-ui/core";
import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
    id: string;
}

const PostPage: ComponentType<RouteComponentProps<MatchParams>> = (
  props
) => {
  return <Typography variant="h2">Post {props.match.params.id} page</Typography>;
};

export default PostPage;

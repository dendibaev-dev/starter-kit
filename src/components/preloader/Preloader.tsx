import { CircularProgress } from "@material-ui/core"
import useStyles from './styles'

export const Preloader = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}
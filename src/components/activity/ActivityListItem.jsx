import { Grid, Link } from '@mui/material';
import styles from './ActivityListItem.module.scss';
import Avatar from '../avatar/Avatar';
import { formatDistance, parseISO } from 'date-fns';
// import { Link } from "react-router-dom";

export default function ActivityListItem({created_at, user, nft, type = "like"}){
    return(
        <div className={styles["activity-list-item"]}>
            <Grid container>
                <Grid item xs={2}>
                    <Avatar url={user.avatar.url} verified={user.confirmed}/>
                </Grid>
                <Grid item xs={10}>
                    <p>{nft.owner.username} {type}  
                    &ensp;"
                    <Link>
                    {nft.name}
                    </Link>
                    "&ensp;by&ensp;
                     <Link>
                     {user.name}
                     </Link>
                     </p>
                     <p>
                        {
                        formatDistance(
                            parseISO(created_at),
                            Date.now(),
                            { addSuffix: true }
                        )
                        }
                     </p>
                </Grid>
            </Grid>
            <Link to="/">{nft.name}{user.name}</Link>
            <Link to="/">{nft.name}</Link>
            <Link to="/">{user.name}</Link>
            <link href=''></link>
            <a href=''>test</a>
        </div>
    );
}
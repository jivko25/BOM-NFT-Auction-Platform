import React, { useState } from "react"
import Container from "@mui/material/Container";
import styles from "./Auctions.module.scss";
import Card from "../card/Card"
import Select from '@mui/material/Select';
import { FormControl, Grid } from "@mui/material";
import { MenuItem } from "@mui/material";
import Link from 'next/link';
import Spacer from '../spacer/Spacer';


export const Auctions = React.memo(({cards = [], filters = [], onChangeFilterValue, filterValue}) => {
        const [timeOption, setTimeOption] = useState();

        return (
            <Container className={styles.container}>
                <Grid container spacing={1} justifyContent={"center"}>
                    <Grid item xs={10} lg={9}>
                        <h1 className={styles.title}>🔥Live Auctions🔥</h1>
                    </Grid >
                    <Grid item xs={10} sm={6} lg={3} justifyContent={"center"}>
                    <FormControl fullWidth>
                      <Select className={styles.select} label="Age"
                      value={filterValue}
                      onChange={onChangeFilterValue}>
                          {filters.map(option => {
                                return <MenuItem key = {option.label} value={option.value}>{option.label}</MenuItem>
                          })
                          }
                      </Select>
                    </FormControl>
                    </Grid >
                </Grid>
                {cards.length > 0 ?
                <Grid container spacing={1} justifyContent="center">
                    {cards.map((card) => {
                        return (
                            // <Link href={sessionStorage.getItem('user') ? `/product/${card.objectId}` : '/login'} >
                                <Grid item xs={11} md={6} xl={3}>
                                    <Card
                                    {...card}
                                    likes={card.likes}
                                    ownerId={card.owner.objectId}
                                    mediaUrl={card.image}
                                    user={card.owner}
                                    timeLeft={(new Date(card.auction_end).getTime() - Date.now())/1000}
                                    id={card.objectId}
                                    />
                                </Grid>
                            // </Link>
                            )
                        })}
                </Grid>
                :
                <Spacer/>
                }
            </Container>
          );
})
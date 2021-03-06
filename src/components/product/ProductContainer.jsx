import { Container, Grid, Stack } from "@mui/material";
import styles from './ProductContainer.module.scss'
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";


export default function ProductContainer({name, owner, price, currency, likes, auction_end, isLive, details, bids, source, bidAmount, onBuy, onBid, timeEnd}){
    return(
        <div className={styles["product-container"]}>
            <Grid container justifyContent={"center"}>
                <Grid item xs={10} md={6}>
                    <ProductImage url={source?.url}/>
                </Grid>
                    <Grid item xs={12} md={6}>
                    <Stack>
                        <ProductInfo title={name}
                            creator = {owner}
                            price={price}
                            currency={currency}
                            likes={likes}
                            onTimeEnd="Time runs out"
                            timeEnd={timeEnd}
                            isLive={isLive}
                            />
                        <ProductTabs text={details} bids={bids}/>
                        <Container>
                        <ProductActions buyAmount={price} bidAmount={bidAmount} isLive={isLive} onBuy={onBuy} onBid={onBid} currency={currency}/>
                        </Container>
                            
                    </Stack>
                    </Grid>
            </Grid>
        </div>
    );
}
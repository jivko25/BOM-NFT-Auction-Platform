import dataFeatured from "../data/featured.json"
import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json"
// import dataNfts from "../data/nfts.json"
import { useState, useEffect, useRef } from "react"
import Header from "../src/components/header/Header.jsx"
import Featured from "../src/components/featured/Featured.jsx"
import Trending from "../src/components/trending/Trending.jsx"
import TopCollectors from "../src/components/collectors/TopCollectors.jsx"
import How from "../src/components/how/How.jsx"
import Auctions from "../src/components/auctions/Auctions.jsx"
import Footer from "../src/components/footer/Footer.jsx"
import ProductImage from "../src/components/product/ProductImage"
import ProductInfoTitle from "../src/components/product/ProductInfoTitle"
import ProductInfoPrice from "../src/components/product/ProductInfoPrice"
import ProductInfoStatus from "../src/components/product/ProductInfoStatus"
import ProductInfoLikes from "../src/components/product/ProductInfoLikes"
import ProductInfoCreator from "../src/components/product/ProductInfoCreator"
import ProductInfoTimer from "../src/components/product/ProductInfoTimer"
import ProductInfo from "../src/components/product/ProductInfo"
import ProductTabs from "../src/components/product/ProductTabs"
import { LoremIpsum, Avatar, loremIpsum } from 'react-lorem-ipsum'
import ProductActions from "../src/components/product/ProductActions"
import ProductContainer from "../src/components/product/ProductContainer"
import { Link } from "@mui/material"
import Hero from "../src/components/hero/Hero"



export default function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);
  const [auctionsCards, setAuctionsCards] = useState([]);

  // useEffect(() => {
  //   setFeaturedCards(dataFeatured)
  //   setTrendingCards(dataTrending)
  //   setTopCollectors(dataUsers)
  //   setAuctionsCards(dataNfts)
  // }, []);

  let items = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    },
  ]

  let cards = [
    {
      name: "Clock",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 12.2,
      currency: "ETH",
    },
    {
      name: "Riddles",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 10.1,
      currency: "ETH",
    },
    {
      name: "Wandering Flame",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 5.5,
      currency: "ETH",
    },
    {
      name: "Glorious Curtain",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 0.1,
      currency: "ETH",
    },
  ]

  let collectors = [
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }, {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    }
  ]

  collectors.sort((a, b) => b.nftsCount - a.nftsCount);

  let how = {
    title: "How it works",
    description: `Discover, collect, and sell extraordinary NFTs
        on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.`,
    items: [
      {
        title: "Digital Currency",
        description:
          "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
      },
      {
        title: "Crypto Wallet",
        description:
          "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
      },
      {
        title: "BUM.",
        description:
          "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
      },
    ],
    link: "https://app.boom.dev/"

  }

  let auctions = [
    {
      name: "Something",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 12.2,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Riddles",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 10.1,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Wandering Flame",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 5.5,
      currency: "ETH",
      timeLeft: 3.6e6
    },
    {
      name: "Glorious Curtain",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 0.1,
      currency: "ETH",
      timeLeft: 3.6e6
    }]

  return (
    <>
      <Header />
      {/* <Featured items={items} />
      <Trending cards={cards} />
      <TopCollectors collectors={collectors} />
      <How title={how.title} description={how.description} items={how.items} link={how.link} />
      <Auctions cards={auctions} /> */}
      {/* <ProductImage url="images/nft.jpg" />
      <ProductInfoTitle text={"Shallow Son"} /> 
      <ProductInfoPrice amount={3} currency={"ETH"} />
      <ProductInfoLikes amount={6666} />
      <ProductInfoCreator name="Donald" avatar="/images/avatar.png" verified={true}/>
      <ProductInfoTimer timeEnd={10} onTimeEnd="Time end"/> */}
      {/* <ProductInfo title="John"
    creator ={{
      name:"George",
      avatar:
        "https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg",
      verified: true,
    }}
    price={20}
    currency="ETH"
    likes={20}
    onTimeEnd="Time runs out"
    timeEnd={50}
    isLive={true}
      /> */}
      {/* <ProductTabs text = {"Test test test. Test test test. Test test test. Test test test. Test test test. Test test test. Test test test. "}
      bids= {[
        {
          user: { avatar: "/images/avatar.png", name: "hrisi", verified: true },
          amount: 30,
          date: "2021-10-22T08:29:23.382Z",
        },
        {
          user: { avatar: "/images/avatar.png", name: "maxi", verified: true },
          amount: 1000,
          date: "2021-11-10T08:29:23.382Z",
        },
      ]}
      /> */}
      {/* <ProductActions
      isLive={true}
      currency="ETH"
      buyAmount={50}
      bidAmount={9}
      onBuy={() => {}}
      onBid={() => {}}
      /> */}
      {/* <ProductContainer 
          name="Ergonomic Concrete Tuna"
          owner={{
            name: "Justen_King18",
            verified:true,
            avatar:"https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          }}
          price={20}
          currency="ETH"
          likes={25}
          auction_end="2022-09-02T20:43:19.149Z"
          details="asdasdads"
          isLive={true}
          source={{
            url: "https://nft-auction.herokuapp.com/uploads/thumbnail_0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg"
          }}
          bids= {[
            {
              user: { avatar: "/images/avatar.png", name: "hrisi", verified: true },
              amount: 30,
              date: "2021-10-22T08:29:23.382Z",
            },
            {
              user: { avatar: "/images/avatar.png", name: "maxi", verified: true },
              amount: 1000,
              date: "2021-11-10T08:29:23.382Z",
            },
          ]}
          bidAmount={1}
          onBuy={() => {}}
          onBid={() => {}}
      /> */}
      {/* <Footer /> */}
      {/* <Link href="/product/1">
        Product
      </Link> */}
      <Hero text="Lorem Ipsum 123"/>
    </>
  )
}
